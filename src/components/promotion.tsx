import React from "react";
import promotion from "../assets/feature.jpg";
import Localize from "./localize";

const Promotion: React.FC = () => {
  return (
    <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
      <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div
            className="col-lg-6 feature-text py-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="p-lg-5 ps-lg-0">
              <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                <Localize text="promotions" isFirstLetterCapital={true} />
              </p>
              <h1 className="text-white mb-4">Why Choose Us</h1>
              <p className="text-white mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet
              </p>
              <div className="row g-4">
                {[
                  { icon: "fa-user-md", title: "Doctors", text: "Experience" },
                  { icon: "fa-check", title: "Services", text: "Quality" },
                  {
                    icon: "fa-comment-medical",
                    title: "Consultation",
                    text: "Positive",
                  },
                  { icon: "fa-headphones", title: "Support", text: "24 Hours" },
                ].map((promotion, index) => (
                  <div className="col-6" key={index}>
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i className={`fa ${promotion.icon} text-primary`}></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">{promotion.text}</p>
                        <h5 className="text-white mb-0">{promotion.title}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 pe-lg-0 wow fadeIn"
            data-wow-delay="0.5s"
            style={{ minHeight: "400px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src={promotion}
                style={{ objectFit: "cover" }}
                alt="Promotion"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
