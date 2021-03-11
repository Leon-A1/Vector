import React from "react";
import "../styles.css";
import nadlan1 from "./images/nadlan1.png";
import nadlan2 from "./images/nadlan2.png";
import nadlan3 from "./images/nadlan3.png";
import nadlan4 from "./images/nadlan4.png";

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
            href="https://distracted-easley-4a639d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>Nadlan</h1>
          </a>
          <p>
            real estate agency web application, developed for client-side use as
            well as an internal management system, admin page, and dashboard
            allows for creating new products and also displays the list of
            entries collected by the forms on every property page. property
            pages created dynamically and include up to 4 images for each asset
            upload, images are saved in MongoDB grid fs using python backend
            API. additional features: quick property search property image
            uploads admin dashboard
            <br />
            <br />
            * for admin dashboard add /admin in adress bar
            <br />* admin demo password a123
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
              <a href="https://github.com/Leon-A1/nadlan">Code</a>
            </div>
            <div className="project-screen-live-demo-button">
              <a
                href="https://distracted-easley-4a639d.netlify.app/"
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
              <img src={nadlan1} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("1")}
                onLoad={hideSpinner()}
              ></i>
            </div>
            <img
              src={nadlan1}
              alt="nadlan"
              onClick={() => showImageModal("1")}
            ></img>
            <div id="image-modal-container2" className="image-modal-container">
              <img src={nadlan2} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("2")}
              ></i>
            </div>
            <img
              src={nadlan2}
              alt="nadlan"
              onClick={() => showImageModal("2")}
            ></img>
            <div id="image-modal-container3" className="image-modal-container">
              <img src={nadlan3} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("3")}
              ></i>
            </div>
            <img
              src={nadlan3}
              alt="nadlan"
              onClick={() => showImageModal("3")}
            ></img>
            <div id="image-modal-container4" className="image-modal-container">
              <img src={nadlan4} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("4")}
              ></i>
            </div>
            <img
              src={nadlan4}
              alt="nadlan"
              onClick={() => showImageModal("4")}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
