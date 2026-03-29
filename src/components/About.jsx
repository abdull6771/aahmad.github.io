import React from "react";

export default function About() {
  const researchInterests = [
    { icon: "fas fa-brain", label: "Machine Learning" },
    { icon: "fas fa-link-chain", label: "RAG Systems" },
    { icon: "fas fa-robot", label: "Large Language Models" },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Professional Background</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          {/* Main Bio */}
          <div className="about-main">
            <div className="about-card education-card">
              <div className="card-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="card-content">
                <h3>Education & Experience</h3>
                <p>
                  Computer Engineer with a{" "}
                  <span className="highlight-accent">Second Class Upper</span>{" "}
                  degree from
                  <span className="highlight-accent">
                    {" "}
                    Ahmadu Bello University
                  </span>
                  , Zaria, Nigeria.
                  <span className="highlight-accent"> 4+ years</span> of
                  hands-on experience in Machine Learning and Generative AI.
                </p>
              </div>
            </div>

            <div className="about-card achievement-card">
              <div className="card-icon achievement">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="card-content">
                <h3>Key Achievement</h3>
                <p>
                  <span className="highlight-achievement">
                    Winner of the 2023 Global Huawei ICT Competition
                  </span>
                  . Gained hands-on experience in configuring CCTV, biometric
                  systems, and enterprise networking equipment.
                </p>
              </div>
            </div>

            <div className="about-card expertise-card">
              <div className="card-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="card-content">
                <h3>Passion & Focus</h3>
                <p>
                  Motivated to contribute to{" "}
                  <span className="highlight-accent">
                    cutting-edge research
                  </span>{" "}
                  in AI and
                  <span className="highlight-accent"> Computer Vision</span>.
                  Building scalable, production-ready intelligent systems.
                </p>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div className="research-interests-section">
            <h3 className="interests-title">Research Interests</h3>
            <div className="interests-grid">
              {researchInterests.map((interest, idx) => (
                <div key={idx} className="interest-item">
                  <div className="interest-icon">
                    <i className={interest.icon}></i>
                  </div>
                  <span className="interest-label">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
