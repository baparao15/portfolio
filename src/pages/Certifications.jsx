import "./Certifications.css";

const certifications = [
  {
    title: "Red Hat Certified Specialist in Containers",
    summary: "Containerized application deployment and management",
    file: "redhat-containers.pdf",
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    summary: "Linux system administration",
    file: "rhcsa.pdf",
  },
  {
    title: "Java SE 17 Developer",
    summary: "Oracle Certified Professional",
    file: "java-se17.pdf",
  },
  {
    title: "GATE 2026 Qualified (CS & IT)",
    summary: "Graduate Aptitude Test in Engineering",
    file: "gate-2026.pdf",
  },
  {
    title: "ET-AI Hackathon 2026 Semi-Finalist",
    summary: "Recognised among top teams from SRM University, Amaravati",
    file: "hackathon-semifinalist.pdf",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <h1 className="certifications-title">
          <em>Credentials</em> & Wins
        </h1>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <a
              className="cert-card"
              key={cert.title}
              href={`/documents/certificates/${cert.file}`}
              target="_blank"
              rel="noreferrer"
            >
              <strong>{cert.title}</strong>
              <span>{cert.summary}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
