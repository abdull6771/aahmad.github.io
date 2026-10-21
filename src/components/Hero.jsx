import React from "react";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="hero container" id="hero">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow hero-intro">Abdullahi Ahmad <span aria-hidden="true">/</span> Machine Learning Engineer</p>
          <h1>Machine learning.<br />Built for the<br /><em>real world.</em></h1>
          <p className="hero-description">I’m a Machine Learning Engineer at TerraHaptix in Abuja. I develop models for autonomous robotics and build agentic AI and retrieval systems that turn complex data into useful tools.</p>
          <div className="hero-actions">
            <Link className="button" to="/#projects">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" to="/#contact">Get in touch <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="availability"><span aria-hidden="true" />Global Grand Prize · Huawei ICT Competition 2023</p>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame">
            <img src={import.meta.env.BASE_URL + "portrait.webp"} srcSet={import.meta.env.BASE_URL + "portrait-small.webp 360w, " + import.meta.env.BASE_URL + "portrait.webp 683w"} sizes="(max-width: 720px) 135px, (max-width: 1000px) 32vw, 340px" alt="Abdullahi Ahmad, machine learning engineer" width="683" height="1024" fetchpriority="high" />
            <span className="portrait-mark" aria-hidden="true">aa.</span>
          </div>
          <figcaption><span>Abuja, Nigeria.<br />Research-informed engineering.</span><span className="portrait-coordinate" aria-hidden="true">NG ↗</span></figcaption>
        </figure>
      </div>
      <div className="focus-strip" aria-label="Areas of focus">
        <span className="eyebrow">Research into practice</span>
        <span>RAG & AI agents</span><span>Computer vision & robotics</span><span>Network telemetry & security</span>
      </div>
    </header>
  );
}
