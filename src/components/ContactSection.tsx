import React from "react";
import "./ContactSection.scss";

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact__title">Sazinies ar mani</h2>
      <p className="contact__description">
        Ja vēlies sazināties ar mani, lūdzu, raksti uz e-pastu:{" "}
      </p>
      <ul>
        <li>
          <strong>E-pasts: </strong>rkonovs@inbox.lv
        </li>

        <li>
          <strong>GitHub: </strong>
          <a
            href="https://github.com/udensbalts"
            target="_blank"
            rel="noopener noreferrer"
          >
            udensbalts
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactSection;
