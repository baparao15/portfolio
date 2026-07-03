import profilePhoto from '../assets/profile.jpg'
import Marquee from '../components/Marquee'
import { useCountUp } from '../hooks/useCountUp'
import './Home.css'

const strengths = [
  'MERN Stack',
  'Machine Learning',
  'NLP',
  'Full-Stack Development',
  'Problem Solving',
]

function Stat({ value, label }) {
  const [ref, display] = useCountUp(value)
  return (
    <div ref={ref}>
      <dt>{display}</dt>
      <dd>{label}</dd>
    </div>
  )
}

function Home() {
  return (
    <section id="top" className="section home-section">
      <div className="container">
        <div className="bento">
          <div className="card headline">
            <svg
              className="deco"
              viewBox="0 0 60 60"
              fill="none"
              aria-hidden="true"
            >
              <g stroke="currentColor" strokeWidth="0.8">
                {Array.from({ length: 8 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="30"
                    cy="30"
                    rx="8"
                    ry="18"
                    transform={`rotate(${i * 22.5} 30 30)`}
                  />
                ))}
              </g>
            </svg>
            <h1>
              Built on <em>late nights</em>, <br/> bad sleep,<br/> great <em>commits</em>
            </h1>
          </div>

          <div className="card photo">
            <img src={profilePhoto} alt="Bapa Rao Pendyala" />
          </div>

          <div className="row3">
            <div className="card intro">
              <p
  style={{
    textAlign: "justify",
    textAlignLast: "center",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.7",
  }}
>
  MERN stack by day, NLP models by night, blissfully unaware of my own sleep
  schedule — currently accepting SDE and AI/ML roles, preferably ones that pay
  in coffee and stock options.
</p>
            </div>

            <div className="card contact">
              <a href="#contact" className="contact-top">
                <span>Have some questions?</span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a href="#contact" className="contact-cta">
                Contact me
              </a>
            </div>

            <div className="card accred">
              <p className="achievements">
  • Red Hat Certified Specialist in Containers <br />
  • ET-AI Hackathon 2026 Semi-Finalist <br />
  • GATE 2026 Qualified (CS & IT) <br />
  • Red Hat Certified System Administrator (RHCSA) <br />
  • Java SE17 Developer
</p>
            </div>
          </div>
        </div>

        <div className="stat-strip">
          <dl className="stats-list">
            <Stat value="25+" label="Public repos" />
            <Stat value="5" label="Certifications" />
            <Stat value="2027" label="B.Tech CSE" />
          </dl>
          <a
            href="/documents/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn resume-btn"
          >
            View Resume
          </a>
        </div>

        <Marquee items={strengths} />
      </div>
    </section>
  )
}

export default Home
