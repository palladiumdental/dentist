import React from "react";
import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";
import testimonial3 from "../assets/testimonial-3.jpg";

const Testimonial: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            Testimonial
          </p>
          <h1>What Say Our Patients!</h1>
        </div>
        <div
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="testimonial-item text-center">
            <img
              className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
              src={testimonial1}
              style={{ width: "100px", height: "100px" }}
              alt="Testimonial 1"
            />
            <div className="testimonial-text rounded text-center p-4">
              <p>
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                clita erat magna elitr erat sit sit erat at rebum justo sea
                clita.
              </p>
              <h5 className="mb-1">Patient Name</h5>
              <span className="fst-italic">Profession</span>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img
              className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
              src={testimonial2}
              style={{ width: "100px", height: "100px" }}
              alt="Testimonial 2"
            />
            <div className="testimonial-text rounded text-center p-4">
              <p>
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                clita erat magna elitr erat sit sit erat at rebum justo sea
                clita.
              </p>
              <h5 className="mb-1">Patient Name</h5>
              <span className="fst-italic">Profession</span>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img
              className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
              src={testimonial3}
              style={{ width: "100px", height: "100px" }}
              alt="Testimonial 3"
            />
            <div className="testimonial-text rounded text-center p-4">
              <p>
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                clita erat magna elitr erat sit sit erat at rebum justo sea
                clita.
              </p>
              <h5 className="mb-1">Patient Name</h5>
              <span className="fst-italic">Profession</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
