import React from "react";
import { motion } from "framer-motion";

export default function TestimonialCard({ quote, name, college, avatar }) {
  return (
    <motion.div
      className="testimonial-bubble"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="testimonial-inner">
        {avatar && (
          <div className="testimonial-avatar">
            <img src={avatar} alt={name} />
          </div>
        )}
        <div className="testimonial-content">
          <blockquote className="testimonial-quote">“{quote}”</blockquote>
          <div className="testimonial-meta">
            <strong>{name}</strong> — {college}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
