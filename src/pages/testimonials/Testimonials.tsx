import React from "react";
import "./testimonials.css";
import Footer from "../../components/footer/Footer";

const testimonials = () => {
  const testimonialText = [
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
        "Shaila is an excellent dancer and an amazing teacher.I had the pleasure of being one of her first students when she opened the school and I still consider myself to be one of her student after many years, and hope to be one for many more to come.",
    },
    {
      rating: 5,
      review:
        "Shaila Verma is a great dancer and most importantly, has a great teaching style. I enjoy the lessons in the studio as well as the group performances (BTW, I NEVER danced until the age of 55+, and now love to dance thanks to Shaila's encouragement and motivation).",
    },
  ];
  return (
    <>
      <div className="testimonialContent">
        <h1 className="pageTitle">Testimonials</h1>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default testimonials;
