import React from "react";
import "../AboutUs/AboutUs.css";
import "../Header/Header.css";
import "../AboutContentBottom/AboutContentBottom.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutContentBottom(){
    return(
        <div>
            <div className="line"></div>
            <Row>
                <Col sm={6} className="p-0">
                <div className="categoryImageUsers"></div>
                </Col>
                <Col sm={6} className="p-0">
                <div className="categoryText">
                    <div className="p-5">
                        <h3>How BetterBiz helps our users</h3>
                        <p>Helping Torontonians find underrepresented businesses is our goal. We want people to discover all the diversity our city has to offer!</p>
                        <p>Here's what we do for our users:</p>
                        <p>
                            <li>Categorized business based on community </li>
                            <li>
                            Get key details about each business, delivery,
                            reviews, website links etc.{" "}
                            </li>
                            <li>
                            Sign up and share their own experience using our reviewing
                            feature{" "}
                            </li>
                        </p>
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6} className="p-0">
                <div className="categoryText">
                    <div className="p-5">
                    <h3>What we do for businesses</h3>
                    <p>Helping diverse businesses get the visibility they deserve is our mission. Here's what we do for our featured businesses:</p>
                    <p>
                        <li>
                        Reach out to customers who are looking for
                        ways to support their community{" "}
                        </li>
                        <li>Be visible and attract new customers</li>
                        <li>
                        Make more money by pointing users to their own delivery services and away from the big platforms{" "}
                        </li>
                    </p>
                    </div>
                </div>
                </Col>
                <Col sm={6} className="p-0">
                <div className="categoryImageBusiness"></div>
                </Col>
            </Row>
            <div className="line"></div>
        </div>
    )
}

export default AboutContentBottom;