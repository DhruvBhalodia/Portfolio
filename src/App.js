import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Expertise from "./components/Expertise"
import TimelineSection from "./components/TimelineSection"
import ProjectsSection from "./components/ProjectsSection"
import CertificatesSection from './components/CertificatesSection';
import AboutMe from './components/AboutMe';
import CodingAchievements from './components/CodingAchievements';
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <TimelineSection />
      <ProjectsSection />
      <Expertise />
      <CertificatesSection />
      <CodingAchievements />
      <Footer />
    </div>
  )
}
export default App
