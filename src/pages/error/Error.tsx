import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-content">
      <div className="error-display">
        <h1 className="error-code">404</h1>
        <h1 className="error-message">Page Not Found</h1>
        <h4 className="error-text">
          The page you are looking for does not exist or is temporarily
          unavailable
        </h4>
      </div>
    </div>
  );
};

export default Error;
