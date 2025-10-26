import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaRupeeSign, FaSmile } from "react-icons/fa";

export default function ImpactNumbers() {
  const cards = [
    { value: 500, label: "Early Users", icon: <FaUserGraduate /> },
    { value: 1000000, label: "Requests", icon: <FaRupeeSign /> },
    { value: 95, label: "Beta Satisfaction", icon: <FaSmile /> }
  ];

  return (
    <section className="impact-section">
      <h2 className="impact-title">Our Impact</h2>
      <div className="impact-grid">
        {cards.map((c, i) => (
          <motion.div
            key={c.label}
            className="impact-card-new"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
          >
            <div className="impact-icon-circle">
              {c.icon}
            </div>
            <motion.div 
              className="impact-number"
              initial={{ count: 0 }}
              animate={{ count: c.value }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {c.value.toLocaleString()}
            </motion.div>
            <div className="impact-label">{c.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
