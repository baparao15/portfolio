import Reveal from "../components/Reveal";
import "./Experience.css";

const timeline = [
  {
    period: "2023 – 2027",
    title: "B.Tech, Computer Science and Engineering",
    place: "SRM University, Andhra Pradesh",
    summary:
      "Coursework in Data Structures, DBMS, Operating Systems, OOP, and Machine Learning.",
  },
  {
    period: "May 2026 – Jul 2026",
    title: "Software Development Intern",
    place: "Genset AI Solutions",
    summary:
      "Built a full-stack Smart Community Management System with Node.js, Express, MongoDB, and React — 90+ REST APIs secured with JWT auth, RBAC, and bcrypt hashing, validated by 90+ automated tests.",
  },
  {
    period: "Research Internship",
    title: "Research Intern",
    place: "Universiti Teknologi PETRONAS",
    summary:
      "Worked on maritime incident severity classification using NLP and ensemble learning, and contributed to a computer vision research project on crowd counting for stampede avoidance.",
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <Reveal className="container">
        <h1 className="experience-title">
          Experience & <em>Education</em>
        </h1>

        <div className="timeline">
          {timeline.map((item, i) => (
            <article
              className="timeline-card stagger-item"
              key={item.title}
              style={{ '--i': i }}
            >
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <span className="timeline-place">{item.place}</span>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Experience;
