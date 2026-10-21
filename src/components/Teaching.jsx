import React from "react";

const teaching = [
  {
    date: "Feb 2024",
    title: "Machine learning & optimization tutor",
    organization: "Ahmadu Bello University, Zaria",
    detail: "Delivered undergraduate tutorials in Machine Learning Fundamentals and Optimization (COEN417 and COEN505), translating formal concepts into accessible instruction.",
  },
  {
    date: "Feb 2024",
    title: "ICT Bootcamp instructor",
    organization: "National Association of Jigawa State Students",
    detail: "Taught at the association's ICT Bootcamp in Nigeria.",
  },
  {
    date: "Dec 2019",
    title: "Python Bootcamp for Kids instructor",
    organization: "Department of Computer Engineering, Ahmadu Bello University",
    detail: "Introduced young learners to Python through a dedicated bootcamp.",
  },
];

export default function Teaching() {
  return (
    <section id="teaching" className="section" aria-labelledby="teaching-heading">
      <div className="container section-split">
        <div className="section-intro">
          <p className="eyebrow">Teaching & community</p>
          <h2 id="teaching-heading">Sharing what I learn.</h2>
          <p>Making technical ideas accessible through teaching, project mentoring, and community workshops.</p>
        </div>
        <div className="teaching-list">
          {teaching.map((item) => (
            <article className="experience-row teaching-row" key={item.title}>
              <p className="experience-date">{item.date}</p>
              <div className="experience-body teaching-body">
                <h3>{item.title}</h3>
                <p className="experience-company">{item.organization}</p>
                <p className="teaching-description">{item.detail}</p>
              </div>
            </article>
          ))}
          <article className="experience-row teaching-row">
            <p className="experience-date">Community outreach</p>
            <div className="experience-body teaching-body">
              <h3>Workshops, mentoring & knowledge sharing</h3>
              <p className="teaching-description">Organized AI and robotics workshops for youth empowerment in Babura LGA and mentored aspiring engineers on building AI and robotics projects.</p>
              <p className="teaching-description">Shared applied knowledge of LangChain and generative AI with local and global developer communities.</p>
            </div>
          </article>
          <article className="experience-row teaching-row">
            <p className="experience-date">Invited presentation</p>
            <div className="experience-body teaching-body">
              <h3>AI Assistive Glasses for the Visually Impaired</h3>
              <p className="experience-company">Nigeria Computer Society AI Summit</p>
              <p className="teaching-description">Presented the assistive-glasses project at the summit.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
