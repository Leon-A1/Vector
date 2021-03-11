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
      </div>
      <div className="web-dev-page-content">
        <img src={pricing_img} alt="img"></img>
        <div className="page-content-header" style={{ width: "100%" }}>
          <h3>Ecommerce Pricing Options</h3>
        </div>
        <div className="two-options-buttons-links">
          <button style={{ backgroundColor: "#e2443f" }}>
            <Link to="/plans/basic">Basic</Link>{" "}
          </button>
          <button style={{ backgroundColor: "#999999" }}>Ecommerce </button>
        </div>
        <div className="three-options-web-dev-image">
          <div className="purple">
            <header>
              <div>
                <p className="pre-plan">Custom ecommerce application</p>
                <h3>GOLD Shop</h3>

                <hr></hr>
              </div>
              <p>
                Rich UI/UX front-end design, easy to use, update and maintain.
                Fully customized package, project management, personal
                consultation, step-by-step process to deployment.
              </p>
              <div className="price">
                <h2>$10,800</h2>
              </div>
            </header>
            <div className="included-services">
              <strong>
                <p>project management and walkthrough</p>
              </strong>
              <p>custom design per client requirements</p>
              <p>home and inner page template sketch - 8 adjustment rounds</p>
              <p>home page sheader image</p>
              <p>inner template header image</p>
              <p>
                content imports, up to 25 additional pages(client must provide
                digital format content)
              </p>
              <p>image gallery / videos</p>
              <p>linking to social media option</p>
              <p>contact forms</p>
              <p>meta tag / SEO features </p>
              <p>5 GB storage</p>
              <p>30 GB load volume</p>
              <p>domain registration, full deployment</p>
              <strong>
                <p>annual domain https registration</p>
              </strong>
              <p>35 days delivery</p>
              <strong>
                {" "}
                <p>Paypal integration</p>
              </strong>
              <p>1 hour - zoom/video consultation</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="green">
            <header>
              <div>
                <p className="pre-plan">ecommerce application</p>
                <h3>Shop PRO</h3>

                <hr></hr>
              </div>
              <p>
                UI/UX front-end template design, easy to use, update and
                maintain.
              </p>
              <div className="price">
                <h2>$5,100</h2>
              </div>
            </header>

            <div className="included-services">
              <strong>
                <p style={{ color: "gray", textDecoration: "line-through" }}>
                  project management and walkthrough
                </p>
              </strong>
              <p style={{ color: "gray", textDecoration: "line-through" }}>
                custom design per client requirements
              </p>
              <p>home and inner page template sketch - 2 adjustment rounds</p>
              <p>home page sheader image</p>
              <p>inner template header image</p>
              <p>
                content imports, up to 25 additional pages(client must provide
                digital format content)
              </p>
              <p>image gallery / videos</p>
              <p>linking to social media option</p>
              <p>contact forms</p>
              <p>meta tag / SEO features </p>
              <p>5 GB storage</p>
              <p>30 GB load volume</p>
              <p>domain registration, full deployment</p>
              <strong>
                <p>annual domain https registration</p>
              </strong>
              <p>35 days delivery</p>
              <strong>
                {" "}
                <p>Paypal integration</p>
              </strong>
              <p>1 hour - zoom/video consultation</p>
              <button>Order Now</button>
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
