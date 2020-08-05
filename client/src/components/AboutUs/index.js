import React from "react";
import "./AboutUs.css";

// to upload images , use 224 px by 224 px

const AboutUs = () => {
  return (
    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">About us</h3>
          <h2 className="mb-5">Our Story </h2>
          <div className="container text-center my-auto">
            <div className="h2">
              BetterBiz is a platform where we showcase minority and undervalued
              business to others.{" "}
            </div>
            <br />
            <div className="h3">
              With the global pandemic going, small businesses have taken one of
              the biggest toll, especially in Toronto. We wanted to create a
              platform that not only helps people shop locally but also help
              communities that they support grow.
              <br />
              <br />
              For Our Customers
              <br />
              <br />
              <ul>
                <li>Categorized business based on community </li>
                <li>
                  Presented with details about each business, delivery,
                  reviews,website links etc.{" "}
                </li>
                <li>
                  Sign up and share their own experience with rating reviewing
                  feature{" "}
                </li>
              </ul>
              <br />
              <br />
              For Our Business Owners
              <br />
              <br />
              <ul>
                <li>Platform where they can share their business story </li>
                <li>
                  Reach out to the niche market of customers who are looking for
                  way to support their community{" "}
                </li>
                <li>Label their business and join a circle </li>
                <li>
                  Submit their own business and assigned it to a category{" "}
                </li>
              </ul>
              <br />
              <br />
            </div>
            <h3 className="text-secondary mb-0">
              Let’s work together and help make our community grow stronger.
            </h3>
          </div>
          <br />
          <br />
          <br />

          <h2 className="mb-5">Our Team </h2>
        </div>
        <div className="row">
          <div class="col-lg-3">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle"
                src={require(process.env.PUBLIC_URL +
                  "./team-images/default.png")}
                alt=""
              />
              <h4>Marcel </h4>
              <p class="text-muted">Lead Designer</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://github.com/cestmarcel"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
              <a class="btn btn-dark btn-social mx-2" href="#!" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle"
                src={require(process.env.PUBLIC_URL +
                  "./team-images/default.png")}
                alt=""
              />
              <h4>Damon</h4>
              <p class="text-muted">Lead Designer</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://github.com/Damon-Zhong"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
              <a class="btn btn-dark btn-social mx-2" href="#!" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle"
                src={require(process.env.PUBLIC_URL + "./team-images/Etam.jpg")}
                alt=""
              />
              <h4>Etam</h4>
              <p class="text-muted">Lead Designer</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://github.com/etammao"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="https://www.linkedin.com/in/aige-mao"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle"
                src={require(process.env.PUBLIC_URL +
                  "./team-images/sadia1.jpeg")}
                alt=""
              />
              <h4>Sadia</h4>
              <p class="text-muted">Lead Designer</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://github.com/sadia110"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
              <a class="btn btn-dark btn-social mx-2" href="#!" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
