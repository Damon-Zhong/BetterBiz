import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import OAuth from "./OAuth";
import "./LoginForm.css";

function LogIn(props) {
  const [userData, setFormInput] = useState({ email: "", password: "" });
  const [formState, setFormState] = useState({
    message: "",
    formValidStyle: "none",
    formFailedStyle: "none",
    isLogin: false,
  });

  async function handleFormSubmit(event) {
    event.preventDefault();
    const confirmInput = Object.values(userData).filter(
      (value) => value.trim() === ""
    );
    if (confirmInput.length > 0) {
      setFormState({ ...formState, formValidStyle: "block" });
      setTimeout(() => {
        setFormState({ ...formState, formValidStyle: "none" });
      }, 3000);
      return;
    }

    const loginResult = await axios.post("/api/login", userData);

    if (!loginResult.data.isLogin) {
      // localStorage.session = ''
      setFormState({
        ...formState,
        message: loginResult.data.message,
        formFailedStyle: "block",
      });
      setTimeout(() => {
        setFormState({ ...formState, formFailedStyle: "none" });
      }, 3000);
      return;
    }

    loginComplete(loginResult.data);
  }

  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormInput({ ...userData, [id]: value });
  }

  function loginComplete(userData) {
    //save active session
    localStorage.setItem(
      "currUser",
      JSON.stringify({
        type: userData.type,
        id: userData.id,
        name: userData.name,
        session: userData.session,
      })
    )
    props.setLogin(true)
    setTimeout(function () {
      setFormState({ ...formState, isLogin: true });
    }, 3000);
  }

  return (
    <div className="container">
      {formState.isLogin ? <Redirect to="/" /> : ""}
      <div className="container col-xl-5 col-lg-6 col-md-8 col-sm-10">
        <h2 className="mb-2">Log In</h2>
        <p>
          Welcome back! Please log in below to access your account and submit reviews for the businesses featured on this page.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="button">
            <div className="row">
              <button
                className="ml-3 btn btn-primary signup-btn"
                style={{ marginBottom: "10px" }}
                id="logIntoAccount"
              >
                Submit
              </button>
            </div>
            <span className="loginTxt">
                <a
                  className="text-decoration-none"
                  href="/account/signup"
                >
                  <u>Don't have an account yet? </u>
                </a>
            </span>
            <p className="loginTxt text-left">
              <a
                className="text-decoration-none"
                href="/account/password"
              >
                <u>Forgot your password? </u>
              </a>
            </p>
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
          providers={["twitter", "facebook", "google"]}
          loginComplete={loginComplete}
        />
      </div>
    </div>
  );
}

export default LogIn;
