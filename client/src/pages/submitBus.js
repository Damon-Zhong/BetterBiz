import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Submit from "../components/Submit";
import Modal from "../components/PopupModal";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import slugify from "../utils/slugify";
import "./submitBus.css";
import loadingSpinner from "../images/loadingSpinner.gif";

const SubmitBus = () => {

  const [busData, setBusData] = useState({
    busType: "Food",
    city: "Toronto",
    name: "",
    url: "",
    summary: "",
    yelpId: "",
    website: "",
    highlight: [],
    ownDelivery: false,
    deliveryWebsite: ""
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [yelpData, setYelpData] = useState(undefined);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = useState(false);

  const handleHighlightChange = (event) => {
    const {value} = event.currentTarget;
    if(busData.highlight.includes(value)){
      const indexToRemove = busData.highlight.findIndex(highlight =>{
      return highlight === value;
      })
      const result = [...busData.highlight.slice(0, indexToRemove), ...busData.highlight.slice(indexToRemove + 1)]
      setBusData({...busData, highlight: result});
    } else {
      setBusData({...busData, highlight: [...busData.highlight, value]});
    }
  }

  const handleDeliveryChange = (event) => {
    const deliveryStatus = event.currentTarget.value === "Yes";
    setBusData({...busData, ownDelivery: deliveryStatus});
  }

  const handleNameChange = (event) => {
    const { id, value } = event.target;
    const url = slugify(value);
    setBusData({ ...busData, [id]: value, url: url });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setBusData({ ...busData, [id]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if(!yelpData){
      const endpointData = {name: busData.name, city: busData.city};
      setErrorMessage("");
      setLoading(true);
      fetch('/api/business/suggestion', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(endpointData)
      })
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        if(Array.isArray(res)){
          setYelpData(res)
          setBusData({...busData, yelpId: res[0].id})
        } else {
          setErrorMessage(res.message || "Error getting data from Yelp. Please try again");
        }
      })
      .catch( () => {
        setLoading(false);
        setErrorMessage("Opps! Couldn't get business from Yelp. Please try again.")
      })
    } else {
      setLoading(true);
      const feedback = await axios.post("/api/submit", busData);
      setLoading(false);
      if (feedback.data.status) {
        setIsSubmit(true);
      } else {
        setErrorMessage(feedback.data.message || "Your business was not saved in our database. Please try again.")
      }
    }
  };
  return (
    <div>
      {isSubmit ? <Redirect to="/" /> : ""}

      {/* <!-- Thank-you Modal --> */}
      <Modal status={isSubmit} />
      {/* Submit business form  */}
      <Submit />
      <div className="mt-5 container">
        <form>
          <div className="form-group">

            <label className="mt-3 formLabel" htmlFor="name">Business Name</label>
            <input
              onChange={handleNameChange}
              value={busData.name}
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />

            <label className="mt-3 formLabel" htmlFor="city">City</label>
            <p>Toronto</p>

            {yelpData && (
              <div>
                <label className="mt-3 formLabel" htmlFor="busType">Type of Business</label>
                <select
                  onChange={handleInputChange}
                  value={busData.busType}
                  className="form-control"
                  id="busType"
                  required
                >
                  <option value="Restaurant">Restaurant</option>
                  <option value="Shop">Shop</option>
                  <option value="Service">Service</option>
                  <option value="Leisure">Leisure</option>
                  <option value="Culture">Culture</option>
                </select>
    
                <label className="mt-3 formLabel" htmlFor="highlights">What makes this business special?</label>
                <label>Please keep in mind that BetterBiz is targeted at underrepresented businesses, so at least one of the following criteria should be met.</label>
                <div class="form-check">
                  <input class="form-check-input" onClick={handleHighlightChange} type="checkbox" value="Black" id="black-owned-check"/>
                  <label class="form-check-label" for="black-owned-check">
                    🖤 Black-owned
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" onClick={handleHighlightChange} type="checkbox" value="LGBT" id="lgbt-owned-check"/>
                  <label class="form-check-label" for="lgbt-owned-check">
                    🏳️‍🌈 LGBT-owned
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" onClick={handleHighlightChange} type="checkbox" value="Women" id="women-owned-check"/>
                  <label class="form-check-label" for="women-owned-check">
                    ♀ Women-owned
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" onClick={handleHighlightChange} type="checkbox" value="Eco" id="eco-friendly-check"/>
                  <label class="form-check-label" for="eco-friendly-check">
                    🌱 Eco-friendly
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" onClick={handleHighlightChange} type="checkbox" value="Community" id="community-impact-check"/>
                  <label class="form-check-label" for="community-impact-check">
                    🤲 Community impact
                  </label>
                </div>
    
                <label className="mt-3 formLabel" htmlFor="summary">Add a short business description</label>
                <div class="form-group">
                  <label for="businessDescription">Please summarize what this business has to offer.</label>
                  <textarea class="form-control" id="summary" onChange={handleInputChange} rows="3"></textarea>
                </div>
    
                <label className="mt-3 formLabel" htmlFor="ownDelivery">Does this business offer its own, independent delivery services?</label>
                <div class="form-group">
                  <label for="businessDelivery">Letting others know how to order from this business not using one of the big delivery platforms can help this business make more money.</label>
                  <select value={busData.ownDelivery ? "Yes" : "No"}class="form-control" id="ownDelivery" onChange={handleDeliveryChange}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {busData.ownDelivery ? (
                <div>
                  <label className="mt-2" htmlFor="ownDeliveryWebsite">What's the website where people can find more information about the delivery service?</label>
                  <input
                    onChange={handleInputChange}
                    value={busData.deliveryWebsite}
                    type="text"
                    className="form-control"
                    id="deliveryWebsite"
                    name="deliveryWebsite"
                  />
                </div>) : null}
              </div>
            )}

          </div>
          {/* Error alert */}
          {errorMessage ? <Alert variant={"danger"}>
                        {errorMessage}
                    </Alert> : null}
          {/* Success alert */}
          {isSubmit ? <Alert variant={"success"}>
              {`Yay! You've successfully saved ${busData.name} business to our database. You can find your entry `}
              <a href={`/businesses/${busData.url}`}>here!</a>
          </Alert> : null}
          {/* Loading spinner */}
          {loading ? <div className="container mt-5">
                <Image src={loadingSpinner} style={{margin: "0 auto", width: "100px", display: "block" }}/>
            </div> : null}
          {/* Submit button                     */}
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn btn-primary box2"
            // data-toggle="modal"
            // data-target="#thankyouModal"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitBus;
