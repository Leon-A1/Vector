import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import pricing_img from "../pricing-options.svg";
import header_img from "../header-img.svg";

export default function WebDevOptions({ hideSpinner }) {
  useEffect(() => {
    hideSpinner();
  });
  return (
    <div>
      <div className="page-header">
        <img src={header_img} alt=""></img>

        <div className="small-page-navigation">
          <p>React Plans</p>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <a href="/">home</a>
        </div>
        <h4>Pricing Options</h4>
      </div>
      <div className="web-dev-page-content">
        <img src={pricing_img} alt="img"></img>

        <div className="page-content-header">
          <h3>Pricing Options</h3>
        </div>
        <div className="two-options-buttons-links">
          <button style={{ backgroundColor: "#e2443f" }}>Basic</button>
          <button style={{ backgroundColor: "#999999" }}>
            <Link to="/plans/ecommerce">Ecommerce</Link>{" "}
          </button>
        </div>
        <div className="three-options-web-dev-image">
          <div className="red">
            <header>
              <div>
                <p className="pre-plan">Custom web application</p>
                <h3>Vector React GOLD</h3>

                <hr></hr>
              </div>
              <p>
                Rich UI/UX front-end design, easy to use, update and maintain.
                Fully customized package, project management, personal
                consultation, step-by-step process to deployment.
              </p>
              <div className="price">
                <h2>$9,800</h2>
              </div>
            </header>

            <div className="included-services">
              <p>step-by-step consultation and support process</p>
              <p>custom design per client requirements</p>
              <p>home and inner page template sketch-3 adjustment rounds</p>
              <p>home page sheader image</p>
              <p>inner template header image</p>
              <p>
                content imports, up to 25 additional pages(client must provide
                digital format content)
              </p>
              <p>image gallery / videos</p>
              <p>linking to social media option</p>
              <p>contact forms</p>
              <p>feature meta tag / SEO</p>
              <p>5 GB storage</p>
              <p>30 GB load volume</p>
              <p>domain registration, full deployment</p>
              <p>annual domain https registration</p>
              <p>35 days delivery</p>
              <p>1 hour - zoom/video consultation</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="purple">
            <header>
              <div>
                <p className="pre-plan">Web Application</p>
                <h3>Vector React PRO</h3>

                <hr></hr>
              </div>
              <p>
                UI/UX front-end template design, easy to use, update and
                maintain.
              </p>
              <div className="price">
                <h2>$4,100</h2>
              </div>
            </header>
            <div className="included-services">
              <p style={{ color: "gray", textDecoration: "line-through" }}>
                step-by-step consultation and support process
              </p>
              <p>multiple design selections</p>
              <p>inner page template sketch-1 adjustment rounds</p>
              <p>home page sheader image</p>
              <p>inner template header image</p>
              <p>
                content imports, up to 15 additional pages(client must provide
                digital format content)
              </p>
              <p>image gallery / videos</p>
              <p>linking to social media option</p>
              <p>contact forms</p>
              <p>feature meta tag / SEO</p>
              <p>5 GB storage</p>
              <p>30 GB load volume</p>
              <p>domain registration, full deployment</p>
              <p>annual domain https registration</p>
              <p>15 days delivery</p>
              <p>1 hour - zoom/video consultation</p>

              <button to="/">Order Now</button>
            </div>
          </div>
          <div className="green">
            <header>
              <div>
                <p className="pre-plan">Web Appliction</p>
                <h3>Vector React EXPRESS</h3>
                <hr></hr>
              </div>
              <div className="description">
                <p>
                  UI/UX front-end template design, easy to use, update and
                  maintain.
                </p>
              </div>
              <div className="price">
                <h2>$2,180</h2>
              </div>
            </header>

            <div className="included-services">
              <p style={{ color: "gray", textDecoration: "line-through" }}>
                step-by-step consultation and support process
              </p>
              <p>multiple design selections</p>
              <p style={{ color: "gray", textDecoration: "line-through" }}>
                inner page template sketch-1 adjustment rounds
              </p>
              <p>home page sheader image</p>
              <p>inner template header image</p>
              <p>
                content imports, up to 5 additional pages(client must provide
                digital format content)
              </p>
              <p>image gallery / videos</p>
              <p>linking to social media option</p>
              <p>contact forms</p>
              <p>feature meta tag / SEO</p>
              <p>5 GB storage</p>
              <p>30 GB load volume</p>
              <p>domain registration, full deployment</p>
              <p>annual domain https registration</p>
              <p>10 days delivery</p>
              <p>1 hour - zoom/video consultation</p>

              <button to="/">Order Now</button>
            </div>
          </div>
        </div>
        <div className="call-now-container">
          <h2>
            Get in touch, get free consultation, no strings attached
            <i
              class="fas fa-phone-square"
              style={{
                fontSize: "2rem",
                color: "var(--color-main)",
                marginLeft: 5,
              }}
            ></i>
          </h2>
        </div>
        <h6 style={{ marginTop: 20, color: "var(--color-main)" }}>
          * tax not included.
        </h6>
        <h6 style={{ color: "red", marginBottom: 20 }}>
          * additional maintanance fees might apply.
        </h6>
      </div>
    </div>
  );
}
