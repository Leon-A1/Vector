import React from "react";
import "../styles.css";
import fastway2 from "./images/fastway2.png";
import fastway3 from "./images/fastway3.png";
import fastway4 from "./images/fastway4.png";
import fastway5 from "./images/fastway5.png";

const ProjectScreen = ({ showImageModal, closeImageModal }) => {
  const hideSpinner = () => {
    document.querySelector("#main-spinner").style.opacity = "0";
    document.querySelector("#main-spinner").style.transform =
      "translateY(300%)";
  };
  return (
    <div className="project-screen-container">
      <div className="project-screen-card-container">
        <div className="project-screen-content-col">
          <a
            href="https://keen-nightingale-4d0442.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>FastWay</h1>
          </a>
          <p>
            delivery company website, single-page-application, using react
            router for rendering different screens. project include form
            sections, different design features, custom animated components,
            based on the original company website which was designed with
            wordpress.
          </p>
          <div className="project-screen-technologies-used">
            <i className="fab fa-react"></i>
            <i className="fab fa-node-js"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
          </div>
          <div className="project-screen-social-buttons">
            <div className="project-screen-github-button">
              <i className="fab fa-github"></i>
              <a href="https://github.com/Leon-A1/FastWay">Code</a>
            </div>
            <div className="project-screen-live-demo-button">
              <a
                href="https://keen-nightingale-4d0442.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="project-screen-images-col">
          <h1>Images</h1>
          <div className="project-screen-images-grid">
            <div id="image-modal-container1" className="image-modal-container">
              <img src={fastway2} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal()}
                onLoad={hideSpinner()}
              ></i>
            </div>
            <img
              src={fastway2}
              alt="fastway"
              onClick={() => showImageModal()}
            ></img>
            <div id="image-modal-container3" className="image-modal-container">
              <img src={fastway3} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("3")}
              ></i>
            </div>
            <img
              src={fastway3}
              alt="fastway"
              onClick={() => showImageModal("3")}
            ></img>
            <div id="image-modal-container4" className="image-modal-container">
              <img src={fastway4} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("4")}
              ></i>
            </div>
            <img
              src={fastway4}
              alt="fastway"
              onClick={() => showImageModal("4")}
            ></img>
            <div id="image-modal-container5" className="image-modal-container">
              <img src={fastway5} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("5")}
              ></i>
            </div>
            <img
              src={fastway5}
              alt="fastway"
              onClick={() => showImageModal("5")}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
