import React from "react";
import "./About.css";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <div className="aboutContent">
        <h1 className="pageTitle">About Shaila</h1>
        <img src="#" alt="image loading error"></img>
        <p className="aboutText">
          Shaila Verma is a trained Bharatnatyam dancer and has been dancing
          since the age of five. She is the artistic director of the Shaila
          School Of Dance, which she founded in 2009 to provide training in
          Indian Bollywood and Folk style dance forms to students in the Metro
          West Area of Massachusetts. She has adapted the dance forms for the
          next generation of dancers through her innovation and experimentation
          in Bollywood mixed with Folk, Punjabi, Filmy, and International dance
          forms.
        </p>
        <p className="aboutText">
          Shaila fervently challenges her students to greater heights to capture
          dance with a strong spirit. Her first priority is to discover and
          inspire their creative dance talent and build their confidence, as
          well as a strong foundation for their dance education. Not only does
          she teach her students dance forms, but she also teaches them
          self-discipline, confidence and respect for the art of dance.
        </p>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default About;
