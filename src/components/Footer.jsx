import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Abdullahi Ahmad</p>
        <p className="footer-note">Built with curiosity. Grounded in practice.</p>
        <Link className="back-to-top" to={`${location.pathname}#top`}>Back to top <span aria-hidden="true">↑</span></Link>
      </div>
    </footer>
  );
}
