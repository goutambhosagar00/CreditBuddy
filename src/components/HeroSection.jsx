import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import financeimage from "../assets/illustrations/Money income-amico.png";
import vdo from "../assets/Videos/hero-vdo.mp4"

export default function HeroSection() {
  return (
    <section className="hero">

      {/* Left side - Text content */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="kicker">Empowering Students Everywhere</div>

        <h1 className="hero-title">
          Made by Students, for Students.
        </h1>

        <p className="hero-sub">
          CreditBuddy helps you borrow smartly, learn about money, and earn confidently — all in one app.
        </p>

        <div className="hero-cta">
          <Link to="/join-waitlist" className="btn btn-primary">
            Join the Waitlist
          </Link>
          <Link to="/features" className="btn btn-ghost">
            Explore Features
          </Link>
        </div>
      </motion.div>

      {/* Right side - App image */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <img src={financeimage} alt="App Preview" />
      </motion.div>
    </section>
  );
}
