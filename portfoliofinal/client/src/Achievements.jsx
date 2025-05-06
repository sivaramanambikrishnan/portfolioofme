import React from "react";
import { FaTrophy, FaProjectDiagram, FaBookOpen } from "react-icons/fa";
import "./Acievements.css";

const achievements = [
  {
    title: "1st Prize – Web Development",
    icon: <FaTrophy />,
    description:
      "Secured 1st place in National Symposium at Mepco Schlenk Engineering College for a web development competition.",
  },
  {
    title: "Top 100 – TN Startup",
    icon: <FaProjectDiagram />,
    description:
      "Our innovative project was selected among the Top 100 in the TN Startup program, highlighting creativity and impact.",
  },
  {
    title: "Journal Publication",
    icon: <FaBookOpen />,
    description:
      "Published a technical journal on my project 'Collaborative Code Editor', focusing on real-time coding collaboration tools.",
  },
];

export const Achievements=()=> {
  return (
    <section className="achievements-section" id="achievements">
      <h2 className="achievements-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{item.icon}</div>
            <h3 className="achievement-heading">{item.title}</h3>
            <p className="achievement-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
