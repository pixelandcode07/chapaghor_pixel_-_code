"use client";

import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const popularProducts = [
  {
    id: 1,
    name: "Mug",
    image: "/images/mug01.jpg",
  },
  {
    id: 2,
    name: "Business Card",
    image: "/images/card.jpg",
  },
  {
    id: 3,
    name: "Photo Frame",
    image: "/images/photo_frame.jpg",
  },
  {
    id: 4,
    name: "ID Card",
    image: "/images/id_card.jpg",
  },
  {
    id: 5,
    name: "X-Stand",
    image: "images/x_stand01.jpg",
  },
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => searchInputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out flex flex-col pt-24 items-center overflow-y-auto ${
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-8 invisible"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 p-2 text-[#003B5C] hover:text-red-500 transition-colors"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      {/* Search Bar */}
      <div className="w-full max-w-2xl px-6 mb-16">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search"
          className="w-[658px] h-[44px] text-lg md:text-xl text-[#003B5C] placeholder-gray-400 bg-transparent border border-[#F05A28] rounded-full py-3 px-6 outline-none focus:border-orange-600 focus:shadow-sm transition-colors"
        />
      </div>

      {/* Most Searched Products */}
      <div className="w-full max-w-[1300px] px-4 md:px-6 pb-20">
        <h3 className="text-2xl md:text-3xl font-medium text-[#003B5C] text-center mb-12">
          Most Searched Products
        </h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-4">
          {popularProducts.map((product) => (
            <Link
              href={`/search?q=${product.name}`}
              key={product.id}
              onClick={onClose}
              className="group flex flex-col items-start cursor-pointer w-max"
            >
              <div className="relative w-[160px] h-[170px] sm:w-[180px] sm:h-[190px] md:w-[235px] md:h-[305px] mb-4">
                
                {/* Inner image box */}
                <div className="absolute inset-0 rounded-[20px] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x400/eeeeee/999999?text=${product.name}`;
                    }}
                  />

                  {/* ✅ UPDATED: White block reduced to 76x76, border-radius to 38px */}
                  <div className="absolute bottom-0 right-0 w-[76px] h-[76px] bg-white rounded-tl-[38px] z-10 pointer-events-none" />

                  {/* ✅ UPDATED: Concave curve (Top edge) adjusted to bottom-[76px] */}
                  <div className="absolute bottom-[76px] right-0 w-6 h-6 z-10 pointer-events-none">
                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
                      <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                    </svg>
                  </div>

                  {/* ✅ UPDATED: Concave curve (Left edge) adjusted to right-[76px] */}
                  <div className="absolute bottom-0 right-[76px] w-6 h-6 z-10 pointer-events-none">
                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
                      <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* ✅ UPDATED: Button evenly centered in the 76px cutout using bottom-[6px] right-[6px] */}
                <div className="absolute bottom-[2px] right-[2px] w-[64px] h-[64px] bg-[#1A2530] text-white flex items-center justify-center rounded-full group-hover:bg-[#F05A28] transition-colors duration-300 z-20 shadow-md">
                  <ArrowUpRight size={28} strokeWidth={2} />
                </div>
              </div>

              {/* Label pill design */}
              <span className="bg-[#f0f3f6] text-[#1a2530] px-5 py-2.5 rounded-xl text-[14px] md:text-[15px] font-medium group-hover:bg-[#e4e7eb] transition-colors tracking-wide">
                {product.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}