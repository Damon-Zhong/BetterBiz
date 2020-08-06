import React from "react";
import "./AboutUs.css";
import "../Header/Header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutHeader = () => {
    return (
      <div className="header">
        <div className="mobile-header"></div>
        <Row>
            <Col sm={6}>
                <div className="aboutHeader"></div>
            </Col>
            <Col sm={6}>
                <h1 className="headline homepage mb-3">It takes a village</h1>
                <h5 className="intro mb-5">
                    Learn more about the team behind BetterBiz, our mission, and the technologies, services, and artists who help bring our platform to life.
                </h5>
            </Col>
        </Row>
      </div>
    );
  };
  
  export default AboutHeader;