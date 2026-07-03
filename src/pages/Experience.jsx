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
      <div className="container">
        <h1 className="experience-title">
          Experience & <em>Education</em>
        </h1>

        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-card" key={item.title}>
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <span className="timeline-place">{item.place}</span>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
