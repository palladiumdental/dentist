import React from "react";
import Localize from "../ui/localize";
import { ADDRESS, PHONE_NUMBER, EMAIL } from "../../constants/constants";
import ContactForm from "./contactForm";

type BlueBoxProps = {
  title: React.ReactNode;
  content: string;
  icon: string;
};
const BlueBox: React.FC<BlueBoxProps> = ({ title, content, icon }) => {
  return (
    <div className="col-lg-4">
      <div className="h-100 bg-light rounded d-flex align-items-center p-5">
        <div
          className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
          style={{ width: "45px", height: "45px" }}
        >
          <i className={`fa text-primary ${icon}`}></i>
        </div>
        <div className="ms-4 justify-content-start text-start">
          <p className="mb-2">{title}</p>
          <h6 style={{ wordBreak: "break-all" }} className="mb-0">
            {content}
          </h6>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <BlueBox
            title={<Localize text="address" isFirstLetterCapital={true} />}
            content={ADDRESS}
            icon="fa-map-marker-alt"
          />
          <BlueBox
            title={<Localize text="a14" isFirstLetterCapital={true} />}
            content={PHONE_NUMBER}
            icon="fa-phone-alt"
          />
          <BlueBox
            title={<Localize text="a15" isFirstLetterCapital={true} />}
            content={EMAIL}
            icon="fa-envelope-open"
          />
          <div
            className="col-lg-6 wow fadeIn justify-content-start text-start"
            data-wow-delay="0.1s"
          >
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.4268151826377!2d19.282169079345703!3d47.6567043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741cd39da2c0893%3A0x10c2932af8b07448!2sVeresegyh%C3%A1z%20Dental%20Fog%C3%A1szat!5e0!3m2!1sen!2sde!4v1735680720876!5m2!1sen!2sde"
                allowFullScreen
                loading="lazy"
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
