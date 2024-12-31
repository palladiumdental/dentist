import React from "react";
import { Link } from "react-router-dom";
import Localize from "../ui/localize";

const Error: React.FC = () => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-danger"></i>
            <h1 className="mb-4">
              <Localize text="unexpected error" isFirstLetterCapital={true} />
            </h1>
            <p className="mb-4">
              <Localize text="a34" />
            </p>
            <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">
              <Localize text="go back to home" isFirstLetterCapital={true} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
