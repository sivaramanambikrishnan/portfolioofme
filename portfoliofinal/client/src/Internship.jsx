import React from "react";
import "./Internship.css";


export const Internship=()=>{
  return (
    <div className="internship-section">
    <div className="internship-card">
      <img src="https://plus.unsplash.com/premium_photo-1661331911412-330f2e99cf53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Flutter Training" className="internship-image" />
      <div className="internship-content">
        <h3 className="internship-title">Internship</h3>
        <p className="internship-description">
          I completed an internship and training on <strong>Flutter Mobile Application Development</strong> at Digisailor, Thoothukudi. 
          During this internship, I learned to build cross-platform mobile apps, understand Dart basics, and integrate UI components effectively.
        </p>
      </div>
    </div>
    </div>
  );
}
