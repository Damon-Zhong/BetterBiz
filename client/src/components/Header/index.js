import React from "react";

const Header = () => {
  return (
    <header class="masthead d-flex">
      <div class="container text-center my-auto">
        <h1 class="mb-1">BetterBiz</h1>
        <h3 class="mb-5">
          <em>Support your community! </em>
        </h3>
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">
          {" "}
          Let Go!
        </a>
      </div>
      <div class="overlay"></div>
    </header>
  );
};

export default Header;
