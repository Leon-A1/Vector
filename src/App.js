import React, { useEffect, useState } from "react";
import LandingPage from "./screens/LandingPage/Landing";
import "./Assets/css/mainAppStyles.css";
import Aos from "aos";
import "./Assets/css/aos.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectScreenFW from "./screens/ProjectPage/FWprojectScreen/ProjectScreen";
import ProjectScreenSG from "./screens/ProjectPage/SGprojectScreen/ProjectScreen";
import ProjectScreenNG from "./screens/ProjectPage/NGprojectScreen/ProjectScreen";
import ProjectScreenES from "./screens/ProjectPage/ESprojectScreen/ProjectScreen";
import "./page-loader.css";

import AboutPage from "./screens/AboutPage/About";
import ContactPage from "./screens/ContactPage/Contact";
import WorksPage from "./screens/PreviousWorksPage/PreviousWorks";

import Spinner from "./Components/Spinner/PageLoaderSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Aos.init({ duration: 5000 });
    setTimeout(() => {
      setIsLoading(false);
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

  return isLoading ? (
    <Spinner />
  ) : (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/previous-works">
          <WorksPage />
        </Route>
        <Route path="/projects/fastway">
          <ProjectScreenFW
            isLoading={isLoading}
            showImageModal={showImageModal}
            closeImageModal={closeImageModal}
          />
        </Route>
        <Route path="/projects/sadgroup">
          <ProjectScreenSG
            isLoading={isLoading}
            showImageModal={showImageModal}
            closeImageModal={closeImageModal}
          />
        </Route>
        <Route path="/projects/nadlan">
          <ProjectScreenNG
            isLoading={isLoading}
            showImageModal={showImageModal}
            closeImageModal={closeImageModal}
          />
        </Route>
        <Route path="/projects/electrics">
          <ProjectScreenES
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            showImageModal={showImageModal}
            closeImageModal={closeImageModal}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
