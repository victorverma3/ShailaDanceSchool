import React from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="homeContent">
        <h1 className="homeTitle">Shaila School of Dance</h1>
        <div className="homeContact">
          <h1 className="contactSubtitle">Contact Shaila</h1>
          <p>Phone: 508-308-6605</p>
          <p>
            <a href="mailto:shaila@shailadanceschool.com">
              shaila@shailadanceschool.com
            </a>
          </p>
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Home;
