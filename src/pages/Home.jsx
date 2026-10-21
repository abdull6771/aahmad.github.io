import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Notes from "../components/Notes";
import Publications from "../components/Publications";
import Teaching from "../components/Teaching";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return <>
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Education />
      <Publications />
      <Teaching />
      <Notes />
      <Contact />
    </main>
    <Footer />
  </>;
}
