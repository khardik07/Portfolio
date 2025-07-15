import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Projects', to: '#projects' },
  { label: 'Experience', to: '#experience' },
  { label: 'Contact', to: '#contact' },
];

function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].to);
        if (section && section.offsetTop <= scrollPos) {
          setActive(navLinks[i].to.replace('#', ''));
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setMenuOpen(false);
    const section = document.querySelector(to);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar-glass">
      <div className="navbar-logo">Hardik</div>
      <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.to}
            href={link.to}
            className={active === link.to.replace('#', '') ? 'active' : ''}
            onClick={e => {
              e.preventDefault();
              handleNavClick(link.to);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
      <button
        className="navbar-burger"
        onClick={() => setMenuOpen(m => !m)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar; 