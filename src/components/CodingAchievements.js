import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCode, faMedal, faUsers, faStar, faRocket, faAward } from '@fortawesome/free-solid-svg-icons';

import './CodingAchievements.css';

function CodingAchievements() {
  const [isVisible, setIsVisible] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateCards(true), 300);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('coding-achievements');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      id: 1,
      icon: faUsers,
      title: "Secretary",
      subtitle: "DCodr Coding Club",
      description: "Leading and organizing coding events, workshops, and competitive programming sessions for the college coding community.",
      color: "primary",
      delay: 0.2,  // Add your actual link here
    },
    {
      id: 2,
      icon: faAward,
      title: "Codechef Rating",
      subtitle: "Rating: 1840",
      description: "Achieved 4-star rating on Codechef through consistent problem solving and participation in monthly contests.",
      color: "accent",
      delay: 0.4,
      link: "https://www.codechef.com/users/dhruvbhalodia0"
    },
    {
      id: 3,
      icon: faCode,
      title: "LeetCode Rating",
      subtitle: "Rating: 1920",
      link: "https://leetcode.com/Dhruv_Bhalodia",
      description: "Solved 500+ problems across various difficulty levels with focus on algorithms and data structures.",
      color: "secondary",
      delay: 0.6
    }
  ];

  return (
    <section id="coding-achievements" className={`coding-achievements ${isVisible ? 'visible' : ''}`}>
      <div className="achievements-background">
        <div className="floating-icons">
          <FontAwesomeIcon icon={faTrophy} className="floating-icon icon-1" />
          <FontAwesomeIcon icon={faRocket} className="floating-icon icon-2" />
          <FontAwesomeIcon icon={faStar} className="floating-icon icon-3" />
          <FontAwesomeIcon icon={faMedal} className="floating-icon icon-4" />
          <FontAwesomeIcon icon={faCode} className="floating-icon icon-5" />
        </div>
      </div>

      <div className="achievements-container">
        <div className={`achievements-header ${isVisible ? 'animate-in' : ''}`}>
          <h1>Coding Achievements</h1>
          <p className="achievements-subtitle">
            Celebrating milestones in competitive programming and leadership
          </p>
        </div>

        <div className={`achievements-grid ${animateCards ? 'cards-visible' : ''}`}>
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={`achievement-card achievement-${achievement.color}`}
              style={{ animationDelay: `${achievement.delay}s` }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="achievement-icon">
                  <FontAwesomeIcon icon={achievement.icon} />
                </div>
                <h3>
                  {achievement.link ? (
                    <a href={achievement.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {achievement.title}
                    </a>
                  ) : (
                    achievement.title
                  )}
                </h3>
                <p className="subtitle">
                  {achievement.link && (achievement.title.includes('Codechef') || achievement.title.includes('LeetCode')) ? (
                    <a href={achievement.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {achievement.subtitle}
                    </a>
                  ) : (
                    achievement.subtitle
                  )}
                </p>
                <p className="description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`achievements-footer ${isVisible ? 'animate-in' : ''}`}>
          <div className="footer-text">
            <h3>Ready to Code the Future</h3>
            <p>Continuously pushing boundaries in competitive programming and software development</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodingAchievements;
