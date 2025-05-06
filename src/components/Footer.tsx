import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Ralfs Konovs. Izveidots ar React, TypeScript, SASS.</p>
      <div className="footer-links">
        <a
          href="https://github.com/udensbalts"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
