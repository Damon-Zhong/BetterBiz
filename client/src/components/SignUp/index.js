import React from "react";
import { Route } from "react-router-dom"
import SignupForm from '../../pages/Signup'
import LoginForm from '../../pages/Login.js' 


const SignUp = (props) => {

  return (
    <section className="content-section bg-primary text-white">
      <div className="container text-center">
        <h2 className="mb-4"> Sign in rate and submit reviews ! </h2>
        <a href="/signup/signup" className="btn btn-xl btn-light mr-4">
          Sign up!
        </a>
        <a href="/signup/login" className="btn btn-xl btn-dark">
          Login In!
        </a>
      </div>

    
      <Route exact path={`/signup/signup`} component={SignupForm} />
      <Route exact path={`/signup/login`} component={LoginForm} />

    </section>
  );
};

export default SignUp;
