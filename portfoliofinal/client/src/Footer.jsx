import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer=()=>{
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Siva Rama Nambi Krishnan R</h2>
          <p>Web Developer | problem solver | Learner</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-icons">
          <a href="https://github.com/sivaramanambikrishnan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/siva-rama-nambi-krishnan-r-875aa1242/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:youremail@example.com"><FaEnvelope /></a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
