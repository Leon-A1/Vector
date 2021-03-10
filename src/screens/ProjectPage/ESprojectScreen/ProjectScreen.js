import React from "react";
import "../styles.css";
import elec2 from "./images/elec2.png";
import elec3 from "./images/elec3.png";
import elec4 from "./images/elec4.png";
import elec1 from "./images/elec1.png";

const ProjectScreen = ({ showImageModal, closeImageModal }) => {
  return (
    <div className="project-screen-container">
      <div className="project-screen-card-container">
        <div className="project-screen-content-col">
          <a
            href="https://stupefied-mcnulty-a80dec.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>Electrics</h1>
          </a>
          <p>
            eCommerce web application, client-side features include shopping
            cart with automatic save in local storage, client sign up, profile
            page, and order history page. the admin dashboard allows for product
            management as well as client order and profile management. the admin
            order list will update as soon as an order has been submitted. the
            admin is able to approve the order payment as well as the order
            delivery status, which will update on the client order history page.
            <br />
            <br />
            * for admin dashboard add /admin in address bar.
            <br />
            <br />* admin login details: admin@example.com 1234 <br /> <br />*
            user login details: user@example.com 1234
          </p>
          <div className="project-screen-technologies-used">
            <i className="fab fa-react"></i>
            <i className="fas fa-server"></i>
            <i className="fab fa-node-js"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
          </div>
          <div className="project-screen-social-buttons">
            <div className="project-screen-github-button">
              <i className="fab fa-github"></i>
              <a href="https://github.com/Leon-A1/electrics">Code</a>
            </div>
            <div className="project-screen-live-demo-button">
              <a
                href="https://stupefied-mcnulty-a80dec.netlify.app/"
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
              <img src={elec1} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal()}
              ></i>
            </div>
            <img src={elec1} onClick={() => showImageModal()} alt="elec"></img>
            <div id="image-modal-container2" className="image-modal-container">
              <img src={elec2} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("2")}
              ></i>
            </div>
            <img
              src={elec2}
              onClick={() => showImageModal("2")}
              alt="elec"
            ></img>
            <div id="image-modal-container3" className="image-modal-container">
              <img src={elec3} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("3")}
              ></i>
            </div>
            <img
              src={elec3}
              onClick={() => showImageModal("3")}
              alt="elec"
            ></img>
            <div id="image-modal-container4" className="image-modal-container">
              <img src={elec4} alt="elec"></img>
              <i
                className="far fa-times-circle"
                id="close-modal-button"
                onClick={() => closeImageModal("4")}
              ></i>
            </div>
            <img
              src={elec4}
              onClick={() => {
                showImageModal("4");
              }}
              alt="elec"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
