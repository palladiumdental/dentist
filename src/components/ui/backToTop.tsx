import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to="#"
      style={{ alignContent: "center" }}
      className={`btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top ${
        isVisible ? "d-block" : "d-none"
      }`}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up"></i>
    </Link>
  );
};

export default BackToTop;
