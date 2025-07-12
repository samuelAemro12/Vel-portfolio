import React, { useState, useEffect } from 'react';

interface NavItem {
  name: string;
  to: string;
}

const navItems: NavItem[] = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container-custom">
        <div className="nav-content">
          {/* Logo */}
          <div className="nav-logo">
            <h1 className="text-gradient">Samuel Aemro</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.to}`}
                className={`nav-link ${
                  activeSection === item.to ? 'nav-link-active' : ''
                }`}
                onClick={() => setActiveSection(item.to)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
          >
            <span className="hamburger-icon">
              {isOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.to}`}
                className={`mobile-nav-link ${
                  activeSection === item.to ? 'mobile-nav-link-active' : ''
                }`}
                onClick={() => {
                  setActiveSection(item.to);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
