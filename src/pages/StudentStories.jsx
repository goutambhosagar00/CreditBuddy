import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "../components/TestimonialCard";

export default function StudentStories() {
  const testimonials = [
    { quote: "CreditBuddy felt like a friend, not a lender.", name: "Priya", college: "DU" },
    { quote: "It helped me manage my pocket money better.", name: "Ravi", college: "SRM" },
    { quote: "Quick disbursal and clear terms — no surprises.", name: "Ananya", college: "JNU" },
    { quote: "CreditBuddy doesn’t make me feel judged or embarrassed for borrowing — it feels like talking to a friend who actually understands.", name: "Kritika Sinha", college: "BITS Pilani" },
    { quote: "I love that it’s built by students — you can feel it in every part of the app. It’s not corporate, it’s personal.", name: "Yash Raj", college: "NIT Rourkela" },
    { quote: "For the first time, I actually trust a loan platform. CreditBuddy shows everything clearly — no hidden charges, no surprises.", name: "Sanket Joshi", college: "IIT Kharagpur" },
    { quote: "The reward points system keeps me motivated — I’m learning, earning, and saving at the same time.", name: "Reema Gupta", college: "BHU" },
    { quote: "Simple, clean, and genuinely helpful.", name: "Tushar", college: "MBA Student" },
    { quote: "It’s refreshing to see an app that talks honestly about money. I felt safe giving my details because everything was transparent.", name: "Aditi Chauhan", college: "Manipal University" },
    { quote: "I started with the Learn & Earn feature and ended up winning rewards for completing lessons — fun and useful!", name: "Tanya Reddy", college: "VSSUT Burla" },
    { quote: "I never thought I’d actually enjoy learning about money. CreditBuddy’s lessons are short, simple, and honestly addictive!", name: "Bhupesh Sahoo", college: "IGIT Sarang" },
  ];

  return (
    <section className="page container-section student-stories">
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Student Stories
      </motion.h1>

      <motion.p
        className="muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Real experiences from students who’ve used CreditBuddy to take control of their finances.
      </motion.p>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <TestimonialCard quote={t.quote} name={t.name} college={t.college} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
