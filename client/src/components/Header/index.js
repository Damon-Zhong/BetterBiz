import React from "react";
import "./Header.css";
import Image from "react-bootstrap/Image";
import header from "../../images/header.png";
import scrollDown from "../../images/scrollDown.gif";

const Header = () => {
  return (
    <div className="header">
      <header className="masthead d-flex">
        <div className="container text-center my-auto headerText">
          <h1 className="homepage mb-3">Discover new businesses in your neighbourhood</h1>
          <h5 className="mb-5">
            BetterBiz is here to give visibility to underrepresented businesses. We want to help you support diverse businesses with a positive impact on their community.
          </h5>
          <div className="container mt-5">
              <Image className="scrollDown" src={scrollDown} style={{margin: "0 auto", width: "100px", display: "block" }}/>
            </div>
          </div>
        <div className="overlay"></div>
      </header>
    </div>
  );
};

export default Header;
