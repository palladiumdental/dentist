import React from "react";
import { Link } from "react-router-dom";
import Localize from "./localize";
import { SERVICES, ServiceType } from "../constants/services";
import { MAIN_ROUTE } from "../constants/constants";

const Service: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            <Localize text="services" isFirstLetterCapital={true} />
          </p>
          <h1>Health Care Solutions</h1>
        </div>
        <div className="row g-4 justify-content-center align-items-center">
          {SERVICES.map((service: ServiceType, index: number) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i className={`fa ${service.icon} text-primary fs-4`}></i>
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p className="mb-4">{service.description}</p>
                <Link className="btn" to={`${MAIN_ROUTE}/${service.title}`}>
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
