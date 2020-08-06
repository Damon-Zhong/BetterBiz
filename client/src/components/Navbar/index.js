import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderNavbar = (props) => {
  const signOut = () => {
    window.localStorage.clear();
    window.location.pathname = "/";
  };
  return (
      <Navbar sticky="top" bg="light" expand="lg">
        <Link className="logo" to="/"></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="/overview/Black">Black-owned</NavDropdown.Item>
              <NavDropdown.Item href="/overview/LGBT">LGBT-owned</NavDropdown.Item>
              <NavDropdown.Item href="/overview/Women">Women-owned</NavDropdown.Item>
              <NavDropdown.Item href="/overview/Eco">Eco-friendly</NavDropdown.Item>
              <NavDropdown.Item href="/overview/Community">Community impact</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Businesses by type" id="basic-nav-dropdown">
              <NavDropdown.Item href="/overview/restaurants">Restaurants</NavDropdown.Item>
              <NavDropdown.Item href="/overview/shops">Shops</NavDropdown.Item>
              <NavDropdown.Item href="/overview/serivce">Service</NavDropdown.Item>
              <NavDropdown.Item href="/overview/leisure">Leisure</NavDropdown.Item>
              <NavDropdown.Item href="/overview/culture">Culture</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/events">Special events</Nav.Link>
            <Nav.Link href="/submit">Submit business</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {props.currUser ? (
          <Nav className="mr-auto">
            <Nav.Link href="/account">
              Welcome back! {props.currUser.name}
            </Nav.Link>
            <Nav.Link className="logoutBtn" href="/" onClick={signOut}>
              Log Out
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="mr-auto">
            <Nav.Link href="/account">Log in</Nav.Link>
            <Nav.Link href="/account/signup">Sign up</Nav.Link>
          </Nav>
        )}
      </Navbar>
  );
};

export default HeaderNavbar;
