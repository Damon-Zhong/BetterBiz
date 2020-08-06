import React from "react";
import "./Submit.css";

const Submit = () => {
  return (
    <section className="callout">
      <div className="container text-center">
        <h2 className="mx-auto mb-5">
          {" "}
          Own a business? Submit your Business and help grow our community!
        </h2>
        <a className="btn btn-primary btn-xl box" href="/submitbusiness">
          Submit
        </a>
      </div>
    </section>
  );
};

export default Submit;
