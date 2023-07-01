import React from "react";
import "./Timeline.css";
import Footer from "../../components/footer/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
