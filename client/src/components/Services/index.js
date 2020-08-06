import React from "react"
import { Link } from 'react-router-dom'

export default () => {
  const categories = [ 'Restaurant', 'Shop', 'Service', 'Leisure', 'Culture', 'Other' ]

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
          {categories.map((category, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-5 mb-lg-0" >
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-screen-smartphone">&#127793;</i>
                </span>
                <Link to={`/businesses/${category.toLowerCase()}`}>{category}</Link>
                {/* <h3 className="text-secondary mb-0">{caption}</h3> */}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
