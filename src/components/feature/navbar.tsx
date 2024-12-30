import React from "react";
import { Link } from "react-router-dom";
import CustomNavLink from "../ui/customNavLink";
import Localize from "../ui/localize";
import { CATEGORY, SERVICES } from "../../constants/services";

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
          <i className="far fa-hospital me-3"></i>Palladium Dent
        </h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <CustomNavLink redirectTo="/">
            <Localize text="home" />
          </CustomNavLink>
          <CustomNavLink
            redirectTo="/service"
            dropdownItems={CATEGORY}
            subDropdownItems={SERVICES}
          >
            <Localize text="services" />
          </CustomNavLink>
          <CustomNavLink redirectTo="/price">
            <Localize text="prices" />
          </CustomNavLink>
          <CustomNavLink redirectTo="/promotion">
            <Localize text="promotions" />
          </CustomNavLink>
          <CustomNavLink redirectTo="/about">
            <Localize text="about us" />
          </CustomNavLink>
          <CustomNavLink redirectTo="/contact">
            <Localize text="contact us" />
          </CustomNavLink>
          <Link
            to="/appointment"
            className="btn btn-primary rounded-0 py-4 px-lg-5"
          >
            <Localize text="appointment" isFirstLetterCapital={true} />
            <i className="fa fa-arrow-right ms-3"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
