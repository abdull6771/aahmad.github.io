import React from "react";

export default function Hero() {
  return (
    <header className="hero container" id="hero">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-up">
          <div className="availability-badge">
            <span className="status-indicator"></span>
            <span className="badge-text">Available for opportunities</span>
          </div>

          <div className="hero-heading-wrapper">
            <h1 className="hero-title">
              <span className="title-line title-line-top">AI Research</span>
              <span className="title-line title-line-bottom">Engineer.</span>
            </h1>
            <div className="hero-secondary-role">
              <span className="role-slash">/</span>
              <span className="role-name">ML Specialist</span>
            </div>
            <div className="hero-tech-row">
              <span className="tech-chip">RAG</span>
              <span className="tech-chip">LLMs</span>
              <span className="tech-chip">Computer Vision</span>
              <span className="tech-chip">LangChain</span>
            </div>
          </div>

          <p className="hero-description">
            Innovative Computer Engineer specializing in Retrieval-Augmented
            Generation (RAG) applications, LangChain, and LangGraph for workflow
            automation. Transforming complex AI challenges into elegant,
            production-ready solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-lg">
              <i className="fas fa-arrow-right"></i>
              View My Work
            </a>
            <a
              href="/Abdullahi_Ahmad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="/picture.png"
            alt="Abdullahi Ahmad"
            className="hero-image"
          />
        </div>
      </div>
    </header>
  );
}
