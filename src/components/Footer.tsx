import { Wallet, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { XIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6 mt-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#D9F99D] flex items-center justify-center">
              <Wallet className="w-5 h-5 text-black" />
            </div>
            <span className="font-display font-bold text-xl text-white">CreditBuddy</span>
          </div>
          <p className="text-gray-500 text-sm">
            Building a responsible, student-first financial future for India.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">For Students</Link></li>
            <li><Link to="/ambassadors" className="hover:text-white transition-colors">Campus Ambassadors</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-white">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Responsible Lending</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Data Security</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-500 mb-6">
            <li>📧 info@creditbuddy.org.in</li>
            <li>📍 Sambalpur, Odisha, India</li>
          </ul>
          <h4 className="font-bold mb-4 text-white">Newsletter Signup</h4>
          <p className="text-xs text-gray-500 mb-2">Stay updated on launch and student finance tips</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-[#D9F99D]" />
            <button className="bg-[#D9F99D] text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div>© 2025 CreditBuddy. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/creditbuddy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/creditbuddy_official/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
            <XIcon className="w-4 h-4" /> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
