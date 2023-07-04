import React from "react";
import "./Error.css";
import Footer from "../../components/footer/Footer";

const Error = () => {
  return (
    <>
      <div className="errorContent">
        <div className="errorDisplay">
          <h1 className="errorCode">404</h1>
          <h1 className="errorMessage">Page Not Found</h1>
          <h4 className="errorText">
            The page you are looking for does not exist or is temporarily
            unavailable
          </h4>
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Error;
