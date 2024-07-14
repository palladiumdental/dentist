import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h1 className="m-0 text-primary">
          <i className="far fa-hospital me-3"></i>Klinik
        </h1>
      </Link>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About us
          </Link>
          <Link to="/service" className="nav-item nav-link">
            Service
          </Link>
          <Link to="/feature" className="nav-item nav-link">
            Feature
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <Link
          to="/appointment"
          className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >
          Appointment<i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
