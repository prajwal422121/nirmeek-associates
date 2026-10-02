// ProjectCard.js
import React from "react";

const ProjectCard = ({ project, number, completed, onClick }) => {
  return (
    <div
      className={`project-card ${completed ? "completed" : ""}`}
      onClick={() => onClick(project.image)}
      role="button"
      tabIndex={0}
    >
      {/* Image overlay */}
      <div
        className="card-image-overlay"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>

      {/* Content */}
      <div className="card-content">
        <div className="card-header">
          <span className="project-number">{number}.</span>
          <h3>{project.name}</h3>
          {project.subtitle && <p className="subtitle23">{project.subtitle}</p>}
        </div>

        <div className="card-details">
          <ul>
            {project.services.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>

        {completed && <div className="status-badge">Completed</div>}
      </div>
    </div>
  );
};

export default ProjectCard;
