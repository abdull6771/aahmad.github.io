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
              <span className="title-role">AI Research Engineer</span>
              <span className="title-separator">&</span>
              <span className="title-specialty">ML Specialist</span>
            </h1>
            <p className="hero-tagline">
              Building intelligent systems with{" "}
              <span className="highlight-tech">RAG</span>,{" "}
              <span className="highlight-tech">LLMs</span>, and{" "}
              <span className="highlight-tech">Computer Vision</span>
            </p>
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
          <img src="/picture.png" alt="Abdullahi Ahmad" className="hero-image" />
        </div>
      </div>
    </header>
  );
}
