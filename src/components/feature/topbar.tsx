import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ADDRESS, PHONE_NUMBER } from "../../constants/constants";

const Topbar: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage); // Change language
    localStorage.setItem("language", selectedLanguage);
  };

  useEffect(() => {
    // Load the saved language from localStorage, default to 'hu'
    const savedLanguage = localStorage.getItem("language") || "hu";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <div
      className="container-fluid bg-light p-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>{ADDRESS}</small>
          </div>
          {/* <div className="h-100 d-inline-flex align-items-center py-3">
            <small className="far fa-clock text-primary me-2"></small>
            <small>{WORKING_HOURS}</small>
          </div> */}
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <select
              className="form-select border-0 form-select-sm"
              name="language"
              id="language"
              onChange={changeLanguage}
              value={i18n.language}
            >
              <option value="hu">HU</option>
              <option value="en">EN</option>
            </select>
          </div>
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>{PHONE_NUMBER}</small>
          </div>
          {/* <div className="h-100 d-inline-flex align-items-center"> */}
          {/* <a
              className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
              href="#"
            >
              <i className="fab fa-facebook-f"></i>
            </a> */}
          {/* <a
              className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-sm-square rounded-circle bg-white text-primary me-0"
              href="#"
            >
              <i className="fab fa-instagram"></i>
            </a> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
