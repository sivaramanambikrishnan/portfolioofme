import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavClick = (link) => {
    setActiveLink(link);

    // Close navbar on small screens
    if (window.innerWidth < 992) {
      const toggler = document.querySelector('.navbar-toggler');
      const collapse = document.querySelector('.navbar-collapse');
      if (collapse.classList.contains('show')) {
        toggler.click();
      }
    }
  };
  return (
    <div className="area">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://img.freepik.com/free-photo/portrait-3d-male-doctor_23-2151107221.jpg?semt=ais_hybrid&w=740"
              alt="Avatar Logo"
              style={{ width: '60px' }}
              className="rounded-3"
            />
          </a>
          <span className="navbar-text text-primary fw-bold fs-5">MyPortfolio</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              {['home', 'about', 'skills', 'projects', 'contact'].map((link) => (
                <li className="nav-item" key={link}>
                  <a
                    className={`nav-link text-dark ${activeLink === link ? 'active fw-bold text-primary' : ''}`}
                    href={`#${link}`}
                    onClick={() => handleNavClick(link)}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
