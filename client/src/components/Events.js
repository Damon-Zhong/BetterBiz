import React, { useState } from "react";
const axios = require("axios");
const moment = require("moment");

const Events = () => {
  const [input, setInput] = useState({
    city: "",
    startDate: "",
    endDate: "",
  });

  async function eventsResearch() {
    console.log(`starting`);
    const APIresult = await axios.post("/api/events", input);
    console.log(APIresult);
  }

  async function handleInput(event) {
    const { id, value } = event.target;
    console.log(`[onChange] ${id} : ${value}`);
    switch (id) {
      default:
        break;
      case "city":
        setInput({ ...input, [id]: value });
        break;
      case "startDate":
        const startTimestamp = moment(value).format("X");
        console.log(startTimestamp);
        setInput({ ...input, [id]: startTimestamp });
        break;
      case "endDate":
        const endTimestamp = moment(value).format("X");
        console.log(endTimestamp);
        setInput({ ...input, [id]: endTimestamp });
        break;
    }

    // setInput({ ...input, [id]: value });
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div class="input-grp">
              <label>Start Date</label>{" "}
              <input
                id="startDate"
                type="date"
                class="form-control select-date"
                onChange={handleInput}
              />{" "}
            </div>
          </div>

          <div className="col-6">
            <div class="input-grp">
              <label>End Date</label>{" "}
              <input
                id="endDate"
                type="date"
                class="form-control select-date"
                onChange={handleInput}
              />{" "}
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                City name
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="city"
              onChange={handleInput}
            />
            <button
              onClick={eventsResearch}
              type="button"
              class="btn btn-primary"
            >
              Primary
            </button>
          </div>
        </div>
      </div>

      <br />

      <div className="container">
        <div className="row">
          <div className="col-4">
            <div class="card" style={{ width: "18rem" }}>
              {/* image_url */}
              <img
                src="https://s3-media2.fl.yelpcdn.com/ephoto/DfKo_HjdtLrHw3mqnMcYVg/o.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                {/* name */}
                <h5 class="card-title">
                  UN FESTIVAL NUMÉRIQUE POUR 2020 - Quartiers Danses
                </h5>
                {/* description */}
                <p class="card-text">
                  C'est officiel: le Festival Quartiers Danses (FQD) prendra
                  cette année un virage numérique pour sa 18ème édition, du 11
                  au 20 septembre 2020\nL'équipe du FQD...
                </p>
              </div>
              <ul class="list-group list-group-flush">
                {/* time_start*/}
                <li class="list-group-item">2020-09-11T00:00:00-04:00 </li>
                {/* location.city */}
                <li class="list-group-item">Montreal</li>
                {/* category */}
                <li class="list-group-item">performing-arts</li>
              </ul>
              <div class="card-body">
                {/* event_site_url */}
                <a
                  href="https://www.yelp.com/events/montr%C3%A9al-un-festival-num%C3%A9rique-pour-2020-quartiers-danses?adjust_creative=FLCeBBOLeDNad2so14w-WA&utm_campaign=yelp_api_v3&utm_medium=api_v3_event_search&utm_source=FLCeBBOLeDNad2so14w-WA"
                  class="card-link"
                >
                  SEE DETAILS
                </a>
                {/* is_free */}
                <a> ......Is it for Free? Yes! </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="card" style={{ width: "18rem" }}>
              {/* image_url */}
              <img
                src="https://s3-media2.fl.yelpcdn.com/ephoto/DfKo_HjdtLrHw3mqnMcYVg/o.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                {/* name */}
                <h5 class="card-title">
                  UN FESTIVAL NUMÉRIQUE POUR 2020 - Quartiers Danses
                </h5>
                {/* description */}
                <p class="card-text">
                  C'est officiel: le Festival Quartiers Danses (FQD) prendra
                  cette année un virage numérique pour sa 18ème édition, du 11
                  au 20 septembre 2020\nL'équipe du FQD...
                </p>
              </div>
              <ul class="list-group list-group-flush">
                {/* time_start*/}
                <li class="list-group-item">2020-09-11T00:00:00-04:00 </li>
                {/* location.city */}
                <li class="list-group-item">Montreal</li>
                {/* category */}
                <li class="list-group-item">performing-arts</li>
              </ul>
              <div class="card-body">
                {/* event_site_url */}
                <a
                  href="https://www.yelp.com/events/montr%C3%A9al-un-festival-num%C3%A9rique-pour-2020-quartiers-danses?adjust_creative=FLCeBBOLeDNad2so14w-WA&utm_campaign=yelp_api_v3&utm_medium=api_v3_event_search&utm_source=FLCeBBOLeDNad2so14w-WA"
                  class="card-link"
                >
                  SEE DETAILS
                </a>
                {/* is_free */}
                <a> ......Is it for Free? Yes! </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="card" style={{ width: "18rem" }}>
              {/* image_url */}
              <img
                src="https://s3-media2.fl.yelpcdn.com/ephoto/DfKo_HjdtLrHw3mqnMcYVg/o.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                {/* name */}
                <h5 class="card-title">
                  UN FESTIVAL NUMÉRIQUE POUR 2020 - Quartiers Danses
                </h5>
                {/* description */}
                <p class="card-text">
                  C'est officiel: le Festival Quartiers Danses (FQD) prendra
                  cette année un virage numérique pour sa 18ème édition, du 11
                  au 20 septembre 2020\nL'équipe du FQD...
                </p>
              </div>
              <ul class="list-group list-group-flush">
                {/* time_start*/}
                <li class="list-group-item">2020-09-11T00:00:00-04:00 </li>
                {/* location.city */}
                <li class="list-group-item">Montreal</li>
                {/* category */}
                <li class="list-group-item">performing-arts</li>
              </ul>
              <div class="card-body">
                {/* event_site_url */}
                <a
                  href="https://www.yelp.com/events/montr%C3%A9al-un-festival-num%C3%A9rique-pour-2020-quartiers-danses?adjust_creative=FLCeBBOLeDNad2so14w-WA&utm_campaign=yelp_api_v3&utm_medium=api_v3_event_search&utm_source=FLCeBBOLeDNad2so14w-WA"
                  class="card-link"
                >
                  SEE DETAILS
                </a>
                {/* is_free */}
                <a> ......Is it for Free? Yes! </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
