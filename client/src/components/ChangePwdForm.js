import axios from "axios";
import React, { useState } from "react";

const ChangePwd = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const [formState, setFormState] = useState({
    formFailedStyle: "none",
    formValidStyle: "none",
  });

  const handleInputChange = (event) => {
    switch (event.target.id) {
      case "email":
        setFormInput({ ...formInput, email: event.target.value });
        break;
      case "password":
        setFormInput({ ...formInput, password: event.target.value });
        break;
      default:
        break;
    }
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    let confirmInput = Object.values(formInput).filter((value) => {
      return value.trim() !== "";
    });
    if (confirmInput.length === 2) {
      const response = await axios.put("/api/changepassword", formInput);
      console.log(`Getting response`);
      if (response.data) {
        window.location.pathname = "/account";
      } else {
        setFormState({ ...formState, formFailedStyle: "block" });
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

  return (
    <div className="container">
      <div className="container col-xl-5 col-lg-6 col-md-8 col-sm-10">
        <h1 className="text-center">Change Password</h1>
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

            <label>
              <i>
                <strong> New Password</strong>
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
          Email is invalid!
        </div>
      </div>
    </div>
  );
};

export default ChangePwd;
