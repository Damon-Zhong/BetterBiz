import React from "react";
import "../AboutUs/AboutUs.css";
import "../Header/Header.css";
import "./AboutContent.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutContent(){
    return(
        <div>
            <div className="line"></div>
            <Row>
                <Col sm={6} className="p-0">
                <div className="categoryImageMission"></div>
                </Col>
                <Col sm={6} className="p-0">
                <div className="categoryText">
                    <div className="p-5">
                        <h3>Our mission</h3>
                        <p>
                            With the global pandemic going on, small businesses have taken one of
                            the biggest tolls, especially in Toronto. We want to create a
                            platform that boosts the visibility of underrepresented businesses, 
                            helps people shop locally, and also helps grow the communities that they 
                            support.
                        </p>
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6} className="p-0">
                <div className="categoryText">
                    <div className="p-5">
                    <h3>The sources, services, and creators that make BetterBiz possible</h3>
                    <p>We did a ton of research to come up with the selection of diverse business you can find on this page. The fact that it was a lot of work to find these businesses shows us how important a page like BetterBiz is! You can find our full source list <a href="https://docs.google.com/spreadsheets/d/1Y-cGosDSMuPzUggLZYJiXw35YabJXIq6oPZzPMkBF3s/edit?usp=sharing" target="_blank">here</a>.</p>
                    <p>We get some basic business info like the address by tapping into Yelp's <a href="https://www.yelp.com/fusion" target="_blank">Fusion API</a>. Our icons are from <a href="https://www.flaticon.com/" target="_blank">Flaticon.com</a> and are created by the user <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a>. We're so appreciative that <a href="https://www.drawkit.io/" target="_blank">DrawKit</a> offers free hand-drawn illustrations. You can find the full list of external libraries, technical packages, and utilities on our <a href="https://github.com/Damon-Zhong/BetterBiz" target="_blank">project's Github readme</a>.</p>
                    </div>
                </div>
                </Col>
                <Col sm={6} className="p-0">
                <div className="categoryImageSources"></div>
                </Col>
            </Row>
            <div className="line"></div>
        </div>
    )
}

export default AboutContent;