import React from "react";
import FeaturesSection from "../components/FeaturesSection";

export default function Features() {
  return (
    <div className="page container">
      <section className="container-section">
        <h1 className="section-title">Features</h1>
        <p className="muted">All the features designed for students to borrow, learn and earn.</p>
      </section>
      <FeaturesSection />
    </div>
  );
}
