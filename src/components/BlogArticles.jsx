import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BlogArticles() {
  const articles = [
    {
      id: 1,
      title: "Building Production-Ready RAG Systems with LangChain & LangGraph",
      slug: "production-rag-langchain-langgraph",
      category: "AI Engineering",
      readingTime: 12,
      description:
        "Learn how to build scalable RAG systems in production using LangChain and LangGraph. We'll cover architecture patterns, optimization techniques, and real-world deployment strategies.",
      excerpt:
        "Discover best practices for building retrieval-augmented generation systems...",
      date: "Mar 15, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1516321317153-f06b98b9c5f4?w=500&h=300&fit=crop",
      tags: ["LangChain", "LangGraph", "RAG", "Production"],
      relatedIds: [2, 11, 13],
    },
    {
      id: 2,
      title: "How I Built a Hybrid RAG System with Qdrant + Neo4j",
      slug: "hybrid-rag-qdrant-neo4j",
      category: "Generative AI",
      readingTime: 10,
      description:
        "Combining vector databases with knowledge graphs for superior retrieval. This article covers architecture decisions and implementation details.",
      excerpt:
        "Hybrid approaches combining vector and graph databases for better results...",
      date: "Mar 10, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      tags: ["Qdrant", "Neo4j", "Vector DB", "Knowledge Graph"],
      relatedIds: [1, 10, 11],
    },
    {
      id: 3,
      title: "From PDF to Insights: Automating Document Intelligence with LLMs",
      slug: "document-intelligence-llm",
      category: "Applied AI",
      readingTime: 8,
      description:
        "Extract structured insights from unstructured documents using LLMs. Covers techniques for document parsing, entity extraction, and summarization.",
      excerpt:
        "Automate document processing and turn PDFs into actionable insights...",
      date: "Mar 5, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1585373365913-11c6e90d1a91?w=500&h=300&fit=crop",
      tags: ["LLM", "Document Processing", "NLP", "Automation"],
      relatedIds: [1, 5, 12],
    },
    {
      id: 4,
      title: "Designing Multi-Agent Systems with LangGraph (Real Use Cases)",
      slug: "multi-agent-langgraph-guide",
      category: "AI Agents",
      readingTime: 14,
      description:
        "Build sophisticated multi-agent systems using LangGraph. Includes coordination patterns, state management, and tool integration.",
      excerpt: "Master multi-agent orchestration for complex AI workflows...",
      date: "Feb 28, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1677442d019cecf8f80f1a18f0ff12cd4a90f641?w=500&h=300&fit=crop",
      tags: ["LangGraph", "Agents", "Orchestration", "Multi-Agent"],
      relatedIds: [1, 13, 11],
    },
    {
      id: 5,
      title: "End-to-End AI System for Financial Data Extraction",
      slug: "ai-financial-data-extraction",
      category: "Data Engineering",
      readingTime: 11,
      description:
        "Build a complete pipeline for extracting and processing financial data using AI. Covers data validation, error handling, and integration.",
      excerpt:
        "Extract financial insights from unstructured data automatically...",
      date: "Feb 22, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["Finance", "Data Pipeline", "ETL", "AI"],
      relatedIds: [3, 12, 14],
    },
    {
      id: 6,
      title: "How I Won the Huawei ICT Competition (Lessons & Strategy)",
      slug: "huawei-ict-competition-guide",
      category: "Career",
      readingTime: 9,
      description:
        "My journey winning the Huawei ICT Competition. Learn strategies, preparation tips, and insights from the competition.",
      excerpt: "Behind the scenes of winning a major tech competition...",
      date: "Feb 15, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      tags: ["Career", "Competition", "Growth", "Tech"],
      relatedIds: [9, 14, 15],
    },
    {
      id: 7,
      title: "Building an AI Phishing Detection System (99% Accuracy)",
      slug: "phishing-detection-ml",
      category: "Machine Learning",
      readingTime: 10,
      description:
        "Develop a high-accuracy phishing detection system using machine learning. Covers feature engineering, model selection, and deployment.",
      excerpt: "Protect against phishing with advanced ML detection...",
      date: "Feb 10, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1505373877441-efb5b360868d?w=500&h=300&fit=crop",
      tags: ["Security", "ML", "NLP", "Classification"],
      relatedIds: [8, 9, 12],
    },
    {
      id: 8,
      title: "SmartWaste: Building an AI-Powered Recycling Robot",
      slug: "ai-waste-robot",
      category: "Computer Vision",
      readingTime: 13,
      description:
        "Design and implement an AI-powered robot for waste sorting. Covers computer vision, robotics integration, and real-world deployment.",
      excerpt: "Combine AI and robotics for sustainable waste management...",
      date: "Feb 5, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1485033635556-53de3c3d8e72?w=500&h=300&fit=crop",
      tags: ["Computer Vision", "Robotics", "Sustainability", "Hardware"],
      relatedIds: [7, 14, 9],
    },
    {
      id: 9,
      title: "Customer Segmentation System with ML (Production Guide)",
      slug: "customer-segmentation-ml",
      category: "Machine Learning",
      readingTime: 11,
      description:
        "Build a production-ready customer segmentation system. Covers clustering, RFM analysis, and business implementation.",
      excerpt: "Segment customers effectively for targeted marketing...",
      date: "Jan 30, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      tags: ["Clustering", "RFM", "Analytics", "Business"],
      relatedIds: [7, 5, 14],
    },
    {
      id: 10,
      title: "Building a Medical Knowledge Graph with LLMs",
      slug: "medical-knowledge-graph-llm",
      category: "AI + Healthcare",
      readingTime: 12,
      description:
        "Create a knowledge graph for medical information using LLMs. Covers entity extraction, relationship mapping, and healthcare applications.",
      excerpt:
        "Organize medical knowledge for intelligent healthcare systems...",
      date: "Jan 25, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=500&h=300&fit=crop",
      tags: ["Healthcare", "Knowledge Graph", "LLM", "Biomedical"],
      relatedIds: [2, 1, 3],
    },
    {
      id: 11,
      title: "LangChain vs LangGraph: When to Use Each",
      slug: "langchain-vs-langgraph",
      category: "AI Architecture",
      readingTime: 7,
      description:
        "Comprehensive comparison of LangChain and LangGraph. Understand when to use each framework and how they complement each other.",
      excerpt: "Choose the right framework for your AI application...",
      date: "Jan 20, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      tags: ["LangChain", "LangGraph", "Architecture", "Comparison"],
      relatedIds: [1, 4, 2],
    },
    {
      id: 12,
      title: "Deploying AI Apps with Streamlit & Gradio (Full Guide)",
      slug: "deploy-ai-streamlit-gradio",
      category: "MLOps",
      readingTime: 10,
      description:
        "Deploy AI models quickly using Streamlit and Gradio. Covers setup, deployment, and scaling for production.",
      excerpt: "Get your AI apps live in minutes...",
      date: "Jan 15, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134ef2944f5?w=500&h=300&fit=crop",
      tags: ["Deployment", "Streamlit", "Gradio", "MLOps"],
      relatedIds: [3, 7, 5],
    },
    {
      id: 13,
      title: "Building a Text-to-SQL Agent for Analytics Dashboards",
      slug: "text-to-sql-agent",
      category: "AI Agents",
      readingTime: 9,
      description:
        "Create intelligent SQL query agent using LLMs. Convert natural language to SQL for analytics and data exploration.",
      excerpt: "Enable non-technical users to query databases with AI...",
      date: "Jan 10, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["SQL", "Agents", "Analytics", "NLP"],
      relatedIds: [4, 1, 11],
    },
    {
      id: 14,
      title:
        "How to Structure a Production AI Project (From Idea to Deployment)",
      slug: "production-ai-system-design",
      category: "System Design",
      readingTime: 13,
      description:
        "Learn the complete lifecycle of a production AI system. Covers architecture, testing, monitoring, and deployment best practices.",
      excerpt: "Build AI systems that scale and perform reliably...",
      date: "Jan 5, 2024",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      tags: ["Architecture", "Production", "Design", "Best Practices"],
      relatedIds: [6, 12, 11],
    },
    {
      id: 15,
      title: "AI in Nigeria: Opportunities in Digital Economy Data",
      slug: "ai-nigeria-digital-economy",
      category: "Thought Leadership",
      readingTime: 8,
      description:
        "Explore AI opportunities in Nigeria's digital economy. Discusses market trends, applications, and future directions.",
      excerpt: "How AI is transforming Africa's digital landscape...",
      date: "Dec 28, 2023",
      author: "Ahmad Farhan",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      tags: ["Africa", "Digital Economy", "Thought Leadership", "Trends"],
      relatedIds: [6, 14, 11],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ["All", ...new Set(articles.map((a) => a.category))];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const getRelatedArticles = (articleId) => {
    const article = articles.find((a) => a.id === articleId);
    if (!article) return [];
    return article.relatedIds
      .map((id) => articles.find((a) => a.id === id))
      .filter(Boolean)
      .slice(0, 3);
  };

  const shareArticle = (article, platform) => {
    const url = `https://aahmad.dev/blog/${article.slug}`;
    const title = article.title;
    const description = article.description;

    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title,
        )}&url=${encodeURIComponent(url)}&via=ahmadfarhan_`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url,
        )}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url,
        )}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        return;
      default:
        break;
    }
    if (shareUrl) window.open(shareUrl, "_blank");
  };

  return (
    <section className="blog-articles-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Insights & Knowledge</span>
          <h2 className="section-title">Technical Articles</h2>
          <p className="section-description">
            In-depth articles on AI, Machine Learning, System Design, and more.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="blog-controls">
          <div className="blog-search">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="blog-search-input"
            />
          </div>

          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="blog-count">
          {filteredArticles.length} article
          {filteredArticles.length !== 1 ? "s" : ""} found
        </div>

        {/* Articles Grid */}
        <div className="articles-grid">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              className="article-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedArticle(article)}
            >
              <div className="article-image">
                <img src={article.image} alt={article.title} />
                <div className="article-overlay">
                  <span className="read-more">Read Article</span>
                </div>
              </div>

              <div className="article-content">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-reading-time">
                    {article.readingTime} min read
                  </span>
                </div>

                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>

                <div className="article-footer">
                  <div className="article-info">
                    <span className="article-date">{article.date}</span>
                  </div>
                  <button
                    className="article-link-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedArticle(article);
                    }}
                  >
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="no-articles">
            <i className="fas fa-search"></i>
            <p>No articles found matching your criteria</p>
          </div>
        )}

        {/* Article Detail Modal */}
        {selectedArticle && (
          <motion.div
            className="article-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="article-modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedArticle(null)}
              >
                <i className="fas fa-times"></i>
              </button>

              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="modal-image"
              />

              <div className="modal-content">
                <div className="modal-meta">
                  <span className="modal-category">
                    {selectedArticle.category}
                  </span>
                  <span className="modal-reading-time">
                    {selectedArticle.readingTime} min read
                  </span>
                  <span className="modal-date">{selectedArticle.date}</span>
                </div>

                <h1 className="modal-title">{selectedArticle.title}</h1>
                <p className="modal-description">
                  {selectedArticle.description}
                </p>

                {/* Tags */}
                <div className="modal-tags">
                  {selectedArticle.tags.map((tag) => (
                    <span key={tag} className="modal-tag">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Share Buttons */}
                <div className="share-section">
                  <span className="share-label">Share this article:</span>
                  <div className="share-buttons">
                    <button
                      className="share-btn twitter"
                      onClick={() => shareArticle(selectedArticle, "twitter")}
                      title="Share on Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button
                      className="share-btn linkedin"
                      onClick={() => shareArticle(selectedArticle, "linkedin")}
                      title="Share on LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </button>
                    <button
                      className="share-btn facebook"
                      onClick={() => shareArticle(selectedArticle, "facebook")}
                      title="Share on Facebook"
                    >
                      <i className="fab fa-facebook"></i>
                    </button>
                    <button
                      className="share-btn copy"
                      onClick={() => shareArticle(selectedArticle, "copy")}
                      title="Copy link"
                    >
                      <i className="fas fa-link"></i>
                    </button>
                  </div>
                </div>

                {/* Read Article CTA */}
                <a
                  href={`/blog/${selectedArticle.slug}`}
                  className="read-full-btn"
                >
                  Read Full Article
                  <i className="fas fa-arrow-right"></i>
                </a>

                {/* Related Articles */}
                {getRelatedArticles(selectedArticle.id).length > 0 && (
                  <div className="related-articles">
                    <h3 className="related-title">Related Articles</h3>
                    <div className="related-list">
                      {getRelatedArticles(selectedArticle.id).map((related) => (
                        <button
                          key={related.id}
                          className="related-item"
                          onClick={() => {
                            setSelectedArticle(related);
                          }}
                        >
                          <span className="related-item-title">
                            {related.title}
                          </span>
                          <span className="related-item-time">
                            {related.readingTime} min
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
