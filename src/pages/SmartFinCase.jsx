import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function SmartFinCase() {
  return (
    <>
      <nav className="navbar" style={{ position: "relative", height: "auto" }}>
        <div
          className="container nav-container"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Link to="/" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="container">
        <header className="case-header">
          <h1 className="case-title">SmartFin Analytics</h1>
          <p className="case-subtitle">
            Multi-Agent Financial Analysis System using LangGraph
          </p>
        </header>

        <div className="meta-grid">
          <div className="meta-item">
            <h4>Role</h4>
            <p>Lead AI Engineer</p>
          </div>
          <div className="meta-item">
            <h4>Timeline</h4>
            <p>Sept 2025 (4 Weeks)</p>
          </div>
          <div className="meta-item">
            <h4>Tech Stack</h4>
            <p>LangGraph, Python, Flask</p>
          </div>
          <div className="meta-item">
            <h4>Outcome</h4>
            <p>Automated Risk Analysis</p>
          </div>
        </div>

        <section className="content-section">
          <h2>The Challenge</h2>
          <p>
            Financial analysts spend hours manually aggregating data from
            various sources to assess risk and detect fraud. The goal was to
            automate this workflow using a Multi-Agent System that could
            autonomously gather data, analyze patterns, and generate reports.
          </p>
        </section>

        <section className="content-section">
          <h2>The Solution</h2>
          <p>
            I designed <strong>SmartFin Analytics</strong>, a system powered by
            <strong> LangGraph</strong> that orchestrates multiple AI agents.
            Each agent has a specific role:
          </p>
          <ul>
            <li>
              <strong>Data Collector Agent:</strong> Scrapes and aggregates
              financial data.
            </li>
            <li>
              <strong>Analysis Agent:</strong> Uses
              <strong> Isolation Forest</strong> for anomaly detection to flag
              potential fraud.
            </li>
            <li>
              <strong>Forecasting Agent:</strong> Utilizes
              <strong> Prophet</strong> for time-series forecasting of financial
              trends.
            </li>
            <li>
              <strong>Reporting Agent:</strong> Synthesizes findings into a
              natural language report.
            </li>
          </ul>
          <p>
            The system is wrapped in a responsive <strong>Flask</strong> web
            interface with <strong>Tailwind CSS</strong> and interactive
            <strong> Plotly</strong> visualizations for the end-user.
          </p>
        </section>

        <section className="content-section">
          <h2>Key Technologies</h2>
          <div className="tech-stack">
            <span className="tech-badge">LangGraph</span>
            <span className="tech-badge">LangChain</span>
            <span className="tech-badge">OpenAI API</span>
            <span className="tech-badge">Python</span>
            <span className="tech-badge">Flask</span>
            <span className="tech-badge">Scikit-Learn</span>
            <span className="tech-badge">Prophet</span>
            <span className="tech-badge">Tailwind CSS</span>
          </div>
        </section>

        <div className="cta-section">
          <h2>Ready to build something similar?</h2>
          <br />
          <Link
            to="/#contact"
            className="btn"
            style={{
              backgroundColor: "var(--text-main)",
              color: "var(--bg-body)",
            }}
          >
            Contact Me
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
