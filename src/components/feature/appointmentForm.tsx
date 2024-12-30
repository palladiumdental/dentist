import React from "react";
import useEmailForm from "../../hooks/useEmail";
import Localize from "../ui/localize";
import Select from "../ui/select";
import {
  DENTAL_INTERVENTION,
  ORAL_HYGIENE_INTERVENTION,
} from "../../constants/lists";
import { useTranslation } from "react-i18next";
import { AppointmentTemplateType } from "../../emailTemplates/appointmentTemplate";

const AppointmentForm: React.FC = () => {
  const { i18n } = useTranslation();
  const { emailData, handleChange, handleSubmit } = useEmailForm({
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
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-12 col-sm-6">
          <input
            type="text"
            className="form-control border-0"
            placeholder={isCurrentLanguageEn ? "First Name" : "Keresztnév"}
            style={{ height: "55px" }}
            name="firstName"
            value={(emailData as AppointmentTemplateType).firstName}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-sm-6">
          <input
            type="text"
            className="form-control border-0"
            placeholder={isCurrentLanguageEn ? "Last Name" : "Vezetéknév"}
            style={{ height: "55px" }}
            name="lastName"
            value={(emailData as AppointmentTemplateType).lastName}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-sm-6">
          <input
            type="text"
            className="form-control border-0"
            placeholder={
              isCurrentLanguageEn ? "Your Mobile" : "Az Ön Telefonszáma"
            }
            style={{ height: "55px" }}
            name="mobile"
            value={(emailData as AppointmentTemplateType).mobile}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-sm-6">
          <input
            type="email"
            className="form-control border-0"
            placeholder={isCurrentLanguageEn ? "Your Email" : "Az Ön E-mail"}
            style={{ height: "55px" }}
            name="email"
            value={(emailData as AppointmentTemplateType).email}
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
            value={(emailData as AppointmentTemplateType).dentalIntervention}
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
            value={
              (emailData as AppointmentTemplateType).oralHygieneIntervention
            }
          />
        </div>
        <div className="col-12 col-sm-6">
          <div className="date" id="date" data-target-input="nearest">
            <input
              type="date"
              className="form-control border-0 datetimepicker-input"
              placeholder={
                isCurrentLanguageEn ? "Choose Date" : "Válasszon Dátumot"
              }
              data-target="_dates"
              style={{ height: "55px" }}
              name="date"
              value={(emailData as AppointmentTemplateType).date}
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
                isCurrentLanguageEn ? "Choose Time" : "Válasszon Időpontot"
              }
              data-target="use24Hours"
              style={{ height: "55px" }}
              name="time"
              value={(emailData as AppointmentTemplateType).time}
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
            value={(emailData as AppointmentTemplateType).text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100 py-3" type="submit">
            <Localize text="a30" isFirstLetterCapital={true} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default AppointmentForm;
