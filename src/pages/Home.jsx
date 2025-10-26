import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ImpactNumbers from "../components/ImpactNumbers";
import TestimonialCard from "../components/TestimonialCard";
import HomeAboutPreview from "../components/HomeAboutPreview";

export default function Home() {
  return (
    <div className="page home-page">
      <HeroSection />
      <FeaturesSection />
      <HomeAboutPreview />
      <WhyChooseUs />
      <ImpactNumbers />
      <section className="container-section">
        <h2 className="section-title">Student Stories</h2>
        <div className="testimonials-grid">
          <TestimonialCard quote="CreditBuddy felt like a friend, not a lender." name="Priya" college="DU" />
          <TestimonialCard quote="It helped me manage my pocket money better." name="Ravi" college="SRM" />
          <TestimonialCard quote="Quick disbursal and clear terms — no surprises." name="Ananya" college="JNU" />
        </div>
      </section>
    </div>
  );
}
