import React, { useState } from "react";
import axios from "axios";
import OAuth from "./OAuth";

function LogIn() {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const [formState, setFormState] = useState({
    message:'',
    formValidStyle: "none",
    formFailedStyle: "none",
  });

  async function handleFormSubmit(event) {
    event.preventDefault();
    let confirmInput = Object.values(formInput).filter((value) => {
      return value.trim() !== "";
    });
    if (confirmInput.length === 2) {
      const result = await axios.post('/api/login', formInput)
      if( result.data.isLogin ){
          window.localStorage.setItem("currUser", JSON.stringify({
            id: result.data.id,
            email: result.data.email,
            firstName: result.data.firstName,
          })
        )
        window.location.pathname = "/"
      }else {
        setFormState({ ...formState, message: result.data.message, formFailedStyle: "block" });
        setTimeout(() => {
          setFormState({ ...formState, formFailedStyle: "none" });
        }, 3000);
      }
    } else {
      setFormState({ ...formState, formValidStyle: "block" });
      setTimeout(() => {
        setFormState({ ...formState, formValidStyle: "none" });
      }, 3000);
    }
  }
  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormInput({ ...formInput, [id]: value });
  }

  return (
    <div className="container">
      <div className="container col-xl-5 col-lg-6 col-md-8 col-sm-10">
        <h1 className="text-center">Log In</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>
              <i>
                <strong> Email</strong>
              </i>
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              <i>
                <strong> Password</strong>
              </i>
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="button">
            <button
              className="btn btn-primary"
              style={{ marginBottom: "10px" }}
              id="logIntoAccount"
            >
              Submit
            </button>
            <span className="pl-5">
              <a
                className="text-decoration-none text-white"
                href="/account/signup"
              >
                <u>Don't have an account yet? </u>
              </a>
            </span>
            <br />
            <span className="pl-5">
              <a
                className="text-decoration-none text-white"
                href="/account/password"
              >
                <u>Forgot your password? </u>
              </a>
            </span>
          </div>
        </form>
        <div
          className="alert alert-danger"
          id="alertEmpty"
          style={{ display: formState.formValidStyle }}
        >
          Please fill in missing information!
        </div>
        <div
          className="alert alert-danger"
          id="alertFailed"
          style={{ display: formState.formFailedStyle }}
        >
          {/* Email or password is invalid! */}
          {formState.message}
        </div>
        {""}
        <OAuth
          providers={["twitter", "facebook", "github", "google", "linkedin"]}
        />
      </div>
    </div>
  );
}

export default LogIn;
