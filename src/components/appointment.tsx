import React from "react";
import useEmailForm from "../hooks/useEmail";
import Localize from "./localize";
import { PHONE_NUMBER, EMAIL } from "../constants/constants";

const Appointment: React.FC = () => {
  const { handleChange, handleSubmit } = useEmailForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      dentalIntervention: "",
      oralHygieneIntervention: "",
      date: "",
      time: "",
      text: "",
    },
    "appointment"
  );

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="d-inline-block border rounded-pill py-1 px-4 mb-4">
              <Localize text="appointment" isFirstLetterCapital={true} />
            </p>
            <h1 className="mb-4">Make An Appointment To Visit Our Doctor</h1>
            <p className="mb-5">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="bg-light rounded d-flex align-items-center p-5 mb-5">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                style={{ width: "55px", height: "55px" }}
              >
                <i className="fa fa-phone-alt text-primary"></i>
              </div>
              <div className="ms-4">
                <p className="mb-2">Call Us Now</p>
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
                <p className="mb-2">Mail Us Now</p>
                <h5 className="mb-0">{EMAIL}</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="bg-light rounded h-100 d-flex align-items-center p-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="First Name"
                      style={{ height: "55px" }}
                      name="firstName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Last Name"
                      style={{ height: "55px" }}
                      name="lastName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Mobile"
                      style={{ height: "55px" }}
                      name="mobile"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <select
                      className="form-select border-0"
                      style={{ height: "55px" }}
                      name="dentalIntervention"
                      onChange={handleChange}
                    >
                      <option defaultValue="1">
                        What dental intervention do you think you need?
                      </option>
                      <option value="1">Doctor 1</option>
                      <option value="2">Doctor 2</option>
                      <option value="3">Doctor 3</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <select
                      className="form-select border-0"
                      style={{ height: "55px" }}
                      name="oralHygieneIntervention"
                      onChange={handleChange}
                    >
                      <option defaultValue="1">
                        What oral hygiene intervention do you think you need?
                      </option>
                      <option value="1">Doctor 1</option>
                      <option value="2">Doctor 2</option>
                      <option value="3">Doctor 3</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Choose Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        style={{ height: "55px" }}
                        name="date"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Choose Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        style={{ height: "55px" }}
                        name="time"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      rows={5}
                      placeholder="Describe your problem"
                      name="text"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
