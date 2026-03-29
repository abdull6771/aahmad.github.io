import React from "react";

export default function Education() {
  const education = [
    {
      icon: "fas fa-graduation-cap",
      title: "BEng Computer Engineering",
      school: "Ahmadu Bello University | 2018 - 2024",
      detail: "CGPA: 3.69/5.00 (Upper Second Class)",
    },
    {
      icon: "fas fa-certificate",
      title: "Diploma in Computer Engineering",
      school: "Ahmadu Bello University | 2016 - 2018",
      detail: "CGPA: 3.52/4.00",
    },
  ];

  const awards = [
    {
      icon: "fas fa-trophy",
      title: "Grand Prize Winner",
      event: "Huawei ICT Competition Global Final | May 2023",
      detail: "Innovation/AI Track",
    },
    {
      icon: "fas fa-medal",
      title: "Grand Prize",
      event: "Huawei ICT Competition Regional Final | March 2023",
      detail: "Southern Africa Region",
    },
  ];

  return (
    <section
      id="awards"
      className="section"
      style={{ backgroundColor: "var(--bg-surface-2)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
          }}
        >
          <div>
            <div className="section-header">
              <span className="section-subtitle">Academic Background</span>
              <h2 className="section-title">Education</h2>
            </div>
            <div className="list-grid">
              {education.map((edu, idx) => (
                <div key={idx} className="list-item">
                  <div className="list-icon">
                    <i className={edu.icon}></i>
                  </div>
                  <div className="list-content">
                    <h3>{edu.title}</h3>
                    <div className="list-meta">{edu.school}</div>
                    <p className="text-muted">{edu.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-header">
              <span className="section-subtitle">Recognition</span>
              <h2 className="section-title">Awards</h2>
            </div>
            <div className="list-grid">
              {awards.map((award, idx) => (
                <div key={idx} className="list-item">
                  <div className="list-icon">
                    <i className={award.icon}></i>
                  </div>
                  <div className="list-content">
                    <h3>{award.title}</h3>
                    <div className="list-meta">{award.event}</div>
                    <p className="text-muted">{award.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
