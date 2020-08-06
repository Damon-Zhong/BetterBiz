import React, { useState } from "react";
import {Link} from 'react-router-dom'
import EventCard from './EventCard'
import eventComing from "../images/upcoming0.jpg";
import "./EventCard/EventCard.css";
const axios = require("axios");
const moment = require("moment");

const Events = () => {
  const [input, setInput] = useState({ city: "Toronto", startDate: "", endDate: "" });
  const [inputValid, setInputValid] = useState({ isValid: true, message: "" });
  const [eventList, setEventList] = useState([]);

  async function eventsResearch() {
    console.log(`starting`);
    if (input.city === "") {
      setInputValid({ isValid: false, message: "Event location is required." });
      setTimeout(() => {
        setInputValid({ ...inputValid, isValid: true });
      }, 2000);
      return;
    }
    if (input.endDate === "") {
      setInputValid({ isValid: false, message: "End date is required." });
      setTimeout(() => {
        setInputValid({ ...inputValid, isValid: true });
      }, 2000);
      return;
    }
    if (input.startDate === "") {
      setInputValid({ isValid: false, message: "Start date is required." });
      setTimeout(() => {
        setInputValid({ ...inputValid, isValid: true });
      }, 2000);
      return;
    }
    const APIresult = await axios.post("/api/events", input);
    if (APIresult.data.length === 0) {
      setInputValid({ isValid: false, message: "No event found." });
      setTimeout(() => {
        setInputValid({ ...inputValid, isValid: true });
      }, 2000);
    }
    setEventList(APIresult.data);
  }

  async function handleInputChange(event) {
    const { id, value } = event.target;
    switch (id) {
      default:
        break;
      case "category":
        console.log(input)
        setInput({ ...input, [id]: value.toLowerCase() });
        break;
      case "startDate":
        const startTimestamp = moment(value).format("X");
        setInput({ ...input, [id]: startTimestamp });
        break;
      case "endDate":
        const endTimestamp = moment(value).format("X");
        setInput({ ...input, [id]: endTimestamp });
        break;
    }
  }
  return (
    <>
      <div>
        <img
          src={eventComing}
          style={{ objectFit: "cover", width: "100%", height: "60vh" }}
        />
        <div class="centered1">EVENTS ARE WHAT WE DO.</div>
        <div class="centered2">NO EVENT TOO SMALL. NO EVENT TOO BIG.</div>
      </div>
      <section className="callout">
        <div className="container">
          <div className="row">
            {/* Start Date */}
            <div className="col-6">
              <div className="input-grp">
                <label>Start Date</label>{" "}
                <input
                  id="startDate"
                  type="date"
                  className="form-control select-date inputSection"
                  onChange={handleInputChange}
                />{" "}
              </div>
            </div>
            {/* End Date */}
            <div className="col-6">
              <div className="input-grp">
                <label>End Date</label>{" "}
                <input
                  id="endDate"
                  type="date"
                  className="form-control select-date inputSection"
                  onChange={handleInputChange}
                />{" "}
              </div>
            </div>
            {/* Event Category */}
            <div className="col-6">
              <div className="input-grp">
                <label>Event Category</label>
                <select className="form-control inputSection" id="category" onChange={handleInputChange} required >
                  <option>Charities</option>
                  <option>Kids-Family</option>
                </select>
              </div>
            </div>
            {inputValid.isValid ? (
              ""
            ) : (
              <div className="alert alert-danger" id="alertFailed">
                {inputValid.message}
              </div>
            )}
          </div>
          <div className="row">
            <button
                onClick={eventsResearch}
                type="button"
                className="btn btn-primary"
              >
                Search
            </button>
            {eventList.length !== 0 ? eventList.map( event=><EventCard {...event} />) : ''}
            {localStorage.getItem('currUser') && JSON.parse(localStorage.getItem('currUser')).type === 'Business' ? <Link className='btn btn-primary' to='/events/submit'>Submit Event</Link>:''}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
