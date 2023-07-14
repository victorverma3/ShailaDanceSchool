import React from "react";
import "./Home.css";
import facebook from "../../images/facebook.png";
import stars from "../../images/stars.png";

const Home = () => {
  const homeTestimonials = [
    {
      rating: 5,
      review:
        "Shaila is a wonderful dance teacher, even for someone with no previous knowledge of Indian dancing. I enjoyed the class a lot. She is demanding, rigorous, firm, and very friendly at the same time. Her classes are a warm, supporting environment. Great experience.",
    },
    {
      rating: 5,
      review:
        "Shaila is classically trained and very passionate dancer. Shaila is a great teacher and strives for perfection. I joined Shaila's bollywood dance lessons 4 years back and I love it. She is a amazing choreographer with an eye for details. Beautiful and graceful dancer and human being.",
    },
    {
      rating: 5,
      review:
        "Shaila Verma is a great dancer and most importantly, has a great teaching style. I enjoy the lessons in the studio as well as the group performances (BTW, I NEVER danced until the age of 55+, and now love to dance thanks to Shaila's encouragement and motivation).",
    },
    {
      rating: 5,
      review:
        "Shaila is an excellent dancer and an amazing teacher. I had the pleasure of being one of her first students when she opened the school and I still consider myself to be one of her student after many years, and hope to be one for many more to come.",
    },
  ];
  return (
    <div className="home-content">
      <h1 className="home-title">Shaila School of Dance</h1>
      <h3 className="tagline">Specializing in Bollywood dance since 2009</h3>
      <br></br>
      <div className="home-images">
        <img className="home-pic" src="#" alt="image loading error"></img>
        <img className="home-pic" src="#" alt="image loading error"></img>
        <img className="home-pic" src="#" alt="image loading error"></img>
      </div>
      <br></br>
      <a className="testimonial-link" href="/testimonials">
        <h3 className="home-subtitle">Testimonials</h3>
      </a>
      <div className="home-testimonials">
        {homeTestimonials.map((element) => {
          return (
            <>
              <div className="home-testimonial-element">
                <img
                  className="home-stars"
                  src={stars}
                  alt="image loading error"
                ></img>
                <p className="home-quote">{element.review}</p>
              </div>{" "}
            </>
          );
        })}
      </div>
      <br></br>
      <div className="home-info">
        <div className="home-info-item" id="home-location">
          <h1 className="home-info-subtitle">Westborough</h1>
          <address className="home-info-text">74 Otis St</address>
          <address className="home-info-text">Westborough, MA 01581</address>
        </div>
        <div className="home-info-item" id="home-contact">
          <h1 className="home-info-subtitle">Join Today!</h1>
          <address className="home-info-text">508-308-6605</address>
          <address className="home-info-text">
            <a href="mailto:shaila@shailadanceschool.com">
              shaila@shailadanceschool.com
            </a>
          </address>
        </div>
      </div>
      <a href="https://www.facebook.com/ShailaDanceSchool/" target="_blank">
        <img
          className="facebook-logo"
          src={facebook}
          alt="image loading error"
        ></img>
      </a>
    </div>
  );
};

export default Home;
