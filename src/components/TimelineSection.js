import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCode, faUserTie, faBuilding, faChartLine, faHandshake, faTasks } from '@fortawesome/free-solid-svg-icons';
import './TimelineSection.css';
import AnimatedTimelineElement from './AnimatedTimelineElement';

const jobs = [
  {
    title: "Full Stack Software Engineer",
    subtitle: "Sphere Techlabs",
    date: "May 2025 - June 2025",
    description: "Frontend Development, Backend Development, User Experience, Team Leading",
    type: 'work',
    link: "https://drive.google.com/file/d/1ehXMK84VmWdX9JnDHGh86nWEdw-7eOyJ/view"
  },
  {
    title: "Data Scientist Intern",
    subtitle: "Tilva Artsoft",
    date: "January 2025 - March 2025",
    description: "Data Analysis, Data Visualization, Data Cleaning, Data Preprocessing",
    type: 'work',
    link: "https://drive.google.com/file/d/1hVLWaDtFSmjltlWgTgEe67ppELmd9_PQ/view"  // Add your actual link here
  }
]

function TimelineSection() {
  
  return (
    <section id="career">
      <div className="career-background">
        <div className="floating-icons">
          <FontAwesomeIcon icon={faUserTie} className="floating-icon icon-1" />
          <FontAwesomeIcon icon={faBuilding} className="floating-icon icon-2" />
          <FontAwesomeIcon icon={faChartLine} className="floating-icon icon-3" />
          <FontAwesomeIcon icon={faHandshake} className="floating-icon icon-4" />
          <FontAwesomeIcon icon={faTasks} className="floating-icon icon-5" />
        </div>
      </div>
      <div className="items-container">
        <div className="career-header">
          <h1>Career Journey</h1>
        </div>
        <div>
          <VerticalTimeline>
            {jobs.map((job, i) => (
              <AnimatedTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date={job.date}
                iconStyle={{ background: '#a259ff', color: 'rgb(39, 40, 34)' }}
                icon={<FontAwesomeIcon icon={job.type === 'work' ? faBriefcase : faGraduationCap} />}
              >
                <h3 className="vertical-timeline-element-title">
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {job.title}
                    </a>
                  ) : (
                    job.title
                  )}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">{job.subtitle}</h4>
                <p>{job.description}</p>
              </AnimatedTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}
export default TimelineSection 