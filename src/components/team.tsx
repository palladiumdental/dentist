import React from "react";

interface Doctor {
  name: string;
  department: string;
  imgSrc: string;
  social: { facebook: string; twitter: string; instagram: string };
}

const doctors: Doctor[] = [
  {
    name: "Doctor Name",
    department: "Department",
    imgSrc: "img/team-1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Doctor Name",
    department: "Department",
    imgSrc: "img/team-2.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Doctor Name",
    department: "Department",
    imgSrc: "img/team-3.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Doctor Name",
    department: "Department",
    imgSrc: "img/team-4.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const Team: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            Doctors
          </p>
          <h1>Our Experience Doctors</h1>
        </div>
        <div className="row g-4">
          {doctors.map((doctor, index) => (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 * (index + 1)}s`}
              key={index}
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src={doctor.imgSrc}
                    alt={doctor.name}
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>{doctor.name}</h5>
                  <p className="text-primary">{doctor.department}</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href={doctor.social.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href={doctor.social.twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square"
                      href={doctor.social.instagram}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
