import React from "react";
import { Link } from "react-router-dom";
import CustomNavLink from "./customNavLink";
import { MAIN_ROUTE } from "../constants/constants";

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <Link
        to={MAIN_ROUTE}
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h1 className="m-0 text-primary">
          <i className="far fa-hospital me-3"></i>Klinik
        </h1>
      </Link>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <CustomNavLink redirectTo={MAIN_ROUTE}>Home</CustomNavLink>
          <CustomNavLink redirectTo={`${MAIN_ROUTE}/service`}>
            Services
          </CustomNavLink>
          <CustomNavLink redirectTo={`${MAIN_ROUTE}/price`}>
            Prices
          </CustomNavLink>
          <CustomNavLink redirectTo={`${MAIN_ROUTE}/promotion`}>
            Promotions
          </CustomNavLink>
          <CustomNavLink redirectTo={`${MAIN_ROUTE}/about`}>
            About us
          </CustomNavLink>
          <CustomNavLink redirectTo={`${MAIN_ROUTE}/contact`}>
            Contact
          </CustomNavLink>
        </div>
        <Link
          to={`${MAIN_ROUTE}/appointment`}
          className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >
          Appointment<i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
