import React from "react";
import { motion } from "framer-motion";
import {
  FaPiggyBank,
  FaGraduationCap,
  FaGift,
  FaWallet,
} from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaPiggyBank />,
      title: "Borrow Smartly",
      desc: "Low-interest micro-loans, transparent fees and flexible repayment.",
      color: "linear-gradient(135deg, #1363DF, #47b5ff)",
    },
    {
      icon: <FaGraduationCap />,
      title: "Learn & Grow",
      desc: "Gamified lessons that make financial learning fun.",
      color: "linear-gradient(135deg, #0fbf8a, #39ffb4)",
    },
    {
      icon: <FaGift />,
      title: "Earn Rewards",
      desc: "Buddy Coins for repays, referrals & tasks.",
      color: "linear-gradient(135deg, #ffb800, #ff6b6b)",
    },
    {
      icon: <FaWallet />,
      title: "CreditBuddy Pay",
      desc: "UPI wallet and redeemable coins (coming soon).",
      color: "linear-gradient(135deg, #6a11cb, #2575fc)",
    },
  ];

  return (
    <section className="features container-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Key Features
      </motion.h2>

      <div className="features-grid">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div
              className="icon-bg"
              style={{
                background: f.color,
              }}
            >
              <span className="icon">{f.icon}</span>
            </div>
            <div>
              <h4>{f.title}</h4>
              <p className="muted">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
