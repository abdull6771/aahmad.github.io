import React from "react";
import { Link } from "react-router-dom";
import SystemDiagram from "./SystemDiagram";
import { featuredProjects, researchProjects, additionalWork } from "../data/projects";

function Technologies({ items, label }) {
  return <ul className="tech-tags" aria-label={label}>{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export default function Projects() {
  return <section id="projects" className="section work-section" aria-labelledby="work-title">
    <div className="container">
      <div className="section-heading">
        <div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">From a question<br />to a working system.</h2></div>
        <p>Research and engineering across agentic AI, knowledge retrieval, computer vision, and network telemetry.</p>
      </div>
      {featuredProjects.map((project, index) => <article className={"featured-project" + (index % 2 ? " secondary-project" : "")} key={project.title}>
        {index % 2 === 0 && <SystemDiagram variant={project.diagram} />}
        <div className="project-story">
          <p className="project-kicker">{project.category}<span>{project.date}</span></p>
          <h3>{project.title}</h3>
          <p className="project-deck">{project.deck}</p>
          <dl className="project-facts">
            <div><dt>The problem</dt><dd>{project.problem}</dd></div>
            <div><dt>My contribution</dt><dd>{project.approach}</dd></div>
            <div><dt>The outcome</dt><dd>{project.outcome}</dd></div>
          </dl>
          <Technologies items={project.technologies} label={project.title + " technologies"} />
          {project.diagram === "agents"
            ? <Link className="text-link project-link" to="/#publications">Explore the research <span aria-hidden="true">↗</span></Link>
            : <Link className="text-link project-link" to="/#contact">Discuss this work <span aria-hidden="true">↗</span></Link>}
        </div>
        {index % 2 === 1 && <SystemDiagram variant={project.diagram} />}
      </article>)}
      <div className="project-archive">
        <div className="archive-heading"><h3>More research & applied work</h3><p>Expand a project for its approach and documented outcomes.</p></div>
        <div className="archive-list">{researchProjects.map((project, index) => <details className="archive-item" key={project.title}>
          <summary><span className="archive-number">{String(index + 3).padStart(2, "0")}</span><h4>{project.title}</h4><span className="archive-category">{project.category}</span><span className="disclosure-icon" aria-hidden="true">+</span></summary>
          <div className="archive-content">
            <p className="archive-mobile-category">{project.category}</p>
            <p className="archive-description">{project.problem}</p>
            <dl><div><dt>My contribution</dt><dd>{project.approach}</dd></div><div><dt>Documented outcome</dt><dd>{project.outcome}</dd></div></dl>
            {project.note && <p className="project-evidence">{project.note}</p>}
            <Technologies items={project.technologies} label={project.title + " technologies"} />
            {project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">View source <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
          </div>
        </details>)}</div>
      </div>
      <div className="additional-work">
        <div className="archive-heading"><h3>Elsewhere in my portfolio</h3><p>More code, dashboards, and an earlier case study.</p></div>
        <ul className="additional-work-list">
          {additionalWork.map(project => <li key={project.url}><a href={project.url} target="_blank" rel="noopener noreferrer"><span>{project.title}<small>{project.type}</small></span><span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></li>)}
          <li><Link to="/case-study-smartfin"><span>SmartFin Analytics<small>Case study</small></span><span aria-hidden="true">↗</span></Link></li>
        </ul>
      </div>
    </div>
  </section>;
}
