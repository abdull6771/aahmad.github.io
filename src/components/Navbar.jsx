import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    html.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = theme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">𝗔</span>
          <span className="logo-text">Abdullahi</span>
        </Link>
        <div className="nav-center">
          {location.pathname === "/" && (
            <ul className="nav-links">
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="nav-link">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#notes" className="nav-link">
                  Notes
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            <i className={`fas fa-${theme === "dark" ? "sun" : "moon"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
