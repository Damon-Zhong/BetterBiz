import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to='/'>BetterBiz</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home {window.location === '/' ? <span className="sr-only">(current)</span> : ''}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/submit">
                   Submit Business {window.location === '/submit' ? <span className="sr-only">(current)</span> : ''}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
                   About Us {window.location === '/about' ? <span className="sr-only">(current)</span> : ''}
          </a>
        </li>
      </ul>
    </div>
    {props.isLogin ? <span>Welcome Back!{props.currUser.firstName}</span>:<Link to='/account'>Login | Signup</Link>}
    
  </nav>
);

export default Navbar;
