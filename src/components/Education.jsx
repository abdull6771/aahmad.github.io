import React from "react";

const education = [
  {
    title: "BEng, Computer Engineering",
    institution: "Ahmadu Bello University, Zaria, Nigeria",
    date: "Oct 2018 — Nov 2024",
    detail: "Upper Second Class · CGPA 3.69/5.00",
  },
  {
    title: "Diploma in Computer Engineering",
    institution: "Institute of Computing and ICT, Ahmadu Bello University, Zaria, Nigeria",
    date: "Aug 2016 — Nov 2018",
    detail: "CGPA 3.52/4.00",
  },
];

const awards = [
  {
    title: "Grand Prize · Global Final",
    institution: "Huawei ICT Competition",
    date: "May 2023",
    detail: "Innovation/AI Track",
  },
  {
    title: "Grand Prize · Regional Final",
    institution: "Huawei ICT Competition",
    date: "Mar 2023",
    detail: "Southern Africa · Innovation/AI Track",
  },
];

const certifications = [
  "Huawei Certified ICT Professional — Artificial Intelligence",
  "Huawei Certified ICT Associate — Artificial Intelligence",
  "Huawei Certified ICT Associate — Cloud Services",
  "TensorFlow Developer Certificate (Coursera)",
  "Deep Learning Specialization — Andrew Ng, DeepLearning.AI (Coursera)",
  "ASOM AI Machine Learning Summer School — Online, Saudi Arabia (2023)",
  "Master Class on Artificial Intelligence — Pantech Solutions, India (2022)",
];

const memberships = [
  "Nigerian Computer Society (NCS) — Member",
  "Data Science Nigeria — Member",
  "Nigerian Society of Engineers (NSE) — Graduate Member",
];

export default function Education() {
  return (
    <section id="awards" className="section" aria-label="Education, recognition, credentials, and memberships">
      <div className="container credentials-grid">
        <div className="credentials-panel">
          <p className="eyebrow">Academic foundation</p>
          <h2>Education.</h2>
          {education.map((item) => (
            <article className="credential" key={item.title}>
              <p className="credential-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="credential-institution">{item.institution}</p>
              <p className="credential-detail">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="credentials-panel">
          <p className="eyebrow">Recognition</p>
          <h2>On a global stage.</h2>
          {awards.map((item) => (
            <article className="credential" key={item.title}>
              {item.date && <p className="credential-date">{item.date}</p>}
              <h3>{item.title}</h3>
              <p className="credential-institution">{item.institution}</p>
              <p className="credential-detail">{item.detail}</p>
            </article>
          ))}
        </div>
        <div id="certifications" className="certification-list">
          <h2>Certifications & professional development</h2>
          <ul>
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </div>
        <div className="certification-list">
          <h2>Professional memberships</h2>
          <ul>
            {memberships.map((membership) => (
              <li key={membership}>{membership}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
