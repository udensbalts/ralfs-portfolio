import React from "react";
import "../styles/ProjectCard.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  techStack?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  github,
  demo,
  techStack = [],
}) => {
  return (
    <div className="project-card">
      <div className="project-card__image-container">
        <img src={image} alt={title} className="project-card__image" />
        <div className="project-card__overlay"></div>
      </div>
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>

        {techStack.length > 0 && (
          <div className="project-card__tech-stack">
            {techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}

        <div className="project-card__buttons">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <span>Code</span>
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-button"
            >
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
