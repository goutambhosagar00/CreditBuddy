import React from "react";
import ContactForm from "../components/FormComponents/ContactForm";

export default function Contact() {
  return (
    <div className="page container-section">
      <h1 className="section-title" style={{ textAlign: "center", marginBottom: 16 }}>
        Let’s Connect
      </h1>
      <p style={{ textAlign: "center", marginBottom: 40 }}>
        Whether you’re a student curious about CreditBuddy, a company looking to collaborate, or an investor exploring opportunities — we’d love to connect with you.
      </p>

      {/* 1. Students Block */}
      <section className="connect-block student-block" style={{ background: "#e0f0ff", padding: 32, borderRadius: 16, marginBottom: 32 }}>
        <h2>🎓 For Students — Get Early Access</h2>
        <p>
          Be among the first to experience CreditBuddy — India’s first student-focused financial platform that helps you borrow smartly, learn about money, and earn confidently.
          Join our waitlist to unlock early access, exclusive rewards, and beta testing invites before our official launch.
        </p>
        <a href="https://forms.gle/tHNRCin6ewL4Kruc6" className="btn btn-primary">Join the Waitlist</a>
      </section>

      {/* 2. Companies & Startups Block */}
      <section className="connect-block company-block" style={{ padding: 32, borderRadius: 16, marginBottom: 32, background: "#f9fafc" }}>
        <h2>🏢 For Companies & Startups — Collaborate with Us</h2>
        <p>
          We’re always open to collaborating with forward-thinking startups, EdTechs, marketing agencies, or student community brands that believe in empowering the next generation financially.
        </p>
        <ContactForm />
      </section>

      {/* 3. Investors Block */}
      <section className="connect-block investor-block" style={{ padding: 32, borderRadius: 16, textAlign: "center", background: "#fff7e6" }}>
        <h2>💼 For Investors — Partner with Our Founder</h2>
        <p>
          CreditBuddy is creating India’s first student-focused financial ecosystem — combining lending, learning, and earning into one platform.
          If you’re an angel investor, VC, or fintech enthusiast interested in our journey, we’d love to connect.
        </p>
        <p style={{ marginTop: 16, fontWeight: 700 }}>Investor Relations: <a href="info@creditbuddy.org.in
">info@creditbuddy.org.in
</a></p>
      </section>
    </div>
  );
}
