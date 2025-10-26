import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/icons/CB.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="brand">
          <img src={logo} alt="CreditBuddy" className="brand-logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="nav desktop-nav">
          <NavLink to="/about" className="nav-link">About Us</NavLink>
          <NavLink to="/features" className="nav-link">Features</NavLink>
          <NavLink to="/how-it-works" className="nav-link">How it Works</NavLink>
          <NavLink to="/blog" className="nav-link">Blog</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <Link to="/join-waitlist" className="btn btn-primary nav-cta">Join Waitlist</Link>
        </nav>

        {/* Hamburger */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <FaBars size={24}  />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <NavLink to="/about" className="nav-link" onClick={toggleMenu}>About Us</NavLink>
        <NavLink to="/features" className="nav-link" onClick={toggleMenu}>Features</NavLink>
        <NavLink to="/how-it-works" className="nav-link" onClick={toggleMenu}>How it Works</NavLink>
        <NavLink to="/blog" className="nav-link" onClick={toggleMenu}>Blog</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact</NavLink>
        <Link to="/join-waitlist" className="btn btn-primary nav-cta" onClick={toggleMenu}>Join Waitlist</Link>
      </nav>

      {/* Overlay */}
      {isOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
    </header>
  );
}
