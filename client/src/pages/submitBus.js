import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Submit from "../components/Submit";
import Modal from "../components/PopupModal";
import "./submitBus.css";

const SubmitBus = () => {
  const [busData, setBusData] = useState({
    busType: "",
    name: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    highlight: [],
  });
  const [isSubmit, setIsSubmit] = useState(false);

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

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setBusData({ ...busData, [id]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const feedback = await axios.post("/api/submit", busData);
    if (feedback.data.status) {
      setTimeout(() => {
        setIsSubmit(true);
      }, 3000);
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
              onChange={handleInputChange}
              value={busData.name}
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />

            <label className="mt-3 formLabel" htmlFor="city">City</label>
            <input
              onChange={handleInputChange}
              value={busData.city}
              type="text"
              className="form-control"
              id="city"
              name="city"
            />

            <label className="mt-3 formLabel" htmlFor="busType">Type of Business</label>
            <select
              onChange={handleInputChange}
              value={busData.busType}
              className="form-control"
              id="busType"
              required
            >
              <option>Food</option>
              <option>Service</option>
              <option>Office</option>
              <option>Culture</option>
              <option>Other</option>
            </select>

            <label className="mt-3 formLabel" htmlFor="attributes">What makes this business special?</label>
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
          </div>
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn btn-primary box2"
            data-toggle="modal"
            data-target="#thankyouModal"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitBus;
