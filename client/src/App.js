import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg'; 
import services from './componets/services.jsx';
import './App.css';  


function App() {
  return (
    <div className="App">
   <a class="menu-toggle rounded" href="#">
    <i class="fa fa-bars"></i>
  </a>
  <nav id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-brand">
        <a class="js-scroll-trigger" href="#page-top">BetterBiz</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#page-top">Home</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#about">Biz</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#services">Submit Page</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#portfolio">About</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#contact">Login In</a>
      </li>
    </ul>
  </nav>

  <header class="masthead d-flex">
    <div class="container text-center my-auto">
      <h1 class="mb-1">BetterBiz</h1>
      <h3 class="mb-5">
        <em>Support your community! </em>
      </h3>
      <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about"> Let Go!</a>
    </div>
    <div class="overlay"></div>
  </header>

  <section class="content-section bg-light" id="about">
    <div class="container text-center">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h2></h2>
          <p class="lead mb-5">
            <a href="https://unsplash.com/"></a>!</p>
          <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a>
        </div>
      </div>
    </div>
  </section>

  <section class="content-section bg-primary text-white text-center" id="services">
<div className="container">
  <div className="content-section-heading">
    <h3 className="text-secondary mb-0">Business</h3>
    <h2 className="mb-5">Categories</h2>
  </div>
  <div className="row">
    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
      <span className="service-icon rounded-circle mx-auto mb-3">
        <i className="icon-screen-smartphone"></i>
      </span>
      <h4>
        <strong>Black owned</strong>
      </h4>
      <p className="text-faded mb-0"></p> some text
    </div>
    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
      <span className="service-icon rounded-circle mx-auto mb-3">
        
      </span>
      <h4>
        <strong>LGTB owned</strong>
      </h4>
      <p className="text-faded mb-0">some text</p>
    </div>
    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
      <span className="service-icon rounded-circle mx-auto mb-3"> 
       
      </span>
      <h4>
        <strong>Women-owned</strong>
      </h4>
      <p className="text-faded mb-0">some text 
      </p>
    </div>
    <div className="col-lg-3 col-md-6">
      <span className="service-icon rounded-circle mx-auto mb-3"> 
      </span>
      <h4>
        <strong> Eco friendly </strong>
      </h4>
      <p className="text-faded mb-0">  some text</p>
    </div>
  </div>
</div>
</section> 
<services></services>
 

  <section className="callout">
    <div className="container text-center">
      <h2 className="mx-auto mb-5"> Own a business?
        Submit your Business and hlep grow our community!</h2>
      <a className="btn btn-primary btn-xl" href="">Submit</a>
    </div>
  </section>

  <section className="content-section" id="portfolio">
    <div className="container">
      <div className="content-section-heading text-center">
        <h3 className="text-secondary mb-0">About us</h3>
        <h2 className="mb-5">Our Team  </h2>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6">
          <a className="portfolio-item" href="#!">
            <div className="caption">
              <div className="caption-content">
                <div className="h2">Marcel</div>
                <p className="mb-0"> some text</p>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio-1.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="#!">
            <div className="caption">
              <div className="caption-content">
                <div className="h2"> Damon</div>
                <p className="mb-0">some text</p>
              </div>
            </div>
            <img className="img-fluid" src="client/src/assets/images/portfolio-2.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="#!">
            <div className="caption">
              <div className="caption-content">
                <div className="h2">Etam</div>
                <p className="mb-0">some text</p>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio-3.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="#!">
            <div className="caption">
              <div className="caption-content">
                <div className="h2">Sadia</div>
                <p className="mb-0">  some text</p>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio-4.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section className="content-section bg-primary text-white">
    <div className="container text-center">
      <h2 className="mb-4"> Sign in  rate and submit reviews ! </h2>
      <a href="#!" class="btn btn-xl btn-light mr-4">Sign up!</a>
      <a href="#!" class="btn btn-xl btn-dark">Login In!</a>
    </div>
  </section>

  <div id="contact" class="map">
    <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
    <br />
    <small>
      <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
    </small>
  </div>

  
       
    </div>
  );
}

export default App;
