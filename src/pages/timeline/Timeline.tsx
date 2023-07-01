import React from "react";
import "./Timeline.css";
import Footer from "../../components/footer/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import pic1 from "../../images/2023.png";

const Timeline = () => {
  const timelineElements = [
    {
      id: 1,
      title: "2023",
      description: "placeholder",
      image: "placeholder",
      icon: pic1,
    },
    {
      id: 2,
      title: "2022",
      description: "placeholder",
      image: "placeholder",
      icon: pic1,
    },
    {
      id: 3,
      title: "2021",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 4,
      title: "2020",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 5,
      title: "2019",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 6,
      title: "2018",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 7,
      title: "2017",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 8,
      title: "2016",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 9,
      title: "2015",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 10,
      title: "2014",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 11,
      title: "2013",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 12,
      title: "2012",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 13,
      title: "2011",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 14,
      title: "2010",
      description: "placeholder",
      image: "placeholder",
      icon: "placeholder",
    },
    {
      id: 15,
      title: "2009",
      description: "placeholder",
      image: "placeholder",
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
