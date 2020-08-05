import React, { useState } from "react";
import EventCard from './EventCard'
const axios = require("axios");
const moment = require("moment");

const Events = () => {
  const [input, setInput] = useState({ city: "", startDate: "", endDate: ""})
  const [inputValid, setInputValid] = useState({ isValid: true, message:'' })
  const [eventList, setEventList ] = useState([])

  async function eventsResearch() {
    console.log(`starting`)
    if( input.city === "" ) {
      setInputValid({isValid: false, message:'Event location is required.' })
      setTimeout( ()=>{
        setInputValid({...inputValid, isValid: true })
      },2000)
      return
    }
    if( input.endDate === "" ) {
      setInputValid({isValid: false, message:'End date is required.' })
      setTimeout( ()=>{
        setInputValid({...inputValid, isValid: true })
      },2000)
      return
    }
    if( input.startDate === "" ) {
      setInputValid({isValid: false, message:'Start date is required.' })
      setTimeout( ()=>{
        setInputValid({...inputValid, isValid: true })
      },2000)
      return
    }
    const APIresult = await axios.post("/api/events", input);
    if(APIresult.data.length === 0){
      setInputValid({isValid: false, message:'No event found.' })
      setTimeout( ()=>{
        setInputValid({...inputValid, isValid: true })
      },2000)
    }
    setEventList(APIresult.data)
  }

  async function handleInputChange(event) {
    const { id, value } = event.target;
    switch (id) {
      default:
        break;
      case "city":
        setInput({ ...input, [id]: value });
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
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="input-grp">
              <label>Start Date</label>{" "}
              <input
                id="startDate"
                type="date"
                className="form-control select-date"
                onChange={handleInputChange}
              />{" "}
            </div>
          </div>

          <div className="col-6">
            <div className="input-grp">
              <label>End Date</label>{" "}
              <input
                id="endDate"
                type="date"
                className="form-control select-date"
                onChange={handleInputChange}
              />{" "}
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                City name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="city"
              onChange={handleInputChange}
            />
            <button
              onClick={eventsResearch}
              type="button"
              className="btn btn-primary"
            >
              Search
            </button>
          </div>
          {inputValid.isValid ? '': 
          <div className="alert alert-danger" id="alertFailed" >
            {inputValid.message}
          </div>}
        </div>
      </div>

      <br />

      <div className="container">
        <div className="row">
        {eventList.map( event=><EventCard {...event} />)}
          {/* <EventCard />
          <EventCard />
          <EventCard /> */}
        </div>
      </div>
    </>
  );
};

export default Events;
