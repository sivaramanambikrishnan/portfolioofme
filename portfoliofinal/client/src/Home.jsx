import React from 'react';
import './Home.css';
import myImage from './assets/myimage.jpeg'; // make sure your image path is correct

export const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="animated-name">Hi, I'm <span className="highlight">Siva Rama Nambi Krishnan R</span></h1>
          <p className="animated-role">Full Stack Web Developer </p>
          <p className="hero-description">
            I build responsive websites and stunning user interfaces that deliver meaningful experiences.
            Passionate about solving problems and creating impactful digital solutions.
          </p>
          <a href="#projects" className="cta-button">Explore Projects</a>
          <a href="#contact" className="ct-button ms-2">Get in Touch</a>
        </div>
        <div className="hero-image glass-card">
          <img src={myImage} alt="Profile" />
        </div>
      </div>
    </section>
  );
};


