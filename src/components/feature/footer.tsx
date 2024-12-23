import React from "react";
import { Link } from "react-router-dom";
import { MAIN_ROUTE } from "../../constants/website";
import Localize from "../ui/localize";
import { ADDRESS, PHONE_NUMBER, EMAIL } from "../../constants/constants";
import { CATEGORY } from "../../constants/services";

const Footer: React.FC = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4" style={{ textAlign: "left" }}>
              <Localize text="address" isFirstLetterCapital={true} />
            </h5>
            <p className="mb-2" style={{ textAlign: "left" }}>
              <i className="fa fa-map-marker-alt me-3"></i>
              {ADDRESS}
            </p>
            <p className="mb-2" style={{ textAlign: "left" }}>
              <i className="fa fa-phone-alt me-3"></i>
              {PHONE_NUMBER}
            </p>
            <p className="mb-2" style={{ textAlign: "left" }}>
              <i className="fa fa-envelope me-3"></i>
              {EMAIL}
            </p>
            <div className="d-flex pt-2">
              {/* <a
                className="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i className="fab fa-twitter"></i>
              </a> */}
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a
                className="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i className="fab fa-linkedin-in"></i>
              </a> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4" style={{ textAlign: "left" }}>
              <Localize text="services" isFirstLetterCapital={true} />
            </h5>
            {CATEGORY.map((category, index) => (
              <Link
                className="btn btn-link"
                to={`${MAIN_ROUTE}/service/${category.route}`}
              >
                <Localize text={category.title} isFirstLetterCapital={true} />
              </Link>
            ))}
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4" style={{ textAlign: "left" }}>
              Quick Links
            </h5>
            <Link className="btn btn-link" to={`${MAIN_ROUTE}/service`}>
              <Localize text="services" isFirstLetterCapital={true} />
            </Link>
            <Link className="btn btn-link" to={`${MAIN_ROUTE}/price`}>
              <Localize text="prices" isFirstLetterCapital={true} />
            </Link>
            <Link className="btn btn-link" to={`${MAIN_ROUTE}/promotion`}>
              <Localize text="promotions" isFirstLetterCapital={true} />
            </Link>
            <Link className="btn btn-link" to={`${MAIN_ROUTE}/about`}>
              <Localize text="about Us" isFirstLetterCapital={true} />
            </Link>
            <Link className="btn btn-link" to={`${MAIN_ROUTE}/contact`}>
              <Localize text="contact us" isFirstLetterCapital={true} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              {/* &copy;{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved. */}
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
