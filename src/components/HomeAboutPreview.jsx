import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import financeimage from "../assets/icons/Credit-Buddy.png";


export default function HomeAboutPreview() {
  return (
    <section className="hero">
      {/* <video src={vdo} autoPlay loop muted playsInline /> */}
      {/* Dark overlay (already styled in CSS via ::before) */}

      {/* Left side - Text content */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <img src={financeimage} alt="App Preview" />
      </motion.div>
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="kicker">About CreditBuddy — </div>

        <h1 className="hero-title">
          Made by Students, for Students.
        </h1>

        <p className="hero-sub">
           We help students borrow smartly, learn about money, and earn confidently — all in one simple app. 
            CreditBuddy is built by students, for students, to make finance friendly and easy.
        </p>

        <div className="hero-cta">
          <Link to="/about" className="btn btn-primary">
            Readmore
          </Link>

        </div>
      </motion.div>

      {/* Right side - App image */}
      
    </section>
  );
}
