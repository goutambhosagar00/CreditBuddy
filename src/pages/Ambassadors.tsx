import { motion } from "motion/react";
import { ArrowRight, Users, GraduationCap, Megaphone, Target, Award, Gift, Zap, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

export default function Ambassadors() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D9F99D] selection:text-black pt-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 text-[#D9F99D]">
            Be more than a user. Be a leader.
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tighter mb-6">
            Lead the Financial Revolution <br/><span className="text-[#7C3AED]">on Your Campus</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Become a CreditBuddy Campus Ambassador and help bring fair financial access to students across India.
          </p>
          <button className="bg-[#7C3AED] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all inline-flex items-center justify-center gap-2 group">
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* What is the Program */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal direction="right">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Campus Ambassadors: The Face of CreditBuddy</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Campus Ambassadors are passionate students who believe in our mission and want to drive change on their campuses. You'll be the bridge between CreditBuddy and your fellow students—spreading awareness, gathering feedback, and building a community of financially empowered students.
              </p>
              <div className="bg-[#111] p-6 rounded-2xl border border-white/10">
                <h3 className="font-bold text-xl mb-4 text-[#D9F99D]">Not Just Marketing. Leadership.</h3>
                <p className="text-gray-400 mb-4 text-sm">This isn't about posting on social media (though you can). It's about:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2"><span>•</span> Organizing financial literacy workshops</li>
                  <li className="flex gap-2"><span>•</span> Helping students understand responsible borrowing</li>
                  <li className="flex gap-2"><span>•</span> Building peer support networks</li>
                  <li className="flex gap-2"><span>•</span> Gathering insights to improve CreditBuddy</li>
                  <li className="flex gap-2"><span>•</span> Creating lasting impact on campus</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <div className="relative">
            <ScrollReveal direction="left">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#7C3AED] rounded-full blur-[100px] opacity-30" />
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-white/5 text-center">
                    <Megaphone className="w-8 h-8 text-[#D9F99D] mx-auto mb-3" />
                    <div className="font-bold text-sm">Awareness</div>
                  </div>
                  <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-white/5 text-center">
                    <Users className="w-8 h-8 text-[#7C3AED] mx-auto mb-3" />
                    <div className="font-bold text-sm">Community</div>
                  </div>
                  <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-white/5 text-center">
                    <Target className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                    <div className="font-bold text-sm">Feedback</div>
                  </div>
                  <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-white/5 text-center">
                    <GraduationCap className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                    <div className="font-bold text-sm">Events</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="py-24 px-6 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Your Role as an Ambassador</h2>
              <p className="text-[#D9F99D] font-medium">Monthly Time Commitment: Flexible! Minimum 4-6 hours (You're a student first, ambassador second)</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-[#D9F99D]" />
                  </div>
                  <h3 className="text-2xl font-bold">1. Awareness & Education</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-2"><span>•</span> Introduce CreditBuddy to your campus</li>
                  <li className="flex gap-2"><span>•</span> Organize info sessions and workshops</li>
                  <li className="flex gap-2"><span>•</span> Create campus-specific content</li>
                  <li className="flex gap-2"><span>•</span> Bust myths about student credit</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-2xl font-bold">2. Community Building</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-2"><span>•</span> Form student support groups</li>
                  <li className="flex gap-2"><span>•</span> Host financial literacy events</li>
                  <li className="flex gap-2"><span>•</span> Create safe spaces for money discussions</li>
                  <li className="flex gap-2"><span>•</span> Connect students with resources</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold">3. Feedback & Insights</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-2"><span>•</span> Share student pain points with us</li>
                  <li className="flex gap-2"><span>•</span> Test new features before launch</li>
                  <li className="flex gap-2"><span>•</span> Provide honest product feedback</li>
                  <li className="flex gap-2"><span>•</span> Help us improve constantly</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold">4. Event Organization</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-2"><span>•</span> Financial wellness workshops</li>
                  <li className="flex gap-2"><span>•</span> Budgeting challenges</li>
                  <li className="flex gap-2"><span>•</span> Credit score awareness drives</li>
                  <li className="flex gap-2"><span>•</span> Referral campaigns</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ambassador Perks & Benefits</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6">
          <ScrollReveal delay={0.1}>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl h-full">
              <Gift className="w-8 h-8 text-[#D9F99D] mb-4" />
              <h3 className="font-bold text-lg mb-3">Early Access</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• First to test new features</li>
                <li>• Beta program participation</li>
                <li>• Influence product development</li>
                <li>• Direct line to founders</li>
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl h-full">
              <Award className="w-8 h-8 text-[#7C3AED] mb-4" />
              <h3 className="font-bold text-lg mb-3">Professional Growth</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Leadership certificate</li>
                <li>• LinkedIn endorsement</li>
                <li>• Letter of recommendation</li>
                <li>• Case study for resume</li>
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl h-full">
              <Zap className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Recognition</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Featured on website & social</li>
                <li>• Quarterly top performer awards</li>
                <li>• National ambassador meetups</li>
                <li>• Exclusive merchandise</li>
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl h-full">
              <Target className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Impact & Learning</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Financial literacy training</li>
                <li>• Leadership workshops</li>
                <li>• Networking with ambassadors</li>
                <li>• Help thousands of students</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-24 px-6 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">The Ideal Ambassador</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="right">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#D9F99D]">Qualities We Look For:</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-1">Passionate About Change</h4>
                    <p className="text-gray-400 text-sm">You care about student financial wellness and want to make a difference</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Good Communicator</h4>
                    <p className="text-gray-400 text-sm">Comfortable speaking to groups, organizing events, and using social media</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Well-Connected</h4>
                    <p className="text-gray-400 text-sm">Active on campus with access to student communities and groups</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Responsible & Reliable</h4>
                    <p className="text-gray-400 text-sm">Follow through on commitments and meet deadlines</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Creative Thinker</h4>
                    <p className="text-gray-400 text-sm">Bring fresh ideas for campus engagement and awareness</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Empathetic Leader</h4>
                    <p className="text-gray-400 text-sm">Understand student struggles and can guide peers with sensitivity</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div>
                <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl mb-8">
                  <h3 className="text-xl font-bold mb-4 text-red-400">We Don't Require:</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex gap-2"><span>❌</span> Previous ambassador experience</li>
                    <li className="flex gap-2"><span>❌</span> Huge social media following</li>
                    <li className="flex gap-2"><span>❌</span> Specific course/stream</li>
                    <li className="flex gap-2"><span>❌</span> Perfect grades</li>
                  </ul>
                </div>
                
                <div className="bg-[#0A0A0A] border border-[#D9F99D]/30 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold mb-4 text-[#D9F99D]">We Value:</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> Genuine interest in the mission</li>
                    <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> Willingness to learn and grow</li>
                    <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> Commitment to student welfare</li>
                    <li className="flex gap-2"><span className="text-[#D9F99D]">✓</span> Creative problem-solving</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Success Stories / Pioneer */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Meet Our Pioneer Ambassadors</h2>
          <div className="bg-gradient-to-br from-[#7C3AED]/20 to-transparent border border-[#7C3AED]/30 p-12 rounded-3xl">
            <div className="inline-block bg-[#7C3AED] text-white px-4 py-1 rounded-full text-sm font-bold mb-6">Coming Soon - First Cohort Launching</div>
            <p className="text-xl text-white mb-4 font-medium">We're looking for our founding ambassadors—the students who will shape this program from the ground up.</p>
            <p className="text-gray-400 mb-8">Be Part of the First Wave. Your stories will inspire thousands of students across India.</p>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 bg-[#111] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ambassador FAQs</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { q: "How much time does it require?", a: "Minimum 4-6 hours per month, but it's flexible. You choose how much you want to contribute." },
              { q: "Do I get paid?", a: "The program focuses on non-monetary benefits (credits, recognition, skills), but top performers receive exclusive bonuses and perks." },
              { q: "Can I do this alongside studies?", a: "Absolutely! We design activities around student schedules. Academics always come first." },
              { q: "What if there's no CreditBuddy user on my campus yet?", a: "Even better! You'll be the pioneer bringing CreditBuddy to your campus." },
              { q: "Can I quit if it doesn't work out?", a: "Yes, though we hope you'll stay! No obligations beyond mutual respect." },
              { q: "Do I need permission from college?", a: "For most activities, no. For official events on campus, we'll help you with the process." },
              { q: "How many ambassadors per campus?", a: "Typically 1-3 depending on campus size. We prioritize quality over quantity." },
              { q: "Will this help my resume?", a: "Definitely! Leadership experience, certificate, recommendation letter, and real-world impact." }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-lg mb-2 flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-[#7C3AED] shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-gray-400 ml-9">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#7C3AED]/20 border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Apply to Be an Ambassador</h2>
            <p className="text-gray-400 text-lg mb-4">
              Join the founding cohort of Campus Ambassadors. Limited spots available for each campus.
            </p>
            <p className="text-sm text-[#D9F99D] mb-10">
              What Happens Next: We'll review your application within 5-7 days and reach out for a short video interview. Selected ambassadors will be notified within 2 weeks.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <form className="flex flex-col gap-4 max-w-md mx-auto">
                <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED]" />
                <input type="email" placeholder="College Email Address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED]" />
                <input type="text" placeholder="College Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED]" />
                <button type="button" className="bg-[#7C3AED] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all mt-2">
                  Apply Now
                </button>
              </form>
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
