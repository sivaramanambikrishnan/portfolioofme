import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio site built with React, showcasing my skills and projects.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500",
    link: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500",
    tags: ["React", "Bootstrap", "JavaScript","CSS"],
  },
  {
    title: "Movie Ticket Booking",
    description: "A comprehensive movie ticket booking platform built with React JS, featuring seat selection, and booking management.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
    link: "https://github.com/sivaramanambikrishnan/MovieTicketBooking/tree/main",
    tags: ["React","HTML","CSS","JavaScript","Bootstrap"],
  },
  {
    title: "Music Player Web App",
    description: "An interactive music platform created with HTML and CSS, featuring playlist management and audio player functionality.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
    link: "https://github.com/sivaramanambikrishnan/clone-spotify",
    tags: ["React","HTML","CSS"],
  },
  
  
];

export const Projects=()=> {
  return (
    <section id="projects" className="projects-section" >
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex}
                                               className="tag"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
