import { motion } from "motion/react";
import { ArrowRight, Smartphone, ShieldCheck, CreditCard, Zap, BookOpen, Lock, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

export default function HowItWorks() {
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
            Your Complete Guide to <br/><span className="text-[#D9F99D]">CreditBuddy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Understanding how CreditBuddy works—from signup to building your financial future.
          </p>
        </motion.div>
      </section>

      {/* Getting Started */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Step 1: Create Your Account (2 Minutes)</h2>
            
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 mb-12">
              <h3 className="text-xl font-bold mb-6 text-[#D9F99D]">What You Need:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-[#D9F99D]">✓</span> Valid phone number
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-[#D9F99D]">✓</span> Student ID or college email
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-[#D9F99D]">✓</span> Aadhaar card (for KYC)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-[#D9F99D]">✓</span> PAN card (for loans {'>'}₹5K)
                </div>
              </div>

              <h3 className="text-xl font-bold mb-6 text-[#D9F99D]">The Process:</h3>
              <div className="grid md:grid-cols-4 gap-6 relative">
                <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-white/10 z-0" />
                
                <div className="relative z-10 bg-[#0A0A0A] p-6 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#D9F99D] text-black font-bold flex items-center justify-center mb-4 text-xl">1</div>
                  <h4 className="font-bold mb-2">Download the App</h4>
                  <p className="text-sm text-gray-400">Available on Android and iOS (coming soon)</p>
                </div>
                
                <div className="relative z-10 bg-[#0A0A0A] p-6 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#D9F99D] text-black font-bold flex items-center justify-center mb-4 text-xl">2</div>
                  <h4 className="font-bold mb-2">Phone Verification</h4>
                  <p className="text-sm text-gray-400">Enter your mobile number, receive OTP and verify</p>
                </div>
                
                <div className="relative z-10 bg-[#0A0A0A] p-6 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#D9F99D] text-black font-bold flex items-center justify-center mb-4 text-xl">3</div>
                  <h4 className="font-bold mb-2">Student Verification</h4>
                  <p className="text-sm text-gray-400">Upload student ID card OR Verify with college email address</p>
                </div>
                
                <div className="relative z-10 bg-[#0A0A0A] p-6 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#D9F99D] text-black font-bold flex items-center justify-center mb-4 text-xl">4</div>
                  <h4 className="font-bold mb-2">Complete KYC</h4>
                  <p className="text-sm text-gray-400">Quick Aadhaar verification, upload PAN card, selfie verification for security</p>
                </div>
              </div>
              
              <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-center bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Time Required</div>
                  <div className="text-2xl font-display font-bold text-white">Less than 2 minutes</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Approval</div>
                  <div className="text-2xl font-display font-bold text-[#D9F99D]">Instant upon verification</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* The CreditBuddy Journey */}
      <section className="py-24 px-6 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Step 2: Using CreditBuddy</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 p-8 rounded-3xl relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9F99D] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#D9F99D]/10 flex items-center justify-center text-2xl">💳</div>
                  <h3 className="text-2xl font-bold">Borrow</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3"><span className="text-[#D9F99D]">•</span> Loans from ₹500 to ₹10,000</li>
                  <li className="flex gap-3"><span className="text-[#D9F99D]">•</span> 20-day or 30-day repayment terms</li>
                  <li className="flex gap-3"><span className="text-[#D9F99D]">•</span> Upload proof for interest waivers</li>
                  <li className="flex gap-3"><span className="text-[#D9F99D]">•</span> Instant approval and disbursal</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 p-8 rounded-3xl relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center text-2xl">📊</div>
                  <h3 className="text-2xl font-bold">Repay</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3"><span className="text-[#7C3AED]">•</span> UPI, net banking, or wallet</li>
                  <li className="flex gap-3"><span className="text-[#7C3AED]">•</span> Full or partial payments</li>
                  <li className="flex gap-3"><span className="text-[#7C3AED]">•</span> Extension options available</li>
                  <li className="flex gap-3"><span className="text-[#7C3AED]">•</span> Earn Buddy Coins on timely repayment</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 p-8 rounded-3xl relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-2xl">💰</div>
                  <h3 className="text-2xl font-bold">Earn</h3>
                </div>
                <p className="text-gray-300 text-lg">Exciting earning opportunities will be revealed soon!</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 p-8 rounded-3xl relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl">📚</div>
                  <h3 className="text-2xl font-bold">Learn</h3>
                </div>
                <p className="text-gray-300 text-lg">Innovative learning features coming your way!</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Your Money & Data Are Safe with Us</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-[#D9F99D]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Data Security</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex gap-2"><span>🔒</span> Bank-level encryption for all transactions</li>
                <li className="flex gap-2"><span>🔒</span> Secure servers with regular audits</li>
                <li className="flex gap-2"><span>🔒</span> Two-factor authentication available</li>
                <li className="flex gap-2"><span>🔒</span> No data selling - your information stays private</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#D9F99D]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Financial Security</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> RBI-compliant lending practices</li>
                <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> NBFC partnerships for regulated lending</li>
                <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> Transparent pricing - no hidden charges</li>
                <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> Fair collection - no harassment ever</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#D9F99D]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Privacy Protection</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> Anonymous community interactions</li>
                <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> Minimal data collection - only what's necessary</li>
                <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> User control - delete your data anytime</li>
                <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> No spam - we hate it too</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 bg-[#111] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Common Questions Answered</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              { q: "Who can use CreditBuddy?", a: "Any student aged 18-25 enrolled in a recognized college/university in India with valid student ID or college email." },
              { q: "How much can I borrow?", a: "Start with ₹500-₹5,000. Based on repayment history, unlock up to ₹10,000." },
              { q: "What's the interest rate?", a: "Transparent, student-aligned rates. Exact amount shown before you confirm. No hidden charges." },
              { q: "How quickly do I get the money?", a: "Instant disbursal to UPI/bank account upon approval (usually within minutes)." },
              { q: "What if I can't repay on time?", a: "Contact us immediately. We offer extensions and payment plans. No harassment, ever." },
              { q: "Is my data safe?", a: "Yes. Bank-level encryption, RBI-compliant processes, and we never sell your data." },
              { q: "How do Buddy Coins work?", a: "Non-cash rewards for good behavior. Earn through repayment, referrals, and engagement. Redeem for benefits." },
              { q: "What documents do I need?", a: "Phone number, student ID/college email, Aadhaar card, PAN card (for loans >₹5K)." },
              { q: "Can I use CreditBuddy if I have an existing loan?", a: "Yes, as long as you can manage repayment responsibly." },
              { q: "How is this different from other loan apps?", a: "We're student-first (not loan-first), offer earning opportunities, provide financial education, and prioritize your wellbeing over profits." }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-lg mb-2 flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-[#D9F99D] shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-gray-400 ml-9">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-12">
              <button className="text-[#D9F99D] font-bold hover:underline inline-flex items-center gap-2">
                See All FAQs <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#7C3AED]/20 border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to take control of your finances?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Link to="/waitlist" className="bg-[#D9F99D] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all inline-flex items-center justify-center gap-2 group">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="mt-8 text-gray-400">
              Questions? Contact us at <a href="mailto:info@creditbuddy.org.in" className="text-white hover:underline">info@creditbuddy.org.in</a>
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
