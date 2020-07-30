import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Services from "./components/Services";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Submit from "./components/Submit";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import BusinessPage from "./pages/businessPage";
// import Map from "./components/Map";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Header />
          <Services />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="/submit">
          <Submit />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/businesses/:businessName">
          <BusinessPage />
        </Route>
      </Router>
      {/* <Map /> */}
    </>
  );
}

export default App;
