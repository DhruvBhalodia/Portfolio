import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">Dhruv Bhalodia</div>
          <p className="footer-description">
          Built by Dhruv Bhalodia — Full Stack Developer & ML Engineer
          </p>
          <div className="footer-social">
            <a href="https://github.com/DhruvBhalodia" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/dhruv-bhalodia" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:dhruvbhalodia0204@gmail.com" className="social-link">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Dhruv Bhalodia. All rights reserved.
          </p>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;