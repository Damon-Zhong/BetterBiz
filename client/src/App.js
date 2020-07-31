import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/Services";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SubmitPage from './pages/submitBus'
import AboutUs from "./components/AboutUs";
import AccountIndex from "./components/AccountIndex";
import BusinessPage from "./pages/businessPage";
// import Map from "./components/Map";

// just  testing this 
function App() {
  
  const servicesList = [{
    title:'Black Owned',
    caption:'Black Owned'
  },{
    title:'Women Owned',
    caption:'Women Owned'
  },{
    title:'LGBTQ Owned',
    caption:'LGBTQ Owned'
  },{
    title:'Eco Friendly',
    caption:'Eco Friendly'
  }]

  const [isLogin, setLogin] = useState( window.localStorage ? true : false)

  return (
    <>
      <Router>
        <Navbar isLogin={isLogin}/>
        <Route exact path="/">
          <Header />
          <Services servicesLinks={servicesList}/>
        </Route>
        <Route path="/account">
          <AccountIndex />
        </Route>
        <Route exact path="/submit">
          <SubmitPage />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route component={BusinessPage} path="/businesses/:businessName">
        </Route>
      </Router>
      {/* <Map /> */}
    </>
  );
}  


export default App;
