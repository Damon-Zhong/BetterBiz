import React from "react";
import "./Submit.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Submit = () => {
  return (
    <div>
        <Row className="submitHeader">
            <Col sm={1}>
            </Col>
            <Col sm={5} className="submitHeaderText">
                <div className="mobile">
                    <h1 className="headline homepage mb-3">We need your help to grow</h1>
                    <h5 className="intro mb-5">
                        Do you own or love a diverse business? Submit it here and help us grow our database!
                    </h5>
                </div>
            </Col>
            <Col sm={5}>
                <div className="submitHeaderImage"></div>
            </Col>
            <Col sm={1}>
            </Col>
        </Row>
        <div className="line"></div>
      </div>
  );
};

export default Submit;
