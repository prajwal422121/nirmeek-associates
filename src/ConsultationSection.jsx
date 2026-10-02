import React from "react";

const ConsultationSection = ({ title, projects }) => {
  return (
    <section className="consultation-section">
      <h2>{title}</h2>
      <div className="consultation-list">
        {projects.map((project, index) => (
          <div key={project.id} className="consultation-item">
            <div className="client-header">
              <span className="number">{index + 1}.</span>
              <div>
                <h3>{project.name}</h3>
                <p className="address">{project.subtitle}</p>
              </div>
            </div>
            <ul className="service-details">
              {project.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultationSection;
