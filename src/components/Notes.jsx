import React from "react";

const articles = [
  { date: "May 2025", title: "Building a RAG system with LangChain, Pinecone, and ChromaDB", description: "A walkthrough of document ingestion, embeddings, vector retrieval, and local inference.", url: "https://medium.com/@abdulll8392/building-a-retrieval-augmented-generation-rag-system-with-langchain-pinecone-and-chromadb-187827c46c3b" },
  { date: "Feb 2024", title: "How to connect an LLM to a SQL database with LlamaIndex", description: "Bringing natural-language questions to structured data.", url: "https://medium.com/@abdulll8392/how-to-connect-llm-to-sql-database-with-llamaindex-b40291cb071d" },
  { date: "Feb 2024", title: "Chat with your documents using LlamaIndex", description: "An introduction to retrieval-augmented generation for document question answering.", url: "https://medium.com/@abdulll8392/chat-with-your-documents-retrieval-augmented-generation-using-llama-index-3d264fddbcb5" },
];

export default function Notes() {
  return <section id="notes" className="section writing-section" aria-labelledby="writing-title">
    <div className="container">
      <div className="section-heading"><div><p className="eyebrow">04 / Field notes</p><h2 id="writing-title">Learning, out loud.</h2></div><p>Practical notes from working with language models, retrieval, and data.</p></div>
      <div className="writing-list">{articles.map(article => <a className="writing-row" href={article.url} key={article.url} target="_blank" rel="noopener noreferrer">
        <span className="writing-date">{article.date}<small>Medium</small></span>
        <div><h3>{article.title}</h3><p>{article.description}</p></div><span className="writing-arrow" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
      </a>)}</div>
    </div>
  </section>;
}
