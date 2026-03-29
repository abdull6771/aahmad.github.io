import React from "react";

export default function SkillsEnhanced() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "fas fa-brain",
      skills: [
        { name: "LangChain / LangGraph", level: 95 },
        { name: "RAG Systems", level: 94 },
        { name: "PyTorch / TensorFlow", level: 88 },
        { name: "LLM Fine-tuning", level: 90 },
        { name: "Computer Vision", level: 85 },
      ],
    },
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: [
        { name: "Python", level: 96 },
        { name: "React / JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "SQL", level: 87 },
        { name: "LaTeX", level: 75 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      skills: [
        { name: "GCP", level: 82 },
        { name: "AWS", level: 80 },
        { name: "Huawei Cloud", level: 88 },
        { name: "Docker / Kubernetes", level: 78 },
        { name: "CI/CD Pipelines", level: 80 },
      ],
    },
    {
      title: "Data & Databases",
      icon: "fas fa-database",
      skills: [
        { name: "Vector Databases (Qdrant)", level: 90 },
        { name: "Neo4j / Graph Databases", level: 85 },
        { name: "PostgreSQL / MySQL", level: 82 },
        { name: "Spark / Hadoop", level: 78 },
        { name: "Data Engineering", level: 83 },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Technical Skills & Proficiency</h2>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="category-header">
                <i className={`${category.icon} category-icon`}></i>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-bar-glow"></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="proficiency-legend">
          <div className="legend-item">
            <div className="legend-bar" style={{ width: "90%" }}></div>
            <span>90%+ : Expert</span>
          </div>
          <div className="legend-item">
            <div className="legend-bar" style={{ width: "70%" }}></div>
            <span>70-89% : Advanced</span>
          </div>
          <div className="legend-item">
            <div className="legend-bar" style={{ width: "50%" }}></div>
            <span>50-69% : Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
