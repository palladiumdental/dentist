import React from "react";
import { Link } from "react-router-dom";
import { MAIN_ROUTE } from "../constants/constants";

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
              Address
            </h5>
            <p className="mb-2" style={{ textAlign: "left" }}>
              <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York,
              USA
            </p>
            <p className="mb-2" style={{ textAlign: "left" }}>
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p className="mb-2" style={{ textAlign: "left" }}>
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
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
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4" style={{ textAlign: "left" }}>
              Services
            </h5>
            <Link className="btn btn-link" to="">
              Cardiology
            </Link>
            <Link className="btn btn-link" to="">
              Pulmonary
            </Link>
            <Link className="btn btn-link" to="">
              Neurology
            </Link>
            <Link className="btn btn-link" to="">
              Orthopedics
            </Link>
            <Link className="btn btn-link" to="">
              Laboratory
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4" style={{ textAlign: "left" }}>
              Quick Links
            </h5>
            <Link className="btn btn-link" to={`${MAIN_ROUTE}/about`}>
              About Us
            </Link>
            <Link className="btn btn-link" to={`${MAIN_ROUTE}/contact`}>
              Contact Us
            </Link>
            <Link className="btn btn-link" to={`${MAIN_ROUTE}/service`}>
              Our Services
            </Link>
            <Link className="btn btn-link" to="">
              Terms & Condition
            </Link>
            <Link className="btn btn-link" to="">
              Support
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
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
