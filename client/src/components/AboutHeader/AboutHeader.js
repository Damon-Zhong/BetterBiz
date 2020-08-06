import React from "react";
import "../AboutUs/AboutUs.css";
import "../Header/Header.css";
import "./AboutHeader.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutHeader = () => {
    return (
      <div>
        <Row className="aboutHeader">
            <Col sm={1}>
            </Col>
            <Col sm={5} className="aboutHeaderText">
                <div className="mobile">
                    <h1 className="headline homepage mb-3">Making diverse businesses visible</h1>
                    <h5 className="intro mb-5">
                        Learn more about the team behind BetterBiz, our mission, and the technologies, services, and artists who help bring our platform to life.
                    </h5>
                </div>
            </Col>
            <Col sm={5} className="mobileGif">
                <div className="mobileGif aboutHeaderImage"></div>
            </Col>
            <Col sm={1}>
            </Col>
        </Row>
      </div>
    );
  };
  
  export default AboutHeader;