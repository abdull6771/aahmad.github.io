import React from "react";

const diagrams = {
  finance: {
    title: "SMARTFIN",
    input: ["Financial data", "CSV · JSON · APIs"],
    core: ["LangGraph orchestration", "Purpose-built agents, one workflow"],
    branches: [["Detect", "Isolation Forest"], ["Forecast", "Prophet"], ["Report", "Insights & PDF"]],
    caption: "From fragmented data to a structured financial report.",
  },
  medical: {
    title: "KNOWLEDGE GRAPH RAG",
    input: ["39,000+ UMLS concepts", "Enriched with PubMed literature"],
    core: ["Hybrid retrieval", "Vectors + graph context"],
    branches: [["Retrieve", "Qdrant"], ["Traverse", "Neo4j"], ["Evaluate", "RAGAS"]],
    caption: "GPT-4 tool calling · Gradio interface · Docker",
  },
  agents: {
    title: "MULTI-AGENT RESEARCH",
    input: ["Multi-step work", "Tasks, tools, and shared context"],
    core: ["LangGraph coordination", "Role-specialized agents · shared state"],
    branches: [["Develop", "SDLC workflows"], ["Code", "Generation & analysis"], ["Analyze", "Startup research"]],
    caption: "Three research directions. Manuscripts in preparation.",
  },
};

export default function SystemDiagram({ variant = "finance" }) {
  const diagram = diagrams[variant] || diagrams.finance;
  return (
    <figure className={"system-diagram diagram-" + (variant === "agents" ? "retrieval" : variant)}>
      <div className="diagram-topline"><span>{diagram.title}</span><span>System overview <span aria-hidden="true">↗</span></span></div>
      <div className="diagram-flow">
        <div className="flow-node input-node"><span className="node-symbol" aria-hidden="true">≋</span><div><strong>{diagram.input[0]}</strong><span>{diagram.input[1]}</span></div></div>
        <span className="flow-connector" aria-hidden="true">↓</span>
        <div className="flow-node orchestrator"><span className="node-symbol" aria-hidden="true">⌘</span><div><strong>{diagram.core[0]}</strong><span>{diagram.core[1]}</span></div></div>
        <span className="flow-connector" aria-hidden="true">↓</span>
        <div className="flow-branches">{diagram.branches.map(([name, detail], index) => <div className="branch" key={name}><span className="branch-index">{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><span>{detail}</span></div>)}</div>
      </div>
      <figcaption>{diagram.caption}<span>Architecture illustration</span></figcaption>
    </figure>
  );
}
