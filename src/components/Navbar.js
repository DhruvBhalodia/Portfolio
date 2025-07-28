import React, { useState, useEffect, useRef } from "react"
import { FaBars, FaTimes } from 'react-icons/fa'

import "./Navbar.css"

const navLinks = [
  { label: "Home", to: "#hero" },
  { label: "About Me", to: "#aboutme" },
  { label: "Career", to: "#career" },
  { label: "Projects", to: "#projects" },
  { label: "Expertise", to: "#expertise" },
  { label: "Certificates", to: "#certificates" },
  { label: "Achievements", to: "#coding-achievements" }
]

function Navbar() {
  const [navColour, setNavColour] = useState(false)
  const [activeSection, setActiveSection] = useState("#hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  
  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => {
      setNavColour(window.scrollY >= 20)
      
      // Get all sections
      const sections = navLinks.map(link => {
        const element = document.querySelector(link.to)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            id: link.to,
            top: rect.top,
            bottom: rect.bottom
          }
        }
        return null
      }).filter(Boolean)
      
      // Find the current section
      const current = sections.find(section => 
        section.top <= 100 && section.bottom > 100
      )
      
      if (current) {
        setActiveSection(current.id)
      }
    }
    
    window.addEventListener("scroll", onScroll)
    onScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    // Add event listener when menu is open
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'auto' // Re-enable scrolling when menu is closed
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'auto' // Ensure scroll is re-enabled on unmount
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  const handleNavLinkClick = (to) => {
    setActiveSection(to)
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'auto' // Re-enable scrolling after navigation
  }

  return (
    <nav 
      ref={navbarRef}
      className={`navbar ${navColour ? 'sticky' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="navbar-container">
        <button 
          className="navbar-toggle" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="hamburger-icon" />
          ) : (
            <FaBars className="hamburger-icon" />
          )}
        </button>
        
        <ul className={`navbar-links ${isMobileMenuOpen ? 'show' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={link.to}>
              <a 
                href={link.to} 
                className={activeSection === link.to ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.querySelector(link.to)
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                    handleNavLinkClick(link.to)
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'show' : ''}`} 
        onClick={toggleMobileMenu}
        role="button" 
        tabIndex="0"
        onKeyDown={(e) => e.key === 'Enter' && toggleMobileMenu()}
        aria-label="Close menu"
      />
    </nav>
  )
}

export default Navbar