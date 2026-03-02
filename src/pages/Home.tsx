import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Smartphone, Zap, GraduationCap, Users, Lock, HeartHandshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import TiltCard from "../components/TiltCard";
import AnimatedBackground from "../components/AnimatedBackground";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D9F99D] selection:text-black overflow-x-hidden pt-16 md:pt-20 relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative pt-10 pb-16 md:pt-20 md:pb-32 px-4 sm:px-6 max-w-7xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm mb-5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#D9F99D] animate-pulse shrink-0" />
                <span>✓ RBI-Compliant | ✓ Student-Safe | ✓ Transparent Pricing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tighter mb-5">
                Borrow. Earn. Learn. <br />
                <span className="text-[#D9F99D]">Build the Future.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-3 max-w-md leading-relaxed font-medium">
                India's first student-focused financial ecosystem combining responsible credit, real earning opportunities, and financial literacy.
              </p>
              <p className="text-sm text-gray-500 mb-7 max-w-md leading-relaxed">
                No more predatory loans. No more financial stress. CreditBuddy is built by students, for students—giving you fair access to credit, ways to earn, and the knowledge to manage your money wisely.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/waitlist"
                  className="bg-[#D9F99D] text-black px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white transition-all flex items-center justify-center gap-2 group"
                >
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="bg-white/5 text-white border border-white/10 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all text-center backdrop-blur-md"
                >
                  See How It Works
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Hero Visuals */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full flex items-center justify-center mt-6 md:mt-0">
            <TiltCard className="absolute z-20 w-48 sm:w-60 md:w-64 h-72 sm:h-88 md:h-96">
              <motion.div
                initial={{ opacity: 0, x: 50, y: 50, rotate: 10 }}
                animate={{ opacity: 1, x: 14, y: -14, rotate: 12 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="w-full h-full rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9F99D] rounded-full blur-[60px] opacity-20" />
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#D9F99D]" />
                  </div>
                  <span className="font-mono text-xs text-gray-500">CREDIT</span>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Available Limit</div>
                  <div className="text-2xl sm:text-3xl font-display font-bold">₹10,000</div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="font-mono text-xs sm:text-sm text-gray-500">**** 4242</div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10" />
                </div>
              </motion.div>
            </TiltCard>

            <TiltCard className="absolute z-10 w-48 sm:w-60 md:w-64 h-72 sm:h-88 md:h-96">
              <motion.div
                initial={{ opacity: 0, x: -50, y: -50, rotate: -10 }}
                animate={{ opacity: 1, x: -28, y: 28, rotate: -5 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                className="w-full h-full rounded-3xl bg-[#D9F99D] p-5 sm:p-6 shadow-2xl flex flex-col justify-between text-black"
              >
                <div className="flex justify-between items-start">
                  <div className="font-display font-bold text-lg sm:text-xl">CreditBuddy</div>
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-black/5 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                    <div className="text-xs sm:text-sm font-medium mb-1">Earned this month</div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm">Campus Ambassador</span>
                      <span className="font-bold text-[#7C3AED] text-sm">+₹1,200</span>
                    </div>
                  </div>
                  <div className="bg-black/5 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                    <div className="text-xs sm:text-sm font-medium mb-1">Financial Literacy</div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm">Module 1 Completed</span>
                      <span className="font-bold text-[#7C3AED] text-sm">100 Coins</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">43 Million Students Deserve Better</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Indian students face a broken financial system. You're building your future, but the system treats you like a risk.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
          <ScrollReveal delay={0.1} className="h-full">
            <TiltCard>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 h-full backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏦</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Banks Say No</h3>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Banks reject students due to lack of credit history.</p>
                <p className="text-xs sm:text-sm text-[#D9F99D] italic">"No income? No credit score? No loan."</p>
              </div>
            </TiltCard>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="h-full">
            <TiltCard>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 h-full backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚠️</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Predatory Apps</h3>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Existing apps charge 70%+ APR with aggressive recovery.</p>
                <p className="text-xs sm:text-sm text-[#D9F99D] italic">"Harassment, hidden fees, and financial traps."</p>
              </div>
            </TiltCard>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="h-full sm:col-span-2 md:col-span-1">
            <TiltCard>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 h-full backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">❌</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">No Support System</h3>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Zero financial education or earning pathways.</p>
                <p className="text-xs sm:text-sm text-[#D9F99D] italic">"Left to figure it out alone with no guidance."</p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center mb-10 md:mb-12">
            {[
              { val: "75%+", desc: "of students face regular cash gaps of ₹1k-₹10k" },
              { val: "43M+", desc: "students struggle with financial instability" },
              { val: "0", desc: "fair solutions designed specifically for students" },
            ].map(({ val, desc }, i) => (
              <motion.div key={i} whileHover={{ scale: 1.1 }} className="transition-transform">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#D9F99D] mb-2">{val}</div>
                <div className="text-xs sm:text-sm text-gray-400 max-w-[160px] sm:max-w-[200px]">{desc}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="text-center text-sm sm:text-xl font-medium text-white/90 max-w-3xl mx-auto bg-[#7C3AED]/20 p-5 sm:p-6 rounded-2xl border border-[#7C3AED]/30 backdrop-blur-md">
            That's why we built CreditBuddy—a financial ecosystem designed around your needs, not profits.
          </div>
        </ScrollReveal>
      </section>

      {/* The Solution Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#111]/80 backdrop-blur-xl border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">
                One App. Three Powerful Features.<br className="hidden sm:block" />
                {" "}Complete Financial Freedom.
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                CreditBuddy isn't just another loan app. It's your complete financial companion designed specifically for student life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {[
              {
                emoji: "💳", title: "Safe, Transparent Microloans",
                desc: "Get instant access to ₹500-₹10,000 when you need it most. No hidden fees. No harassment. Just fair, transparent credit built for students.",
                highlightColor: "text-[#D9F99D]", glowColor: "bg-[#D9F99D]",
                highlight: "Key Differentiator:", detail: "Unlike other apps, we reward responsibility. Pay on time, unlock better rates and higher limits.",
                delay: 0.1,
              },
              {
                emoji: "💰", title: "Real Ways to Earn, Not Just Borrow",
                desc: "Why just borrow when you can earn? CreditBuddy gives you legitimate ways to reduce your loan burden and build financial independence.",
                highlightColor: "text-[#7C3AED]", glowColor: "bg-[#7C3AED]",
                highlight: "Key Differentiator:", detail: "We help you earn your way out of debt, not trap you in it.",
                delay: 0.2,
              },
              {
                emoji: "📚", title: "Build Financial Confidence",
                desc: "Money management isn't taught in classrooms. We're changing that with a safe community and engaging content designed for students.",
                highlightColor: "text-blue-400", glowColor: "bg-blue-500",
                highlight: "Key Differentiator:", detail: "Financial education shouldn't be boring. Learn through engaging content while connecting with your peers.",
                delay: 0.3, spanTwo: true,
              },
            ].map(({ emoji, title, desc, highlightColor, glowColor, highlight, detail, delay, spanTwo }, i) => (
              <ScrollReveal key={i} delay={delay} className={`h-full${spanTwo ? " sm:col-span-2 md:col-span-1" : ""}`}>
                <TiltCard>
                  <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden group h-full">
                    <div className={`absolute top-0 right-0 w-32 h-32 ${glowColor} rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity`} />
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5 sm:mb-6 text-2xl sm:text-3xl">{emoji}</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>
                    <p className="text-gray-400 mb-5 sm:mb-6 text-sm sm:text-base">{desc}</p>
                    <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10 mt-auto">
                      <span className={`${highlightColor} font-bold text-xs sm:text-sm block mb-1`}>{highlight}</span>
                      <span className="text-xs sm:text-sm text-gray-300">{detail}</span>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CreditBuddy */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">Built Different. Built for Students.</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              We're not just another fintech app. We're a student movement backed by compliance, transparency, and genuine care.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="overflow-x-auto mb-12 md:mb-16 -mx-4 sm:mx-0">
            <div className="px-4 sm:px-0" style={{ minWidth: "560px" }}>
              <table className="w-full border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-400 font-medium">Feature</th>
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-400 font-medium">Other Apps</th>
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#D9F99D] font-bold text-base sm:text-lg bg-[#D9F99D]/5 rounded-t-2xl">CreditBuddy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Who it's for", "General consumers", "Students (18-25) exclusively"],
                    ["Approach", "Loan-first", "Earn + Learn + Borrow ecosystem"],
                    ["Pricing", "High APR (70%+)", "Transparent, student-aligned rates"],
                    ["Collections", "Aggressive harassment", "Support-led, respectful approach"],
                    ["Education", "None", "Built-in financial literacy"],
                    ["Earning", "None", "Multiple income pathways"],
                    ["Compliance", "Varies", "RBI-compliant with NBFC partners"],
                    ["Community", "None", "Anonymous peer support"],
                  ].map(([feature, other, cb], i, arr) => (
                    <tr key={i} className={i < arr.length - 1 ? "border-b border-white/5" : ""}>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-medium">{feature}</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-gray-400">{other}</td>
                      <td className={`py-3 sm:py-4 px-3 sm:px-6 bg-[#D9F99D]/5 font-medium${i === arr.length - 1 ? " rounded-b-2xl" : ""}`}>{cb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {[
            { Icon: ShieldCheck, title: "RBI-Compliant", desc: "Fully regulated with NBFC partnerships for your safety", delay: 0.1 },
            { Icon: TrendingUp, title: "Transparent Pricing", desc: "No hidden fees. Ever. See exactly what you'll pay.", delay: 0.2 },
            { Icon: Users, title: "Student-First", desc: "Built by people who understand student struggles", delay: 0.3 },
            { Icon: Lock, title: "Privacy Protected", desc: "Bank-level encryption and data security", delay: 0.4 },
            { Icon: HeartHandshake, title: "Respectful Collections", desc: "No harassment. No shame. Just support.", delay: 0.5 },
            { Icon: GraduationCap, title: "Build Your Future", desc: "Improve credit score while learning financial skills", delay: 0.6 },
          ].map(({ Icon, title, desc, delay }, i) => (
            <ScrollReveal key={i} delay={delay}>
              <div className="flex gap-3 sm:gap-4">
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9F99D] shrink-0" />
                <div>
                  <h4 className="font-bold mb-1 text-sm sm:text-base">{title}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">{desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">Getting Started is Simple</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 mb-12 md:mb-16">
            {[
              {
                num: "01", title: "Sign Up (30s)", numColor: "text-white/5",
                items: ["Download the app", "Phone verification with OTP", "Student email/ID verification", "Basic KYC (Aadhaar/PAN)"],
                delay: 0.1,
              },
              {
                num: "02", title: "Get Approved", numColor: "text-white/5",
                items: ["Choose amount (₹500-₹10K)", "Select 20 or 30-day term", "Add purpose + proof for interest waiver", "Instant approval"],
                delay: 0.2,
              },
              {
                num: "03", title: "Receive Funds", numColor: "text-white/5",
                items: ["Disbursed to UPI/bank/wallet", "Get instant notification", "Clear repayment schedule", "No hidden charges"],
                delay: 0.3,
              },
              {
                num: "04", title: "Earn, Learn & Grow", numColor: "text-[#D9F99D]/10", titleClass: "text-[#D9F99D]",
                items: ["More features revealed soon!", "Stay tuned for announcements", "Join waitlist for early access"],
                delay: 0.4,
              },
            ].map(({ num, title, numColor, titleClass, items, delay }, i) => (
              <ScrollReveal key={i} delay={delay}>
                <div className="relative pl-2">
                  <div className={`text-5xl sm:text-6xl font-display font-bold ${numColor} absolute -top-8 -left-2`}>{num}</div>
                  <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 relative z-10 pt-1 ${titleClass || ""}`}>{title}</h3>
                  <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                    {items.map((item, j) => (
                      <li key={j} className="flex gap-2"><span>✓</span> {item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="text-center">
              <p className="text-lg sm:text-xl mb-5 sm:mb-6">Ready to take control of your finances?</p>
              <Link
                to="/waitlist"
                className="bg-[#D9F99D] text-black px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white transition-all inline-flex items-center justify-center gap-2 group"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Student Validation */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">Students Are Already Excited</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              We talked to hundreds of students across India. Here's what they told us:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-10 md:mb-16">
          {[
            { pct: "75%", text: "Face regular financial challenges that affect their studies and daily life", quote: '"Finally, someone who gets it."', delay: 0.1 },
            { pct: "62%", text: "Prefer RBI-compliant platforms over informal lending", quote: '"Safety and trust matter more than speed."', delay: 0.2 },
            { pct: "78%", text: "Want both earning opportunities and financial education", quote: '"Learning to manage money is as important as accessing it."', delay: 0.3 },
          ].map(({ pct, text, quote, delay }, i) => (
            <ScrollReveal key={i} delay={delay} className="h-full">
              <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 h-full">
                <div className="text-4xl sm:text-5xl font-display font-bold text-[#D9F99D] mb-3 sm:mb-4">{pct}</div>
                <p className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">{text}</p>
                <p className="text-gray-500 italic text-xs sm:text-sm">{quote}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { quote: '"Finally, a platform that understands students and prioritizes trust."', author: "— Priya, Engineering Student, Mumbai", delay: 0.4 },
            { quote: '"Learning how to manage money mattered as much as accessing credit."', author: "— Rahul, Commerce Student, Delhi", delay: 0.5 },
            { quote: '"This is exactly what students have been waiting for. A platform that truly cares."', author: "— Aisha, Medical Student, Bangalore", delay: 0.6 },
          ].map(({ quote, author, delay }, i) => (
            <ScrollReveal key={i} delay={delay} className="h-full">
              <div className="bg-[#1A1A1A] p-5 sm:p-6 rounded-2xl border border-white/5 h-full">
                <p className="text-gray-300 italic mb-3 sm:mb-4 text-sm sm:text-base">{quote}</p>
                <div className="font-bold text-sm sm:text-base">{author}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Campus Ambassador Teaser */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#7C3AED] text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">Be a CreditBuddy Champion on Your Campus</h2>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
              Join our Campus Ambassador program and help build India's most trusted student financial platform. Get exclusive perks, leadership experience, and make a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 text-xs sm:text-sm font-medium">
              {["✓ Early access to features", "✓ Exclusive Buddy Coins rewards", "✓ Leadership certificate", "✓ Direct line to founders", "✓ Build your network"].map((item, i) => (
                <span key={i} className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">{item}</span>
              ))}
            </div>
            <Link
              to="/ambassadors"
              className="bg-white text-[#7C3AED] px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#D9F99D] hover:text-black transition-all inline-flex items-center gap-2"
            >
              Learn More About Campus Ambassadors <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#7C3AED]/20 border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">Join 1,000+ Students Building Their Financial Future</h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10">
              Be among the first to experience India's most student-friendly financial ecosystem.
            </p>

            <div className="bg-white/5 border border-white/10 p-5 sm:p-8 rounded-3xl backdrop-blur-sm">
              <div className="flex flex-col gap-3 sm:gap-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D] text-sm sm:text-base w-full"
                />
                <input
                  type="email"
                  placeholder="College Email Address"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D] text-sm sm:text-base w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D] text-sm sm:text-base w-full"
                />
                <Link
                  to="/waitlist"
                  className="bg-[#D9F99D] text-black px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white transition-all mt-1 text-center block"
                >
                  Join Waitlist Now (Takes 30s)
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}