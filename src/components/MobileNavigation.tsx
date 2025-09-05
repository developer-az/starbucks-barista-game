'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/learning', label: 'Learning', icon: '📚' },
    { href: '/game', label: 'Game', icon: '🎯' },
    { href: '/recipes', label: 'Recipes', icon: '☕' }
  ]

  return (
    <nav className="mobile-nav">
      <div className="container mobile-nav-content">
        <div className="nav-brand">
          <span>☕</span>
          <span>Barista Training</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Desktop Navigation */}
        <div className="desktop-nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="nav-brand">
                <span>☕</span>
                <span>Barista Training</span>
              </div>
              <button 
                className="mobile-menu-close"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`mobile-nav-link ${isActive(link.href) ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  <span className="mobile-nav-icon">{link.icon}</span>
                  <span className="mobile-nav-label">{link.label}</span>
                  {isActive(link.href) && <span className="active-indicator">●</span>}
                </Link>
              ))}
            </div>
            <div className="mobile-menu-footer">
              <p>Learn. Practice. Master.</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}