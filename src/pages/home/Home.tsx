import React from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";
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
        "Shaila is an excellent dancer and an amazing teacher. I had the pleasure of being one of her first students when she opened the school and I still consider myself to be one of her student after many years, and hope to be one for many more to come.",
    },
    {
      rating: 5,
      review:
        "Shaila Verma is a great dancer and most importantly, has a great teaching style. I enjoy the lessons in the studio as well as the group performances (BTW, I NEVER danced until the age of 55+, and now love to dance thanks to Shaila's encouragement and motivation).",
    },
  ];
  return (
    <>
      <div className="homeContent">
        <h1 className="homeTitle">Shaila School of Dance</h1>
        <h3 className="tagline">Specializing in Bollywood dance since 2009</h3>
        <br></br>
        <div className="homeImages">
          <img className="homePic" src="#" alt="image loading error"></img>
          <img className="homePic" src="#" alt="image loading error"></img>
          <img className="homePic" src="#" alt="image loading error"></img>
        </div>
        <br></br>
        <a className="testimonialLink" href="/testimonials">
          <h3 className="homeSubtitle">Testimonials</h3>
        </a>
        <div className="homeTestimonials">
          {homeTestimonials.map((element) => {
            return (
              <>
                <div className="homeTestimonialElement">
                  <img
                    className="homeStars"
                    src={stars}
                    alt="image loading error"
                  ></img>
                  <p className="homeQuote">{element.review}</p>
                </div>{" "}
              </>
            );
          })}
        </div>
        <br></br>
        <div className="homeInfo">
          <div className="homeInfoItem" id="homeLocation">
            <h1 className="homeInfoSubtitle">Westborough</h1>
            <address className="homeInfoText">74 Otis St</address>
            <address className="homeInfoText">Westborough, MA 01581</address>
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
        <a href="https://www.facebook.com/ShailaDanceSchool/" target="_blank">
          <img
            className="facebookLogo"
            src={facebook}
            alt="image loading error"
          ></img>
        </a>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Home;
