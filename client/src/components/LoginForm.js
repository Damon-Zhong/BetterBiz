import React, { useState } from "react"
import { Redirect } from 'react-router-dom'
import axios from "axios"
import OAuth from "./OAuth"

function LogIn() {
  const [userData, setFormInput] = useState({ email: "", password: "", })
  const [formState, setFormState] = useState({ message:'', formValidStyle: "none", formFailedStyle: "none", isLogin:false})

  async function handleFormSubmit(event) {
    event.preventDefault()
    const confirmInput = Object.values(userData).filter((value) => value.trim() === "" )
    if( confirmInput.length > 0 ){
      setFormState({ ...formState, formValidStyle: "block" });
      setTimeout(() => {
        setFormState({ ...formState, formValidStyle: "none" });
      }, 3000)
      return
    }

    const loginResult = await axios.post('/api/login', userData)

    if( !loginResult.data.isLogin ){
      // localStorage.session = ''
      setFormState({ ...formState, message: loginResult.data.message, formFailedStyle: "block" })
        setTimeout(() => {
          setFormState({ ...formState, formFailedStyle: "none" })
        }, 3000)
      return
    }

    loginComplete(loginResult.data)
  }

  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormInput({ ...userData, [id]: value });
  }

  function loginComplete(userData){
    //save active session
    localStorage.setItem('currUser', JSON.stringify( {
      id:userData.id, 
      name: userData.name,
      session: userData.session
    }))

    setTimeout( function(){ 
      setFormState({ ...formState, isLogin:true })
      }, 3000 )
  }

  return (
    <div className="container">
      { formState.isLogin ? <Redirect to='/' /> : '' }
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
            <div className="row">
              <button
                className="col-3 btn btn-primary"
                style={{ marginBottom: "10px" }}
                id="logIntoAccount"
              >
                Submit
              </button>
              <span className="col-9 pl-5 loginTxt">
                <a
                  className="text-decoration-none text-white"
                  href="/account/signup"
                >
                  <u>Don't have an account yet? </u>
                </a>
              </span>
            </div>

            <p className="pl-5 loginTxt ">
              <a
                className="text-decoration-none text-white"
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
