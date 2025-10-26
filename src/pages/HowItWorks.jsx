import React from "react";

export default function HowItWorks() {
  const steps = [
    { title: "Sign Up", desc: "Phone OTP → Student ID verification" },
    { title: "Build Profile", desc: "Add basic academic & KYC details" },
    { title: "Get CreditBuddy", desc: "Apply for loan, learn, or earn" },
    { title: "Grow", desc: "Repay, boost score, unlock rewards" }
  ];

  return (
    <section className="how-it-works container-section">
      <h1 className="section-title">How it Works</h1>
      <div className="workflow-grid">
        {steps.map((s, i) => (
          <div className="workflow-step" key={i}>
            <div className="step-circle">{i + 1}</div>
            <h4>{s.title}</h4>
            <p className="muted">{s.desc}</p>
            {i !== steps.length - 1 && <div className="arrow">→</div>}
          </div>
        ))}
      </div>
      <p className="tagline">From financial stress to financial success — one step at a time.</p>
    </section>
  );
}
