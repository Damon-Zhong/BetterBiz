import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">BetterBiz</h1>
        <h3 className="mb-5">
          <em>Support your community! </em>
        </h3>
        <a
          className="btn btn-primary btn-xl js-scroll-trigger box"
          href="#about"
        >
          {" "}
          Let Go!
        </a>
      </div>
      <div className="overlay"></div>
    </header>
  );
};

export default Header;
