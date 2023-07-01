import React from "react";
import "./Timeline.css";
import Footer from "../../components/footer/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import year1 from "../../images/2009.png";
import year2 from "../../images/2010.png";
import year3 from "../../images/2011.png";
import year4 from "../../images/2012.png";
import year5 from "../../images/2013.png";
import year6 from "../../images/2014.png";
import year7 from "../../images/2015.png";
import year8 from "../../images/2016.png";
import year9 from "../../images/2017.png";
import year10 from "../../images/2018.png";
import year11 from "../../images/2019.png";
import year12 from "../../images/2020.png";
import year13 from "../../images/2021.png";
import year14 from "../../images/2022.png";
import year15 from "../../images/2023.png";

const Timeline = () => {
  const timelineElements = [
    {
      id: 1,
      title: "2023",
      description: "placeholder",
      image: "placeholder",
      icon: year15,
    },
    {
      id: 2,
      title: "2022",
      description: "placeholder",
      image: "placeholder",
      icon: year14,
    },
    {
      id: 3,
      title: "2021",
      description: "placeholder",
      image: "placeholder",
      icon: year13,
    },
    {
      id: 4,
      title: "2020",
      description: "placeholder",
      image: "placeholder",
      icon: year12,
    },
    {
      id: 5,
      title: "2019",
      description: "placeholder",
      image: "placeholder",
      icon: year11,
    },
    {
      id: 6,
      title: "2018",
      description: "placeholder",
      image: "placeholder",
      icon: year10,
    },
    {
      id: 7,
      title: "2017",
      description: "placeholder",
      image: "placeholder",
      icon: year9,
    },
    {
      id: 8,
      title: "2016",
      description: "placeholder",
      image: "placeholder",
      icon: year8,
    },
    {
      id: 9,
      title: "2015",
      description: "placeholder",
      image: "placeholder",
      icon: year7,
    },
    {
      id: 10,
      title: "2014",
      description: "placeholder",
      image: "placeholder",
      icon: year6,
    },
    {
      id: 11,
      title: "2013",
      description: "placeholder",
      image: "placeholder",
      icon: year5,
    },
    {
      id: 12,
      title: "2012",
      description: "placeholder",
      image: "placeholder",
      icon: year4,
    },
    {
      id: 13,
      title: "2011",
      description: "placeholder",
      image: "placeholder",
      icon: year3,
    },
    {
      id: 14,
      title: "2010",
      description: "placeholder",
      image: "placeholder",
      icon: year2,
    },
    {
      id: 15,
      title: "2009",
      description: "placeholder",
      image: year1,
    },
  ];
  return (
    <>
      <div className="timelineContent">
        <h1 className="pageTitle">Timeline</h1>
        <VerticalTimeline className="timelineComponent">
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.id}
                className="timelineElement"
                iconStyle={{
                  backgroundImage: `url(${element.icon})`,
                  backgroundSize: "cover",
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <img src={element.image} alt="image loading error"></img>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Timeline;
