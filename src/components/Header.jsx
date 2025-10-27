import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/icons/CB.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // ✅ Detect click outside sidebar
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

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
            <NavLink to="/about" className="nav-link">About Us</NavLink>
            <NavLink to="/features" className="nav-link">Features</NavLink>
            <NavLink to="/how-it-works" className="nav-link">How it Works</NavLink>
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            <Link to="/join-waitlist" className="btn nav-cta">Join Waitlist</Link>
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
      {menuOpen && <div className="mobile-overlay"></div>}

      {/* Mobile Sidebar */}
      <aside ref={menuRef} className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {/* ✅ Close icon inside sidebar */}
        <div className="sidebar-close-icon" onClick={() => setMenuOpen(false)}>
          <FaTimes size={24} />
        </div>

        <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</NavLink>
        <NavLink to="/features" className="nav-link" onClick={() => setMenuOpen(false)}>Features</NavLink>
        <NavLink to="/how-it-works" className="nav-link" onClick={() => setMenuOpen(false)}>How it Works</NavLink>
        <NavLink to="/blog" className="nav-link" onClick={() => setMenuOpen(false)}>Blog</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <Link to="/join-waitlist" className="btn nav-cta" onClick={() => setMenuOpen(false)}>Join Waitlist</Link>
      </aside>
    </>
  );
}
