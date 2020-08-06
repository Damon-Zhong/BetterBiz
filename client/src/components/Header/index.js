import React from "react";
import "./Header.css";
import Image from "react-bootstrap/Image";
import header from "../../images/header.png";
import scrollDown from "../../images/scrollDown.gif";

const Header = () => {
  return (
    <div className="header">
      <div className="mobile-header"></div>
      <header className="desktop-header d-flex">
        <div className="container text-center my-auto headerText">
          <h1 className="headline homepage mb-3">Discover new businesses in Toronto</h1>
          <h5 className="intro mb-5">
            BetterBiz is here to give visibility to underrepresented businesses in Toronto. We want to help you support diverse businesses with a positive impact on their community.
          </h5>
          <div className="noScroll container mt-5">
              <Image className="scrollDown" src={scrollDown} style={{margin: "0 auto", width: "100px", display: "block" }}/>
            </div>
          </div>
        <div className="overlay"></div>
      </header>
    </div>
  );
};

export default Header;
