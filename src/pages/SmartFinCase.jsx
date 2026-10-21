import React from "react";
import { Link } from "react-router-dom";
import SystemDiagram from "../components/SystemDiagram";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function SmartFinCase() {
  return <>
    <main id="main-content" tabIndex={-1}>
      <article className="case-study container">
        <Link to="/#projects" className="text-link case-back"><span aria-hidden="true">←</span> Back to selected work</Link>
        <header className="case-header">
          <p className="eyebrow">Project archive / AI agents</p>
          <h1>SmartFin<br /><em>Analytics.</em></h1>
          <p className="case-deck">A multi-agent workflow that connects financial data collection, anomaly detection, forecasting, and reporting.</p>
        </header>
        <dl className="case-meta">
          <div><dt>Contribution</dt><dd>Multi-agent workflow design</dd></div>
          <div><dt>Interface</dt><dd>Flask · Tailwind CSS · Plotly</dd></div>
          <div><dt>Focus</dt><dd>Financial analysis & AI agents</dd></div>
          <div><dt>Core stack</dt><dd>Python · LangGraph · Flask</dd></div>
        </dl>
        <div className="case-overview"><SystemDiagram /><div><p className="eyebrow">The challenge</p><h2>Connect the steps.<br />Keep the context.</h2><p>Financial analysis can involve manually gathering data from different sources, checking for unusual patterns, and assembling a report. SmartFin brings those steps into one workflow.</p><p>I designed the system around specialized agents, giving data collection, analysis, forecasting, and reporting a defined role.</p></div></div>
        <section className="case-section" aria-labelledby="approach-title">
          <div><p className="eyebrow">01 / Technical approach</p><h2 id="approach-title">One workflow.<br />Four responsibilities.</h2></div>
          <ol className="case-steps">
            <li><span className="step-number">01</span><div><h3>Collect & prepare</h3><p>Bring financial data from CSV files, JSON, and APIs into the workflow. A dedicated collection agent prepares the inputs for analysis.</p></div></li>
            <li><span className="step-number">02</span><div><h3>Look for unusual patterns</h3><p>Use Isolation Forest to detect anomalies and surface potential risk for review. An anomaly is a signal to investigate, rather than proof of fraud.</p></div></li>
            <li><span className="step-number">03</span><div><h3>Forecast financial trends</h3><p>Use Prophet for time-series forecasting. LangGraph coordinates the agents so the analytical outputs can feed into the reporting stage.</p></div></li>
            <li><span className="step-number">04</span><div><h3>Make the findings usable</h3><p>Present results through a Flask interface with Tailwind CSS and interactive Plotly charts. The reporting agent brings findings together in a natural-language report.</p></div></li>
          </ol>
        </section>
        <section className="case-section case-outcome" aria-labelledby="outcome-title">
          <div><p className="eyebrow">02 / Deliverable</p><h2 id="outcome-title">Analysis people<br />can work with.</h2></div>
          <div className="case-outcome-copy"><p>The implementation combines automated analysis with a web interface for reviewing the results.</p><ul className="outcome-list"><li>Interactive visualizations of financial data</li><li>Risk flags produced by anomaly detection</li><li>Time-series forecasts using Prophet</li><li>Downloadable PDF reports that consolidate findings</li></ul><p className="evidence-note">This case study describes the implemented workflow. No benchmark or measured business impact is claimed.</p></div>
        </section>
        <section className="case-stack" aria-labelledby="stack-title"><h2 id="stack-title">Tools behind the work</h2><ul className="tech-tags"><li>Python</li><li>LangGraph</li><li>LangChain</li><li>OpenAI API</li><li>Scikit-learn</li><li>Prophet</li><li>Flask</li><li>Plotly</li><li>Tailwind CSS</li></ul></section>
      </article>
      <Contact />
    </main>
    <Footer />
  </>;
}
