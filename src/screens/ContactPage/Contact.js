import React, { useEffect } from "react";
import header_img from "./contact-img.svg";
import "./styles.css";

const Contact = ({ hideSpinner }) => {
  useEffect(() => {
    hideSpinner();
  });
  return (
    <div className="additional-page-container">
      <header>
        <img src={header_img} alt="header-img"></img>
        <h1>Contact</h1>
      </header>
      <section>
        <h4>Ongoing support</h4>
        <p>
          Are you looking for a team to upgrade your React app? Or do you need
          extensive maintenance, support, and react JS consulting services? We
          can help you in either case — we provide affordable maintenance, so
          you can count on ongoing support, enhancements, upgrades, and
          technical improvements to your product. All our clients with whom
          we’ve built React apps receive support services after the first
          release.
        </p>
        <form>
          <h1>Get In Touch</h1>
          <br></br>
          <br></br>
          <div className="input-field">
            <input type="text" id="name" required />
            <label htmlFor="name">Your name:</label>
          </div>
          <div className="input-field">
            <input type="text" id="email" required />
            <label htmlFor="email">Your email:</label>
          </div>
          <br></br>
          <br></br>
          <div className="input-field">
            <textarea type="text" rows="4" id="msg" required />
            <label htmlFor="msg">Your msg:</label>
          </div>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <br></br>
          <button>Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
