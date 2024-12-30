import React from "react";
import { Link } from "react-router-dom";
import Localize from "../ui/localize";
import { ServiceType, CategorizedServiceType } from "../../constants/services";

const Service: React.FC<CategorizedServiceType> = ({ services, category }) => {
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
          <h1>
            <Localize text={category.title} isFirstLetterCapital={true} />
          </h1>
        </div>
        <div className="row g-4 justify-content-center align-items-center d-flex align-items-stretch">
          {services.map((service: ServiceType, index: number) => (
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
                <h4 className="mb-3">
                  <Localize text={service.title} isFirstLetterCapital={true} />
                </h4>
                <p className="mb-4">
                  <Localize text={service.description} />
                </p>
                <Link
                  className="btn"
                  to={`/service/${category.route}/${service.route}`}
                >
                  <i className="fa fa-plus text-primary me-3"></i>
                  <Localize text="a11" isFirstLetterCapital={true} />
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
