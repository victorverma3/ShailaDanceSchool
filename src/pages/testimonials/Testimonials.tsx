import React from "react";
import "./testimonials.css";
import Footer from "../../components/footer/Footer";
import stars from "../../images/stars.png";
import Reveal from "../../components/Reveal/Reveal";

const testimonials = () => {
  const testimonialElements = [
    {
      rating: 5,
      review:
        '"Shaila is a wonderful dance teacher, even for someone with no previous knowledge of Indian dancing. I enjoyed the class a lot. She is demanding, rigorous, firm, and very friendly at the same time. Her classes are a warm, supporting environment. Great experience."',
    },
    {
      rating: 5,
      review:
        '"Shaila is classically trained and very passionate dancer. Shaila is a great teacher and strives for perfection. I joined Shaila\'s bollywood dance lessons 4 years back and I love it. She is a amazing choreographer with an eye for details. Beautiful and graceful dancer and human being."',
    },
    {
      rating: 5,
      review:
        '"Shaila Verma is a great dancer and most importantly, has a great teaching style. I enjoy the lessons in the studio as well as the group performances (BTW, I NEVER danced until the age of 55+, and now love to dance thanks to Shaila\'s encouragement and motivation)."',
    },
    {
      rating: 5,
      review:
        '"Shaila is an excellent dancer and an amazing teacher. I had the pleasure of being one of her first students when she opened the school and I still consider myself to be one of her student after many years, and hope to be one for many more to come."',
    },
    {
      rating: 5,
      review:
        "\"I had my first experience of Bollywood dancing with Shaila. She's an amazing teacher and of course a great dancer. She breaks down the dance steps and simplifies it so well that anyone can learn the steps and perform. I've thoroughly enjoyed taking dance lessons with Shaila and making great friendships in the process.\"",
    },
    {
      rating: 5,
      review:
        '"Shaila is a wonderful dancer and dance-teacher. She pays individual attention to each person and teaches according to their strengths. She is very patient and a perfectionist. She will try different methods to teach a step until you get it right!"',
    },
    {
      rating: 5,
      review:
        '"I was looking for a dance class to learn newer steps on the latest tracks. I am so happy I found Shaila\'s School of Dance. Shaila is such a good dancer and teacher - she breaks down the steps so well and explains them in a way that is easy for us to understand and learn. I am enjoying the virtual classes very much and am very satisfied with them."',
    },
    {
      rating: 5,
      review:
        '"I have thoroughly enjoyed Shaila\'s classes, in person and virtual, amazing dancer and a great teacher. She is very passionate about dancing, teaching (esp those of us who were 55 plus when we started) and continues to motivate us. Her choreography, teaching style including breakdown of steps is excellent and makes dancing enjoyable without getting intimidated. Thanks Shaila, keep it coming !!"',
    },
    {
      rating: 5,
      review:
        '"Awesome place to learn dance. My daughter has been learning dance at Shaila school of dance since 2015, she has become more confident in her moves and personality. Dancing at shaila\'s has always been fun."',
    },
    {
      rating: 5,
      review:
        "\"Love Shailas dance class! Been [going] there for the past 4 years. It's a great class to learn [bollywood] dance and also get an excellent workout! She's organized and easy to work with.\"",
    },
    {
      rating: 5,
      review:
        '"Shaila is an awesome dance teacher as well as beautiful dancer! I [have] the pleasure of learning from her for many years and absolutely enjoyed it!"',
    },
    {
      rating: 5,
      review:
        '"Shaila is absolutely a wonderful dancer and an awesome dance instructor. Her choreography is mesmerizing. Her Dance classes are so fun."',
    },
    {
      rating: 5,
      review:
        '"[Shaila] is very professional and amazing dancer. Enjoyed her classes very much."',
    },
  ];
  return (
    <>
      <div className="testimonialContent">
        <h1 className="pageTitle">Testimonials</h1>
        <div className="testimonials">
          {testimonialElements.map((element) => {
            return (
              <Reveal>
                <div className="testimonialElement">
                  <img
                    className="testimonialStars"
                    src={stars}
                    alt="image loading error"
                  ></img>
                  <p className="testimonialQuote">{element.review}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default testimonials;
