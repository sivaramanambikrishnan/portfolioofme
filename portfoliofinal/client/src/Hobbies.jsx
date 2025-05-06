import React from "react";
import { FaChess, FaCode, FaFilm, FaPuzzlePiece } from "react-icons/fa";
import "./Hobbies.css";

const hobbies = [
  {
    name: "Solving Problems",
    icon: <FaPuzzlePiece />,
    description:
      "I enjoy solving logical and algorithmic problems that challenge my thinking and improve my coding skills.",
  },
  {
    name: "Chess",
    icon: <FaChess />,
    description:
      "Playing chess sharpens my strategic thinking, focus, and patience — qualities I apply in real-life challenges too.",
  },
  {
    name: "Web Development",
    icon: <FaCode />,
    description:
      "Building responsive and creative websites is not just a passion but also a field where I constantly learn and grow.",
  },
  {
    name: "Watching Movies",
    icon: <FaFilm />,
    description:
      "I love watching movies, especially those with rich storytelling or thought-provoking plots that inspire creativity.",
  },
];

export const Hobbies=()=> {
  return (
    <section className="hobbies-section" id="hobbies">
      <h2 className="hobbies-title">My Hobbies</h2>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <p className="hobby-name">{hobby.name}</p>
            <p className="hobby-description">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
