import React from "react";
import { Link } from "react-router-dom";

const BackToTop: React.FC = () => {
  return (
    <>
      <Link
        to="/"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
};

export default BackToTop;
