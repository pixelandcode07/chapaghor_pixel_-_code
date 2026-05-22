"use client";

import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

// রিলায়েবল এবং ফাস্ট লোডিং ইমেজ লিঙ্ক আপডেট করা হয়েছে
const popularProducts = [
  { 
    id: 1, 
    name: "Mug", 
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 2, 
    name: "Business Card", 
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 3, 
    name: "Photo Frame", 
    image: "https://images.unsplash.com/photo-1583847268964-b28ce8f25f27?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 4, 
    name: "ID Card", 
    image: "https://images.unsplash.com/photo-1633687352349-f0ebdd30d8d0?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 5, 
    name: "X-Stand", 
    image: "https://images.unsplash.com/photo-1559223607-b4d0dd2cbab7?auto=format&fit=crop&w=400&q=80" 
  },
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // ওভারলে ওপেন হলে বডি স্ক্রল বন্ধ করা এবং ইনপুটে ফোকাস করা
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out flex flex-col pt-24 items-center overflow-y-auto ${
        isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-8 invisible"
      }`}
    >
      {/* Close Button (Top Right) */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 md:top-10 md:right-10 p-2 text-[#003B5C] hover:text-red-500 transition-colors"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      {/* =========================================
          1. Clean Flat Search Bar (No Inner Icons)
      ========================================= */}
      <div className="w-full max-w-2xl px-6 mb-16">
        <input 
          ref={searchInputRef}
          type="text" 
          placeholder="Search" 
          className="w-full text-lg md:text-xl text-[#003B5C] placeholder-gray-400 bg-transparent border border-[#F05A28] rounded-full py-3 px-6 outline-none transition-colors focus:border-orange-600 focus:shadow-sm"
        />
      </div>

      {/* =========================================
          2. Most Searched Products Section
      ========================================= */}
      <div className="w-full max-w-[1200px] px-6 pb-20">
        <h3 className="text-2xl md:text-3xl font-medium text-[#003B5C] text-center mb-12">
          Most Searched Products
        </h3>

        {/* Product Cards Container */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {popularProducts.map((product) => (
            <Link 
              href={`/search?q=${product.name}`} 
              key={product.id} 
              onClick={onClose}
              className="group flex flex-col items-start cursor-pointer"
            >
              
              {/* Image & Cut-out Button Box (FIXED CLIPPING ISSUE) */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4">
                
                {/* 1. Image Wrapper (Overflow Hidden Only Applies Here) */}
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      // ইমেজ কোনো কারণে লোড না হলে একটি ডিফল্ট প্লেসহোল্ডার দেখাবে
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x400/eeeeee/999999?text=${product.name}`;
                    }}
                  />
                </div>
                
                {/* 2. Arrow Button (Placed OUTSIDE the overflow-hidden wrapper) */}
                <div className="absolute -bottom-2 -right-2 bg-[#1A2530] text-white p-3 rounded-full border-[6px] border-white group-hover:bg-[#F05A28] transition-colors duration-300 z-10">
                  <ArrowUpRight size={22} strokeWidth={2} />
                </div>

              </div>

              {/* Product Label */}
              <span className="bg-[#F8F9FA] border border-gray-100 text-gray-600 px-4 py-1.5 rounded-lg text-sm font-medium group-hover:bg-gray-200 transition-colors">
                {product.name}
              </span>
              
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}