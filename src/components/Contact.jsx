import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{ backgroundColor: "var(--bg-surface-2)" }}
    >
      <div className="container">
        <div className="contact-section">
          <h2 className="section-title">Let's Work Together</h2>
          <p
            className="text-muted"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon-lg">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <a href="mailto:abdulll8392@gmail.com" className="text-primary">
                abdulll8392@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon-lg">
                <i className="fab fa-github"></i>
              </div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/abdull6771"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                abdull6771
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon-lg">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Location</h3>
              <p className="text-muted">Babura, Jigawa, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
