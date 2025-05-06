import React from "react";
import "./AboutSection.scss";

const AboutSection: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">Par mani</h2>
          <p className="about__description">
            Esmu programmētājs, kas šobrīd mācās pēdējā kursā un specializējos
            frontend izstrādē, īpaši ar React un TypeScript, bet man ir arī
            pieredze ar Flutter un Firebase.
          </p>
          <p className="about__description">
            Esmu izstrādājis vairākas lietotnes, tostarp To-Do aplikāciju, filmu
            meklētāja platformu un lielāka apjoma projektu — disku golfa
            rezultātu apkopošanas lietotni ar autentifikāciju, datu glabāšanu un
            API integrāciju.
          </p>
          <p className="about__description">
            Šobrīd aktīvi meklēju iespēju strādāt kā frontend izstrādātājs, lai
            iegūtu profesionālu pieredzi un turpinātu attīstīt savas prasmes
            reālā darba vidē.
          </p>
          <p className="about__description">
            Esmu motivēts, ātri mācos un esmu gatavs ieguldīt visu nepieciešamo,
            lai sasniegtu rezultātus.
          </p>

          <div className="about__resume">
            <a href="#" className="resume__link">
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
            <span className="skills__item">Mongo DB</span>
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
