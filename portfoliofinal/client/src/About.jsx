import React from "react";
import "./About.css";
import myImage from "./assets/myphoto.jpeg"; // Update based on your structure

export const About=()=> {
  return (
    <section className="about-section" id="about">
    <div className="about-card">
      <div className="about-image">
        <img src={myImage} alt="Profile" />
      </div>
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I am a passionate web developer and problem solver. With experience in both mobile and web development, I love building applications that solve real-world problems. My background in Flutter and full-stack technologies, along with my constant learning, keeps me on the cutting edge of development.
        </p>

        <h3 className="about-title">Skills</h3>
        <div className="about-skills">
          <span className="skill">Node.js</span>
          <span className="skill">React</span>
          <span className="skill">HTML</span>
          <span className="skill">MongoDB</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
            <span className="skill">Postgresql</span>
        </div>

        <h3 className="about-title mt-3">Contact</h3>
        <p className="about-description">
          I'm open to freelance projects, collaboration, or just a good tech conversation. Feel free to reach out to me via email or phone.
        </p>
        <p className="about-description"><strong>Email:</strong> sivaradahanambi@gmail.com</p>
        <p className="about-description"><strong>Phone:</strong> +7397585787</p>
      </div>
    </div>
  </section>
  );
}
