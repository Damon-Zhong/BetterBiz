import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import black from "../../images/black.jpg";
// import lgbt from "../../images/lgbt.jpg";
// import eco from "../../images/eco.jpg";
import delivery from "../../images/delivery.png";
import "./BusinessHighlights.css";

function BusinessHighlights(){
    return (
        <div>
            <div className="line mt-5"></div>
            <div className="container">
                <Row>
                    <Col sm={6}>
                        <Image className="delivery" src={delivery}></Image>
                    </Col>
                    <Col sm={6} className="deliveryText">
                        <div>
                            <h5>Help this business make more money</h5>
                            <p>This business has their own delivery service. If you choose this over the big delivery platforms, you can help this business make more money off of your transaction.</p>
                            <p><b>Call 067151865 or visit www.businessname.com to place your order.</b></p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BusinessHighlights;