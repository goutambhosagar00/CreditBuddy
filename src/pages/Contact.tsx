import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone, MessageSquare, Briefcase, GraduationCap, Building, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { XIcon, WhatsAppIcon } from "../components/Icons";

export default function Contact() {
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
            Get in <span className="text-[#D9F99D]">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a student, educator, investor, or supporter, we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <ScrollReveal delay={0.1}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#D9F99D]/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-[#D9F99D]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Join as a Student</h3>
              <p className="text-gray-400 text-sm mb-6">Be among the first users to experience fair credit.</p>
              <div className="text-[#D9F99D] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                <Link to="/waitlist" className="flex items-center gap-2">Join Waitlist <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Become an Ambassador</h3>
              <p className="text-gray-400 text-sm mb-6">Lead the financial movement on your campus.</p>
              <div className="text-[#7C3AED] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Apply Now <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer h-full">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Partner With Us</h3>
              <p className="text-gray-400 text-sm mb-6">Colleges, NBFCs, and brands looking to collaborate.</p>
              <div className="text-blue-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Let's Talk <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer h-full">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Invest in Our Vision</h3>
              <p className="text-gray-400 text-sm mb-6">Help us scale responsibly and reach more students.</p>
              <div className="text-yellow-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Contact Founders <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <ScrollReveal direction="right">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Send us a message</h2>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">First Name</label>
                    <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Last Name</label>
                    <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D]" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D] appearance-none">
                    <option value="general" className="bg-[#111]">General Inquiry</option>
                    <option value="support" className="bg-[#111]">Student Support</option>
                    <option value="partnership" className="bg-[#111]">Partnership</option>
                    <option value="investment" className="bg-[#111]">Investment</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea rows={5} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D] resize-none"></textarea>
                </div>
                <button type="button" className="bg-[#D9F99D] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all mt-2 w-full md:w-auto self-start">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Contact Information</h2>
              <div className="bg-[#111] border border-white/5 rounded-3xl p-8 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#D9F99D]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-gray-400 text-sm mb-2">Our friendly team is here to help.</p>
                    <a href="mailto:info@creditbuddy.org.in" className="text-white hover:text-[#D9F99D] transition-colors font-medium">info@creditbuddy.org.in</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#D9F99D]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                    <p className="text-gray-400 text-sm mb-2">Come say hello at our office HQ.</p>
                    <p className="text-white font-medium">Sambalpur, Odisha, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#D9F99D]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-gray-400 text-sm mb-2">Mon-Fri from 9am to 6pm.</p>
                    <p className="text-white font-medium">+91 (XXX) XXX-XXXX</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold text-lg mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/creditbuddy/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#D9F99D] transition-all group">
                    <Linkedin className="w-5 h-5 text-black" />
                  </a>
                  <a href="https://www.instagram.com/creditbuddy_official/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#D9F99D] transition-all group">
                    <Instagram className="w-5 h-5 text-black" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#D9F99D] transition-all group">
                    <WhatsAppIcon className="w-5 h-5 text-black" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#D9F99D] transition-all group">
                    <XIcon className="w-5 h-5 text-black" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
