import React from "react";

const experiences = [
  {
    role: "Machine Learning Engineer",
    company: "TerraHaptix",
    location: "Full-time · On-site · Abuja, Nigeria",
    date: "Mar 2026 — Present",
    highlights: [
      "Develop and optimize production machine learning models for autonomous robotics, validating accuracy and reliability under real-time constraints.",
      "Prototype and benchmark computer vision and model optimization techniques to inform platform capabilities and product decisions.",
      "Collaborate with data-engineering and software teams on scalable data pipelines for machine learning workloads.",
    ],
  },
  {
    role: "Network Engineer Intern",
    company: "Cosmopolitan University",
    location: "Abuja, Nigeria",
    date: "Nov 2024 — Apr 2025",
    highlights: [
      "Deployed Dahua CCTV surveillance and ZKTeco biometric attendance systems for campus staff and students.",
      "Configured enterprise wireless and hostel networks with Huawei AirEngine access points; supported IT maintenance and equipment inventory for the Computer Engineering Lab and Maker Space.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "Nafabat.AI",
    location: "Remote · California, USA",
    date: "Jan 2023 — May 2024",
    highlights: [
      "Fine-tuned LlamaVID on CCTV footage to recognize shoplifting behaviour across multiple camera feeds.",
      "Designed and evaluated a RAG system for natural-language queries over InfluxDB time-series telemetry, reducing manual data lookup.",
      "Deployed an end-to-end RAG application with Gradio for interactive document and data querying.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container section-split">
        <div className="section-intro">
          <p className="eyebrow">02 / Experience</p>
          <h2 id="experience-heading">Research meets practice.</h2>
          <p>Building machine learning systems for autonomous robotics, video understanding, and practical information retrieval.</p>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-row" key={experience.company}>
              <p className="experience-date">{experience.date}</p>
              <div className="experience-body">
                <h3>{experience.role}</h3>
                <p className="experience-company">{experience.company} <span>· {experience.location}</span></p>
                <ul className="experience-points">
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
