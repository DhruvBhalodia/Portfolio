import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faJava, faPython } from "@fortawesome/free-brands-svg-icons"
import { faCog, faCode, faDatabase, faRocket, faBrain, faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import { Chip } from "@mui/material"
import "./Expertise.css"

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Flask",
  "Python",
  "SQL",
  "PostgreSQL",
  "Postman"
]
const labelsSecond = [
  "Java",
  "Spring Boot",
  "Spring MVC",
  "Hibernate",
  "System Design",
  "MySQL",
  "Git",
  "GitHub Actions",
  "Linux"
]
const labelsThird = [
  "Python",
  "Pandas",
  "Selenium",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "IndicBERT",
  "Jupyter Notebook"
]

function Expertise() {
  return (
    <section id="expertise">
      <div className="expertise-background">
        <div className="floating-icons">
          <FontAwesomeIcon icon={faCode} className="floating-icon icon-1" />
          <FontAwesomeIcon icon={faDatabase} className="floating-icon icon-2" />
          <FontAwesomeIcon icon={faRocket} className="floating-icon icon-3" />
          <FontAwesomeIcon icon={faBrain} className="floating-icon icon-4" />
          <FontAwesomeIcon icon={faLaptopCode} className="floating-icon icon-5" />
        </div>
      </div>
      <div className="skills-container">
        <div className="expertise-header">
          <h1>My Expertise</h1>
        </div>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>Built web applications from scratch using modern technologies. Proficient in frontend and backend development.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h3>Full Stack Java Developer</h3>
            <p>Developed scalable backend systems and APIs using Java and Spring ecosystem. Experienced in building responsive UIs and deploying robust full-stack applications.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Science</h3>
            <p>Build intelligent solutions using statistical methods, machine learning, and data storytelling. Experience in handling multilingual data, training models, and deriving insights from real-world datasets.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Expertise 