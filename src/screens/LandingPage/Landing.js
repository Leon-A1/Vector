import React from "react";
import AboutSection from "../../Components/AboutSection/AboutSection";
import FavoriteProjects from "../../Components/ProjectsSection/FavoriteProjects";
import ContactForm from "../../Components/GetInTouchForm/ContactForm";

const Landing = () => {
  return (
    <div className="outer-main-div" id="main-landing-div">
      <AboutSection />
      <FavoriteProjects />
      <ContactForm />
    </div>
  );
};

export default Landing;
