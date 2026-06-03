import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Ministries', to: '/ministries' },
    { label: 'Events', to: '/events' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Give', to: '/give' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Close menu on escape key
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="main-header">
      <div className="header-inner section">
        <nav className="header-nav">
          <div className="header-logo">
            <img src="/img/icon.svg" alt="Ankur Narula Ministries logo" />
            <p className="header-title">Ankur Narula Ministries</p>
          </div>

          {/* Desktop Navigation */}
          <ul className="header-links desktop-nav">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `header-nav-link ${isActive ? 'active' : ''}`
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="header-contact-button desktop-nav">
            Contact Us
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            ref={buttonRef}
            className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Navigation */}
        <div 
          ref={menuRef}
          className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
        >
          <div className="mobile-nav-header">
            <span className="mobile-nav-title">Menu</span>
            <button 
              className="mobile-nav-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'active' : ''}`
                  }
                  end={item.to === '/'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="mobile-contact-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
