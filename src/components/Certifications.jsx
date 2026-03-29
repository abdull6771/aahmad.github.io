import React from "react";

export default function Certifications() {
  const certifications = [
    {
      icon: "fas fa-award",
      title: "HCIA AI",
      issuer: "Huawei",
      year: "2024",
      status: "Active",
      category: "Artificial Intelligence",
    },
    {
      icon: "fas fa-trophy",
      title: "HCIP AI Developer Certificate",
      issuer: "Huawei",
      year: "2024",
      status: "Active",
      category: "AI Development",
    },
    {
      icon: "fas fa-cloud-alt",
      title: "HCIA Cloud Service",
      issuer: "Huawei",
      year: "2023",
      status: "Active",
      category: "Cloud Computing",
    },
    {
      icon: "fas fa-star",
      title: "Grand Prize Winner - AI Competition",
      issuer: "Huawei ICT",
      year: "2023",
      status: "Active",
      category: "Achievement",
    },
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications & Achievements</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="certification-card">
              <div className="cert-header">
                <div className="cert-icon">
                  <i className={cert.icon}></i>
                </div>
                <div className="cert-meta">
                  <span className="cert-status">{cert.status}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-category">{cert.category}</span>
              </div>

              <div className="cert-badge">
                <i className="fas fa-check-circle"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
