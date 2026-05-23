"use client";

import Image from "next/image";
import React from "react";

// ডেমো লোগো ডাটা
const logos = [
  { name: "breezy", text: "☁️ breezy", color: "#6B7280" },
  { name: "attio", text: "❖ attio", color: "#111827" },
  { name: "PayPal", text: "PayPal", color: "#003087", font: "italic font-bold text-lg" },
  { name: "mparticle", text: "▨ mparticle", color: "#111827" },
  { name: "HubSpot", text: "HubSpot", color: "#FF7A59", font: "font-bold text-lg" },
  { name: "miro", text: "miro", color: "#050038", font: "font-bold text-2xl" },
];

export default function OurClient() {
  return (
    // সম্পূর্ণ সেকশনের ব্যাকগ্রাউন্ড
    <section className="w-full bg-[#FDF4EE] py-5 border-y border-[#F3E5D8]">
      
      {/* ন্যাভবারের এলাইনমেন্ট। 
        এখানে justify-between সরিয়ে শুধু flex রাখা হয়েছে যাতে আমরা নির্দিষ্ট 178px গ্যাপ দিতে পারি।
      */}
      <div className="max-w-[80vw] mx-auto flex items-center">
        
        {/* Left Side: Static Stats & Handshake Icon */}
        <div className="flex items-center gap-4 z-10 shrink-0">
          {/* Icon Container (Handshake + Shield) */}
          <div className="w-14 h-14 md:w-16 md:h-16 text-[#F05A28]">
            <Image 
              src="/images/hand_icon.png" 
              alt="Handshake Icon" 
              width={64} 
              height={64} 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Text Container */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-[32px] font-extrabold text-[#F05A28] leading-tight tracking-tight">
              4,200+
            </h2>
            <p className="text-sm md:text-[17px] text-[#4A5D77] font-medium mt-0.5">
              Our Trusted Clients
            </p>
          </div>
        </div>

        {/* Right Side: Animated Marquee Logos 
          আপনার চাহিদা অনুযায়ী এখানে lg:ml-[254px] দেওয়া হয়েছে। 
          মোবাইলের জন্য গ্যাপ ছোট (ml-8) রাখা হয়েছে যাতে ডিজাইন ভেঙে না যায়। 
        */}
        <div 
          className="flex-1 overflow-hidden relative ml-8 lg:ml-[254px]"
          style={{
            // ডানে ও বামে ফেড ইফেক্ট
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
          }}
        >
          {/* Marquee Track */}
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] items-center gap-4 py-1">
            
            {/* Set 1 */}
            {logos.map((logo, index) => (
              <LogoCard key={`set1-${index}`} logo={logo} />
            ))}

            {/* Set 2 (Seamless loop এর জন্য ডুপ্লিকেট) */}
            {logos.map((logo, index) => (
              <LogoCard key={`set2-${index}`} logo={logo} />
            ))}
            
          </div>
        </div>
      </div>

      {/* Custom Keyframes for Marquee Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 8px)); /* 8px is half of gap-4 */ }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}} />
    </section>
  );
}

// Logo Card Component
function LogoCard({ logo }: { logo: any }) {
  return (
    // উচ্চতা 54px করা হয়েছে আপনার ইমেজের পরিমাপ অনুযায়ী
    <div className="flex h-[54px] w-32 md:w-[150px] bg-white items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] rounded-[2px]">
      {/* আপনার আসল লোগো ইমেজ ব্যবহার করতে নিচের কোড আনকমেন্ট করে Image ট্যাগটি ব্যবহার করুন:
        <Image src={logo.src} alt={logo.name} width={120} height={40} className="object-contain" /> 
      */}
      
      {/* ডেমো টেক্সট লোগো */}
      <span 
        className={`font-semibold ${logo.font || 'text-sm md:text-base font-sans'}`}
        style={{ color: logo.color }}
      >
        {logo.name === 'HubSpot' ? (
          <>HubSp<span className="text-[#FF7A59]">o</span>t</>
        ) : (
          logo.text
        )}
      </span>
    </div>
  );
}