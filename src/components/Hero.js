import React from "react"
import Typewriter from "typewriter-effect"
import heroImg from "../assets/dhruv.png"
import resume from "../assets/resume.pdf"
import "./Hero.css"


function Hero() {
  return (
    <section id="hero">
      <div className="hero-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    
      <div className="hero-content">
          <div className="hero-text">
          <h1>Hi There!</h1>
          <h2>I'M <span className="main-name">DHRUV</span></h2>
          <div className="typewriter">
              <Typewriter
                options={{
                  strings: [
                    "Data Scientist",
                    "ML Engineer",
                    "Java Developer",
                    "MERN Stack Developer",
                    "Competitive Programmer"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,  // Increased from 50
                  delay: 50,       // Decreased from 80
                  pauseFor: 200
                }}
              />
            </div>
            <a href={resume} download className="resume-btn">Download Resume</a>
            </div>
            <div className="hero-img">
              <img src={heroImg} alt="hero" />
            </div>
          </div>
    </section>  
  )
}

export default Hero