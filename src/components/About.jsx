import React from "react";
import { cvUrl, profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container section-split">
        <div className="section-intro">
          <p className="eyebrow">03 / Background</p>
          <h2 id="about-heading">An engineer’s curiosity. A researcher’s rigor.</h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">I’m Abdullahi Ahmad, a machine learning engineer and early-career AI researcher with over four years of experience designing, evaluating, and deploying AI systems.</p>
          <p>At TerraHaptix, I work on models for autonomous robotics, with a focus on computer vision, model optimization, and reliability under real-time constraints. My earlier work includes video-based behaviour recognition and natural-language querying of time-series data.</p>
          <p>My research connects agentic AI, retrieval-augmented generation, and network telemetry. I’m also a co-author of an accepted AIATSI 2025 paper benchmarking the performance and efficiency of transformer models for code-mixed Hausa sentiment analysis.</p>
          <p>I studied Computer Engineering at Ahmadu Bello University and won the Grand Prize in the Innovation/AI track of the 2023 Huawei ICT Competition Global Final. Through teaching and community workshops, I help others turn ideas in AI and robotics into working projects.</p>
          <div className="research-interests">
            <h3>Questions I’m exploring</h3>
            <p>AI for cybersecurity and behavioural threat analytics; graph representation learning and knowledge graphs; network and IoT security; and NLP for low-resource languages.</p>
          </div>
          <a className="text-link" href={cvUrl} download={profile.cvFilename}>Download CV <span aria-hidden="true">↓</span><span className="link-detail">PDF · 4 pages</span></a>
        </div>
      </div>
    </section>
  );
}
