import React, { useEffect } from "react";
import LandingPage from "./screens/LandingPage/Landing";
import "./Assets/css/mainAppStyles.css";
import Aos from "aos";
import "./Assets/css/aos.css";
import { Switch, Route } from "react-router-dom";
import ProjectScreenFW from "./screens/ProjectPage/FWprojectScreen/ProjectScreen";
import ProjectScreenSG from "./screens/ProjectPage/SGprojectScreen/ProjectScreen";
import ProjectScreenNG from "./screens/ProjectPage/NGprojectScreen/ProjectScreen";
import ProjectScreenES from "./screens/ProjectPage/ESprojectScreen/ProjectScreen";

import AboutPage from "./screens/AboutPage/About";
import ContactPage from "./screens/ContactPage/Contact";
import WorksPage from "./screens/PreviousWorksPage/PreviousWorks";
import Navbar from "./Components/Navbar/DesktopNavBar";

import EcomPricingPage from "./screens/Pricing/Ecommerce/EcommercePlansPage";
import BasicPricingPage from "./screens/Pricing/Authority/BasicPlansPage";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
    setTimeout(() => {
      console.log("app loaded");
    }, 800);
  }, []);

  const showImageModal = (id = "1") => {
    document.getElementById(`image-modal-container${id}`).style.display =
      "inline-block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const closeImageModal = (id = "1") => {
    document.getElementById(`image-modal-container${id}`).style.display =
      "none";
  };
  const hideSpinner = () => {
    document.querySelector("#main-spinner").style.opacity = "0";
    document.querySelector("#main-spinner").style.transform =
      "translateY(300%)";
  };
  return (
    <>
      <Navbar />
      <div id="app-wrapper">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/about">
            <AboutPage hideSpinner={hideSpinner} />
          </Route>
          <Route path="/contact">
            <ContactPage hideSpinner={hideSpinner} />
          </Route>
          <Route path="/previous-works">
            <WorksPage hideSpinner={hideSpinner} />
          </Route>
          <Route path="/plans/ecommerce">
            <EcomPricingPage hideSpinner={hideSpinner} />
          </Route>
          <Route path="/plans/basic">
            <BasicPricingPage hideSpinner={hideSpinner} />
          </Route>
          <Route path="/projects/fastway">
            <ProjectScreenFW
              showImageModal={showImageModal}
              closeImageModal={closeImageModal}
            />
          </Route>
          <Route path="/projects/sadgroup">
            <ProjectScreenSG
              showImageModal={showImageModal}
              closeImageModal={closeImageModal}
            />
          </Route>
          <Route path="/projects/nadlan">
            <ProjectScreenNG
              showImageModal={showImageModal}
              closeImageModal={closeImageModal}
            />
          </Route>
          <Route path="/projects/electrics">
            <ProjectScreenES
              showImageModal={showImageModal}
              closeImageModal={closeImageModal}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
