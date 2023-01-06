import React from "react";
import { Spinner as BootstrapSpinner } from "react-bootstrap";

const Spinner = () => {
  const spinnerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
  };

  return (
    <BootstrapSpinner animation="border" role="status" style={spinnerStyle}>
      <span className="sr-only">Loading...</span>
    </BootstrapSpinner>
  );
};

export default Spinner;
