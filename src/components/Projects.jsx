import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects = [
    {
      title: "SmartFin Analytics",
      description:
        "Multi-Agent Financial Analysis System using LangGraph for risk analysis and fraud detection.",
      details: [
        "Implemented Isolation Forest for anomaly detection and Prophet for forecasting.",
        "Built responsive Flask web interface with Tailwind CSS.",
      ],
      date: "Sept 2025",
      tech: "LangGraph",
      category: "AI Agents",
      link: "/case-study-smartfin",
      demo: null,
      isRouter: true,
      github: "https://github.com/aahmad/smartfin-analytics",
      readingTime: 8,
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06628ca6ba0?w=600&h=400&fit=crop",
      ],
      codeSnippet: `import LangGraph
from langgraph.graph import StateGraph

# Multi-agent financial analysis system
def create_financial_agent():
    workflow = StateGraph()
    workflow.add_node("analyzer", analyze_risk)
    workflow.add_node("detector", detect_fraud)
    return workflow.compile()`,
      tableOfContents: [
        { id: "overview", title: "System Overview", level: 1 },
        { id: "architecture", title: "Architecture Design", level: 1 },
        { id: "features", title: "Key Features", level: 1 },
        { id: "results", title: "Results & Impact", level: 1 },
      ],
    },
    {
      title: "ESG Communication Dashboard",
      description:
        "Comprehensive dashboard for ESG (Environmental, Social, Governance) communication and analytics.",
      details: [
        "Interactive React dashboard with real-time analytics.",
        "Vercel deployed for production scalability.",
      ],
      date: "2024",
      tech: "React",
      category: "Web",
      link: "https://esg-communication-dashboard-e3hj.vercel.app/",
      demo: "https://esg-communication-dashboard-e3hj.vercel.app/",
      isRouter: false,
      github: "https://github.com/aahmad/esg-dashboard",
      readingTime: 6,
      screenshots: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1633356122544-f134ef2944f5?w=600&h=400&fit=crop",
      ],
      codeSnippet: `// React ESG Dashboard Component
const ESGDashboard = () => {
  const [metrics, setMetrics] = useState({
    environmental: 85,
    social: 78,
    governance: 92
  });
  
  return <ESGVisualization data={metrics} />
};`,
      tableOfContents: [
        { id: "dashboard", title: "Dashboard Features", level: 1 },
        { id: "metrics", title: "ESG Metrics", level: 1 },
        { id: "reports", title: "Report Generation", level: 1 },
      ],
    },
    {
      title: "Islamic Digital Economy",
      description:
        "OIC Islamic Digital Economy dashboard with data visualization and insights.",
      details: [
        "Real-time data processing and visualization.",
        "Responsive design for all devices.",
      ],
      date: "2024",
      tech: "React",
      category: "Web",
      link: "https://oic-islamic-digital-economy-dashboa.vercel.app/",
      demo: "https://oic-islamic-digital-economy-dashboa.vercel.app/",
      isRouter: false,
      github: "https://github.com/aahmad/islamic-digital-economy",
      readingTime: 7,
      screenshots: [
        "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1611974572748-a83db0042908?w=600&h=400&fit=crop",
      ],
      codeSnippet: `// Islamic Digital Economy Data Pipeline
const fetchEconomyData = async () => {
  const response = await fetch('/api/islamic-economy');
  return response.json().then(data => 
    transformEconomyMetrics(data)
  );
};`,
      tableOfContents: [
        { id: "intro", title: "Introduction", level: 1 },
        { id: "data", title: "Data Sources", level: 1 },
        { id: "analysis", title: "Market Analysis", level: 1 },
      ],
    },
    {
      title: "Customer Segmentation Platform",
      description:
        "End-to-End analytics platform to segment customers and drive marketing strategies.",
      details: [
        "Unsupervised clustering (K-Means) for 5 personas.",
        "Predictive model (Random Forest) with 95%+ accuracy.",
        "Streamlit dashboard.",
      ],
      date: "Aug 2025",
      tech: "Python",
      category: "ML",
      link: "#",
      demo: null,
      isRouter: false,
      github: "https://github.com/aahmad/customer-segmentation",
      readingTime: 12,
      screenshots: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      ],
      codeSnippet: `# Customer Segmentation with Python
from sklearn.cluster import KMeans
import pandas as pd

def segment_customers(data, k=5):
    kmeans = KMeans(n_clusters=k)
    segments = kmeans.fit_predict(data)
    return pd.DataFrame({
        'customer_id': data.index,
        'segment': segments
    })`,
      tableOfContents: [
        { id: "methodology", title: "Methodology", level: 1 },
        { id: "models", title: "ML Models", level: 1 },
        { id: "evaluation", title: "Model Evaluation", level: 1 },
      ],
    },
    {
      title: "AI Phishing Detector",
      description:
        'Machine learning pipeline to classify emails as "Phishing" or "Safe".',
      details: [
        "99% accuracy with advanced text/metadata features.",
        "Interactive Streamlit web application.",
      ],
      date: "Sept 2025",
      tech: "NLP",
      category: "ML",
      link: "#",
      demo: null,
      isRouter: false,
      github: "https://github.com/aahmad/phishing-detector",
      readingTime: 10,
      screenshots: [
        "https://images.unsplash.com/photo-1505373877441-efb5b360868d?w=600&h=400&fit=crop",
      ],
      codeSnippet: `# Phishing Detection NLP Model
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import TfidfVectorizer

def train_detector(emails, labels):
    vectorizer = TfidfVectorizer(max_features=1000)
    X = vectorizer.fit_transform(emails)
    model = RandomForestClassifier()
    return model.fit(X, labels)`,
      tableOfContents: [
        { id: "features", title: "Feature Engineering", level: 1 },
        { id: "training", title: "Model Training", level: 1 },
        { id: "deployment", title: "Deployment Strategy", level: 1 },
      ],
    },
    {
      title: "SmartWaste AI Robot",
      description:
        "AI robot using deep learning to detect non-biodegradable waste.",
      details: [
        "Robotic arm for waste disposal.",
        "Spearheaded prototype development.",
      ],
      date: "2023",
      tech: "Robotics",
      category: "Computer Vision",
      link: "#",
      demo: null,
      isRouter: false,
      github: "https://github.com/aahmad/smartwaste-robot",
      readingTime: 11,
      screenshots: [
        "https://images.unsplash.com/photo-1485033635556-53de3c3d8e72?w=600&h=400&fit=crop",
      ],
      codeSnippet: `# SmartWaste Robot Vision System
import cv2
from yolov5 import YOLOv5

def detect_waste(frame):
    model = YOLOv5('nano')
    results = model(frame)
    return results.pandas().xyxy[0]`,
      tableOfContents: [
        { id: "vision", title: "Computer Vision", level: 1 },
        { id: "robotics", title: "Robotics Integration", level: 1 },
        { id: "sustainability", title: "Sustainability Impact", level: 1 },
      ],
    },
    {
      title: "Network Failure Prediction",
      description: "ML Model to predict Network failure on CNFs 5G C.",
      details: ["LSTM model with 88.3% accuracy.", "eBPF integration."],
      date: "2022",
      tech: "LSTM",
      category: "ML",
      link: "#",
      demo: null,
      isRouter: false,
      github: "https://github.com/aahmad/network-prediction",
      readingTime: 9,
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      ],
      codeSnippet: `# 5G Network Failure Prediction with LSTM
import tensorflow as tf
from tensorflow.keras.layers import LSTM

def create_lstm_model(input_shape):
    model = tf.keras.Sequential([
        LSTM(64, return_sequences=True),
        LSTM(32),
        tf.keras.layers.Dense(1)
    ])
    return model`,
      tableOfContents: [
        { id: "intro", title: "5G Networks", level: 1 },
        { id: "lstm", title: "LSTM Architecture", level: 1 },
        { id: "results", title: "Prediction Results", level: 1 },
      ],
    },
    {
      title: "NeuroScan",
      description: "AI-Powered Brain Tumor Classification Using Deep Learning.",
      details: [
        "Advanced computer vision techniques.",
        "High accuracy in medical image classification.",
      ],
      date: "2024",
      tech: "Computer Vision",
      category: "Computer Vision",
      link: "#",
      demo: null,
      isRouter: false,
      github: "https://github.com/aahmad/neuroscan",
      readingTime: 13,
      screenshots: [
        "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=400&fit=crop",
      ],
      codeSnippet: `# Brain Tumor Classification with Deep Learning
import tensorflow as tf
from tensorflow.keras.applications import ResNet50

def create_tumor_classifier():
    base_model = ResNet50(weights='imagenet')
    model = tf.keras.Sequential([
        base_model,
        tf.keras.layers.GlobalAveragePooling2D(),
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Dense(3, activation='softmax')
    ])
    return model`,
      tableOfContents: [
        { id: "medical", title: "Medical Imaging", level: 1 },
        { id: "cnn", title: "CNN Architecture", level: 1 },
        { id: "clinical", title: "Clinical Application", level: 1 },
      ],
    },
    {
      title: "Personal Calendar Assistant",
      description:
        "AI-Powered Calendar Super-Assistant Using LangChain and OpenAI.",
      details: ["Advanced NLP for task scheduling."],
      date: "2025",
      tech: "LangChain",
      category: "AI Agents",
      link: "#",
      demo: null,
      isRouter: false,
      github: "https://github.com/aahmad/calendar-ai",
      readingTime: 7,
      screenshots: [
        "https://images.unsplash.com/photo-1633356122544-f134ef2944f5?w=600&h=400&fit=crop",
      ],
      codeSnippet: `# AI Calendar Assistant with LangChain
from langchain.agents import initialize_agent

def create_calendar_agent():
    agent = initialize_agent(
        tools=[calendar_tool],
        llm=ChatOpenAI(),
        verbose=True
    )
    return agent`,
      tableOfContents: [
        { id: "nlp", title: "NLP Processing", level: 1 },
        { id: "scheduling", title: "Smart Scheduling", level: 1 },
      ],
    },
    {
      title: "PDF Summarizer",
      description: "Intelligent PDF Summarizer Web Application.",
      details: ["Document understanding and summarization."],
      date: "2025",
      tech: "OpenAI",
      category: "AI Agents",
      link: "#",
      demo: null,
      isRouter: false,
      github: "https://github.com/aahmad/pdf-summarizer",
      readingTime: 6,
      screenshots: [
        "https://images.unsplash.com/photo-1585373365913-11c6e90d1a91?w=600&h=400&fit=crop",
      ],
      codeSnippet: `# PDF Summarization with OpenAI
import PyPDF2
from openai import OpenAI

def summarize_pdf(pdf_path):
    text = extract_pdf_text(pdf_path)
    response = OpenAI.ChatCompletion.create(
        model="gpt-4",
        messages=[{
            "role": "user",
            "content": f"Summarize: {text}"
        }]
    )
    return response.choices[0].message.content`,
      tableOfContents: [
        { id: "extraction", title: "Text Extraction", level: 1 },
        { id: "summary", title: "Summary Generation", level: 1 },
      ],
    },
  ];

  // Get unique technologies
  const techs = ["All", ...new Set(projects.map((p) => p.tech))];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesTech = selectedTech === "All" || project.tech === selectedTech;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTech && matchesSearch;
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setCurrentScreenshot(0);
  };

  return (
    <section
      id="projects"
      className="section"
      style={{ backgroundColor: "var(--bg-surface-2)" }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Search and Filter */}
        <div className="projects-controls">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="tech-filter">
            {techs.map((tech) => (
              <button
                key={tech}
                className={`filter-btn ${selectedTech === tech ? "active" : ""}`}
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="projects-count">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card-3d"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              onMouseMove={handleMouseMove}
            >
              <div className="project-card-inner">
                <div className="project-card">
                  <div className="project-glow"></div>
                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-actions">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn demo-btn"
                            title="View Demo"
                          >
                            <i className="fas fa-play"></i>
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn github-btn"
                            title="View on GitHub"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                        )}
                        {project.isRouter ? (
                          <Link to={project.link} className="project-btn">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                        ) : (
                          <a
                            href={project.link}
                            className="project-btn"
                            onClick={(e) => {
                              if (project.link === "#") {
                                e.preventDefault();
                                openProjectDetail(project);
                              }
                            }}
                          >
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                        )}
                        <button
                          className="project-btn details-btn"
                          title="View Details"
                          onClick={() => openProjectDetail(project)}
                        >
                          <i className="fas fa-expand"></i>
                        </button>
                      </div>
                    </div>
                    <div className="project-desc">
                      {project.description}
                      <ul>
                        {project.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-footer">
                      <div className="project-meta">
                        <span className="project-date">{project.date}</span>
                        <span className="reading-time">
                          <i className="fas fa-clock"></i> {project.readingTime}{" "}
                          min
                        </span>
                      </div>
                      <div className="project-tags">
                        <span className="badge">{project.tech}</span>
                        <span className="category-badge">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <p>No projects match your criteria</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-content">
              {/* Screenshot Carousel */}
              {selectedProject.screenshots &&
                selectedProject.screenshots.length > 0 && (
                  <div className="screenshots-carousel">
                    <div className="carousel-main">
                      <motion.img
                        key={currentScreenshot}
                        src={selectedProject.screenshots[currentScreenshot]}
                        alt={`${selectedProject.title} screenshot ${currentScreenshot + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    {selectedProject.screenshots.length > 1 && (
                      <div className="carousel-controls">
                        <button
                          className="carousel-btn"
                          onClick={() =>
                            setCurrentScreenshot(
                              currentScreenshot === 0
                                ? selectedProject.screenshots.length - 1
                                : currentScreenshot - 1,
                            )
                          }
                        >
                          <i className="fas fa-chevron-left"></i>
                        </button>
                        <div className="carousel-indicators">
                          {selectedProject.screenshots.map((_, i) => (
                            <button
                              key={i}
                              className={`indicator ${
                                i === currentScreenshot ? "active" : ""
                              }`}
                              onClick={() => setCurrentScreenshot(i)}
                            ></button>
                          ))}
                        </div>
                        <button
                          className="carousel-btn"
                          onClick={() =>
                            setCurrentScreenshot(
                              (currentScreenshot + 1) %
                                selectedProject.screenshots.length,
                            )
                          }
                        >
                          <i className="fas fa-chevron-right"></i>
                        </button>
                      </div>
                    )}
                  </div>
                )}

              {/* Header */}
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <div className="modal-meta">
                  <span className="reading-time">
                    <i className="fas fa-book"></i>{" "}
                    {selectedProject.readingTime} min read
                  </span>
                  <span className="modal-category">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Table of Contents */}
              {selectedProject.tableOfContents &&
                selectedProject.tableOfContents.length > 0 && (
                  <div className="table-of-contents">
                    <h3>Table of Contents</h3>
                    <ul>
                      {selectedProject.tableOfContents.map((item) => (
                        <li
                          key={item.id}
                          style={{ marginLeft: `${(item.level - 1) * 16}px` }}
                        >
                          <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Description */}
              <div className="modal-description">
                <p>{selectedProject.description}</p>
                <ul>
                  {selectedProject.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              {/* Code Snippet */}
              {selectedProject.codeSnippet && (
                <div className="code-snippet-container">
                  <div className="code-snippet-header">
                    <i className="fas fa-code"></i>
                    <span>Code Sample</span>
                    <button
                      className="copy-btn"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          selectedProject.codeSnippet,
                        );
                        alert("Code copied to clipboard!");
                      }}
                    >
                      <i className="fas fa-copy"></i> Copy
                    </button>
                  </div>
                  <pre>
                    <code>{selectedProject.codeSnippet}</code>
                  </pre>
                </div>
              )}

              {/* Action Buttons */}
              <div className="modal-actions">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn primary"
                  >
                    <i className="fas fa-play"></i> View Live Demo
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn secondary"
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
