import React from "react";

const skillCategories = [
  {
    title: "Languages & interfaces",
    skills: ["Python", "Rust", "MATLAB", "FastAPI", "Flask", "React", "Streamlit", "Gradio", "Tailwind CSS"],
  },
  {
    title: "Machine learning & evaluation",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "XGBoost", "MindSpore", "Experimental design", "Model evaluation & benchmarking"],
  },
  {
    title: "LLMs & language research",
    skills: ["LangChain", "LangGraph", "RAG", "Multi-agent systems", "LLM fine-tuning", "RAGAS", "Transformer benchmarking", "Low-resource & code-mixed NLP"],
  },
  {
    title: "Computer vision",
    skills: ["Image classification", "Object & behaviour detection", "Video understanding", "LlamaVID", "VGG16", "Transfer learning"],
  },
  {
    title: "Cloud & data",
    skills: ["AWS", "Google Cloud", "Azure", "Huawei Cloud", "Hadoop", "Spark", "HBase", "Hive", "MySQL", "InfluxDB", "Qdrant", "Neo4j"],
  },
  {
    title: "Networking & security",
    skills: ["eBPF telemetry", "5G core CNFs", "Dahua CCTV", "ZKTeco biometric systems", "Huawei AirEngine"],
  },
  {
    title: "Robotics & IoT",
    skills: ["ROS", "Raspberry Pi", "Arduino", "ESP32", "Robotic-arm integration"],
  },
  {
    title: "Research & delivery",
    skills: ["LaTeX", "Jupyter / Colab", "Git & GitHub", "Linux", "Docker", "Model serving & deployment"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Technical toolkit</p>
            <h2 id="skills-heading">Tools for the problem at hand.</h2>
          </div>
          <p>From experimental design and model evaluation to the interfaces and infrastructure that put AI to work.</p>
        </div>
        <div className="skills-list">
          {skillCategories.map((category) => (
            <div className="skill-row" key={category.title}>
              <h3>{category.title}</h3>
              <ul className="skill-items" aria-label={category.title}>
                {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
