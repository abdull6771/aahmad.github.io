// Primary source: Abdullahi_Ahmad_Curriculum_Vitae.pdf, selected projects, page 2.
// CV-reported evaluation figures are not represented as independent benchmarks.
export const featuredProjects = [
  {
    title: "Medical Knowledge Graph RAG",
    category: "Hybrid retrieval",
    date: "Nov – Dec 2025",
    diagram: "medical",
    deck: "Connecting retrieved evidence with structured knowledge.",
    problem: "Medical knowledge is distributed across concepts and literature. Useful retrieval needs both relevant passages and the relationships between them.",
    approach: "I combined Qdrant vector retrieval with Neo4j graph traversal, using OpenAI embeddings and GPT-4 tool calling for graph enrichment and concept retrieval.",
    outcome: "A hybrid RAG system spanning 39,000+ UMLS concepts enriched with PubMed literature and citations, with RAGAS evaluation and a Gradio interface backed by Docker-based Qdrant services.",
    technologies: ["Qdrant", "Neo4j", "GPT-4", "RAGAS", "Gradio", "Docker"],
  },
  {
    title: "Multi-Agent LLM Frameworks",
    category: "Agentic AI research",
    date: "Ongoing",
    diagram: "agents",
    deck: "Coordinating specialist agents across multi-step work.",
    problem: "Software development, code analysis, and startup research involve connected tasks that need shared context and tool access.",
    approach: "I designed and implemented LangChain and LangGraph frameworks in which role-specialized agents coordinate over shared state. I investigated orchestration patterns, tool integration, and multi-step reasoning.",
    outcome: "Working frameworks for software-development workflows, code generation and analysis, and startup analysis. The work forms the basis of three first-author manuscripts in preparation.",
    technologies: ["LangChain", "LangGraph", "LLMs", "Shared-state workflows"],
  },
];

export const researchProjects = [
  {
    title: "Network Failure Prediction on 5G Core CNFs",
    category: "Network telemetry · Jul – Aug 2022",
    problem: "Anticipating faults in containerized network functions before service degradation.",
    approach: "Co-developed and optimized an LSTM temporal model using low-overhead eBPF telemetry from a 5G core.",
    outcome: "88.3% prediction accuracy, as reported in the CV. The work explores predictive signals in kernel-level network telemetry.",
    note: "The CV does not specify the evaluation dataset or validation split.",
    technologies: ["Python", "LSTM", "eBPF", "5G core"],
  },
  {
    title: "CompengChat",
    category: "Institutional question answering · Jul 2023",
    problem: "Helping students and the public find course, lecturer, and departmental information.",
    approach: "Designed a RAG framework combining dense vector retrieval with LLM inference over an institutional knowledge base.",
    outcome: "Deployed the assistant on the departmental website and through a Telegram bot to make information easier to access and reduce repetitive administrative inquiries.",
    technologies: ["RAG", "LangChain", "LLMs", "Telegram Bot API"],
  },
  {
    title: "SmartWaste — Autonomous Waste-Sorting Robot",
    category: "Computer vision & robotics · Mar – Jul 2023",
    problem: "Recognizing non-biodegradable waste and connecting that decision to physical sorting.",
    approach: "Led development of a CNN-based perception and robotic-arm system, implementing and validating the end-to-end prototype on Raspberry Pi.",
    outcome: "A working prototype whose results formed the basis of a poster presentation at Ahmadu Bello University.",
    technologies: ["CNN", "Computer vision", "Robotic arm", "Raspberry Pi"],
  },
  {
    title: "Brain Tumour Classification via Transfer Learning",
    category: "Image classification · Jan 2024",
    problem: "Exploring transfer learning for classifying brain tumours from MRI images.",
    approach: "Developed and evaluated a TensorFlow/Keras pipeline using VGG16 as a feature extractor.",
    outcome: "92.3% accuracy, as reported in the CV; a related NeuroScan manuscript is in preparation.",
    note: "The CV does not specify the evaluation dataset or validation split. This is research work, not a clinically validated tool.",
    technologies: ["Python", "TensorFlow", "Keras", "VGG16"],
  },
  {
    title: "AI-Powered Phishing Email Detector",
    category: "Email classification · Sep 2025",
    problem: "Distinguishing phishing emails using message text and metadata.",
    approach: "Compared Naive Bayes, Linear SVC, and XGBoost models in a Python pipeline using Pandas and Scikit-learn.",
    outcome: "Deployed the trained XGBoost model through a Streamlit application for interactive phishing detection.",
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit"],
    url: "https://github.com/abdull6771/AI-Powered-Phishing-Email-Detector",
  },
  {
    title: "Customer Segmentation Strategy Platform",
    category: "Customer analytics · Aug – Sep 2025",
    problem: "Turning customer behaviour into segments that support marketing and profitability analysis.",
    approach: "Built a K-Means workflow identifying five behavioural segments and a Random Forest model to classify new customers.",
    outcome: "A multi-page Streamlit dashboard supporting profitability modelling, segment analysis, and customer predictions.",
    technologies: ["Python", "K-Means", "Random Forest", "Streamlit"],
  },
];

// Previously verified public work is retained without implying it is in the new CV.
export const additionalWork = [
  { title: "SecureRAG", url: "https://github.com/abdull6771/SecureRAG", type: "Source" },
  { title: "OIC Islamic Digital Economy", url: "https://oic-islamic-digital-economy-dashboa.vercel.app/", type: "Dashboard" },
  { title: "ESG Communication Dashboard", url: "https://esg-communication-dashboard-e3hj.vercel.app/", type: "Dashboard" },
  { title: "NeuroScan application", url: "https://github.com/abdull6771/neuroscan", type: "Related source" },
  { title: "PDF Summarizer", url: "https://github.com/abdull6771/PDF-Summarizer", type: "Source" },
];
