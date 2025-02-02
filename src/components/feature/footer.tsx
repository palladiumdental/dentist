import React from "react";
import { Link } from "react-router-dom";
import Localize from "../ui/localize";
import { ADDRESS, PHONE_NUMBER, EMAIL } from "../../constants/constants";
import { CATEGORY } from "../../constants/services";
import LanguageSelector from "../ui/languageSelector";

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
            <p
              className="mb-2"
              style={{
                textAlign: "left",
                paddingTop: "15px",
                borderTop: "1px solid #444",
              }}
            >
              <LanguageSelector />
            </p>
            {/* <div className="d-flex pt-2"> */}
            {/* <a
                className="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i className="fab fa-twitter"></i>
              </a> */}
            {/* <a
                className="btn btn-outline-light btn-social rounded-circle"
                href=""
              >
                <i className="fab fa-facebook-f"></i>
              </a> */}
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
            {/* </div> */}
          </div>
          {/* <div className="col-lg-3 col-md-6">
            <LanguageSelector />
          </div> */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4" style={{ textAlign: "left" }}>
              <Localize text="services" isFirstLetterCapital={true} />
            </h5>
            {CATEGORY.map((category, index) => (
              <Link
                key={`index-${category.route}`}
                className="btn btn-link"
                to={`/service/${category.route}`}
              >
                <Localize text={category.title} isFirstLetterCapital={true} />
              </Link>
            ))}
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4" style={{ textAlign: "left" }}>
              <Localize text="quick links" isFirstLetterCapital={true} />
            </h5>
            <Link className="btn btn-link" to="/service">
              <Localize text="services" isFirstLetterCapital={true} />
            </Link>
            <Link className="btn btn-link" to="/price">
              <Localize text="prices" isFirstLetterCapital={true} />
            </Link>
            <Link className="btn btn-link" to="/promotion">
              <Localize text="promotions" isFirstLetterCapital={true} />
            </Link>
            <Link className="btn btn-link" to="/about">
              <Localize text="about Us" isFirstLetterCapital={true} />
            </Link>
            <Link className="btn btn-link" to="/contact">
              <Localize text="contact us" isFirstLetterCapital={true} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
              &copy; {/* <a className="border-bottom" href="#"> */}
              2025 Palladium Dent
              {/* </a> */}, All Right Reserved.
            </div>
            <div className="col-md-4 text-center text-md-center mb-3 mb-md-0">
              Site created by{" "}
              <a className="border-bottom" href="#">
                <b>BS</b>
              </a>
            </div>
            <div className="col-md-4 text-center text-md-end">
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
