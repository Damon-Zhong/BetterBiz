import React from "react";

function AboutTeam(){
    return(
        <div>
            <h3 className="text-center mt-5 mb-3">MEET OUR TEAM</h3>
            <div className="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-2">
                <div class="team-member">
                <img
                    class="mx-auto rounded-circle"
                    src={require(process.env.PUBLIC_URL +
                    "../../images/marcel.jpg")}
                    alt=""
                />
                <h4 className="mt-3">Marcel </h4>
                <p class="text-muted">Marcel is a product and software developer with a background in strategy.</p>
                <a
                    className="btn btn-dark btn-social mx-2"
                    href="https://github.com/cestmarcel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="http://linkedin.com/in/marcelthiemann" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="team-member">
                <img
                    class="mx-auto rounded-circle"
                    src={require(process.env.PUBLIC_URL +
                    "../../images/damon.jpg")}
                    alt=""
                />
                <h4 className="mt-3">Damon</h4>
                <p class="text-muted">Lead Designer</p>
                <a
                    className="btn btn-dark btn-social mx-2"
                    href="https://github.com/Damon-Zhong"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="team-member">
                <img
                    class="mx-auto rounded-circle"
                    src={require(process.env.PUBLIC_URL + "../../images/Etam.jpg")}
                    alt=""
                />
                <h4 className="mt-3">Etam</h4>
                <p class="text-muted">Lead Designer</p>
                <a
                    className="btn btn-dark btn-social mx-2"
                    href="https://github.com/etammao"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a
                    class="btn btn-dark btn-social mx-2"
                    href="https://www.linkedin.com/in/aige-mao"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-linkedin-in"></i>
                </a>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="team-member">
                <img
                    class="mx-auto rounded-circle"
                    src={require(process.env.PUBLIC_URL +
                    "../../images/sadia1.jpeg")}
                    alt=""
                />
                <h4 className="mt-3">Sadia</h4>
                <p class="text-muted">Lead Designer</p>
                <a
                    className="btn btn-dark btn-social mx-2"
                    href="https://github.com/sadia110"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/sadia-batool-610b63130/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                </div>
            </div>
            <div class="col-sm-2"></div>
        </div>
        <div className="line"></div>
    </div>
    )
}

export default AboutTeam;