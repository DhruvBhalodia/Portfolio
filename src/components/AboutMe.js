import React from 'react';
import { Chip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faLightbulb, faStar, faRocket, faPalette } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css';

const facts = [
  "Machine Learning Engineer",
  "Data Scientist",
  "Full Stack Java Developer",
  "MERN Stack Developer",
  "Competitive Programmer",
  "Software Engineer"
];

function AboutMe() {
  return (
    <section id="aboutme">
      <div className="aboutme-background">
        <div className="floating-icons">
          <FontAwesomeIcon icon={faHeart} className="floating-icon icon-1" />
          <FontAwesomeIcon icon={faLightbulb} className="floating-icon icon-2" />
          <FontAwesomeIcon icon={faStar} className="floating-icon icon-3" />
          <FontAwesomeIcon icon={faRocket} className="floating-icon icon-4" />
          <FontAwesomeIcon icon={faPalette} className="floating-icon icon-5" />
        </div>
      </div>
      <div className="aboutme-container">
        <div className="aboutme-header">
          <h1>About Me</h1>
        </div>
        <div className="aboutme-card">
          <p>
          I'm Dhruv Bhalodia, a final-year student at IIIT Vadodara – ICD with a background in Computer Science and Engineering. My focus lies in Machine Learning, Data Science, and Full Stack Development. I am passionate about solving real world problems using technology and I am always eager to learn new things.
          </p>
          <div className="aboutme-facts">
            {facts.map((fact, i) => (
              <span className="aboutme-chip" key={i}>{fact}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
