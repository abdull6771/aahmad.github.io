import React, { useEffect, useRef, useState } from "react";

import { profile, cvUrl } from "../data/profile";

const email = profile.email;

export default function Contact() {
  const [copyState, setCopyState] = useState("idle");
  const resetTimer = useRef(null);
  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    window.clearTimeout(resetTimer.current);
    setCopyState("copying");
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard is unavailable");
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
      resetTimer.current = window.setTimeout(() => setCopyState("idle"), 5000);
    } catch {
      setCopyState("error");
    }
  };

  return (
    <section id="contact" className="contact-section section" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Good work starts<br />with a conversation.</h2>
          <p>Have a practical problem that could benefit from AI? I’d like to hear about it. Get in touch about engineering roles, research, or a project you have in mind.</p>
        </div>
        <div className="contact-details">
          <p className="contact-label">Send me a note</p>
          <a className="contact-email" href={`mailto:${email}`}>{email}<span aria-hidden="true">↗</span></a>
          <div className="contact-actions">
            <button className="copy-button" type="button" onClick={copyEmail} disabled={copyState === "copying"}>
              {copyState === "copying" ? "Copying…" : copyState === "copied" ? "Email copied" : "Copy email"}<span aria-hidden="true">{copyState === "copied" ? "✓" : "+"}</span>
            </button>
            <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
          <p className="copy-status" aria-live="polite" role="status">
            {copyState === "copied" && "Email address copied to your clipboard."}
            {copyState === "error" && "Couldn’t copy automatically. Select the email address above to copy it, or open it in your email app."}
          </p>
          <p className="contact-location">Based in {profile.location}.</p>
          <a className="text-link contact-cv" href={cvUrl} download={profile.cvFilename}>Download CV <span aria-hidden="true">↓</span><span className="link-detail">PDF · 4 pages</span></a>
        </div>
      </div>
    </section>
  );
}
