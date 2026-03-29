import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      skills: ["Python", "React", "TypeScript", "MATLAB", "LaTeX", "ROS"],
    },
    {
      title: "ML Frameworks",
      icon: "fas fa-brain",
      skills: [
        "MindSpore",
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-Learn",
        "XGBoost",
      ],
    },
    {
      title: "Cloud & Data",
      icon: "fas fa-cloud",
      skills: [
        "GCP",
        "AWS",
        "Azure",
        "Huawei Cloud",
        "Hadoop",
        "Spark",
        "MySQL",
      ],
    },
    {
      title: "Hardware",
      icon: "fas fa-microchip",
      skills: ["Raspberry Pi", "Arduino", "ESP32"],
    },
  ];

  return (
    <section
      id="skills"
      className="section"
      style={{ backgroundColor: "var(--bg-surface-2)" }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card">
              <h3>
                <i className={category.icon}></i> {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
