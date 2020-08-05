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
    attributes: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

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
  }

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
            <label htmlFor="busType">Type of Business</label>
            <select
              onChange={handleInputChange}
              value={busData.busType}
              className="form-control"
              id="busType"
              required
            >
              <option>Restaurant</option>
              <option>Barber</option>
              <option>Coffee Shop</option>
              <option>Others</option>
              <option>Others</option>
            </select>

            <label htmlFor="name">Business Name</label>
            <input
              onChange={handleInputChange}
              value={busData.name}
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />

            <label htmlFor="address">Business Address</label>
            <input
              onChange={handleInputChange}
              value={busData.address}
              type="text"
              className="form-control"
              id="address"
              required
            />

            <label htmlFor="city">City</label>
            <input
              onChange={handleInputChange}
              value={busData.city}
              type="text"
              className="form-control"
              id="city"
              name="city"
            />

            <label htmlFor="country">Country</label>
            <input
              onChange={handleInputChange}
              value={busData.country}
              type="text"
              className="form-control"
              id="country"
              name="country"
            />

            <label htmlFor="postalCode">Postal Code</label>
            <input
              onChange={handleInputChange}
              value={busData.postalcode}
              type="text"
              className="form-control"
              id="postalCode"
              name="postalCode"
            />

            <label htmlFor="attributes">Business Attributes</label>
            <input
              onChange={handleInputChange}
              value={busData.attributes}
              type="text"
              className="form-control"
              id="attributes"
              name="attributes"
            />
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
