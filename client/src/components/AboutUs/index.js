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
            <div className="h2">BetterBiz is a plateform that ...</div>
          </div>

          <h2 className="mb-5">Our Team </h2>
        </div>     
        <div class Name="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src= {require(process.env.PUBLIC_URL + "./team-images/default.png")} alt="" />
                            <h4>Marcel </h4>
                            <p class="text-muted">Lead Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://github.com/cestmarcel"><i class="fab fa-github"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div> 
                    <div class="col-lg-4">
                        <div class="team-member">
                        <img class="mx-auto rounded-circle" src= {require(process.env.PUBLIC_URL + "./team-images/default.png")} alt="" />
                            <h4>Damon</h4>
                            <p class="text-muted">Lead Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://github.com/Damon-Zhong"><i class="fab fa-github"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                            
                        </div>
                    </div> 
                    <div class="col-lg-4">
                        <div class="team-member">
                        <img class="mx-auto rounded-circle" src= {require(process.env.PUBLIC_URL + "./team-images/default.png")} alt="" />
                            <h4>Etam</h4>
                            <p class="text-muted">Lead Designer</p> 
                            <a className="btn btn-dark btn-social mx-2" href="https://github.com/etammao"><i class="fab fa-github"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="!#"><i class="fab fa-linkedin-in"></i></a>
                           
                        </div>
                    </div> 
                    <div class="col-lg-4">
                        <div class="team-member">
                        <img class="mx-auto rounded-circle" src= {require(process.env.PUBLIC_URL + "./team-images/sadia1.jpeg")} alt="" />
                            <h4>Sadia</h4>
                            <p class="text-muted">Lead Designer</p> 
                            <a className="btn btn-dark btn-social mx-2" href="https://github.com/sadia110"><i class="fab fa-github"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                            
                        </div>
                    </div>
        </div>
      </div> 
    </section>
  );
};

export default AboutUs;
