import React, { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Abdullahi's AI Assistant. Ask me about his skills, experience, or projects!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      const lowerText = input.toLowerCase();
      let response =
        "I'm a demo AI. Please contact Abdullahi for detailed inquiries.";

      if (lowerText.includes("skill") || lowerText.includes("stack")) {
        response =
          "Abdullahi is expert in Python, RAG, LangChain, Computer Vision, and Cloud platforms like AWS and Huawei Cloud.";
      } else if (lowerText.includes("contact") || lowerText.includes("email")) {
        response = "You can reach him at abdulll8392@gmail.com.";
      } else if (
        lowerText.includes("experience") ||
        lowerText.includes("work")
      ) {
        response =
          "He has experience at INCEIF University, Nafabat.AI, and Huawei Technologies.";
      } else if (lowerText.includes("project")) {
        response =
          "Check out his SmartFin Analytics and AI Phishing Detector projects above!";
      }

      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 500);
  };

  return (
    <div className="chat-widget">
      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <span>Chat with my Resume</span>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="chat-send" onClick={handleSend}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: isOpen ? "none" : "flex" }}
      >
        <i className="fas fa-comment-alt"></i>
      </button>
    </div>
  );
}
