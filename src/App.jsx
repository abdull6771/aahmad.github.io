import React, { useEffect, useLayoutEffect, useRef } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SmartFinCase from "./pages/SmartFinCase";
import "./styles/App.css";

const pages = {
  "/": {
    title: "Abdullahi Ahmad — Machine Learning Engineer & AI Researcher",
    description: "Abdullahi Ahmad is a Machine Learning Engineer at TerraHaptix in Abuja. Explore his work in autonomous robotics, agentic AI, RAG, and low-resource NLP research.",
  },
  "/case-study-smartfin": {
    title: "SmartFin Analytics — Abdullahi Ahmad",
    description: "A closer look at SmartFin Analytics: a financial analysis project using LangGraph agents, anomaly detection, forecasting, and a Flask interface.",
  },
};

function focusElement(element) {
  if (!element) return;
  if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", "-1");
  element.focus({ preventScroll: true });
}

function RouteEffects() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map());
  const currentKey = useRef(location.key);
  const hasNavigated = useRef(false);

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const savePosition = () => positions.current.set(currentKey.current, [window.scrollX, window.scrollY]);
    window.addEventListener("scroll", savePosition, { passive: true });
    return () => {
      window.history.scrollRestoration = previous;
      window.removeEventListener("scroll", savePosition);
    };
  }, []);

  useLayoutEffect(() => {
    currentKey.current = location.key;
    const frame = window.requestAnimationFrame(() => {
      // StrictMode replays effects; only an executed frame completes a visit.
      const isFirstVisit = !hasNavigated.current;
      hasNavigated.current = true;
      const savedPosition = positions.current.get(location.key);
      const main = document.getElementById("main-content");
      if (navigationType === "POP" && savedPosition) {
        window.scrollTo({ left: savedPosition[0], top: savedPosition[1], behavior: "instant" });
        if (!isFirstVisit) focusElement(main);
        return;
      }
      let id = "";
      try {
        id = decodeURIComponent(location.hash.slice(1));
      } catch {
        // An invalid fragment should never prevent a page from rendering.
      }
      const target = id && document.getElementById(id);
      if (target && id !== "top") {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        focusElement(target);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        if (!isFirstVisit || id === "top") focusElement(main);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.key, location.hash, navigationType]);

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, "") || "/";
    const page = pages[pathname] || {
      title: "Page not found — Abdullahi Ahmad",
      description: "This page could not be found. Explore Abdullahi Ahmad’s portfolio or get in touch.",
    };
    document.title = page.title;
    const setMeta = (attribute, name, content) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };
    const canonicalUrl = new URL(`./${pathname.replace(/^\/+/, "")}`, import.meta.env.VITE_SITE_URL).href;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", pages[pathname] ? "index, follow" : "noindex, follow");
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", canonicalUrl);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [location.pathname]);
  return null;
}

function NotFound() {
  return (
    <>
      <main id="main-content" className="not-found container" tabIndex={-1}>
        <p className="eyebrow">404 / Page not found</p>
        <h1>Let’s get you back to the work.</h1>
        <p>The page you’re looking for has moved or doesn’t exist.</p>
        <Link className="button button-primary" to="/">Back to portfolio <span aria-hidden="true">↗</span></Link>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <RouteEffects />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study-smartfin" element={<SmartFinCase />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
