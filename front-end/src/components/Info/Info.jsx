import React from "react";
import "./Info.css";
import { videoIcon, studentIcon, bgElement2 } from "../../assets/index";

const Info = () => {
  return (
    <section id="info" className="bg-light-black">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} />
            <div className="ammount">23,000+</div>
            <div className="type">Students</div>
          </div>
          <div className="info-content">
            <img src={videoIcon} />
            <div className="ammount">26Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>

        <img src={bgElement2} className="bg-element-2" alt="" />
      </div>
    </section>
  );
};

export default Info;
