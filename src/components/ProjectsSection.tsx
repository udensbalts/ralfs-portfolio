import React from "react";
import { projects } from "../data/projects";
import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard.tsx";

const ProjectsSection = () => (
  <section className="projects" id="projects">
    <div className="projects__content">
      <h2>Projekti</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
