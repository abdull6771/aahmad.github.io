import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LighthouseScore() {
  const [metrics, setMetrics] = useState({
    performance: 92,
    accessibility: 98,
    bestPractices: 95,
    seo: 100,
  });

  // Animate counter
  const AnimatedNumber = ({ value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = value;
      const duration = 2;
      const increment = end / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, [value]);

    return (
      <div className="metric-item">
        <div className="metric-circle">
          <svg className="metric-ring" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="metric-ring-bg" />
            <circle
              cx="50"
              cy="50"
              r="45"
              className="metric-ring-fill"
              style={{
                strokeDasharray: `${count * 2.83} 282.7`,
              }}
            />
          </svg>
          <div className="metric-value">{count}</div>
        </div>
        <div className="metric-label">{label}</div>
      </div>
    );
  };

  const scoreColor = (score) => {
    if (score >= 90) return "text-green-400";
    if (score >= 80) return "text-yellow-400";
    if (score >= 70) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <section className="lighthouse-section">
      <div className="container">
        <div className="lighthouse-container">
          <div className="lighthouse-content">
            <div className="section-header">
              <span className="section-subtitle">Quality Metrics</span>
              <h2 className="section-title">Performance & Quality</h2>
              <p className="section-description">
                Built with performance, accessibility, and best practices in
                mind. Lighthouse audit results demonstrate commitment to quality
                web standards.
              </p>
            </div>

            <div className="metrics-grid">
              <AnimatedNumber value={metrics.performance} label="Performance" />
              <AnimatedNumber
                value={metrics.accessibility}
                label="Accessibility"
              />
              <AnimatedNumber
                value={metrics.bestPractices}
                label="Best Practices"
              />
              <AnimatedNumber value={metrics.seo} label="SEO" />
            </div>

            <div className="lighthouse-badges">
              <motion.div
                className="built-with-badge"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="badge-content">
                  <i className="fas fa-React"></i>
                  <span>Built with React</span>
                </div>
              </motion.div>

              <motion.div
                className="built-with-badge"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="badge-content">
                  <i className="fas fa-wind"></i>
                  <span>Tailwind CSS</span>
                </div>
              </motion.div>

              <motion.div
                className="built-with-badge"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="badge-content">
                  <i className="fas fa-bolt"></i>
                  <span>Lightning Fast</span>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="lighthouse-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="lighthouse-chart">
              <div className="chart-center">
                <div className="overall-score">100</div>
              </div>
              <svg className="chart-svg" viewBox="0 0 200 200">
                <defs>
                  <linearGradient
                    id="scoreGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4cb050" />
                    <stop offset="100%" stopColor="#45a049" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="url(#scoreGradient)"
                  strokeWidth="12"
                  strokeDasharray="565 565"
                  strokeLinecap="round"
                  className="chart-animation"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
