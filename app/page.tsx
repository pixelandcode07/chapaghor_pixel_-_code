"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Icon Components ──────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const TrackIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l4 4v5" />
    <polyline points="9 17 9 22 15 22 15 17" />
    <path d="M17 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  </svg>
);

const UserIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const HeartIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CartIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── Logo ─────────────────────────────────────────────────────────────────────

const ChapaghorLogo = () => (
  <div className="flex items-center gap-2 cursor-pointer select-none">
    {/* House Icon */}
    <div className="w-10 h-10 bg-[#E8521A] rounded-xl flex items-center justify-center shadow-md">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <rect x="9" y="14" width="6" height="7" fill="white" opacity="0.3" />
        <rect x="9" y="14" width="6" height="7" rx="0.5" stroke="white" strokeWidth="0.8" fill="none" />
      </svg>
    </div>
    <div className="flex flex-col leading-tight">
      <span className="text-[#E8521A] font-black text-xl tracking-tight">Chapaghor</span>
      <span className="text-gray-400 text-[9px] tracking-widest uppercase">your printing partner</span>
    </div>
  </div>
);

// ─── Category Icons ───────────────────────────────────────────────────────────

const BusinessCardIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E8521A" strokeWidth="1.5">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="6" y1="14" x2="10" y2="14" />
    <line x1="6" y1="16" x2="9" y2="16" />
  </svg>
);

const LetterheadIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E8521A" strokeWidth="1.5">
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <line x1="8" y1="7" x2="16" y2="7" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="13" x2="13" y2="13" />
    <rect x="6" y="4" width="5" height="1.5" rx="0.5" fill="#E8521A" stroke="none" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E8521A" strokeWidth="1.5">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <polyline points="2,5 12,13 22,5" />
  </svg>
);

const BannerIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E8521A" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="13" rx="1" />
    <line x1="7" y1="20" x2="17" y2="20" />
    <line x1="9" y1="17" x2="9" y2="20" />
    <line x1="15" y1="17" x2="15" y2="20" />
    <text x="6" y="13" fontSize="6" fill="#E8521A" stroke="none" fontWeight="bold">FLEX</text>
  </svg>
);

const GiftIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E8521A" strokeWidth="1.5">
    <rect x="3" y="10" width="18" height="11" rx="1" />
    <rect x="2" y="6" width="20" height="4" rx="1" />
    <line x1="12" y1="6" x2="12" y2="21" />
    <path d="M12 6C12 6 8 3 8 6" />
    <path d="M12 6C12 6 16 3 16 6" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const navLinks = [
  "All Products",
  "Offset Print",
  "Signage",
  "Wedding Invitations",
  "ID Cards & Lanyards",
  "Office Supplies",
];

const quickCategories = [
  { name: "Business Card", icon: <BusinessCardIcon /> },
  { name: "Letterhead", icon: <LetterheadIcon /> },
  { name: "Envelope", icon: <EnvelopeIcon /> },
  { name: "Banner Print", icon: <BannerIcon /> },
  { name: "Gift", icon: <GiftIcon /> },
];

const partnerLogos = [
  { name: "amberIT", color: "#E8521A", bg: "#fff3ee" },
  { name: "bnet", color: "#cc0000", bg: "#fff0f0" },
  { name: "FaithTrip", color: "#2563eb", bg: "#eff6ff" },
  { name: "FlashNet", color: "#ca8a04", bg: "#fefce8" },
];

const popularServices = [
  {
    title: "Vibe Coding",
    bg: "from-purple-900 via-purple-800 to-rose-900",
    accent: "#a855f7",
    emoji: "💻",
  },
  {
    title: "Website Development",
    bg: "from-slate-800 via-blue-900 to-slate-900",
    accent: "#3b82f6",
    emoji: "🌐",
  },
  {
    title: "Video Editing",
    bg: "from-pink-900 via-rose-800 to-orange-900",
    accent: "#f43f5e",
    emoji: "🎬",
  },
  {
    title: "Software Development",
    bg: "from-green-900 via-emerald-900 to-teal-900",
    accent: "#10b981",
    emoji: "⚙️",
  },
  {
    title: "Book Publishing",
    bg: "from-amber-900 via-yellow-900 to-orange-900",
    accent: "#f59e0b",
    emoji: "📚",
  },
  {
    title: "Architecture & Interior Design",
    bg: "from-neutral-800 via-stone-800 to-zinc-900",
    accent: "#d4a855",
    emoji: "🏛️",
  },
];

const bannerSlides = [
  {
    id: 0,
    type: "main",
    bg: "from-orange-950 via-orange-900 to-neutral-900",
    bengaliText: "ছাপাঘরে অর্ডারে,\nপ্রোডাক্ট উড়ে যাবে\nআপনার ঘরে...",
  },
  {
    id: 1,
    type: "printing",
    bg: "from-red-700 via-red-600 to-red-800",
    headlineSmall: "LARGE FORMAT",
    headlineBig: "PRINTING",
  },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeNav, setActiveNav] = useState("All Products");
  const [cartCount] = useState(3);

  const handlePrev = () => setActiveSlide((p) => (p === 0 ? bannerSlides.length - 1 : p - 1));
  const handleNext = () => setActiveSlide((p) => (p === bannerSlides.length - 1 ? 0 : p + 1));

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">

          {/* Logo */}
          <div className="flex-shrink-0">
            <ChapaghorLogo />
          </div>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products"
                className="w-full h-10 pl-4 pr-12 rounded-full border-2 border-gray-200 focus:border-[#E8521A] focus:outline-none text-sm text-gray-700 bg-gray-50 transition-colors"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#E8521A] transition-colors">
                <SearchIcon />
              </button>
            </div>
          </div>

          {/* Nav Icons */}
          <nav className="flex items-center gap-5 ml-auto">
            <button className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-[#E8521A] transition-colors group">
              <TrackIcon />
              <span className="text-[10px] font-medium">Track Order</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-[#E8521A] transition-colors">
              <UserIcon />
              <span className="text-[10px] font-medium">Sign In</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-[#E8521A] transition-colors">
              <HeartIcon />
              <span className="text-[10px] font-medium">Wishlist</span>
            </button>
            <button className="relative flex flex-col items-center gap-0.5 text-gray-600 hover:text-[#E8521A] transition-colors">
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4.5 h-4.5 bg-[#E8521A] text-white text-[9px] font-bold rounded-full flex items-center justify-center min-w-[18px] min-h-[18px] px-0.5">
                  {cartCount}
                </span>
              )}
              <span className="text-[10px] font-medium">Cart</span>
            </button>
          </nav>
        </div>

        {/* ── SUB NAV ── */}
        <div className="border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ul className="flex gap-0 overflow-x-auto scrollbar-hide">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => setActiveNav(link)}
                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                      activeNav === link
                        ? "border-[#E8521A] text-[#E8521A]"
                        : "border-transparent text-gray-600 hover:text-[#E8521A] hover:border-orange-200"
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ───────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">

        {/* ── QUICK CATEGORIES ─────────────────────────────────────────────── */}
        <section>
          <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
            {quickCategories.map((cat) => (
              <button
                key={cat.name}
                className="flex flex-col items-center gap-3 bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 hover:-translate-y-0.5 transition-all duration-200 min-w-[110px] group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors">
                  {cat.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* ── HERO BANNER CAROUSEL ──────────────────────────────────────────── */}
        <section className="relative rounded-2xl overflow-hidden">
          <div className="relative">

            {/* Slide Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[320px]">

              {/* Slide 1 — Main */}
              <div
                className={`relative bg-gradient-to-br from-orange-950 via-orange-900 to-neutral-900 p-8 flex items-center transition-all duration-500 ${
                  activeSlide === 0 ? "opacity-100" : "md:opacity-100 opacity-0 absolute inset-0 md:static"
                }`}
              >
                {/* Decorative printing machine illustration */}
                <div className="absolute right-8 bottom-0 opacity-25 pointer-events-none select-none">
                  <div className="w-48 h-40 relative">
                    {/* Simplified press illustration */}
                    <div className="absolute bottom-0 right-0 w-40 h-32 bg-gray-600 rounded-t-lg opacity-60" />
                    <div className="absolute bottom-20 right-4 w-32 h-6 bg-gray-400 rounded opacity-80" />
                    <div className="absolute bottom-14 right-2 w-36 h-4 bg-gray-500 rounded opacity-70" />
                    <div className="absolute bottom-10 right-6 w-28 h-8 bg-gray-700 rounded" />
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Bengali Headline */}
                  <p className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-6 whitespace-pre-line drop-shadow-lg">
                    {`ছাপাঘরে অর্ডারে,\nপ্রোডাক্ট উড়ে যাবে\nআপনার ঘরে...`}
                  </p>
                  {/* Logo watermark */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#E8521A] rounded-lg flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-black text-lg leading-none">Chapaghor</p>
                      <p className="text-orange-300 text-[9px] tracking-widest">your printing partner</p>
                    </div>
                  </div>
                  <p className="text-orange-300 text-xs mt-2 tracking-wider">www.chapaghor.com</p>
                </div>

                {/* Social icons row */}
                <div className="absolute top-4 right-6 flex gap-1.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-5 h-5 rounded-full border border-orange-400 opacity-50" />
                  ))}
                </div>
              </div>

              {/* Slide 2 — Large Format Printing */}
              <div
                className={`relative bg-gradient-to-br from-red-600 via-red-600 to-red-700 p-8 flex items-center justify-center transition-all duration-500 ${
                  activeSlide === 1 ? "opacity-100" : "md:opacity-100 opacity-0 absolute inset-0 md:static"
                }`}
              >
                {/* Red pattern dots */}
                <div className="absolute inset-0 opacity-20 pointer-events-none select-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Chapaghor logo top-right */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#E8521A">
                      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm">Chapaghor</span>
                </div>

                <div className="relative z-10 text-center">
                  <p className="text-white/80 font-bold text-xl sm:text-2xl tracking-[0.2em] uppercase mb-1">
                    LARGE FORMAT
                  </p>
                  <p className="text-white font-black text-4xl sm:text-5xl tracking-tight uppercase leading-none drop-shadow-xl">
                    PRINTING
                  </p>
                  {/* Printer illustration simplified */}
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="w-28 h-16 bg-white/10 border border-white/20 rounded-lg flex items-end justify-center pb-2">
                      <div className="w-20 h-2 bg-white/40 rounded" />
                    </div>
                  </div>
                  <div className="mt-3 bg-white/20 text-white text-xs px-4 py-1.5 rounded-full inline-block font-semibold tracking-wider">
                    ORDER NOW
                  </div>
                </div>

                {/* Side social row */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="w-5 h-5 rounded-full border border-white/40 opacity-60" />
                  ))}
                </div>
              </div>
            </div>

            {/* ── CAROUSEL CONTROLS ── */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white shadow-md rounded-full flex items-center justify-center text-gray-700 hover:text-[#E8521A] transition-all z-10"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white shadow-md rounded-full flex items-center justify-center text-gray-700 hover:text-[#E8521A] transition-all z-10"
            >
              <ChevronRightIcon />
            </button>

            {/* ── DOTS ── */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 md:hidden z-10">
              {bannerSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`rounded-full transition-all ${
                    activeSlide === i ? "w-6 h-2 bg-[#E8521A]" : "w-2 h-2 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS + PARTNERS ─────────────────────────────────────────────── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center gap-6">

            {/* Stats */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Icon */}
              <div className="w-12 h-12 flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="4" y="20" width="12" height="20" rx="2" fill="#E8521A" opacity="0.3" />
                  <rect x="18" y="12" width="12" height="28" rx="2" fill="#E8521A" opacity="0.6" />
                  <rect x="32" y="8" width="12" height="32" rx="2" fill="#E8521A" />
                  <path d="M6 18 L18 10 L30 14 L42 6" stroke="#E8521A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-3xl font-black text-[#E8521A]">3,500+</p>
                <p className="text-sm text-gray-500 font-medium">Company Served in Bangladesh and Abroad</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-14 bg-gray-200 mx-2" />

            {/* Partner logos */}
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start flex-1">
              {partnerLogos.map((p) => (
                <div
                  key={p.name}
                  className="px-5 py-2.5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  style={{ backgroundColor: p.bg }}
                >
                  <span className="font-bold text-sm" style={{ color: p.color }}>{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POPULAR SERVICES ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Popular services</h2>

          {/* Scrollable Row */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
            {popularServices.map((service) => (
              <div
                key={service.title}
                className={`relative flex-shrink-0 w-[175px] sm:w-[190px] h-[160px] rounded-2xl bg-gradient-to-br ${service.bg} overflow-hidden cursor-pointer group snap-start hover:-translate-y-1 transition-transform duration-200`}
              >
                {/* Glow accent */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 70%, ${service.accent}, transparent 70%)` }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-white font-bold text-[15px] leading-tight">{service.title}</p>
                  </div>

                  {/* Emoji / illustration area */}
                  <div className="flex items-end justify-end">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                      style={{ backgroundColor: service.accent + "33" }}
                    >
                      {service.emoji}
                    </div>
                  </div>
                </div>

                {/* Subtle grid texture */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
            ))}

            {/* Show more card */}
            <div className="flex-shrink-0 w-[175px] sm:w-[190px] h-[160px] rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#E8521A] hover:text-[#E8521A] transition-colors group snap-start">
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center mb-2 group-hover:bg-orange-50 transition-colors">
                <ChevronRightIcon />
              </div>
              <span className="text-sm font-semibold text-gray-500 group-hover:text-[#E8521A] transition-colors">View All</span>
            </div>
          </div>
        </section>

        {/* ── PROMO STRIP ───────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-r from-[#E8521A] to-orange-500 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-black text-xl sm:text-2xl">Get 10% off on your first order!</p>
            <p className="text-orange-100 text-sm mt-1">Use code: <span className="font-bold text-white">CHAPA10</span> at checkout</p>
          </div>
          <button className="bg-white text-[#E8521A] font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-md flex-shrink-0">
            Shop Now →
          </button>
        </section>

      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-400 mt-12 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E8521A] rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                </svg>
              </div>
              <span className="text-white font-black text-lg">Chapaghor</span>
            </div>
            <p className="text-sm leading-relaxed">Your trusted printing partner in Bangladesh. Quality prints, delivered to your door.</p>
          </div>

          {/* Links */}
          {[
            { title: "Products", items: ["Business Card", "Letterhead", "Envelope", "Banner Print"] },
            { title: "Services", items: ["Offset Print", "Signage", "Wedding Cards", "ID Cards"] },
            { title: "Support", items: ["Track Order", "Contact Us", "FAQ", "Return Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-[#E8521A] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs">© {new Date().getFullYear()} Chapaghor. All rights reserved.</p>
          <p className="text-xs">Made with ❤️ in Bangladesh</p>
        </div>
      </footer>
    </div>
  );
}