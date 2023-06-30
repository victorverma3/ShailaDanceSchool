import React from "react";
import "./Contact.css";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="contactContent">
        <h1 className="contactSubtitle">Contact Shaila</h1>
        <p>Phone: 508-308-6605</p>
        <p>
          <a href="mailto:shaila@shailadanceschool.com">
            shaila@shailadanceschool.com
          </a>
        </p>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
