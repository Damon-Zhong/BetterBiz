import React from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import heart from "../../images/heart.png";
import lgbt from "../../images/lgbt.png";
import woman from "../../images/woman.png";
import community from "../../images/community.png";
import eco from "../../images/eco.png";
import shopIcon from "../../images/shopIcon.png";
import food from "../../images/food.png";
import lawyer from "../../images/lawyer.png";
import theater from "../../images/theater.png";
import wellness from "../../images/wellness.png";
import personOnPhone from "../../images/personOnPhone.png";
import Button from "react-bootstrap/Button";
import "./Services.css";

export default () => {

  return (
    <div>
      <div className="line"></div>
      <Row>
        <Col sm={6} className="p-0">
          <div className="categoryImageHighlights"></div>
        </Col>
        <Col sm={6} className="p-0">
          <div className="categoryText">
            <div className="p-5">
              <h3>Diversity needs visibility</h3>
              <p>We're living in one of the most diverse cities on earth—our mission is to make this diversity visible! We give businesses that are often overlooked the visibility they deserve.</p>
              <p>Come meet some rockstar business owners from the BIPOC, LGBT+, and female entrepreneur communities!</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="highlightRow">
        <Col sm={1} className="p-0">
        </Col>
        <Col sm={2} className="p-0 mb-5">
          <Image className="mt-5 mb-3 highlightIcon mx-auto d-block" src={heart} style={{maxWidth: "100px", width: "30%"}}/>
          <p className="highlightKeyword text-center">BLACK-<br/>OWNED<br/><Link to='/overview/Black-owned'>More</Link></p>
        </Col>
        <Col sm={2} className="p-0 mb-5">
          <Image className="mt-5 mb-3 highlightIcon mx-auto d-block" src={lgbt} style={{maxWidth: "100px", width: "30%"}}/>
          <p className="highlightKeyword text-center">LGBT-<br/>OWNED<br/><Link to='/overview/LGBT-owned'>More</Link></p>
        </Col>
        <Col sm={2} className="p-0 mb-5">
          <Image className="mt-5 mb-3 highlightIcon mx-auto d-block" src={woman} style={{maxWidth: "100px", width: "30%"}}/>
          <p className="highlightKeyword text-center">WOMEN-<br/>OWNED<br/><Link to='/overview/Women-owned'>More</Link></p>
        </Col>
        <Col sm={2} className="p-0 mb-5">
          <Image className="mt-5 mb-3 highlightIcon mx-auto d-block" src={eco} style={{maxWidth: "100px", width: "30%"}}/>
          <p className="highlightKeyword text-center">ECO-<br/>FRIENDLY<br/><Link to='/overview/Eco-friendly'>More</Link></p>
        </Col>
        <Col sm={2} className="p-0 mb-5">
          <Image className="mt-5 mb-3 highlightIcon mx-auto d-block" src={community} style={{maxWidth: "100px", width: "30%"}}/>
          <p className="highlightKeyword text-center">COMMUNITY IMPACT<br/><Link to='/overview/Community'>More</Link></p>
        </Col>
        <Col sm={1} className="p-0">
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="p-0">
          <div className="categoryText">
            <div className="p-5">
              <h3>Find businesses you'll love</h3>
              <p>Discover restaurants that you might have overlooked in the past. Or rediscover a shop you already know by learning about its diverse background.</p>
              <p>Check out our business categories and find your new favourite spot in Toronto to dine, shop, or work out!</p>
            </div>
          </div>
        </Col>
        <Col sm={6} className="p-0">
          <div className="categoryImageShop"></div>
        </Col>
      </Row>
      <Row className="categoryRow">
        <Col sm={1} className="p-0">
        </Col>
        <Col sm={2} className="p-0 mb-5">
          <Image className="mt-5 mb-3 highlightIcon mx-auto d-block" src={food} style={{maxWidth: "100px", width: "30%"}}/>
          <p className="highlightKeyword text-center">RESTAURANTS <Link to='/overview/Restaurant'>More</Link></p>
        </Col>
        <Col sm={2} className="p-0 mb-5">
          <Image className="mt-5 mb-3 highlightIcon mx-auto d-block" src={shopIcon} style={{maxWidth: "100px", width: "30%"}}/>
          <p className="highlightKeyword text-center">SHOPS<Link to='/overview/Shop'>More</Link></p>
        </Col>
        <Col sm={2} className="p-0 mb-5">
          <Image className="mt-5 mb-3 highlightIcon mx-auto d-block" src={lawyer} style={{maxWidth: "100px", width: "30%"}}/>
          <p className="highlightKeyword text-center">SERVICE<Link to='/overview/Service'>More</Link></p>
        </Col>
        <Col sm={2} className="p-0 mb-5">
          <Image className="mt-5 mb-3 highlightIcon mx-auto d-block" src={wellness} style={{maxWidth: "100px", width: "30%"}}/>
          <p className="highlightKeyword text-center">LEISURE<Link to='/overview/Leisure'>More</Link></p>
        </Col>
        <Col sm={2} className="p-0 mb-5">
          <Image className="mt-5 mb-3 highlightIcon mx-auto d-block" src={theater} style={{maxWidth: "100px", width: "30%"}}/>
          <p className="highlightKeyword text-center">CULTURE<Link to='/overview/Culture'>More</Link></p>
        </Col>
        <Col sm={1} className="p-0">
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="p-0">
          <div className="categoryImageEvents"></div>
        </Col>
        <Col sm={6} className="p-0">
          <div className="categoryText">
            <div className="p-5">
              <h3>Find events to support the local business community</h3>
              <p>Use our events search to find events that benefit Toronto's local business community. Now more than ever our local businesses need our support!</p>
              <Button className="outlineButton" variant="primary" href="/events">Find events</Button>
            </div>
          </div>
        </Col>
      </Row>
      <div className="line"></div>
    </div>
  );
};
