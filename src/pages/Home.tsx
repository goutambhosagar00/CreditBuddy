import { motion } from "motion/react";
import { ArrowRight, CreditCard, ShieldCheck, Smartphone, Wallet, Zap, BookOpen, GraduationCap, Users, Lock, HeartHandshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import TiltCard from "../components/TiltCard";
import AnimatedBackground from "../components/AnimatedBackground";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D9F99D] selection:text-black overflow-x-hidden pt-20 relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-6 max-w-7xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#D9F99D] animate-pulse" />
                ✓ RBI-Compliant | ✓ Student-Safe | ✓ Transparent Pricing
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
                Borrow. Earn. Learn. <br/><span className="text-[#D9F99D]">Build the Future.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-md leading-relaxed font-medium">
                India's first student-focused financial ecosystem combining responsible credit, real earning opportunities, and financial literacy.
              </p>
              <p className="text-md text-gray-500 mb-8 max-w-md leading-relaxed">
                No more predatory loans. No more financial stress. CreditBuddy is built by students, for students—giving you fair access to credit, ways to earn, and the knowledge to manage your money wisely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/waitlist" className="bg-[#D9F99D] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 group">
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/how-it-works" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center backdrop-blur-md">
                  See How It Works
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Hero Visuals */}
          <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
            <TiltCard className="absolute z-20 w-64 h-96">
              <motion.div
                initial={{ opacity: 0, x: 50, y: 50, rotate: 10 }}
                animate={{ opacity: 1, x: 20, y: -20, rotate: 12 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="w-full h-full rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 p-6 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9F99D] rounded-full blur-[60px] opacity-20" />
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#D9F99D]" />
                  </div>
                  <span className="font-mono text-xs text-gray-500">CREDIT</span>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Available Limit</div>
                  <div className="text-3xl font-display font-bold">₹10,000</div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="font-mono text-sm text-gray-500">**** 4242</div>
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                </div>
              </motion.div>
            </TiltCard>

            <TiltCard className="absolute z-10 w-64 h-96">
              <motion.div
                initial={{ opacity: 0, x: -50, y: -50, rotate: -10 }}
                animate={{ opacity: 1, x: -40, y: 40, rotate: -5 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                className="w-full h-full rounded-3xl bg-[#D9F99D] p-6 shadow-2xl flex flex-col justify-between text-black"
              >
                <div className="flex justify-between items-start">
                  <div className="font-display font-bold text-xl">CreditBuddy</div>
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <div className="bg-black/5 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-sm font-medium mb-1">Earned this month</div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Campus Ambassador</span>
                      <span className="font-bold text-[#7C3AED]">+₹1,200</span>
                    </div>
                  </div>
                  <div className="bg-black/5 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-sm font-medium mb-1">Financial Literacy</div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Module 1 Completed</span>
                      <span className="font-bold text-[#7C3AED]">100 Coins</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">43 Million Students Deserve Better</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Indian students face a broken financial system. You're building your future, but the system treats you like a risk.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <ScrollReveal delay={0.1} className="h-full">
            <TiltCard>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full backdrop-blur-sm">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-3">Banks Say No</h3>
                <p className="text-gray-400 mb-4">Banks reject students due to lack of credit history.</p>
                <p className="text-sm text-[#D9F99D] italic">"No income? No credit score? No loan."</p>
              </div>
            </TiltCard>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="h-full">
            <TiltCard>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full backdrop-blur-sm">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold mb-3">Predatory Apps</h3>
                <p className="text-gray-400 mb-4">Existing apps charge 70%+ APR with aggressive recovery.</p>
                <p className="text-sm text-[#D9F99D] italic">"Harassment, hidden fees, and financial traps."</p>
              </div>
            </TiltCard>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="h-full">
            <TiltCard>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full backdrop-blur-sm">
                <div className="text-4xl mb-4">❌</div>
                <h3 className="text-xl font-bold mb-3">No Support System</h3>
                <p className="text-gray-400 mb-4">Zero financial education or earning pathways.</p>
                <p className="text-sm text-[#D9F99D] italic">"Left to figure it out alone with no guidance."</p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 text-center mb-12">
            <motion.div whileHover={{ scale: 1.1 }} className="transition-transform">
              <div className="text-3xl font-display font-bold text-[#D9F99D] mb-2">75%+</div>
              <div className="text-sm text-gray-400 max-w-[200px]">of students face regular cash gaps of ₹1k-₹10k</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="transition-transform">
              <div className="text-3xl font-display font-bold text-[#D9F99D] mb-2">43M+</div>
              <div className="text-sm text-gray-400 max-w-[200px]">students struggle with financial instability</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="transition-transform">
              <div className="text-3xl font-display font-bold text-[#D9F99D] mb-2">0</div>
              <div className="text-sm text-gray-400 max-w-[200px]">fair solutions designed specifically for students</div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="text-center text-xl font-medium text-white/90 max-w-3xl mx-auto bg-[#7C3AED]/20 p-6 rounded-2xl border border-[#7C3AED]/30 backdrop-blur-md">
            That's why we built CreditBuddy—a financial ecosystem designed around your needs, not profits.
          </div>
        </ScrollReveal>
      </section>

      {/* The Solution Section */}
      <section className="py-24 px-6 bg-[#111]/80 backdrop-blur-xl border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">One App. Three Powerful Features.<br/>Complete Financial Freedom.</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                CreditBuddy isn't just another loan app. It's your complete financial companion designed specifically for student life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} className="h-full">
              <TiltCard>
                <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9F99D] rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity" />
                  <div className="w-14 h-14 rounded-2xl bg-[#D9F99D]/10 flex items-center justify-center mb-6 text-3xl">💳</div>
                  <h3 className="text-2xl font-bold mb-4">Safe, Transparent Microloans</h3>
                  <p className="text-gray-400 mb-6">Get instant access to ₹500-₹10,000 when you need it most. No hidden fees. No harassment. Just fair, transparent credit built for students.</p>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-auto">
                    <span className="text-[#D9F99D] font-bold text-sm block mb-1">Key Differentiator:</span>
                    <span className="text-sm text-gray-300">Unlike other apps, we reward responsibility. Pay on time, unlock better rates and higher limits.</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="h-full">
              <TiltCard>
                <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED] rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity" />
                  <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mb-6 text-3xl">💰</div>
                  <h3 className="text-2xl font-bold mb-4">Real Ways to Earn, Not Just Borrow</h3>
                  <p className="text-gray-400 mb-6">Why just borrow when you can earn? CreditBuddy gives you legitimate ways to reduce your loan burden and build financial independence.</p>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-auto">
                    <span className="text-[#7C3AED] font-bold text-sm block mb-1">Key Differentiator:</span>
                    <span className="text-sm text-gray-300">We help you earn your way out of debt, not trap you in it.</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="h-full">
              <TiltCard>
                <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity" />
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-3xl">📚</div>
                  <h3 className="text-2xl font-bold mb-4">Build Financial Confidence</h3>
                  <p className="text-gray-400 mb-6">Money management isn't taught in classrooms. We're changing that with a safe community and engaging content designed for students.</p>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-auto">
                    <span className="text-blue-400 font-bold text-sm block mb-1">Key Differentiator:</span>
                    <span className="text-sm text-gray-300">Financial education shouldn't be boring. Learn through engaging content while connecting with your peers.</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose CreditBuddy */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Built Different. Built for Students.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're not just another fintech app. We're a student movement backed by compliance, transparency, and genuine care.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="overflow-x-auto mb-16">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Feature</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Other Apps</th>
                  <th className="text-left py-4 px-6 text-[#D9F99D] font-bold text-lg bg-[#D9F99D]/5 rounded-t-2xl">CreditBuddy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 font-medium">Who it's for</td>
                  <td className="py-4 px-6 text-gray-400">General consumers</td>
                  <td className="py-4 px-6 bg-[#D9F99D]/5 font-medium">Students (18-25) exclusively</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 font-medium">Approach</td>
                  <td className="py-4 px-6 text-gray-400">Loan-first</td>
                  <td className="py-4 px-6 bg-[#D9F99D]/5 font-medium">Earn + Learn + Borrow ecosystem</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 font-medium">Pricing</td>
                  <td className="py-4 px-6 text-gray-400">High APR (70%+)</td>
                  <td className="py-4 px-6 bg-[#D9F99D]/5 font-medium">Transparent, student-aligned rates</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 font-medium">Collections</td>
                  <td className="py-4 px-6 text-gray-400">Aggressive harassment</td>
                  <td className="py-4 px-6 bg-[#D9F99D]/5 font-medium">Support-led, respectful approach</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 font-medium">Education</td>
                  <td className="py-4 px-6 text-gray-400">None</td>
                  <td className="py-4 px-6 bg-[#D9F99D]/5 font-medium">Built-in financial literacy</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 font-medium">Earning</td>
                  <td className="py-4 px-6 text-gray-400">None</td>
                  <td className="py-4 px-6 bg-[#D9F99D]/5 font-medium">Multiple income pathways</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 font-medium">Compliance</td>
                  <td className="py-4 px-6 text-gray-400">Varies</td>
                  <td className="py-4 px-6 bg-[#D9F99D]/5 font-medium">RBI-compliant with NBFC partners</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Community</td>
                  <td className="py-4 px-6 text-gray-400">None</td>
                  <td className="py-4 px-6 bg-[#D9F99D]/5 font-medium rounded-b-2xl">Anonymous peer support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-[#D9F99D] shrink-0" />
              <div>
                <h4 className="font-bold mb-1">RBI-Compliant</h4>
                <p className="text-sm text-gray-400">Fully regulated with NBFC partnerships for your safety</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex gap-4">
              <TrendingUp className="w-8 h-8 text-[#D9F99D] shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Transparent Pricing</h4>
                <p className="text-sm text-gray-400">No hidden fees. Ever. See exactly what you'll pay.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-[#D9F99D] shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Student-First</h4>
                <p className="text-sm text-gray-400">Built by people who understand student struggles</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex gap-4">
              <Lock className="w-8 h-8 text-[#D9F99D] shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Privacy Protected</h4>
                <p className="text-sm text-gray-400">Bank-level encryption and data security</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <div className="flex gap-4">
              <HeartHandshake className="w-8 h-8 text-[#D9F99D] shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Respectful Collections</h4>
                <p className="text-sm text-gray-400">No harassment. No shame. Just support.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <div className="flex gap-4">
              <GraduationCap className="w-8 h-8 text-[#D9F99D] shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Build Your Future</h4>
                <p className="text-sm text-gray-400">Improve credit score while learning financial skills</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Getting Started is Simple</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <ScrollReveal delay={0.1}>
              <div className="relative">
                <div className="text-6xl font-display font-bold text-white/5 absolute -top-10 -left-4">01</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Sign Up (30s)</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex gap-2"><span>✓</span> Download the app</li>
                  <li className="flex gap-2"><span>✓</span> Phone verification with OTP</li>
                  <li className="flex gap-2"><span>✓</span> Student email/ID verification</li>
                  <li className="flex gap-2"><span>✓</span> Basic KYC (Aadhaar/PAN)</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="text-6xl font-display font-bold text-white/5 absolute -top-10 -left-4">02</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Get Approved</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex gap-2"><span>✓</span> Choose amount (₹500-₹10K)</li>
                  <li className="flex gap-2"><span>✓</span> Select 20 or 30-day term</li>
                  <li className="flex gap-2"><span>✓</span> Add purpose + proof for interest waiver</li>
                  <li className="flex gap-2"><span>✓</span> Instant approval</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="relative">
                <div className="text-6xl font-display font-bold text-white/5 absolute -top-10 -left-4">03</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Receive Funds</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex gap-2"><span>✓</span> Disbursed to UPI/bank/wallet</li>
                  <li className="flex gap-2"><span>✓</span> Get instant notification</li>
                  <li className="flex gap-2"><span>✓</span> Clear repayment schedule</li>
                  <li className="flex gap-2"><span>✓</span> No hidden charges</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="relative">
                <div className="text-6xl font-display font-bold text-[#D9F99D]/10 absolute -top-10 -left-4">04</div>
                <h3 className="text-xl font-bold mb-4 relative z-10 text-[#D9F99D]">Earn, Learn & Grow</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex gap-2"><span>✓</span> More features revealed soon!</li>
                  <li className="flex gap-2"><span>✓</span> Stay tuned for announcements</li>
                  <li className="flex gap-2"><span>✓</span> Join waitlist for early access</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="text-center">
              <p className="text-xl mb-6">Ready to take control of your finances?</p>
              <Link to="/waitlist" className="bg-[#D9F99D] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all inline-flex items-center justify-center gap-2 group">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Student Validation */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Students Are Already Excited</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We talked to hundreds of students across India. Here's what they told us:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0.1} className="h-full">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 h-full">
              <div className="text-5xl font-display font-bold text-[#D9F99D] mb-4">75%</div>
              <p className="text-white font-medium mb-4">Face regular financial challenges that affect their studies and daily life</p>
              <p className="text-gray-500 italic text-sm">"Finally, someone who gets it."</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="h-full">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 h-full">
              <div className="text-5xl font-display font-bold text-[#D9F99D] mb-4">62%</div>
              <p className="text-white font-medium mb-4">Prefer RBI-compliant platforms over informal lending</p>
              <p className="text-gray-500 italic text-sm">"Safety and trust matter more than speed."</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="h-full">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 h-full">
              <div className="text-5xl font-display font-bold text-[#D9F99D] mb-4">78%</div>
              <p className="text-white font-medium mb-4">Want both earning opportunities and financial education</p>
              <p className="text-gray-500 italic text-sm">"Learning to manage money is as important as accessing it."</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.4} className="h-full">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 h-full">
              <p className="text-gray-300 italic mb-4">"Finally, a platform that understands students and prioritizes trust."</p>
              <div className="font-bold">— Priya, Engineering Student, Mumbai</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.5} className="h-full">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 h-full">
              <p className="text-gray-300 italic mb-4">"Learning how to manage money mattered as much as accessing credit."</p>
              <div className="font-bold">— Rahul, Commerce Student, Delhi</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.6} className="h-full">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 h-full">
              <p className="text-gray-300 italic mb-4">"This is exactly what students have been waiting for. A platform that truly cares."</p>
              <div className="font-bold">— Aisha, Medical Student, Bangalore</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Campus Ambassador Teaser */}
      <section className="py-24 px-6 bg-[#7C3AED] text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Be a CreditBuddy Champion on Your Campus</h2>
            <p className="text-white/80 text-lg mb-8">
              Join our Campus Ambassador program and help build India's most trusted student financial platform. Get exclusive perks, leadership experience, and make a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium">
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Early access to features</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Exclusive Buddy Coins rewards</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Leadership certificate</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Direct line to founders</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Build your network</span>
            </div>
            <Link to="/ambassadors" className="bg-white text-[#7C3AED] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D9F99D] hover:text-black transition-all inline-flex items-center gap-2">
              Learn More About Campus Ambassadors <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#7C3AED]/20 border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Join 1,000+ Students Building Their Financial Future</h2>
            <p className="text-gray-400 text-lg mb-10">
              Be among the first to experience India's most student-friendly financial ecosystem.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <form className="flex flex-col gap-4 max-w-md mx-auto">
                <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D]" />
                <input type="email" placeholder="College Email Address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D]" />
                <input type="tel" placeholder="Phone Number" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D]" />
                <Link to="/waitlist" className="bg-[#D9F99D] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all mt-2 text-center block">
                  Join Waitlist Now (Takes 30s)
                </Link>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
