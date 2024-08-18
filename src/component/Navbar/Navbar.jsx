import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from '../Images/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand nav-menus" to="/">
          {/* <img className='logo-styles' src={logo} alt="Putharakulu Logo" /> */}
          <span className="nav-link konasima-brand">Konasima Enti Putharekulu</span>
        </Link>
        <button
          className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link  to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
