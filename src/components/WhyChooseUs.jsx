import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaHandHoldingUsd, FaGamepad, FaShieldAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    { icon: <FaUserGraduate />, text: "Student-first Approach", color: "#1363DF" },
    { icon: <FaHandHoldingUsd />, text: "Low-interest Micro-Loans", color: "#0fbf8a" },
    { icon: <FaGamepad />, text: "Gamified Learning", color: "#f59e0b" },
    { icon: <FaShieldAlt />, text: "Safe & Ethical Platform", color: "#8b5cf6" },
  ];

  return (
    <section className="why-choose">
      <motion.div
        className="why-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="why-title">Why <span>Choose CreditBuddy</span></h2>
        <p className="why-sub">
          Because we know what it’s like to be a student managing limited money —
          our mission is to make finance simple, smart, and fair.
        </p>
      </motion.div>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="why-icon" style={{ background: r.color + "20", color: r.color }}>
              {r.icon}
            </div>
            <h3>{r.text}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
