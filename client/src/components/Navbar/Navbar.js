import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Holy Word Logo"  />
        <span className='Brandtitle'>Holy Word</span>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/daily-bible-verse" onClick={toggleMenu}>Daily Bible Verse</Link></li>
        <li><Link to="/songs" onClick={toggleMenu}>Songs App</Link></li>
        <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
