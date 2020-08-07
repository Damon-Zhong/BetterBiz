import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import black from "../../images/black.jpg";
// import lgbt from "../../images/lgbt.jpg";
// import eco from "../../images/eco.jpg";
import delivery from "../../images/delivery.png";
import "./BusinessHighlights.css";

function BusinessHighlights({ownDelivery, phone, website}){
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
                            {ownDelivery ? <p dangerouslySetInnerHTML={{ __html: `This business has their own delivery service. Call ${phone} or visit <a href="${website.startsWith('http') ? website : `http://${website}`}" target="_blank">${website}</a> to place your order.` }} />  : <p>If you pick up your order instead of ordering through the big delivery platforms, this business will get 100% of the amount you pay.</p>} 
                            <p>Consider helping this business make more money off of your transaction!</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BusinessHighlights;