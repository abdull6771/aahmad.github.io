import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cvUrl, profile } from "../data/profile";

const navigation = [
  { label: "Work", hash: "projects" },
  { label: "Experience", hash: "experience" },
  { label: "About", hash: "about" },
  { label: "Research", hash: "publications" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnDesktop = (event) => { if (event.matches) setIsOpen(false); };
    const desktop = window.matchMedia("(min-width: 900px)");
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <header id="top" className="site-header">
      <nav className="container nav-container" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label="Abdullahi Ahmad, home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">aa.</span>
          <span className="brand-name">Abdullahi Ahmad</span>
        </Link>
        <button type="button" className="nav-toggle" ref={toggleRef} aria-expanded={isOpen} aria-controls="main-navigation" onClick={() => setIsOpen((open) => !open)}>
          <span>{isOpen ? "Close" : "Menu"}</span><span aria-hidden="true">{isOpen ? "×" : "+"}</span>
        </button>
        <div id="main-navigation" className={`nav-menu${isOpen ? " is-open" : ""}`}>
          <ul className="nav-links">
            {navigation.map(({ label, hash }) => (
              <li key={hash}>
                <Link className="nav-link" to={`/#${hash}`} aria-current={location.pathname === "/" && location.hash === `#${hash}` ? "location" : undefined} onClick={() => setIsOpen(false)}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a className="resume-link" href={cvUrl} download={profile.cvFilename} onClick={() => setIsOpen(false)}>Download CV <span aria-hidden="true">↓</span></a>
            <Link className="button button-small" to="/#contact" onClick={() => setIsOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
