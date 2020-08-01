import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import black from "../../images/black.jpg";
import lgbt from "../../images/lgbt.jpg";
import eco from "../../images/eco.jpg";
import delivery from "../../images/delivery.jpg";
import "./BusinessHighlights.css";

function BusinessHighlights(){
    return (
        <div className="container">
            <hr className="mb-5" />
            <Row>
                <Col className="col-sm-6">
                    <Image className="delivery" src={delivery}></Image>
                </Col>
                <Col className="col-sm-6">
                    <h5>Help this business make more money</h5>
                    <p>This business has their own delivery service. If you choose this over the big delivery platforms, you can help this business make more money off of your transaction.</p>
                    <p><b>Call 067151865 or visit www.businessname.com to place your order.</b></p>
                </Col>
            </Row>
        </div>
    )
}

export default BusinessHighlights;