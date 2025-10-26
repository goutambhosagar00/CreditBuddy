import React from "react";
import { Link } from "react-router-dom";
import { FaHandshake, FaLightbulb, FaBookOpen, FaUsers, FaHeart } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md"; 
import creditbuddy from "../assets/icons/hero-image2.png"

export default function About() {
  return (
    <div className="about-page page container-section animate-fadeup-sm">
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>About CreditBuddy — <span>Made by Students, for Students.</span></h1>
          <h2>Because every student deserves to dream without financial fear.</h2>
          <p>
            We know what it feels like — managing college expenses, saying no to plans,
            waiting for the next pocket money, or missing opportunities just because of money.
            That’s why we built <strong>CreditBuddy</strong> — India’s first student-focused
            financial platform that helps you borrow smartly, learn about money, and earn confidently.
          </p>
          <Link to="/waitlist" className="btn btn-primary">Join Us</Link>
        </div>
        <div className="about-hero-image">
          <img src={creditbuddy} alt="Students using CreditBuddy" />
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          CreditBuddy started with one simple belief — students don’t need to be rich to be financially smart.
          We’ve skipped outings, borrowed from friends, and felt judged for asking help. Instead of waiting for
          someone else to solve it, we created CreditBuddy — a buddy who understands you, not just your credit score.
        </p>
        <blockquote>
          “We’re building a culture where students borrow responsibly, learn continuously, and grow confidently.”
        </blockquote>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv">
        <div className="mv-card">
          <FaLightbulb className="mv-icon" />
          <h3>Our Mission</h3>
          <p>To empower every student in India to become financially confident — helping them access credit, learn finance, and earn responsibly.</p>
        </div>
        <div className="mv-card">
          <MdOutlineSecurity className="mv-icon" />
          <h3>Our Vision</h3>
          <p>To create a generation of financially independent youth who understand money before earning it — leading India’s financial revolution from campuses.</p>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card"><FaHandshake /><h4>Honesty & Transparency</h4><p>No hidden terms, no fine print. Always know what’s happening with your money.</p></div>
          <div className="value-card"><FaUsers /><h4>Trust & Respect</h4><p>We treat every student like a partner, not a customer.</p></div>
          <div className="value-card"><FaBookOpen /><h4>Empowerment Through Learning</h4><p>Learn to earn, and earn while you learn — the CreditBuddy way.</p></div>
          <div className="value-card"><FaLightbulb /><h4>Simplicity in Finance</h4><p>Finance should feel simple and conversational, not intimidating.</p></div>
          <div className="value-card"><FaHeart /><h4>Community Growth</h4><p>Every user, idea, and feedback strengthens our student ecosystem.</p></div>
        </div>
      </section>

      {/* Impact */}
      <section className="about-impact">
        <h2>Our Impact So Far</h2>
        <p>More than 500 students across 15 colleges have already joined CreditBuddy’s waitlist. Together, we’re redefining what it means to borrow, learn, and grow.</p>
      </section>

      {/* Founder Message */}
      <section className="about-founder">
        <blockquote>
          “When I started CreditBuddy, I wasn’t thinking of building a startup — I wanted to solve a problem students face. CreditBuddy is the one friend every student wished they had — reliable, honest, and always there when you need them.”
        </blockquote>
        <p className="founder-name">— [Your Name], Founder, CreditBuddy</p>
      </section>
    </div>
  );
}
