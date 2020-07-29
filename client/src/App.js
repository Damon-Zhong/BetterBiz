import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SubmitBus from './pages/submitBus'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <Router>
      {/* <Navbar />
      <Jumbotron />
      <Route exact path="/" component={SaveBook} />
      <Route exact path="/savebook" component={SaveBook} /> */}
      <Route path="/submit" component={SubmitBus} />
    </Router>
  );
}

export default App;
