import React from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="homeContent">
        <header className="homeTitle">Shaila School of Dance</header>
        <p>Specializing in Bollywood dance since 2009</p>
        <div className="homeInfo">
          <div className="homeInfoItem" id="homeLocation">
            <h1 className="homeInfoSubtitle">Westborough</h1>
            <p className="homeInfoText">74 Otis St</p>
            <p className="homeInfoText">Westborough, MA 01581</p>
          </div>
          <div className="homeInfoItem" id="homeContact">
            <h1 className="homeInfoSubtitle">Join Today!</h1>
            <address className="homeInfoText">508-308-6605</address>
            <address className="homeInfoText">
              <a href="mailto:shaila@shailadanceschool.com">
                shaila@shailadanceschool.com
              </a>
            </address>
          </div>
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Home;
