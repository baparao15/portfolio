import "./About.css";
import profilePhoto from "../assets/profile.jpg";

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "C++",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Flask",
  "Machine Learning",
  "NLP",
  "Git",
  "Linux",
  "Containers",
  "Problem Solving",
];

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h1 className="about-title">
          About <em>Me</em>
        </h1>

        <div className="about-grid">
          <div className="about-photo">
            <img src={profilePhoto} alt="Bapa Rao Pendyala" />
          </div>

          <div className="about-text">
            <p>
              I'm a Computer Science student at SRM University-AP passionate
              about Software Engineering, AI, and building impactful
              products. I interned at Universiti Teknologi PETRONAS, where I
              worked on maritime incident classification using NLP, and
              contributed to a computer vision research project on stampede
              avoidance.
            </p>

            <p>
              I enjoy building scalable MERN stack applications and machine
              learning solutions while continuously improving my
              problem-solving and development skills.
            </p>

            <p>
              Outside tech, I enjoy cricket and love learning new
              technologies that help me grow as a developer.
            </p>
          </div>
        </div>

        <div className="skills">
          <span className="skills-label">
            <em>Skills</em>
          </span>
          <div className="skill-pills">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
