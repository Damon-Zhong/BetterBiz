import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/Services";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Submit from "./components/Submit";
import SubmitPage from './pages/submitBus'
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Map from "./components/Map";

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

  const [SearchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])

  const handleFormSubmit = (event) => {


  }

  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Header />
          <Services servicesLinks={servicesList}/>
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/submit">
          <Submit />
        </Route>
        <Route exact path="/submitbusiness">
          <SubmitPage />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
      </Router>
      <Map />
    </>
  );
}

export default App;
