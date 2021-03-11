import React from "react";
import "./styles.css";

const ReasonsSection = () => {
  return (
    <div className="react-reasons-section">
      {/* <p>
        As early adopters of React, we’ve already developed diverse reusable
        React components, full-scale web applications, and React Native mobile
        apps. Using our best in-house resources, we deliver the following
        services:
      </p> */}
      <div className="reasons-section-flex-box">
        <div>
          <h3>React web app development</h3>
          <p>
            With several years of experience as a React development agency, we
            can say that React is the best way to develop big and fast web apps
            with JavaScript. React allows for creating interactive UIs, smoothly
            updating components, developing new features without rewriting
            existing code, and efficiently dealing with SEO thanks to
            server-side rendering. Besides, React has an active global community
            behind it.
          </p>
        </div>
        <div>
          <h3>SPA development</h3>
          <p>
            We develop single-page applications (SPAs) using React for several
            reasons. First, React guarantees flawless performance due to its
            virtual representation of the DOM: when a user interacts with an
            app, the operations are run against the virtual DOM and then
            rendered on the visible page. The second reason is easy testing, and
            the third is support for server-side rendering.
          </p>
        </div>
        <div>
          <h3>Migration to React</h3>
          <p>
            To meet your business needs, we ensure smooth migration from any
            JavaScript platform to React. Unlike other frameworks, React
            combines flexibility, the capability to pass rich data through an
            app, and a powerful composition model. It doesn’t require numerous
            additional tools. Besides, we won’t have to investigate the rest of
            your technology stack and rewrite existing code — React allows us to
            avoid this.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReasonsSection;
