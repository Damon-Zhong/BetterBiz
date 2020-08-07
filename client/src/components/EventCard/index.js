import React from "react";
import moment from "moment";
import "./EventCard.css";

const EventCard = (props) => {
  return (
    <div className="col-md-4 mt-5 cardEach">
      <div className="card h-100">
        {/* image_url */}
        <img
          src={
            props.image_url
              ? props.image_url
              : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg%27%7D"
          }
          style={{ height: "40vh", objectFit: "cover" }}
          className="card-img-top"
          alt={props.id}
        />
        <div className="card-body">
          {/* name */}
          <h5 className="card-title">{props.name}</h5>
          {/* description */}
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          {/* time_start*/}
          <li className="list-group-item">
            {moment(props.time_start).format("LL")}
          </li>
          {/* location.city */}
          <li className="list-group-item">
            {props.location.address1
              ? props.location.address1
              : props.location.city}
          </li>
          {/* category */}
          <li className="list-group-item">{props.category}</li>
          {/* Free */}
          <li className="list-group-item">
            {props.isFree ? (
              "This event is free"
            ) : props.tickets_url === "" || props.tickets_url === null ? (
              "Tickets Not Available"
            ) : (
              <a href={props.tickets_url} target="_blank">
                Tickets available here
              </a>
            )}
          </li>
        </ul>
        <div className="card-body">
          {/* event_site_url */}
          <a href={props.event_site_url} target="_blank" className="card-link">
            See details
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
