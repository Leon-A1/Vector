import React from "react";
import "./desktop-navbar.css";
import { Link } from "react-router-dom";

export default function DesktopNavBar() {
  const expandNavbar = () => {
    console.log("creating navbar");
    document.querySelector("#main-navigation").style.transform =
      "translateX(0)";
    document.querySelector("#main-navigation").style.height = "100vh";
    document.querySelector("#app-wrapper").style.transform = "translateX(300%)";
    document.querySelector("#nav-open-btn").style.display = "none";
    document.querySelector("#root").style.overflow = "hidden";
    window.scrollTo(0, 0);
  };
  const hideNavbar = () => {
    console.log("hiding navbar");
    document.querySelector("#main-navigation").style.transform =
      "translateX(-100%)";
    document.querySelector("#app-wrapper").style.transform = "translateX(0%)";
    document.querySelector("#main-navigation").style.height = 0;
    document.querySelector("#nav-open-btn").style.display = "block";
  };

  return (
    <nav className="main-landing-navigation">
      <button
        className="open-side-nav-button"
        id="nav-open-btn"
        onClick={expandNavbar}
      >
        <i className="fas fa-bars"></i>
      </button>
      <aside id="main-navigation">
        <button
          className="close-side-nav-button"
          id="nav-close-btn"
          onClick={hideNavbar}
        >
          <i className="fas fa-times"></i>
        </button>
        <ul>
          <li>
            <a onClick={hideNavbar} href="/">
              Home
            </a>
          </li>
          <li>
            <Link onClick={hideNavbar} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={hideNavbar} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={hideNavbar} to="/plans/basic">
              Plans
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
}
