import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SocialProofBadges() {
  const [socialStats, setSocialStats] = useState({
    github: { followers: 0, repos: 0, loading: true },
    twitter: { followers: 0, loading: true },
    linkedin: { followers: 0, recommendations: 0, loading: true },
  });

  useEffect(() => {
    // Fetch GitHub stats
    const fetchGithubStats = async () => {
      try {
        const response = await fetch("https://api.github.com/users/aahmad");
        const data = await response.json();
        setSocialStats((prev) => ({
          ...prev,
          github: {
            followers: data.followers || 0,
            repos: data.public_repos || 0,
            loading: false,
          },
        }));
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setSocialStats((prev) => ({
          ...prev,
          github: { ...prev.github, loading: false },
        }));
      }
    };

    fetchGithubStats();

    // Note: Twitter and LinkedIn APIs require authentication
    // For now, using placeholder values that can be manually updated
    // In production, you would use:
    // - Twitter API v2 (requires bearer token)
    // - LinkedIn API (requires OAuth)
    setSocialStats((prev) => ({
      ...prev,
      twitter: { followers: 8500, loading: false },
      linkedin: { followers: 2300, recommendations: 45, loading: false },
    }));
  }, []);

  const badges = [
    {
      id: "github",
      title: "GitHub",
      icon: "fab fa-github",
      primary: {
        label: "Followers",
        value: socialStats.github.followers,
      },
      secondary: {
        label: "Repositories",
        value: socialStats.github.repos,
      },
      link: "https://github.com/aahmad",
      color: "from-gray-600 to-gray-800",
      bgColor: "rgba(36, 41, 46, 0.1)",
    },
    {
      id: "twitter",
      title: "Twitter",
      icon: "fab fa-twitter",
      primary: {
        label: "Followers",
        value: socialStats.twitter.followers,
      },
      secondary: {
        label: "Posts",
        value: "N/A",
      },
      link: "https://twitter.com/ahmadfarhan_",
      color: "from-blue-400 to-blue-600",
      bgColor: "rgba(29, 161, 242, 0.1)",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      icon: "fab fa-linkedin",
      primary: {
        label: "Connections",
        value: socialStats.linkedin.followers,
      },
      secondary: {
        label: "Recommendations",
        value: socialStats.linkedin.recommendations,
      },
      link: "https://linkedin.com/in/ahmadfarhan",
      color: "from-blue-500 to-blue-700",
      bgColor: "rgba(0, 119, 181, 0.1)",
    },
  ];

  return (
    <section className="social-proof-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Community</span>
          <h2 className="section-title">Social Proof</h2>
        </div>

        <div className="social-badges-grid">
          {badges.map((badge, idx) => (
            <motion.a
              key={badge.id}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: badge.bgColor,
              }}
            >
              <div className="badge-header">
                <div className={`badge-icon bg-gradient-to-br ${badge.color}`}>
                  <i className={badge.icon}></i>
                </div>
                <h3 className="badge-title">{badge.title}</h3>
              </div>

              <div className="badge-stats">
                <div className="stat-item">
                  <div className="stat-value">{badge.primary.value}</div>
                  <div className="stat-label">{badge.primary.label}</div>
                </div>
                <div className="stat-separator"></div>
                <div className="stat-item">
                  <div className="stat-value">{badge.secondary.value}</div>
                  <div className="stat-label">{badge.secondary.label}</div>
                </div>
              </div>

              <div className="badge-footer">
                <span className="badge-cta">
                  Visit Profile <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
