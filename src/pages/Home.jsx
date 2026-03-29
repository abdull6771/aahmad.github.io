import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import SocialProofBadges from "../components/SocialProofBadges";
import IntegrationWidgets from "../components/IntegrationWidgets";
import BlogArticles from "../components/BlogArticles";
import Notes from "../components/Notes";
import Education from "../components/Education";
import Publications from "../components/Publications";
import Contact from "../components/Contact";
import ChatWidget from "../components/ChatWidget";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero & First Impression */}
      <Hero />

      {/* Professional Identity */}
      <div className="portfolio-section-group">
        <About />
      </div>

      {/* Core Expertise */}
      <div className="portfolio-section-group">
        <Skills />
      </div>

      {/* Professional Journey */}
      <div className="portfolio-section-group highlight-section">
        <Experience />
      </div>

      {/* Work Showcase */}
      <div className="portfolio-section-group">
        <Projects />
      </div>

      {/* Social Proof & Community */}
      <div className="portfolio-section-group highlight-section">
        <SocialProofBadges />
      </div>

      {/* Education & Credentials */}
      <div className="portfolio-section-group highlight-section">
        <Education />
      </div>

      {/* Thought Leadership */}
      <div className="portfolio-section-group">
        <Notes />
        <Publications />
      </div>

      {/* Social Feeds & Latest Activity */}
      <div className="portfolio-section-group highlight-section">
        <IntegrationWidgets />
      </div>

      {/* Technical Articles & Blog */}
      <div className="portfolio-section-group">
        <BlogArticles />
      </div>

      {/* Call to Action */}
      <div className="portfolio-section-group">
        <Contact />
      </div>

      {/* Interactive Elements */}
      <ChatWidget />
      <Footer />
    </>
  );
}
