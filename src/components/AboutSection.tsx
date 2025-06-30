import React from "react";
import "./AboutSection.scss";

const AboutSection: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">Par mani</h2>
          <p className="about__description">
            Esmu junior programmētājs ar praktisku pieredzi gan tīmekļa, gan
            mobilajā lietotņu izstrādē. Es veidoju funkcionālus un lietotājiem
            draudzīgus projektus, strādājot ar React, TypeScript, JavaScript,
            Flutter un Firebase.
          </p>
          <p className="about__description">
            Šobrīd aktīvi mācos Laravel un Docker, lai nostiprinātu full-stack
            zināšanas un attīstītu prasmes backend izstrādē un projektu
            izvietošanā.
          </p>
          <p className="about__description">
            Meklēju iespēju strādāt kā junior izstrādātājs, lai iegūtu
            profesionālu pieredzi un turpinātu attīstīt savas prasmes reālā
            darba vidē.
          </p>
          <p className="about__description">
            Esmu motivēts, ātri mācos un esmu gatavs ieguldīt visu nepieciešamo,
            lai sasniegtu rezultātus.
          </p>

          <div className="about__resume">
            <a
              href="https://drive.google.com/file/d/1ZVQCzMPl7WuTcJfczDKzgVoBblB0qzL7/view?usp=sharing"
              className="resume__link"
            >
              Apskatīt CV
            </a>
          </div>
        </div>

        <div className="about__skills">
          <h3 className="skills__title">Prasmes</h3>
          <div className="skills__grid">
            <span className="skills__item">HTML</span>
            <span className="skills__item">CSS</span>
            <span className="skills__item">SCSS</span>
            <span className="skills__item">Tailwind CSS</span>
            <span className="skills__item">JavaScript</span>
            <span className="skills__item">Laravel</span>
            <span className="skills__item">React</span>
            <span className="skills__item">Flutter</span>
            <span className="skills__item">Dart</span>
            <span className="skills__item">Docker</span>
            <span className="skills__item">Firebase</span>
            <span className="skills__item">Next JS</span>
            <span className="skills__item">Typescript</span>
            <span className="skills__item">VS Code</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
