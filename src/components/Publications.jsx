import React from "react";

const manuscripts = [
  "A multi-agent LLM framework for automating the software development lifecycle.",
  "An LLM-powered multi-agent coding agent with LangGraph for code generation and analysis.",
  "A multi-agent LLM system for startup analysis using LangGraph.",
  "NeuroScan: Brain tumor classification using deep learning.",
  "An LLM-based adaptive learning system for personalized educational pathways.",
  "Heart disease classification using Random Forest and Support Vector Machine algorithms.",
];

export default function Publications() {
  return (
    <section id="publications" className="section" aria-labelledby="research-heading">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Research & publications</p>
            <h2 id="research-heading">From experiments to evidence.</h2>
          </div>
          <p>Transformer benchmarking for low-resource language processing, alongside research in agentic AI and applied deep learning.</p>
        </div>
        <div className="research-list">
          <article className="research-row">
            <div className="research-meta">
              <span className="research-type">Peer-reviewed conference paper</span>
              <span>2025 · Accepted (forthcoming)</span>
            </div>
            <div className="research-body">
              <h3>A performance-efficiency benchmark of transformer models for code-mixed Hausa sentiment analysis.</h3>
              <p className="research-authors">Muazu, M. B., Bayero, A., Ahmad, A., Ibrahim, S., & Dahir, D. I.</p>
              <p>AIATSI 2025: Artificial Intelligence – Advanced Topics and Societal Innovation. Dakhla, Morocco, November 5–7, 2025.</p>
            </div>
          </article>
          <article className="research-row">
            <div className="research-meta">
              <span className="research-type">Poster presentation</span>
              <span>2024 · Abdullahi, A.</span>
            </div>
            <div className="research-body">
              <h3>An artificial intelligence smart waste robot</h3>
              <p>Department of Computer Engineering, Ahmadu Bello University, Nigeria.</p>
            </div>
          </article>
          <article className="research-row">
            <div className="research-meta">
              <span className="research-type">Manuscripts in preparation</span>
              <span>Not yet peer-reviewed · Abdullahi, A.</span>
            </div>
            <div className="research-body">
              <h3>Work in progress</h3>
              <p>Six manuscripts exploring multi-agent workflows, adaptive learning, and medical classification.</p>
              <details className="research-manuscripts">
                <summary>View all six manuscript titles</summary>
                <ul>
                  {manuscripts.map((title) => <li key={title}>{title}</li>)}
                </ul>
              </details>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
