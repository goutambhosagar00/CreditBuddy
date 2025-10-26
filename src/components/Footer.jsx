import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/icons/CB.png"

export default function Footer() {
  return (
    <motion.footer 
      className="site-footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="site-footer-inner">
        {/* Brand Section */}
        <div className="footer-brand">
          <img src={logo} alt="CreditBuddy" className="footer-logo" />
          <p className="muted small">
            © 2025 CreditBuddy — Made by Students, for Students.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/join-waitlist">Join Community</Link>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://www.instagram.com/creditbuddy_official?utm_source=qr&igsh=ZzZuYXZ0NDgwb2x6" aria-label="Instagram"><FaInstagram /></a>
          <a href="http://www.linkedin.com/in/debasishmallick077" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="/" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>
    </motion.footer>
  );
}
