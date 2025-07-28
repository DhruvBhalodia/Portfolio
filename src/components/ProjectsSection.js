import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faCode, faProjectDiagram, faLightbulb, faRocket, faCogs, faDesktop, faMobile } from '@fortawesome/free-solid-svg-icons';
import './ProjectsSection.css';
import AnimatedTimelineElement from './AnimatedTimelineElement';

const projects = [
  {
    "title": "Vartalap",
    "subtitle": "Real-time Web Chat App",
    "date": "January 2025",
    "description": "A MERN chat app with WebSockets for real-time messaging and group chats, handling 100+ users.",
    "codeLink": "https://github.com/DhruvBhalodia/Vartalap"
  },
  {
    "title": "Student’s Personal DigiVault",
    "subtitle": "Digital File Management",
    "date": "March 2025",
    "description": "A vault for students to upload, store, and manage files securely using Multer and MySQL.",
    "codeLink": "https://github.com/DhruvBhalodia/Personal-DigiLocker"
  },
  {
    "title": "Leader-Board",
    "subtitle": "Coding Stats Tracker",
    "date": "March 2024 – August 2024",
    "description": "A real-time leaderboard auto-updated with GitHub Actions and data scraped from coding platforms.",
    "codeLink": "https://github.com/DhruvBhalodia/Leader-Board"
  },
  {
    "title": "Personalized Healthcare using AI",
    "subtitle": "AI Medication Recommendation",
    "date": "October 2024",
    "description": "An ML system using PPO and ensembles to suggest treatments with 93% accuracy and automation.",
    "codeLink": "https://github.com/DhruvBhalodia/Personalized-Healthcare-Management"
  },
  {
    "title": "Document Structure Analysis",
    "subtitle": "Document Layout Parser",
    "date": "January 2025",
    "description": "A Detectron2 + SVM parser that boosts other document models' speed by 40% and accuracy by 8%.",
    "codeLink": "https://github.com/DhruvBhalodia/Document-Structure-Analysis"
  },
  {
    "title": "Multilingual Text Classifier",
    "subtitle": "Mixed Language Classifier",
    "date": "July 2025",
    "description": "A TF-IDF ensemble model with 90%+ F1-score on Gujarati, Hindi, and English code-mixed data.",
    "codeLink": "https://github.com/DhruvBhalodia/Multilingual-Text-Classifier"
  }
]


function ProjectsSection() {
  
  return (
    <section id="projects">
      <div className="projects-background">
        <div className="floating-icons">
          <FontAwesomeIcon icon={faLightbulb} className="floating-icon icon-1" />
          <FontAwesomeIcon icon={faRocket} className="floating-icon icon-2" />
          <FontAwesomeIcon icon={faCogs} className="floating-icon icon-3" />
          <FontAwesomeIcon icon={faDesktop} className="floating-icon icon-4" />
          <FontAwesomeIcon icon={faMobile} className="floating-icon icon-5" />
        </div>
      </div>
      <div className="items-container">
        <div className="projects-header">
          <h1>Projects</h1>
        </div>
        <div>
          <VerticalTimeline>
            {projects.map((project, i) => (
              <AnimatedTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date={project.date}
                iconStyle={{ background: "#a259ff", color: "rgb(39, 40, 34)" }}
                icon={<FontAwesomeIcon icon={faCode} />}
              >
                <h3 className="vertical-timeline-element-title">
                  {project.codeLink ? (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">{project.subtitle}</h4>
                <p>{project.description}</p>
              </AnimatedTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}
export default ProjectsSection 