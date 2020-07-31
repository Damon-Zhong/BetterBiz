import React from "react";
import { Route } from "react-router-dom"
import SignupForm from '../SignupForm'
import LoginForm from '../LoginForm' 


const AccountIndex = (props) => {

  return (
    <section className="content-section bg-primary text-white">
      {/* {window.location.pathname === '/signup' ? (
      <div className="container text-center">
        <h2 className="mb-4"> Sign in rate and submit reviews ! </h2>
        <a href="/signup/signup" className="btn btn-xl btn-light mr-4">
          Sign up!
        </a>
        <a href="/signup/login" className="btn btn-xl btn-dark">
          Login In!
        </a>
      </div>) : ''} */}
      <Route exact path={`/account/signup`} component={SignupForm} />
      <Route exact path={`/account`} component={LoginForm} />
    </section>
  );
};

export default AccountIndex;
