import React from "react";
import useEmailForm from "../../hooks/useEmail";
import Localize from "../ui/localize";
import { PHONE_NUMBER, EMAIL } from "../../constants/constants";
import Select from "../ui/select";
import {
  DENTAL_INTERVENTION,
  ORAL_HYGIENE_INTERVENTION,
} from "../../constants/lists";
import { useTranslation } from "react-i18next";

const Appointment: React.FC = () => {
  const { i18n } = useTranslation();
  const { handleChange, handleSubmit } = useEmailForm({
    form: "appointment",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dentalIntervention: "",
    oralHygieneIntervention: "",
    date: "",
    time: "",
    text: "",
  });

  const isCurrentLanguageEn = i18n.language === "en";

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
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder={
                        isCurrentLanguageEn ? "First Name" : "Keresztnév"
                      }
                      style={{ height: "55px" }}
                      name="firstName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder={
                        isCurrentLanguageEn ? "Last Name" : "Vezetéknév"
                      }
                      style={{ height: "55px" }}
                      name="lastName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder={
                        isCurrentLanguageEn
                          ? "Your Mobile"
                          : "Az Ön Telefonszáma"
                      }
                      style={{ height: "55px" }}
                      name="mobile"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder={
                        isCurrentLanguageEn ? "Your Email" : "Az Ön E-mail"
                      }
                      style={{ height: "55px" }}
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <Select
                      name="dentalIntervention"
                      handleChange={handleChange}
                      defaultOption={
                        isCurrentLanguageEn
                          ? "What dental intervention do you think you need?"
                          : "Milyen fogászati beavatkozásra van szüksége?"
                      }
                      options={DENTAL_INTERVENTION}
                    />
                  </div>
                  <div className="col-12">
                    <Select
                      name="oralHygieneIntervention"
                      handleChange={handleChange}
                      defaultOption={
                        isCurrentLanguageEn
                          ? "What oral hygiene intervention do you think you need?"
                          : "Milyen szájhigiéniai beavatkozásra van szüksége?"
                      }
                      options={ORAL_HYGIENE_INTERVENTION}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="date"
                        className="form-control border-0 datetimepicker-input"
                        placeholder={
                          isCurrentLanguageEn
                            ? "Choose Date"
                            : "Válasszon Dátumot"
                        }
                        data-target="_dates"
                        style={{ height: "55px" }}
                        name="date"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="time"
                        className="form-control border-0 datetimepicker-input"
                        placeholder={
                          isCurrentLanguageEn
                            ? "Choose Time"
                            : "Válasszon Időpontot"
                        }
                        data-target="use24Hours"
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
                      placeholder={
                        isCurrentLanguageEn
                          ? "Describe your problem"
                          : "Írja le problémáját"
                      }
                      name="text"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      <Localize text="a30" isFirstLetterCapital={true} />
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
