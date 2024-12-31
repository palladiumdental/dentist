import React from "react";
import Localize from "../ui/localize";
import { PHONE_NUMBER, EMAIL } from "../../constants/constants";
import AppointmentForm from "./appointmentForm";

const Appointment: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="d-inline-block border rounded-pill py-1 px-4 mb-4">
              <Localize text="appointment" isFirstLetterCapital={true} />
            </p>
            <h1 className="mb-4">
              <Localize text="a29" isFirstLetterCapital={true} />
            </h1>
            <div className="bg-light rounded d-flex align-items-center p-5 mb-5">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                style={{ width: "55px", height: "55px" }}
              >
                <i className="fa fa-phone-alt text-primary"></i>
              </div>
              <div className="ms-4">
                <p className="mb-2">
                  <Localize text="a14" isFirstLetterCapital={true} />
                </p>
                <h5 className="mb-0">{PHONE_NUMBER}</h5>
              </div>
            </div>
            <div className="bg-light rounded d-flex align-items-center p-5">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                style={{ width: "55px", height: "55px" }}
              >
                <i className="fa fa-envelope-open text-primary"></i>
              </div>
              <div className="ms-4">
                <p className="mb-2">
                  <Localize text="a15" isFirstLetterCapital={true} />
                </p>
                <h5 className="mb-0">{EMAIL}</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="bg-light rounded h-100 d-flex align-items-center p-5">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
