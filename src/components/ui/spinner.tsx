import React from "react";

type SpinnerProps = {
  show: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div
      className="spinner-container d-flex align-items-center justify-content-center"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
        zIndex: 10,
      }}
    >
      <div
        className="spinner-grow text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
