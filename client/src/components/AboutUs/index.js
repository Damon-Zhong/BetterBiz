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
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item members" href="#!">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Marcel</div>
                  <p className="mb-0">
                    Hi, I'm Marcel, a developer and mobility specialist with a
                    background in strategy and enterprise software.
                  </p>
                </div>
              </div>
              <img className="img-fluid" src="./images/black.jpg" alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item members" href="#!">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2"> Damon</div>
                  <p className="mb-0">some text</p>
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
            <a className="portfolio-item members" href="#!">
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
            <a className="portfolio-item members" href="#!">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Sadia</div>
                  <p className="mb-0"> some text</p>
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
