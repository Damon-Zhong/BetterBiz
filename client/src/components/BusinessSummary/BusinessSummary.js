import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BusinessSummary.css";
import highlightsMap from "../../constants/highlights";

function BusinessSummary({name, summary, address, website, phone, highlights}){
    return (
        <div className="container mt-5 mb-5">
            <h2>{name}</h2>
            <p>
                {summary}
            </p>
            <p><b>{address.join(", ")}<br/><a href={website.startsWith('http') ? website : `http://${website}`} target="_blank">{name}'s website</a> | Phone: {phone}</b></p>
            <Row className="mt-5">
                <Col className="col-sm-12">
                    <h5 className="mb-3">What makes this business special</h5>
                </Col>
            </Row>
            <Row>
                <Col className="col-sm-6">
                    {highlights.map(
                        (highlight) => {
                            const highlightData = highlightsMap[highlight];
                            return(
                                <p key={highlight}>{highlightData ? highlightData.emoji : null}&nbsp;&nbsp;<b>{highlightData ? highlightData.title : ''}</b></p>
                            )
                        }
                    )}
                </Col>
                <Col className="col-sm-6">
                    <p>These business features have been sourced by our own community. If you want to add an underrepresented business to our database, click <a href="/submit">here</a>.</p>
                </Col>
            </Row>
        </div>
    )
}

export default BusinessSummary;