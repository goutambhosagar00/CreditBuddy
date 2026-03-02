import { Wallet, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { path: "/about", label: "About Us" },
    { path: "/features", label: "Features" },
    { path: "/how-it-works", label: "How it Works" },
    { path: "/ambassadors", label: "Ambassadors" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-white font-semibold"
      : "text-gray-400 hover:text-white";
  };

  // ✅ Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A0A0A]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#D9F99D] flex items-center justify-center">
            <Wallet className="w-5 h-5 text-black" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            CreditBuddy
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${isActive(link.path)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/waitlist"
            className="bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#D9F99D] transition-colors"
          >
            Join the Waitlist
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] px-6 py-8 flex flex-col gap-6 text-lg font-medium shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={isActive(link.path)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/waitlist"
            className="mt-4 bg-white text-black text-center py-3 rounded-full font-semibold hover:bg-[#D9F99D] transition-colors"
          >
            Join the Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}