import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BusinessSummary.css";

function BusinessSummary(){
    return (
        <div className="container mt-5 mb-5">
            <h2>Business example</h2>
            <p>
                The Big Chill is an old-fashioned retro ice cream parlour with colourful design, checkered floors, and marble
                counters. We have been operating for over a decade and are the ideal venue for birthday parties and
                corporate events.
            </p>
            <p><b><a href="google.com" target="_blank">www.website.com</a> | 048233461990 | <a href="mailto:mail@website.com">mail@website.com</a></b></p>
            <Row className="mt-5">
                <Col className="col-sm-6">
                    <h5 className="mb-3">What makes this business special</h5>
                    <p>🖤&nbsp;&nbsp;<b>Black-owned</b></p>
                    <p>🏳️‍🌈&nbsp;&nbsp;<b>LGBT-owned</b></p>
                    <p>🌱&nbsp;&nbsp;<b>Eco-friendly</b></p>
                    <p>These business features have been sourced by our own community. If you want to add an underrepresented business to our database, click <a href="http://google.com">here</a>.</p>
                </Col>
                <Col className="col-sm-6">
                    <h5>Hours</h5>
                    <p>
                    Mon 3:00 pm - 11:00 pm<br />
                    Tue 3:00 pm - 11:00 pm<br />
                    Wed 3:00 pm - 11:00 pm<br />
                    Thu 3:00 pm - 11:00 pm<br />
                    Fri 3:00 pm - 12:00 am<br />
                    Sat 2:00 pm - 12:00 am<br />
                    Sun 2:00 pm - 11:00 pm
                    </p>
                    <p>Business info powered by <a className="yelp" href="https://www.yelp.com/" target="_blank">Yelp</a></p>
                </Col>
            </Row>
        </div>
    )
}

export default BusinessSummary;