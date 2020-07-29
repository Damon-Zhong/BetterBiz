import React from "react";

export default ({ servicesLinks }) => {
  return (
    <section
      className="content-section bg-primary text-white text-center"
      id="services"
    >
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Business</h3>
          <h2 className="mb-5">Categories</h2>
        </div>
        <div className="row">
          {servicesLinks &&
            servicesLinks.map(({ title, caption }, index) => (
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-screen-smartphone"></i>
                </span>
                <h4>{title}</h4>
                <p className="text-faded mb-0">{caption}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
