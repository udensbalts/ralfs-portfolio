import React from "react";
import "./HeroSection.scss";

const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Sveiki, esmu Ralfs Konovs - junior full-stack izstrādātājs
        </h1>
        <p className="hero__description">
          React / TypeScript / Tailwind CSS / Firebase / Flutter
        </p>
        <a href="#projects" className="hero__button">
          Skatīt projektus
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
