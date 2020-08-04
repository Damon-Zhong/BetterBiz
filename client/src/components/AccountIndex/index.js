import React from "react";
import { Route } from "react-router-dom";
import SignupForm from "../SignupForm";
import LoginForm from "../LoginForm";
import ChangePwd from "../ChangePwdForm";

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
      <Route exact path={`/account`}><LoginForm setLogin={props.setLogin} /></Route>
      <Route exact path={`/account/password`} component={ChangePwd} />
    </section>
  );
};

export default AccountIndex;
