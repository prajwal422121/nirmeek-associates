import React from "react";
import ProjectSection from "./ProjectSection";
import ConsultationSection from "./ConsultationSection";
import { useProjects } from "./ProjectData"; // Changed import
import "./Project.css";
import logo from "./assets/logo.png";

import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  // Add custom hook here
  const { currentProjects, completedProjects, consultationProjects } =
    useProjects();

  const handleProjectClick = () => {
    navigate("/project");
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleAboutUsClick = () => {
    navigate("/aboutus");
  };

  return (
    <>
      <nav className="navigate2">
        <p className="title" onClick={handleHomeClick}>
          <img
            src={logo}
            alt="logo"
            width="35rem"
            height="25rem"
            className="imagejd"
          />
          NIRMEEK ASSOCIATES
        </p>
        <p className="Projects" onClick={handleProjectClick}>
          Projects
        </p>
        <p className="aboutUS" onClick={handleAboutUsClick}>
          About Us
        </p>
      </nav>{" "}
      <div className="Project-container" style={{ width: "100vw" }}>
        <h1>Nirmeek Associates - Projects Portfolio</h1>

        {/* Existing components will automatically get Firebase data */}
        <ProjectSection
          title="Current Building Projects"
          projects={currentProjects}
        />

        <ProjectSection
          title="Completed Projects"
          projects={completedProjects}
          completed
        />

        <ConsultationSection
          title="Consultation Services"
          projects={consultationProjects}
        />
      </div>
    </>
  );
};

export default Project;
