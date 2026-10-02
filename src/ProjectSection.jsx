// ProjectSection.js
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Modal from "./Model";

const ProjectSection = ({ title, projects, completed }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className={`project-section ${completed ? "completed" : ""}`}>
      <h2>{title}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            number={index + 1}
            project={project}
            completed={completed}
            onClick={handleImageClick}
          />
        ))}
      </div>
      <Modal imageUrl={selectedImage} onClose={closeModal} />
    </section>
  );
};

export default ProjectSection;
