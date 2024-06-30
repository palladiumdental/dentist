import React, { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  return (
    <>
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default BackToTop;
