import React from "react";
import "./Timeline.css";
import Footer from "../../components/footer/Footer";

const Timeline = () => {
  const TLelements = [
    {
      id: 1,
      year: "2023",
      description: "placeholder",
      image: "placeholder",
    },
    {
      id: 2,
      year: "2022",
      description: "placeholder",
      image: "placeholder",
    },
    {
      id: 3,
      year: "2021",
      description: "placeholder",
      image: "placeholder",
    },
  ];
  return (
    <>
      <div className="timelineContent">
        <h1 className="pageTitle">Timeline</h1>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Timeline;
