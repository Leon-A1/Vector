import React from "react";
import think_drawing from "../../Assets/img/code_thinking.svg";
import TypeAnimation from "../TypeAnimation/main";
import "./about-section.css";

function MainContent() {
  return (
    <>
      <div id="about-anchor" className="element"></div>
      <div className="landing-page-main-div">
        <div className="column1">
          <TypeAnimation />
        </div>

        <div className="column2" data-aos="fade-left">
          <img
            alt="profile"
            className="about-section-img"
            src={think_drawing}
          />
        </div>
      </div>
    </>
  );
}
export default MainContent;
