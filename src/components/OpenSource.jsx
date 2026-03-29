import React, { useState, useEffect } from "react";

export default function OpenSource() {
  const [repos, setRepos] = useState([
    {
      name: "ESG-Communication-Dashboard",
      description:
        "Comprehensive dashboard for ESG (Environmental, Social, Governance) communication and analytics",
      url: "https://github.com/abdull6771/ESG-Communication-Dashboard",
      topics: ["React", "Dashboard", "ESG", "Analytics"],
      stars: 0,
      forks: 0,
      language: "JavaScript",
    },
    {
      name: "SecureRAG",
      description:
        "Production-ready Retrieval-Augmented Generation system with security and privacy features",
      url: "https://github.com/abdull6771/SecureRAG",
      topics: ["RAG", "LangChain", "Security", "Python"],
      stars: 0,
      forks: 0,
      language: "Python",
    },
  ]);

  useEffect(() => {
    // Fetch GitHub repo stats
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/abdull6771/repos",
        );
        const data = await response.json();

        const updatedRepos = repos.map((repo) => {
          const githubRepo = data.find((r) => r.name === repo.name);
          if (githubRepo) {
            return {
              ...repo,
              stars: githubRepo.stargazers_count,
              forks: githubRepo.forks_count,
            };
          }
          return repo;
        });

        setRepos(updatedRepos);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="opensource" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Contributions</span>
          <h2 className="section-title">Open Source Projects</h2>
        </div>

        <div className="opensource-grid">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opensource-card"
            >
              <div className="repo-header">
                <h3 className="repo-name">
                  <i className="fab fa-github"></i>
                  {repo.name}
                </h3>
                <div className="repo-stats">
                  <span className="stat">
                    <i className="fas fa-star"></i> {repo.stars}
                  </span>
                  <span className="stat">
                    <i className="fas fa-code-branch"></i> {repo.forks}
                  </span>
                </div>
              </div>

              <p className="repo-description">{repo.description}</p>

              <div className="repo-meta">
                <span className="language-badge">
                  <i className="fas fa-code"></i> {repo.language}
                </span>
              </div>

              <div className="repo-topics">
                {repo.topics.map((topic, i) => (
                  <span key={i} className="topic">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="repo-link">
                View Repository <i className="fas fa-external-link-alt"></i>
              </div>
            </a>
          ))}
        </div>

        <div className="github-cta">
          <a
            href="https://github.com/abdull6771"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <i className="fab fa-github"></i> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
