import React, { useEffect } from "react";
import header_img from "./about-img.svg";
import "./styles.css";

const About = ({ hideSpinner }) => {
  useEffect(() => {
    hideSpinner();
  });
  return (
    <div className="additional-page-container">
      <header>
        <img src={header_img} alt="header-img"></img>
        <h1>About</h1>
      </header>
      <section>
        <h4>Our React application development competencies</h4>
        <p>
          To deliver products of the highest quality, we follow Extreme
          Programming best practices that include code review, pair programming,
          test-driven development, continuous integration, and automated
          testing. See what you get with us:
        </p>
        <div className="flex-box-get-with-us">
          <div className="gwu-col">
            <h3>Fast development</h3>
            <p>
              React, with its powerful composition model, allows us to reuse
              code for our applications. We create diverse and reusable
              components and assemble existing ones in various combinations.
              This strategy reduces software development time, making it faster
              and more affordable to release a web application.
            </p>
          </div>
          <div className="gwu-col">
            <h3>Custom React libraries and UI components</h3>
            <p>
              We make the most of React’s component-based structure and reuse
              components where possible. From buttons, checkboxes, and dropdown
              menus to libraries and root components, we build React libraries
              and UI components for faster development and easier codebase
              maintenance.
            </p>
          </div>
          <div className="gwu-col">
            <h3>360-degree and VR experiences using React</h3>
            <p>
              Using React 360, a framework for building 3D and VR user
              interfaces, we create 360-degree videos and virtual reality
              experiences for multiple platforms. Whether you’re offering a
              360-degree tour for a travel app or a spherical photo viewer for a
              photographer community, we can help you create immersive
              experiences for your users.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
