import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ddx4hml",
        "template_vdh7k5b",
        e.target,
        "K1pRcwo5jf5qnjgYN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          e.target.reset(); // clear form
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-card container-section animate-fadeup-sm">
      <h3 className="section-title">Contact Us</h3>

      {success && (
        <div className="contact-success">
          Thank you! Your message has been sent.
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-grid">
        <label className="label">Name</label>
        <input className="input" type="text" name="name" placeholder="Your name" required />

        <label className="label">Email</label>
        <input className="input" type="email" name="email" placeholder="you@example.com" required />

        <label className="label">Message</label>
        <textarea className="input" name="message" rows="6" placeholder="Write your message" required />

        <div />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}
