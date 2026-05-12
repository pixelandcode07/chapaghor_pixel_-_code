"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─── ICONS (inline SVG components to avoid icon library dependency) ───────────
const MenuIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const XIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ArrowRight = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const CheckIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ChevronDown = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.14 2 2 0 012.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const StarIcon = () => (
  <svg width="16" height="16" fill="#F59E0B" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Offset Printing", href: "#" },
      { label: "Digital Printing", href: "#" },
      { label: "Packaging Design", href: "#" },
      { label: "Branding & Identity", href: "#" },
    ],
  },
  {
    label: "Products",
    href: "#products",
    children: [
      { label: "Business Cards", href: "#" },
      { label: "Brochures & Flyers", href: "#" },
      { label: "Banners & Signage", href: "#" },
      { label: "Custom Packaging", href: "#" },
    ],
  },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "15+", label: "Years Experience", icon: "🏆" },
  { value: "8K+", label: "Happy Clients", icon: "😊" },
  { value: "120+", label: "Expert Team", icon: "👥" },
  { value: "99%", label: "On-Time Delivery", icon: "🚀" },
];

const services = [
  {
    icon: "🖨️",
    title: "Offset Printing",
    desc: "High-volume, precision offset printing for magazines, catalogs, books, and corporate materials with Pantone color accuracy.",
    tag: "Most Popular",
  },
  {
    icon: "💻",
    title: "Digital Printing",
    desc: "Fast-turnaround digital printing for short runs, variable data, personalized marketing, and on-demand production.",
    tag: "",
  },
  {
    icon: "📦",
    title: "Packaging & Box Design",
    desc: "Custom packaging solutions — die-cut boxes, retail packaging, corrugated cartons designed for impact and durability.",
    tag: "Premium",
  },
  {
    icon: "🎨",
    title: "Branding & Identity",
    desc: "Complete brand identity packages — logo, style guide, stationery, and brand collateral design that speaks your story.",
    tag: "",
  },
  {
    icon: "🖼️",
    title: "Large Format & Signage",
    desc: "Billboards, banners, vehicle wraps, exhibition displays, and architectural signage with vivid, weather-resistant inks.",
    tag: "",
  },
  {
    icon: "📋",
    title: "Corporate Stationery",
    desc: "Letterheads, envelopes, business cards, notepads, and full office stationery suites with premium paper finishing.",
    tag: "",
  },
];

const whyUs = [
  {
    title: "ISO-Certified Quality",
    desc: "Every job passes through our 12-point quality control protocol before dispatch.",
    icon: "🏅",
  },
  {
    title: "State-of-the-Art Machinery",
    desc: "Heidelberg, KOMORI & Roland presses delivering benchmark color precision.",
    icon: "⚙️",
  },
  {
    title: "On-Time, Every Time",
    desc: "99% on-time delivery record backed by a money-back guarantee.",
    icon: "⏱️",
  },
  {
    title: "Eco-Friendly Printing",
    desc: "FSC-certified paper, soy-based inks, and zero-waste production practices.",
    icon: "🌿",
  },
  {
    title: "Dedicated Account Manager",
    desc: "One point of contact from quoting to delivery — no confusion, no delays.",
    icon: "🤝",
  },
  {
    title: "Competitive Pricing",
    desc: "Factory-direct pricing with no middlemen — quality printing at honest cost.",
    icon: "💎",
  },
];

const process = [
  { step: "01", title: "Brief & Consultation", desc: "Share your vision, goals, and specs — we provide a detailed quote within 24 hours." },
  { step: "02", title: "Design & Pre-Press", desc: "Our designers prepare or review artwork, ensuring print-ready files with perfect colour profiles." },
  { step: "03", title: "Proof & Approval", desc: "Digital or physical proofs sent for your approval before we press go on production." },
  { step: "04", title: "Production", desc: "Your job runs on our precision presses with in-line quality checks at every stage." },
  { step: "05", title: "Finishing & Binding", desc: "Lamination, die-cutting, foiling, binding — all finishing done in-house for quality control." },
  { step: "06", title: "Delivery & Support", desc: "Nationwide delivery with real-time tracking. Post-delivery support whenever you need us." },
];

const testimonials = [
  {
    name: "Rashida Begum",
    role: "CEO, Dhaka Mart",
    text: "Chapaghor printed our entire product catalog — 5,000 copies — in 4 days. The color accuracy was perfect and the paper quality exceeded our expectations. Our clients were genuinely impressed.",
    rating: 5,
    initial: "R",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Tanvir Ahmed",
    role: "Marketing Director, NovaTech BD",
    text: "We've been using Chapaghor for 3 years for all our corporate stationery and event materials. Consistent quality, excellent pre-press support, and they always hit the deadline.",
    rating: 5,
    initial: "T",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    name: "Nusrat Jahan",
    role: "Founder, Ritu Fashion House",
    text: "The packaging designs Chapaghor created for us completely transformed our product presentation. Sales improved noticeably after the rebrand. Highly professional team.",
    rating: 5,
    initial: "N",
    color: "from-sky-500 to-sky-700",
  },
];

const faqs = [
  {
    q: "What is your minimum order quantity?",
    a: "We accommodate orders from as low as 100 units for digital printing. For offset printing, minimum quantities vary by product — typically 500 to 1,000 units for best pricing.",
  },
  {
    q: "How do I submit my artwork files?",
    a: "We accept PDF, AI, PSD, and INDD files. All files should be at 300 DPI, CMYK color mode, with 3mm bleed on all sides. Our pre-press team reviews every file before production.",
  },
  {
    q: "Do you offer design services?",
    a: "Absolutely. Our in-house design team can create or refine your artwork. We offer branding packages, single design jobs, and pre-press only services depending on your need.",
  },
  {
    q: "What are your standard turnaround times?",
    a: "Digital printing: 2–3 working days. Offset printing: 5–7 working days. Rush orders are available at a surcharge for select products — contact us for availability.",
  },
  {
    q: "Do you deliver outside Dhaka?",
    a: "Yes, we deliver nationwide across Bangladesh via Sundarban, SA Paribahan, and our own courier network. International shipping is available for select orders.",
  },
];

const clients = [
  "Grameen Bank", "BRAC", "Aarong", "Square Group", "Unilever BD",
  "Robi Axiata", "ACI Limited", "PRAN Group", "DBH Finance", "Dutch-Bangla"
];

// ─── COUNTER HOOK ──────────────────────────────────────────────────────────────
function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        :root {
          --navy: #070E1C;
          --navy-2: #0D1E3A;
          --blue: #1B5EF8;
          --blue-light: #3B82F6;
          --accent: #00D4FF;
        }
        .font-display { font-family: 'Syne', sans-serif; }
        .gradient-text {
          background: linear-gradient(135deg, #1B5EF8 0%, #00D4FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-bg {
          background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(27,94,248,0.18) 0%, transparent 70%),
                      radial-gradient(ellipse 40% 40% at 90% 40%, rgba(0,212,255,0.10) 0%, transparent 60%),
                      #070E1C;
        }
        .card-hover { transition: all 0.3s cubic-bezier(.4,0,.2,1); }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(27,94,248,0.15); }
        .btn-primary {
          background: linear-gradient(135deg, #1B5EF8, #00D4FF);
          color: #fff;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          box-shadow: 0 4px 24px rgba(27,94,248,0.35);
          border: none;
          cursor: pointer;
          font-size: 15px;
          text-decoration: none;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(27,94,248,0.5); }
        .btn-outline {
          background: transparent;
          color: #1B5EF8;
          font-weight: 700;
          padding: 13px 32px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          border: 2px solid #1B5EF8;
          cursor: pointer;
          font-size: 15px;
          text-decoration: none;
        }
        .btn-outline:hover { background: #1B5EF8; color: #fff; }
        .btn-outline-white {
          background: transparent;
          color: #fff;
          font-weight: 700;
          padding: 13px 32px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          border: 2px solid rgba(255,255,255,0.4);
          cursor: pointer;
          font-size: 15px;
          text-decoration: none;
        }
        .btn-outline-white:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
        .tag { 
          background: rgba(27,94,248,0.12); 
          color: #1B5EF8; 
          font-size: 12px; 
          font-weight: 700; 
          padding: 3px 10px; 
          border-radius: 100px;
          letter-spacing: 0.05em;
        }
        .section-tag {
          background: rgba(27,94,248,0.08);
          color: #1B5EF8;
          font-size: 13px;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 100px;
          display: inline-block;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
          border: 1px solid rgba(27,94,248,0.2);
        }
        .process-line::after {
          content: '';
          position: absolute;
          top: 28px;
          left: 56px;
          width: calc(100% - 56px);
          height: 2px;
          background: linear-gradient(90deg, #1B5EF8, transparent);
          z-index: 0;
        }
        .marquee-track {
          display: flex;
          gap: 48px;
          animation: marquee 25s linear infinite;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
        }
        .nav-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          background: #fff;
          border: 1px solid #E8ECF4;
          border-radius: 12px;
          padding: 8px;
          min-width: 220px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          z-index: 100;
        }
        .nav-dropdown a {
          display: block;
          padding: 10px 16px;
          border-radius: 8px;
          color: #374151;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
        }
        .nav-dropdown a:hover { background: #F0F5FF; color: #1B5EF8; }
        .hero-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }
        .floating { animation: floating 4s ease-in-out infinite; }
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .floating-2 { animation: floating 5s ease-in-out 1s infinite; }
        .floating-3 { animation: floating 6s ease-in-out 2s infinite; }
        .grid-line-bg {
          background-image: 
            linear-gradient(rgba(27,94,248,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(27,94,248,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18" style={{ height: "72px" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xl font-bold" style={{ background: "linear-gradient(135deg, #1B5EF8, #00D4FF)" }}>C</div>
              <div>
                <div className={`font-display text-xl font-bold leading-none ${scrolled ? "text-gray-900" : "text-white"}`}>Chapaghor</div>
                <div className={`text-xs font-medium ${scrolled ? "text-gray-400" : "text-blue-200"}`}>Print & Design Excellence</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative" onMouseEnter={() => link.children && setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-600 transition-all duration-200 ${
                      scrolled ? "text-gray-600 hover:text-blue-600 hover:bg-blue-50" : "text-blue-100 hover:text-white hover:bg-white/10"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {link.label}
                    {link.children && <ChevronDown />}
                  </Link>
                  {link.children && openDropdown === link.label && (
                    <div className="nav-dropdown">
                      {link.children.map((child) => (
                        <a key={child.label} href={child.href}>{child.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+8801700000000" className={`flex items-center gap-2 text-sm font-semibold ${scrolled ? "text-gray-600" : "text-blue-100"}`}>
                <PhoneIcon /> +880 170 000 0000
              </a>
              <a href="#contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: "14px" }}>
                Get Free Quote <ArrowRight />
              </a>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-gray-700" : "text-white"}`}>
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a href={link.href} className="block px-4 py-3 rounded-lg text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all">
                  {link.label}
                </a>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((c) => (
                      <a key={c.label} href={c.href} className="block px-4 py-2 text-sm text-gray-500 hover:text-blue-600">{c.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="#contact" className="btn-primary justify-center">Get Free Quote <ArrowRight /></a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 grid-line-bg opacity-40 pointer-events-none" />

        {/* Decorative blobs */}
        <div className="absolute top-32 right-20 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "#00D4FF" }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "#1B5EF8" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-blue-200 font-semibold mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Bangladesh's Leading Print & Design House
              </div>

              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                Where Ideas<br />
                <span className="gradient-text">Take Print</span><br />
                & Come Alive
              </h1>

              <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-lg">
                From offset printing to complete brand identity — Chapaghor delivers precision-crafted print solutions that make your business stand out. Trusted by 8,000+ brands across Bangladesh.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact" className="btn-primary">Get Free Quote <ArrowRight /></a>
                <a href="#services" className="btn-outline-white">Explore Services <ArrowRight /></a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 text-sm">
                {["ISO Certified", "100% Colour Match", "Free Delivery Dhaka", "Rush Orders Available"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-blue-200">
                    <div className="text-green-400"><CheckIcon /></div>
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual cards */}
            <div className="relative hidden lg:block">
              {/* Main card */}
              <div className="hero-card p-8 rounded-2xl floating">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ background: "rgba(27,94,248,0.2)" }}>🖨️</div>
                  <div>
                    <div className="text-white font-bold text-lg">Premium Offset Printing</div>
                    <div className="text-blue-200 text-sm">Pantone-accurate, up to 1,200 DPI</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: "📰", label: "Magazines" },
                    { icon: "📦", label: "Packaging" },
                    { icon: "📋", label: "Catalogs" },
                    { icon: "🎴", label: "Business Cards" },
                    { icon: "🖼️", label: "Banners" },
                    { icon: "📚", label: "Books" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/08 rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.05)" }}>
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-blue-200 text-xs font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="hero-card absolute -left-12 top-24 p-4 rounded-xl floating-2" style={{ minWidth: 160 }}>
                <div className="text-xs text-blue-300 font-semibold mb-1">Current Order</div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-sm">✓</div>
                  <div>
                    <div className="text-white text-sm font-bold">50,000 Leaflets</div>
                    <div className="text-blue-400 text-xs">In Production</div>
                  </div>
                </div>
              </div>

              <div className="hero-card absolute -right-6 bottom-12 p-4 rounded-xl floating-3" style={{ minWidth: 180 }}>
                <div className="text-xs text-blue-300 font-semibold mb-2">Client Satisfaction</div>
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                </div>
                <div className="text-white text-sm font-bold">4.9 / 5.0</div>
                <div className="text-blue-400 text-xs">Based on 1,240 reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const num = parseInt(stat.value.replace(/\D/g, ""));
              const suffix = stat.value.replace(/[0-9]/g, "");
              const counted = useCounter(num, 2000 + i * 200, statsVisible);
              return (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="font-display text-4xl lg:text-5xl font-bold mb-1" style={{ color: "#1B5EF8" }}>
                    {statsVisible ? counted : 0}{suffix}
                  </div>
                  <div className="text-gray-500 font-medium text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ───────────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest">Trusted by Leading Brands in Bangladesh</p>
        </div>
        <div className="overflow-hidden relative">
          <div className="marquee-track">
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="flex items-center justify-center px-8 py-3 bg-white rounded-xl border border-gray-200 whitespace-nowrap text-gray-600 font-semibold text-sm" style={{ minWidth: 160 }}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-tag">Our Services</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Print Solutions for Every <span className="gradient-text">Business Need</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From a single business card to a full-scale national print campaign — we have the technology, talent, and track record to deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card-hover p-8 rounded-2xl border border-gray-100 bg-white group cursor-pointer">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ background: "rgba(27,94,248,0.08)" }}>
                    {service.icon}
                  </div>
                  {service.tag && <div className="tag">{service.tag}</div>}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
                <a href="#contact" className="text-sm font-bold flex items-center gap-1 group-hover:gap-3 transition-all" style={{ color: "#1B5EF8" }}>
                  Get a Quote <ArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24" style={{ background: "#F8FAFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <div className="section-tag">Why Chapaghor</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                The Standard for Print<br />Quality in Bangladesh
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                With 15+ years of expertise and Bangladesh's most advanced printing infrastructure, Chapaghor is the trusted partner for corporates, agencies, and SMEs who refuse to compromise on quality.
              </p>
              <a href="#contact" className="btn-primary">Book a Free Consultation <ArrowRight /></a>
            </div>

            {/* Right grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div key={item.title} className="card-hover bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-tag">How We Work</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Production <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A streamlined, transparent workflow from brief to delivery — so you always know where your job stands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <div key={step.step} className="card-hover bg-white border border-gray-100 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 font-display text-8xl font-bold opacity-5 leading-none -mr-2 -mt-2 group-hover:opacity-10 transition-opacity" style={{ color: "#1B5EF8" }}>
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-6" style={{ background: "linear-gradient(135deg, #1B5EF8, #00D4FF)" }}>
                  {step.step}
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-3">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#F8FAFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-tag">Client Reviews</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients <span className="gradient-text">Say About Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-0.5 mb-5">
                  {Array(t.rating).fill(0).map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold`}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #070E1C 0%, #0D2060 50%, #070E1C 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-4xl mb-6">🚀</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Print Something <span className="gradient-text">Extraordinary?</span>
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation quote within 24 hours. Our team is ready to bring your vision to life with the finest print quality in Bangladesh.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">Get Free Quote <ArrowRight /></a>
            <a href="tel:+8801700000000" className="btn-outline-white"><PhoneIcon /> Call Now</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-tag">FAQ</div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  <span className={`transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} style={{ color: "#1B5EF8" }}>
                    <ChevronDown />
                  </span>
                </button>
                <div className="faq-answer" style={{ maxHeight: openFaq === i ? "300px" : "0px" }}>
                  <div className="px-6 pb-6 text-gray-500 leading-relaxed">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <PhoneIcon />, label: "Call Us", value: "+880 170 000 0000", sub: "Mon–Sat, 9am–7pm" },
              { icon: <MailIcon />, label: "Email Us", value: "hello@chapaghor.com", sub: "Reply within 24 hours" },
              { icon: <span className="text-lg">📍</span>, label: "Visit Us", value: "Gulshan-2, Dhaka", sub: "By appointment" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(27,94,248,0.1)", color: "#1B5EF8" }}>
                  {item.icon}
                </div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                <div className="font-bold text-gray-900 mb-1">{item.value}</div>
                <div className="text-sm text-gray-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer style={{ background: "#070E1C" }} className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xl font-bold" style={{ background: "linear-gradient(135deg, #1B5EF8, #00D4FF)" }}>C</div>
                <div>
                  <div className="font-display text-xl font-bold text-white">Chapaghor</div>
                  <div className="text-xs text-blue-400">Print & Design Excellence</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Bangladesh's most trusted print house — delivering precision, quality, and excellence since 2009.
              </p>
              <div className="flex gap-3">
                {["f", "in", "tw", "yt"].map((s) => (
                  <a key={s} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors" style={{ background: "rgba(255,255,255,0.07)" }}>
                    {s.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-white font-bold mb-5">Services</h5>
              <ul className="space-y-3">
                {["Offset Printing", "Digital Printing", "Packaging Design", "Branding & Identity", "Large Format", "Corporate Stationery"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-white font-bold mb-5">Company</h5>
              <ul className="space-y-3">
                {["About Us", "Portfolio", "Our Team", "Careers", "News & Blog", "Contact Us"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-white font-bold mb-5">Get In Touch</h5>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-blue-400 mt-0.5 shrink-0"><PhoneIcon /></div>
                  <div className="text-gray-400 text-sm">+880 170 000 0000<br />+880 180 000 0000</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-blue-400 mt-0.5 shrink-0"><MailIcon /></div>
                  <div className="text-gray-400 text-sm">hello@chapaghor.com<br />support@chapaghor.com</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-blue-400 mt-0.5 shrink-0 text-lg">📍</div>
                  <div className="text-gray-400 text-sm">House 12, Road 4, Block D<br />Gulshan-2, Dhaka-1212</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2009–2025 Chapaghor. All Rights Reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}