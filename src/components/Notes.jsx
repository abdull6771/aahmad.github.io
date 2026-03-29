import React from "react";

export default function Notes() {
  const notes = [
    {
      date: "Dec 15, 2025",
      title: "Optimizing RAG Pipelines with LangGraph",
      excerpt:
        "How to reduce hallucination and improve retrieval accuracy in complex multi-agent systems.",
    },
    {
      date: "Nov 28, 2025",
      title: "Fine-tuning LlamaVID for CCTV Analysis",
      excerpt:
        "Lessons learned from training a vision-language model on low-resolution security footage.",
    },
    {
      date: "Oct 10, 2025",
      title: "The Future of AI Agents in Finance",
      excerpt:
        "Why autonomous agents are the next frontier for fraud detection and risk assessment.",
    },
  ];

  return (
    <section id="notes" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Thoughts & Insights</span>
          <h2 className="section-title">Technical Notes</h2>
        </div>
        <div className="blog-grid">
          {notes.map((note, idx) => (
            <div key={idx} className="blog-card">
              <span className="blog-date">{note.date}</span>
              <h3 className="blog-title">{note.title}</h3>
              <p className="blog-excerpt">{note.excerpt}</p>
              <a href="#" className="blog-link">
                Read Note <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
