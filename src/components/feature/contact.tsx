import React from "react";
import Localize from "../ui/localize";
import useEmailForm from "../../hooks/useEmail";
import { ADDRESS, PHONE_NUMBER, EMAIL } from "../../constants/constants";
import { useTranslation } from "react-i18next";
import ContactForm from "./contactForm";

const Contact: React.FC = () => {
  const { i18n } = useTranslation();
  const { handleChange, handleSubmit } = useEmailForm({
    form: "contact",
    subject: "",
    text: "",
    name: "",
    email: "",
  });

  const isCurrentLanguageEn = i18n.language === "en";

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="h-100 bg-light rounded d-flex align-items-center p-5">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                style={{ width: "55px", height: "55px" }}
              >
                <i className="fa fa-map-marker-alt text-primary"></i>
              </div>
              <div className="ms-4">
                <p className="mb-2">
                  <Localize text="address" isFirstLetterCapital={true} />
                </p>
                <h5 className="mb-0">{ADDRESS}</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="h-100 bg-light rounded d-flex align-items-center p-5">
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
          </div>
          <div className="col-lg-4">
            <div className="h-100 bg-light rounded d-flex align-items-center p-5">
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
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="bg-light rounded p-5">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                <Localize text="contact us" isFirstLetterCapital={true} />
              </p>
              <h1 className="mb-4">
                <Localize text="a12" isFirstLetterCapital={true} />
              </h1>
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100" style={{ minHeight: "400px" }}>
              <iframe
                title="Google Map"
                className="rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
