import React from "react";
import "../styles.css";
import sadgroup1 from "./images/sadgroup1.png";
import sadgroup2 from "./images/sadgroup2.png";
import sadgroup3 from "./images/sadgroup3.png";
import sadgroup4 from "./images/sadgroup4.png";

const ProjectScreen = ({ showImageModal, closeImageModal }) => {
  return (
    <div className="project-screen-container">
      <div className="project-screen-card-container">
        <div className="project-screen-content-col">
          <a
            href="https://sadgroup.co.il/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>S.A.D Group LTD</h1>
          </a>
          <p>
            construction contractor company, designed using React front-end and
            built a python custom API responsible for saving user requests and
            sending emails notifying the company.
          </p>
          <div className="project-screen-technologies-used">
            <i className="fab fa-react"></i>
            <i className="fab fa-node-js"></i>
            <i className="fab fa-python"></i>
            <i className="fas fa-flask"></i>
            <i className="fas fa-server"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
          </div>
          <div className="project-screen-social-buttons">
            <div className="project-screen-github-button">
              <i className="fab fa-github"></i>
              <a href="https://github.com/Leon-A1/DanielDanilovSAD">Code</a>
            </div>
            <div className="project-screen-live-demo-button">
              <a
                href="https://sadgroup.co.il/"
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
              <img src={sadgroup1} alt="sadgroup"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("1")}
              ></i>
            </div>
            <img
              src={sadgroup1}
              alt="sadgroup"
              onClick={() => showImageModal("1")}
            ></img>
            <div id="image-modal-container2" className="image-modal-container">
              <img src={sadgroup2} alt="sadgroup"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("2")}
              ></i>
            </div>
            <img
              src={sadgroup2}
              alt="sadgroup"
              onClick={() => showImageModal("2")}
            ></img>
            <div id="image-modal-container3" className="image-modal-container">
              <img src={sadgroup3} alt="sadgroup"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("3")}
              ></i>
            </div>
            <img
              src={sadgroup3}
              alt="sadgroup"
              onClick={() => showImageModal("3")}
            ></img>
            <div id="image-modal-container4" className="image-modal-container">
              <img src={sadgroup4} alt="sadgroup"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("4")}
              ></i>
            </div>
            <img
              src={sadgroup4}
              alt="sadgroup"
              onClick={() => showImageModal("4")}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
