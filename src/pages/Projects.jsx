import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "BeverageStore",
    tag: "MERN · Multi-vendor e-commerce",
    description:
      "A full-stack multi-vendor e-commerce platform with separate B2B and B2C portals, Razorpay & Stripe payments, GST billing, flash sales, live order tracking, and an analytics dashboard built using the MERN stack.",
    repo: "https://github.com/baparao15/E-Commerce",
  },
  {
    id: 2,
    title: "Seva Portal",
    tag: "TypeScript · Government platform",
    description:
      "A government service platform that enables digital application submission and real-time tracking with secure JWT authentication, role-based access control, and a normalized database for efficient data management.",
    repo: "https://github.com/baparao15/SevaPortal",
    live: "https://seva-portal-ashy.vercel.app",
  },
  {
    id: 3,
    title: "SyncStream",
    tag: "C++ · Systems programming",
    description:
      "A real-time folder synchronization system developed in C++ using TCP sockets and multithreading, featuring automatic file syncing, producer-consumer concurrency, and an embedded HTTP dashboard for live monitoring.",
    repo: "https://github.com/baparao15/FOLDER-SYNC",
  },
  {
    id: 4,
    title: "TrainVision",
    tag: "AI · Full-stack · SIH Hackathon",
    description:
      "An AI-powered railway traffic management and decision-support system with real-time scheduling (Greedy + ILP optimization), conflict detection, feasibility analysis, and a conversational AI assistant for operators.",
    repo: "https://github.com/baparao15/TrainVision",
    live: "https://trainvision.vercel.app",
  },
  {
    id: 5,
    title: "SmartStreet AI",
    tag: "AI · Full-stack · Fintech",
    description:
      "A retail investor intelligence platform for NSE/BSE markets — live market summaries, technical pattern detection, backtesting, portfolio tracking, and a GPT-powered conversational market analyst.",
    repo: "https://github.com/baparao15/SmartStreetAI",
  },
  {
    id: 6,
    title: "Krid.AI",
    tag: "LangGraph agent · Automation",
    description:
      "A chat-based agent that digitizes visiting cards from a photo, checks for duplicates, logs contacts to Google Sheets, and alerts a manager on WhatsApp — with voice notes auto-attached to the right contact.",
    repo: "https://github.com/baparao15/krid.ai",
    live: "https://kridai-production-a598.up.railway.app",
  },
  {
    id: 7,
    title: "Fair Split",
    tag: "LLM · Vision · Node.js",
    description:
      "Upload a receipt photo and describe who had what — an LLM extracts the itemized bill and assignments, then every rupee is computed and reconciled in plain JavaScript, never left to the model.",
    repo: "https://github.com/baparao15/EpiFi",
  },
  {
    id: 8,
    title: "Maritime Incident Classification",
    tag: "ML · NLP · Flask",
    description:
      "A machine learning system that classifies maritime incidents into five severity levels from text descriptions, comparing Random Forest, Gradient Boosting, SVM, and Logistic Regression with a Flask web interface.",
    repo: "https://github.com/baparao15/Maritime_Incident_Classification",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-heading">
          <h1 className="projects-title">
            <em>Projects</em>
          </h1>
          <a
            className="see-all"
            href="https://github.com/baparao15?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            See all repositories ↗
          </a>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Repository ↗
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
