import { motion } from "motion/react";
import { ArrowRight, Wallet, BookOpen, Gift, Smartphone, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import TiltCard from "../components/TiltCard";
import AnimatedBackground from "../components/AnimatedBackground";
import ScrollReveal from "../components/ScrollReveal";

export default function Features() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D9F99D] selection:text-black overflow-x-hidden pt-20 relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-6 max-w-7xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 backdrop-blur-md text-[#D9F99D]">
            Everything you need, nothing you don't.
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tighter mb-6">
            The Ultimate Financial <br/><span className="text-[#7C3AED]">Toolkit for Students</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            CreditBuddy is more than just a loan app. It's a complete ecosystem designed to help you borrow responsibly, learn about money, and earn rewards.
          </p>
        </motion.div>
      </section>

      {/* Feature 1: Borrow Smartly */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <ScrollReveal direction="right">
              <TiltCard>
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-3xl p-8 h-full backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#D9F99D] rounded-full blur-[80px] opacity-10" />
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Wallet className="w-6 h-6 text-[#D9F99D]" />
                    </div>
                    <span className="bg-[#D9F99D]/10 text-[#D9F99D] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Live Now
                    </span>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">Loan Amount</span>
                        <span className="font-bold">₹5,000</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-[#D9F99D] h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Interest Rate</span>
                        <span className="font-bold text-[#D9F99D]">Low & Transparent</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Repayment Term</span>
                        <span className="font-bold">Flexible (20-30 days)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
          <div className="order-1 md:order-2">
            <ScrollReveal direction="left">
              <div className="w-16 h-16 rounded-3xl bg-[#D9F99D]/10 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-[#D9F99D]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Borrow Smartly</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Get instant access to funds when you need them most. Our micro-loans are designed specifically for students, with low interest rates, completely transparent fees, and flexible repayment options.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D9F99D]" />
                  <span>No hidden processing fees or surprise charges</span>
                </li>
                <li className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#D9F99D]" />
                  <span>Build your credit score with every on-time repayment</span>
                </li>
                <li className="flex items-center gap-3">
                  <Wallet className="w-5 h-5 text-[#D9F99D]" />
                  <span>Choose between 20 or 30-day flexible terms</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature 2: Learn & Grow */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal direction="right">
              <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Learn & Grow</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Financial education shouldn't be boring. We've gamified the learning experience to make mastering your money fun, engaging, and rewarding.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-blue-500" /></div>
                  <span>Bite-sized, interactive modules on budgeting and saving</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-blue-500" /></div>
                  <span>Quizzes and challenges to test your knowledge</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-blue-500" /></div>
                  <span>Earn Buddy Coins for completing educational milestones</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="left">
              <TiltCard>
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-3xl p-8 h-full backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-10" />
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-blue-500" />
                    </div>
                    <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Module 1
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">The 50/30/20 Rule</h3>
                  <p className="text-gray-400 text-sm mb-6">Master the basics of student budgeting.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
                      <div className="flex-1">
                        <div className="font-bold text-sm">Watch Video</div>
                        <div className="text-xs text-gray-500">2 mins</div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">✓</div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">2</div>
                      <div className="flex-1">
                        <div className="font-bold text-sm">Take Quiz</div>
                        <div className="text-xs text-gray-500">5 questions</div>
                      </div>
                      <div className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Start</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature 3: Earn Rewards */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <ScrollReveal direction="right">
              <TiltCard>
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-3xl p-8 h-full backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500 rounded-full blur-[80px] opacity-10" />
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Gift className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Balance</div>
                      <div className="text-2xl font-display font-bold text-yellow-500">1,250 🪙</div>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-sm mb-4 text-gray-400">Recent Earnings</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">🤝</div>
                        <span className="text-sm font-medium">Referred Rahul</span>
                      </div>
                      <span className="font-bold text-yellow-500">+500</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">📅</div>
                        <span className="text-sm font-medium">On-time Repayment</span>
                      </div>
                      <span className="font-bold text-yellow-500">+250</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">📚</div>
                        <span className="text-sm font-medium">Completed Module 2</span>
                      </div>
                      <span className="font-bold text-yellow-500">+100</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
          <div className="order-1 md:order-2">
            <ScrollReveal direction="left">
              <div className="w-16 h-16 rounded-3xl bg-yellow-500/10 flex items-center justify-center mb-6">
                <Gift className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Earn Rewards</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Good financial habits should be rewarded. Earn Buddy Coins for every positive action you take on the platform.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-yellow-500" /></div>
                  <span>Earn coins for on-time loan repayments</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-yellow-500" /></div>
                  <span>Get rewarded for referring friends to CreditBuddy</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-yellow-500" /></div>
                  <span>Complete tasks and educational modules to boost your balance</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature 4: CreditBuddy Pay */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal direction="right">
              <div className="w-16 h-16 rounded-3xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-[#7C3AED]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">CreditBuddy Pay</h2>
              <div className="inline-block bg-[#7C3AED] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Coming Soon
              </div>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We're building a seamless payment experience. Soon, you'll be able to use your CreditBuddy limit directly via UPI and redeem your hard-earned Buddy Coins.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7C3AED]/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-[#7C3AED]" /></div>
                  <span>Scan and pay at any store using your credit limit via UPI</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7C3AED]/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-[#7C3AED]" /></div>
                  <span>Redeem Buddy Coins for discounts, vouchers, or cashbacks</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7C3AED]/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-[#7C3AED]" /></div>
                  <span>Split bills with friends instantly through the app</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="left">
              <TiltCard>
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#7C3AED]/30 rounded-3xl p-8 h-full backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#7C3AED] rounded-full blur-[80px] opacity-20" />
                  
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mb-6 relative">
                      <Smartphone className="w-10 h-10 text-[#7C3AED]" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-xs">UPI</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">Scan & Pay Anywhere</h3>
                    <p className="text-gray-400 text-sm">Your credit limit, now universally accepted.</p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-50"></div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative z-10 border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to Experience the Future of Student Finance?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Join the waitlist today and be the first to get access to all these features.
            </p>
            <Link to="/waitlist" className="bg-[#D9F99D] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all inline-flex items-center justify-center gap-2 group">
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
