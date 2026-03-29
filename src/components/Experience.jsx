import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Research Assistant",
      company: "INCEIF University, Kuala Lumpur, Malaysia",
      date: "Sept 2025 - Present",
      highlights: [
        "Developed a Python automation script to download, rename, and organize annual reports for publicly listed companies in Malaysia.",
        "Utilized Google Drive API to programmatically upload and manage financial documents.",
        "Engineered a system to automatically parse URLs and file metadata to standardize naming conventions.",
        "Developed an AI-driven data extraction system using LangChain (RAG) and Gemini Pro.",
        "Built a multi-functional analytics dashboard using Streamlit and Metabase with Text-to-SQL capabilities.",
      ],
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Nafabat.AI, California, U.S.A",
      date: "Jan 2023 - July 2025",
      highlights: [
        "Finetuned a large video dataset using LlamaVID to recognize shoplifting using CCTV Camera.",
        "Developed a RAG application to query InfluxDB data.",
        "Developed an End-to-End Retrieval Augmented Generation Application and deployed using Gradio.",
      ],
    },
    {
      role: "Network Engineer Intern",
      company: "Cosmopolitan University, Abuja, Nigeria",
      date: "Nov 2024 - Apr 2025",
      highlights: [
        "Installed and configured Dahua CCTV surveillance systems.",
        "Configured network infrastructure for student hostels and wireless coverage (Huawei AirEngine).",
        "Set up ZKTeco biometric systems for attendance management.",
      ],
    },
    {
      role: "NYSC Intern - Nigeria Government & Enterprise Key Account Service",
      company: "Huawei Technologies, Nigeria",
      date: "2024",
      highlights: [
        "Contributed to the setup and configuration of a data centre for the Nigerian Customs Service.",
        "Configured Huawei Firewall, AntiDDoS, and FireHunter systems.",
        "Conducted network security training for staff of the Federal Ministry of Finance.",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-role">{exp.role}</div>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                  <div className="timeline-date">{exp.date}</div>
                </div>
                <ul className="timeline-list">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
