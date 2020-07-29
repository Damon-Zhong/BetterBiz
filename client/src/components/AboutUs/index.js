import React from "react";

const AboutUs = () => {
  return (
    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">About us</h3>
          <h2 className="mb-5">Our Team </h2>
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
              <img
                className="img-fluid"
                src="client/src/assets/images/portfolio-2.jpg"
                alt=""
              />
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
