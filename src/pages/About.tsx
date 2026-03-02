import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Search, ShieldCheck, HeartHandshake, BookOpen, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D9F99D] selection:text-black pt-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tighter mb-6">
            Built by Students Who <br/><span className="text-[#D9F99D]">Understand the Struggle</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            CreditBuddy was born from personal experience with India's broken student finance system. We're here to fix it.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 max-w-4xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">The Problem Was Personal</h2>
            <div className="prose prose-invert prose-lg text-gray-400 max-w-none">
              <p className="mb-6">
                We've been there. The late-night stress about rent. The embarrassment of asking family for money. The predatory loan apps with their harassment and hidden fees. The complete lack of financial education.
              </p>
              <p className="mb-6">
                India has 43 million students—brilliant, ambitious young people building the nation's future. Yet the financial system treats them like second-class citizens.
              </p>
              <p className="mb-6">
                Banks say no because you don't have a credit history (how can you build one if no one gives you a chance?). The apps that do lend charge 70%+ APR and use aggressive recovery tactics. There's zero support for financial literacy or legitimate earning.
              </p>
              <p className="mb-12 font-medium text-white">
                We knew there had to be a better way.
              </p>
              
              <blockquote className="border-l-4 border-[#D9F99D] pl-6 py-2 my-12 bg-white/5 rounded-r-2xl">
                <p className="text-xl md:text-2xl font-display font-medium text-white mb-4 leading-relaxed">
                  "Students don't need predatory loans. They need a fair financial ecosystem that helps them borrow responsibly, earn legitimately, and learn continuously."
                </p>
                <footer className="text-[#D9F99D] font-bold">— Dev, Founder & CEO</footer>
              </blockquote>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Our Mission */}
      <section className="py-24 px-6 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Mission: Financial Empowerment for Every Student</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <ScrollReveal direction="right">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full">
                <h3 className="text-2xl font-bold mb-4 text-[#D9F99D]">Mission Statement</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To build India's most trusted, transparent, and student-first financial ecosystem—combining responsible credit, real earning opportunities, and practical financial education.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full">
                <h3 className="text-2xl font-bold mb-4 text-[#7C3AED]">Vision</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  A future where every Indian student has fair access to financial tools, knowledge, and support to build their dreams without debt traps or financial stress.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h3 className="text-3xl font-display font-bold mb-10 text-center">Our Values</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎓", title: "Student-First Always", desc: "Every decision we make prioritizes student welfare over profit." },
              { icon: "🔍", title: "Radical Transparency", desc: "No hidden fees, no fine print, no surprises—ever." },
              { icon: "⚖️", title: "Responsible Lending", desc: "We help students build credit, not destroy it." },
              { icon: "🤝", title: "Respectful & Supportive", desc: "No harassment, no shame—only understanding and support." },
              { icon: "📚", title: "Education-Focused", desc: "Financial literacy is a right, not a luxury." },
              { icon: "🛡️", title: "Compliance & Safety", desc: "RBI-compliant, data-secure, student-safe." }
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-white/5 h-full">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h4 className="font-bold mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Meet the Team Building Your Financial Future</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Core Team</h3>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { name: "Dev", role: "Founder & CEO", desc: "Building a compliant, student-first credit ecosystem. Owns product vision, credit design, and regulatory alignment.", linkedin: "https://www.linkedin.com/in/debasishmallick077/" },
            { name: "Goutam Bhosagar", role: "Tech Lead", desc: "Leads fintech backend architecture, security, and scalable systems.", linkedin: "https://www.linkedin.com/in/goutam-bhosagar-91559a301/" },
            { name: "Ipsit Kumar Thakur", role: "Tech Developer", desc: "Full-stack developer (mobile + backend). Focused on UX, reliability, and performance.", linkedin: "#" }
          ].map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#D9F99D] mb-6" />
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-[#D9F99D] text-sm font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm mb-6">{member.desc}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-[#D9F99D] transition-colors underline">LinkedIn</a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Advisory Board</h3>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "CS Susant Pradhan", role: "Compliance Advisor", desc: "RBI compliance frameworks, governance structure, regulatory readiness." },
            { name: "CMA Vishal Pathak", role: "Finance & Audit Advisor", desc: "Unit economics, audits, and financial control systems." },
            { name: "Karan Agrawal", role: "Lending & NBFC Advisor", desc: "Lending structure, NBFC partnerships, and capital flow management." },
            { name: "Shekhar Kumar Padhy", role: "GTM & Revenue Advisor", desc: "Go-to-market strategy, monetization, and revenue scaling." },
            { name: "Ayush Nanda", role: "Business Advisor", desc: "Fundraising guidance and national expansion strategy." }
          ].map((advisor, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 h-full">
                <h4 className="font-bold mb-1">{advisor.name}</h4>
                <p className="text-[#7C3AED] text-xs font-medium mb-3 uppercase tracking-wider">{advisor.role}</p>
                <p className="text-gray-400 text-sm">{advisor.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 px-6 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Why We're Building This Differently</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "01", title: "Regulation-First Approach", desc: "We started with compliance, not as an afterthought. RBI guidelines, NBFC partnerships, and legal frameworks were built into our DNA from day one." },
              { num: "02", title: "Long-Term Thinking", desc: "We're not optimizing for short-term loan volume. We're building a sustainable ecosystem that grows with students through their entire educational journey." },
              { num: "03", title: "Student Advisory", desc: "Real students are involved in every product decision. We don't guess what students need—we ask them." },
              { num: "04", title: "Transparent Economics", desc: "Our unit economics are public. We believe in building trust through radical transparency." },
              { num: "05", title: "Purpose Beyond Profit", desc: "Yes, we're a business. But our success is measured by student financial health, not just revenue.", colSpan: true }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`bg-white/5 p-8 rounded-3xl border border-white/10 h-full ${item.colSpan ? 'md:col-span-2' : ''}`}>
                  <div className="text-4xl font-display font-bold text-white/10 mb-4">{item.num}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Journey */}
      <section className="py-32 px-6 bg-[#7C3AED] text-center text-white">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Be Part of the Movement</h2>
            <p className="text-lg mb-10 text-white/80">
              CreditBuddy is more than a company—it's a movement to fix student finance in India. Whether you're a student, educator, investor, or supporter, there's a place for you.
            </p>
            <Link to="/contact" className="bg-white text-[#7C3AED] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D9F99D] hover:text-black transition-all inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-8 text-sm text-white/60">
              Questions? Want to learn more? <br/>
              <a href="mailto:info@creditbuddy.org.in" className="text-white hover:underline mt-2 inline-block">info@creditbuddy.org.in</a>
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
