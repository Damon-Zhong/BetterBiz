import React, { useState } from "react";
import axios from "axios";
import "./SignupForm.css";

function SignUp() {
  const [formInput, setFormInput] = useState({
    type:'',
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [formState, setFormState] = useState({
    userValidStyle: "none",
    formValidStyle: "none",
  });

  async function handleFormSubmit(event) {
    event.preventDefault();
    let confirmInput = Object.values(formInput).filter((value) => {
      return value !== "";
    });
    if (confirmInput.length === 5) {
      const result = await axios
        .post("/api/register", formInput)
        .catch((err) => {
          console.log(err, "err");
        });
      if (result.data.isExist) {
        setFormState({ ...formState, userValidStyle: "block" });
        setTimeout(() => {
          setFormState({ ...formState, userValidStyle: "none" });
        }, 5000);
      } else {
        window.localStorage.setItem(
          "currUser",
          JSON.stringify({
            type: result.data.type,
            id: result.data.id,
            email: result.data.email,
            name: result.data.firstName,
          })
        );
        window.location.pathname = "/";
      }
    } else {
      setFormState({ ...formState, formValidStyle: "block" });
      setTimeout(() => {
        setFormState({ ...formState, formValidStyle: "none" });
      }, 3000);
    }
  }

  function handleInputChange(event) {
    const { id, value } = event.target
    setFormInput({ ...formInput, [id]:value })
  }

  return (
    <div className="container">
      <div className="container col-xl-5 col-lg-6 col-md-8 col-sm-10">
        <h2 className="mb-3">Create an account</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            {/* user type */}
            <label>Type of User</label>
            <select className="mb-2 form-control" id="type" onChange={handleInputChange} required >
              <option>Customer</option>
              <option>Business</option>
            </select>
            {/* Email */}
            <label>Email</label>
            <input type="email" className="mb-2 form-control form-control-lg" id="email" onChange={handleInputChange} />
            <small id="alertTaken" className="form-text text-danger" style={{ display: formState.userValidStyle }} >
              This email is already in use!
            </small>
            {/* First Name */}
            <label>First name</label>
            <input type='text' className="mb-2 form-control form-control-lg" id="firstName" onChange={handleInputChange} />
            {/* Last Name */}
            <label>Last name</label>
            <input type='text' className="mb-2 form-control form-control-lg" id="lastName" onChange={handleInputChange} />
            {/* Password */}
            <label>Password</label>
            <input type="password" className="mb-2 form-control form-control-lg" id="password" onChange={handleInputChange} />
          </div>
          <div className="button">
            <div className="row">
              <button
                className="btn btn-primary signup-btn mb-5 ml-3"
                style={{ marginBottom: "10px" }}
                id="createNewAccount"
              >
                Submit
              </button>
              <span className="loginText ml-3 mt-2">
                  Already have an account?{" "}
                  <a className="text-decoration-none" href="/account">
                    <u>Login</u>
                  </a>
              </span>
            </div>
          </div>
        </form>
        <div
          className="alert alert-danger"
          id="alertFailed"
          style={{ display: formState.formValidStyle }}
        >
          Please fill in missing information!
        </div>
      </div>
    </div>
  );
}

export default SignUp;
