import React from "react";
import "./projectSection.css";
import nadlan from "./images/nadlan1.png";
import FastWay from "./images/fastway2.png";
import sad from "./images/sadgroup1.png";
import elec from "./images/elec1.png";
import sectionBackground from "../../Assets/img/project-section-background.svg";

export default function FavoriteProjects() {
  const hideSpinner = () => {
    document.querySelector("#main-spinner").style.opacity = "0";
    document.querySelector("#main-spinner").style.transform =
      "translateY(300%)";
  };
  return (
    <div className="cards-main-container">
      <img
        src={sectionBackground}
        className="project-section-bg-img"
        alt="bg"
      ></img>

      <section className="cards">
        {/* <h1 className="projects-heading">PROJECTS</h1> */}
        <div className="card">
          <div className="card-content">
            <img
              id="background-card-image"
              src={sad}
              onLoad={hideSpinner}
              alt=""
            />
            <h1>
              <a
                href="https://www.sadgroup.co.il/"
                target="_blank"
                rel="noopener noreferrer"
              >
                S.A.D Group LTD
              </a>
            </h1>
            <p>
              construction contractor company, designed using React front-end
              and built a python custom API responsible for saving user requests
              and sending emails notifying the company.
            </p>{" "}
            <div className="go-to-project-page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/projects/sadgroup"
              >
                Read more...
              </a>
            </div>
            <div className="card-technologies-used">
              <i className="fab fa-react"></i>
              <i className="fab fa-node-js"></i>
              <i className="fab fa-python"></i>
              <i className="fas fa-server"></i>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src={nadlan} alt="" />
            <h1>
              {" "}
              <a
                href="https://distracted-easley-4a639d.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nadlan
              </a>
            </h1>
            <p>
              {" "}
              real estate agency web application, developed for client-side use
              as well as an internal management system, admin page, and
              dashboard allows for creating new products and also displays the
              list of entries collected by the forms on every property page.
            </p>{" "}
            <div className="go-to-project-page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/projects/nadlan"
              >
                Read more...
              </a>
            </div>
            <div className="card-technologies-used">
              <i className="fab fa-react"></i>
              <i className="fab fa-node-js"></i>
              <i className="fab fa-python"></i>
              <i className="fas fa-server"></i>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img id="background-card-image" src={elec} alt="" />
            <h1>
              <a
                href="https://stupefied-mcnulty-a80dec.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Electrics
              </a>
            </h1>
            <p>
              {" "}
              eCommerce web application, client-side features include shopping
              cart with automatic save in local storage, client sign up, profile
              page, and order history page.
            </p>{" "}
            <div className="go-to-project-page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/projects/electrics"
              >
                Read more...
              </a>
            </div>
            <div className="card-technologies-used">
              <i className="fab fa-react"></i>
              <i className="fab fa-node-js"></i>
              <i className="fas fa-server"></i>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img id="background-card-image" src={FastWay} alt="" />
            <h1>
              <a
                href="https://keen-nightingale-4d0442.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FastWay
              </a>
            </h1>
            <p>
              delivery company website, single-page-application, using react
              router for rendering different screens. project include form
              sections, different design features, custom animated components,
              based on the original company website which was designed with
              wordpress.
            </p>{" "}
            <div className="go-to-project-page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/projects/fastway"
              >
                Read more...
              </a>
            </div>
            <div className="card-technologies-used">
              <i className="fab fa-react"></i>
              <i className="fab fa-node-js"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
