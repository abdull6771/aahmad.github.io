import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function IntegrationWidgets() {
  const [githubActivity, setGithubActivity] = useState([]);
  const [mediumArticles, setMediumArticles] = useState([]);
  const [loading, setLoading] = useState({
    github: true,
    medium: true,
  });

  useEffect(() => {
    // Fetch GitHub recent activity
    const fetchGithubActivity = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/aahmad/events/public?per_page=5",
        );
        const data = await response.json();
        setGithubActivity(data || []);
      } catch (error) {
        console.error("Error fetching GitHub activity:", error);
      } finally {
        setLoading((prev) => ({ ...prev, github: false }));
      }
    };

    // Fetch Medium articles - Note: Medium doesn't have an official API
    // Using RSS feed as workaround
    const fetchMediumArticles = async () => {
      try {
        // Using Medium RSS feed via CORS proxy
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ahmadfarhan",
        );
        const data = await response.json();
        setMediumArticles(data.items?.slice(0, 4) || []);
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
        // Fallback: Set empty array or sample data
        setMediumArticles([]);
      } finally {
        setLoading((prev) => ({ ...prev, medium: false }));
      }
    };

    fetchGithubActivity();
    fetchMediumArticles();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getEventDescription = (event) => {
    if (!event || !event.type) return "Activity";
    const type = event.type;
    const repo = event.repo?.name || "Repository";

    switch (type) {
      case "PushEvent":
        return `Pushed to ${repo}`;
      case "PullRequestEvent":
        return `${event.payload?.action} pull request on ${repo}`;
      case "IssuesEvent":
        return `${event.payload?.action} issue on ${repo}`;
      case "CreateEvent":
        return `Created ${event.payload?.ref_type || "resource"} on ${repo}`;
      case "DeleteEvent":
        return `Deleted ${event.payload?.ref_type || "resource"} from ${repo}`;
      case "StarEvent":
        return `Starred ${repo}`;
      default:
        return `Activity on ${repo}`;
    }
  };

  return (
    <section className="integration-widgets-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Latest Activity</span>
          <h2 className="section-title">Social Feeds & Updates</h2>
          <p className="section-description">
            Follow my real-time activity across platforms
          </p>
        </div>

        <div className="widgets-grid">
          {/* GitHub Activity */}
          <motion.div
            className="widget-card github-widget"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            viewport={{ once: true }}
          >
            <div className="widget-header">
              <div className="widget-icon">
                <i className="fab fa-github"></i>
              </div>
              <h3 className="widget-title">Recent GitHub Activity</h3>
              <a
                href="https://github.com/aahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="widget-link"
              >
                View on GitHub
              </a>
            </div>

            <div className="widget-content">
              {loading.github ? (
                <div className="loading-state">
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>Loading activity...</span>
                </div>
              ) : githubActivity.length > 0 ? (
                <div className="activity-list">
                  {githubActivity.map((event, idx) => (
                    <motion.div
                      key={idx}
                      className="activity-item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="activity-icon">
                        <i className="fas fa-code-branch"></i>
                      </div>
                      <div className="activity-content">
                        <p className="activity-title">
                          {getEventDescription(event)}
                        </p>
                        <p className="activity-date">
                          {formatDate(event.created_at)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No recent activity</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Medium Articles */}
          <motion.div
            className="widget-card medium-widget"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="widget-header">
              <div className="widget-icon">
                <i className="fab fa-medium"></i>
              </div>
              <h3 className="widget-title">Latest Articles</h3>
              <a
                href="https://medium.com/@ahmadfarhan"
                target="_blank"
                rel="noopener noreferrer"
                className="widget-link"
              >
                Read on Medium
              </a>
            </div>

            <div className="widget-content">
              {loading.medium ? (
                <div className="loading-state">
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>Loading articles...</span>
                </div>
              ) : mediumArticles.length > 0 ? (
                <div className="articles-list">
                  {mediumArticles.map((article, idx) => (
                    <motion.a
                      key={idx}
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="article-title">{article.title}</div>
                      <div className="article-meta">
                        <span className="article-date">
                          {formatDate(article.pubDate)}
                        </span>
                        <span className="article-arrow">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No articles found</p>
                  <p className="text-small">
                    Visit Medium profile to read more
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Twitter Updates */}
          <motion.div
            className="widget-card twitter-widget"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="widget-header">
              <div className="widget-icon">
                <i className="fab fa-twitter"></i>
              </div>
              <h3 className="widget-title">Recent Updates</h3>
              <a
                href="https://twitter.com/ahmadfarhan_"
                target="_blank"
                rel="noopener noreferrer"
                className="widget-link"
              >
                Follow on Twitter
              </a>
            </div>

            <div className="widget-content">
              <div className="twitter-embed-placeholder">
                <i className="fas fa-twitter"></i>
                <p>
                  Follow me on Twitter for real-time updates on AI, ML, and tech
                  insights
                </p>
                <a
                  href="https://twitter.com/ahmadfarhan_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tweet-btn"
                >
                  <i className="fab fa-twitter"></i> Follow @ahmadfarhan_
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
