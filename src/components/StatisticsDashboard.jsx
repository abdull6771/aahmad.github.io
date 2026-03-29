import React, { useState, useEffect } from "react";

export default function StatisticsDashboard() {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    certifications: 0,
    repositories: 0,
  });

  useEffect(() => {
    // Animate counters on component mount
    const targets = {
      experience: 4,
      projects: 8,
      certifications: 6,
      repositories: 2,
    };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        experience: Math.floor(targets.experience * progress),
        projects: Math.floor(targets.projects * progress),
        certifications: Math.floor(targets.certifications * progress),
        repositories: Math.floor(targets.repositories * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: "fas fa-briefcase",
      number: `${counts.experience}+`,
      label: "Years Experience",
      color: "#4cb050",
      description: "ML & AI Engineering",
    },
    {
      icon: "fas fa-code-branch",
      number: `${counts.projects}+`,
      label: "Projects Shipped",
      color: "#7ec47a",
      description: "Production Applications",
    },
    {
      icon: "fas fa-certificate",
      number: `${counts.certifications}+`,
      label: "Certifications",
      color: "#4cb050",
      description: "Huawei, AI, Cloud Certified",
    },
    {
      icon: "fas fa-github-alt",
      number: `${counts.repositories}+`,
      label: "Open Source",
      color: "#7ec47a",
      description: "GitHub Repositories",
    },
  ];

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div
                className="stat-icon-wrapper"
                style={{ borderColor: stat.color }}
              >
                <i
                  className={`${stat.icon} stat-icon`}
                  style={{ color: stat.color }}
                ></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number" style={{ color: stat.color }}>
                  {stat.number}
                </h3>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
