import React from "react";

export default function Publications() {
  const publications = [
    {
      icon: "fas fa-book",
      title: "An Artificial Intelligence Smart Waste Robot",
      author: "Abdullahi, A. (2024)",
      detail:
        "[Poster Presentation]. Department of Computer Engineering, ABU Zaria.",
    },
    {
      icon: "fas fa-file-alt",
      title: "Software Development Agent",
      author: "Abdullahi, A. (2024)",
      detail: "AI-Driven Framework for Automating SDLC (Unpublished)",
    },
    {
      icon: "fas fa-file-alt",
      title: "NeuroScan: Brain Tumor Classification",
      author: "Abdullahi, A. (2024)",
      detail: "Deep Learning Approach (Unpublished)",
    },
  ];

  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Research</span>
          <h2 className="section-title">Publications</h2>
        </div>
        <div className="list-grid">
          {publications.map((pub, idx) => (
            <div key={idx} className="list-item">
              <div className="list-icon">
                <i className={pub.icon}></i>
              </div>
              <div className="list-content">
                <h3>{pub.title}</h3>
                <div className="list-meta">{pub.author}</div>
                <p className="text-muted">{pub.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
