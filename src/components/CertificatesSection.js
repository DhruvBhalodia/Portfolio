import React from "react";
import "./CertificatesSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faAward, faFlask, faBrain, faCloud, faDatabase, faMedal, faTrophy, faStar, faRibbon } from "@fortawesome/free-solid-svg-icons";
import { faReact, faJava, faPython } from "@fortawesome/free-brands-svg-icons"

const certificates = [
  {
    "icon": faFlask,
    "title": "Data Analysis with Python",
    "issuer": "IBM",
    "date": "October 2024",
    "tags": ["Python", "Data Analysis", "IBM"],
    "description": "Learned core data wrangling and visualization skills using Python and pandas.",
    "link": "https://coursera.org/verify/TW0Y2IVKJD8L"
  },
  {
    "icon": faBrain,
    "title": "Fundamentals of Deep Learning",
    "issuer": "NVIDIA",
    "date": "September 2024",
    "tags": ["Deep Learning", "CNN", "NVIDIA"],
    "description": "Completed foundational course on deep learning, CNNs, and neural networks.",
    "link": "https://learn.nvidia.com/certificates?id=Tp5HWVLoSQuhUt6L3S2c0A"
  },
  {
    "icon": faJava,
    "title": "Java with DSA and System Design",
    "issuer": "PW Skills",
    "date": "January 2025",
    "tags": ["Java", "System Design", "DSA"],
    "description": "Covered Java, data structures, and scalable system design patterns.",
    "link": "https://pwskills.com/learn/certificate/08cb19fd-855a-48f2-b667-afad403d59da"
  },
  {
    "icon": faPython,
    "title": "Python for Data Science, AI & Development",
    "issuer": "IBM",
    "date": "August 2024",
    "tags": ["Python", "Data Science", "IBM"],
    "description": "Learned Python programming in the context of data science and AI workflows.",
    "link": "https://coursera.org/verify/C61WPMJS8IFR"
  },
  {
    "icon": faDatabase,
    "title": "SQL for Data Science",
    "issuer": "IBM",
    "date": "September 2024",
    "tags": ["SQL", "Database", "IBM"],
    "description": "Learned SQL queries, joins, aggregations, and data handling in Python.",
    "link": "https://coursera.org/verify/1W08XA5WQP45"
  },
  {
    "icon": faReact,
    "title": "Web Development Capstone",
    "issuer": "Udemy",
    "date": "2024",
    "tags": ["Web Dev", "React", "Capstone"],
    "description": " Mastered MERN stack through hands-on project work.",
    "link": "https://www.udemy.com/certificate/UC-444b2d33-5c2a-47fc-8f4a-76c9648bdf37/"
  }
];

function CertificatesSection() {
  return (
    <section id="certificates">
      <div className="certificates-background">
        <div className="floating-icons">
          <FontAwesomeIcon icon={faMedal} className="floating-icon icon-1" />
          <FontAwesomeIcon icon={faTrophy} className="floating-icon icon-2" />
          <FontAwesomeIcon icon={faStar} className="floating-icon icon-3" />
          <FontAwesomeIcon icon={faRibbon} className="floating-icon icon-4" />
          <FontAwesomeIcon icon={faAward} className="floating-icon icon-5" />
        </div>
      </div>
      <div className="certificates-container">
        <div className="certificates-header">
          <h1>Certificates</h1>
        </div>
        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <div className="certificate-card" key={i}>
              <div className="certificate-icon">
                <FontAwesomeIcon icon={cert.icon} size="1x" />
              </div>
              <div className="certificate-details">
                <h3>
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </h3>
                <div className="certificate-meta">
                  <div className="issuer">{cert.issuer}</div>
                </div>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
