import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/icons/CB.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          {/* Logo */}
          <Link to="/" className="brand">
            <img src={logo} alt="CreditBuddy" className="brand-logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
            <NavLink to="/features" className="nav-link">
              Features
            </NavLink>
            <NavLink to="/how-it-works" className="nav-link">
              How it Works
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <Link to="/join-waitlist" className="btn nav-cta">
              Join Waitlist
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div
            className="mobile-menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}

      {/* Mobile Sidebar */}
      <aside className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          About Us
        </NavLink>
        <NavLink to="/features" className="nav-link" onClick={closeMenu}>
          Features
        </NavLink>
        <NavLink to="/how-it-works" className="nav-link" onClick={closeMenu}>
          How it Works
        </NavLink>
        <NavLink to="/blog" className="nav-link" onClick={closeMenu}>
          Blog
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
          Contact
        </NavLink>
        <Link to="/join-waitlist" className="btn nav-cta" onClick={closeMenu}>
          Join Waitlist
        </Link>
      </aside>
    </>
  );
}
