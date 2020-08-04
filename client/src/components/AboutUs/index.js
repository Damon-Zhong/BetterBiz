import React from "react";
import "./AboutUs.css"; 


const AboutUs = () => {
  return (
    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">About us</h3>
          <h2 className="mb-5">Our Story </h2>
          <div className="container text-center my-auto">
            <div className="h2">BetterBiz is a plateform that ...</div>
          </div>

          <h2 className="mb-5">Our Team </h2>
        </div>   
        <div className="row">
          <div className="col-lg-6">
            <a className="portfolio-item members" href="https://github.com/cestmarcel">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Marcel</div>
                  <p className="mb-0"> 
                  Postion A 
                  </p>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>

                </div>
              </div>
              <img className="img-fluid" src="./images/loadingSpinner.gif" alt="100%" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item members" href="https://github.com/Damon-Zhong">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2"> Damon</div>
                  <p className="mb-0">Postion B</p> 
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>

                </div>
              </div>
              <img
                className="img-fluid"
                src="client/src/assets/images/portfolio-2.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item members" href="https://github.com/etammao">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Etam</div>
                  <p className="mb-0">Postion C</p> 
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>

                </div>
              </div>
              <img className="img-fluid" src="img/portfolio-3.jpg" alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item members" href="https://github.com/sadia110">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Sadia</div>
                  <p className="mb-0"> Postion D</p> 
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>

                </div>
              </div>
              <img className="img-fluid" src="img/portfolio-4.jpg" alt="" />
            </a>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default AboutUs;
