import React from "react";

export default function SpeakingEngagements() {
  const engagements = [
    {
      icon: "fas fa-microphone",
      title: "AI Summit",
      event: "Nigeria Computer Society",
      date: "2024",
      location: "Nigeria",
      status: "Completed",
      description: "Advanced AI trends and applications in enterprise",
      link: "#",
    },
    {
      icon: "fas fa-users",
      title:
        "AIATSI 2025: Artificial Intelligence – Advanced Topics and Societal Innovation",
      event: "International Conference",
      date: "November 5–7, 2025",
      location: "Dakhla, Morocco",
      status: "Upcoming",
      description:
        "Presenting cutting-edge research on AI applications and societal impact",
      link: "#",
    },
  ];

  return (
    <section id="speaking" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Public Speaking</span>
          <h2 className="section-title">Speaking Engagements</h2>
        </div>

        <div className="speaking-timeline">
          {engagements.map((speak, idx) => (
            <div
              key={idx}
              className={`speaking-card ${speak.status.toLowerCase()}`}
            >
              <div className="speak-header">
                <div className="speak-icon">
                  <i className={speak.icon}></i>
                </div>
                <div className="speak-title-section">
                  <h3 className="speak-title">{speak.title}</h3>
                  <p className="speak-event">{speak.event}</p>
                </div>
              </div>

              <div className="speak-details">
                <div className="detail-item">
                  <i className="fas fa-calendar"></i>
                  <span>{speak.date}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{speak.location}</span>
                </div>
              </div>

              <p className="speak-description">{speak.description}</p>

              <div className="speak-footer">
                <span className={`speak-status ${speak.status.toLowerCase()}`}>
                  {speak.status}
                </span>
                <a href={speak.link} className="speak-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
