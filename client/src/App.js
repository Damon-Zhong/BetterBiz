import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/Services";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SubmitPage from "./pages/submitBus";
import AboutPage from "./pages/AboutPage";
import AccountIndex from "./components/AccountIndex";
import BusinessPage from "./pages/businessPage";
import SocialFollow from "./components/SocialFollow";
import Events from "./components/Events";
import SubmitEvent from './components/SubmitEvent'
import Category from "./components/Category"
// import Map from "./components/Map";

// just  testing this
function App() {
  
  const [isLogin, setLogin] = useState(false);
  let currUser = JSON.parse(window.localStorage.getItem("currUser"));
  return (
      <Router>
        <Navbar isLogin={isLogin} currUser={currUser} />
        <Route exact path="/">
          <Header />
          <Services />
        </Route>
        <Route path="/account">
          <AccountIndex setLogin={setLogin} />
        </Route>
        <Route exact path="/submit">
          <SubmitPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/events/submit">
          <SubmitEvent />
        </Route>
        <Route component={Category} path='/overview/:category'>
        </Route>
        <Route
          component={BusinessPage}
          path="/businesses/:businessName"
        ></Route>
        <SocialFollow />
      </Router>
  );
}

export default App;
