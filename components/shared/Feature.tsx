"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // ১০০% ভেরিফায়েড এবং ওয়ার্কিং আইকন লিংক
  const categories = [
    { name: 'Business Cards', img: 'https://img.icons8.com/color/144/business-contact.png' },
    { name: 'Flyers & Leaflets', img: 'https://img.icons8.com/color/144/news.png' },
    { name: 'Banners & Signs', img: 'https://img.icons8.com/color/144/commercial.png' }, 
    { name: 'Custom Mugs', img: 'https://img.icons8.com/color/144/cafe.png' }, 
    { name: 'Packaging', img: 'https://img.icons8.com/color/144/open-box.png' }, 
    { name: 'Wedding Cards', img: 'https://img.icons8.com/color/144/wedding-rings.png' }, 
    { name: 'Stickers & Labels', img: 'https://img.icons8.com/color/144/price-tag.png' }, 
    { name: 'Stationery', img: 'https://img.icons8.com/color/144/pencil-case.png' }, 
    { name: 'T-Shirts', img: 'https://img.icons8.com/color/144/t-shirt.png' },
    { name: 'Corporate Gifts', img: 'https://img.icons8.com/color/144/gift.png' },
  ];

  return (
    // pt-8 এবং pb-12 দেওয়া হয়েছে যাতে ন্যাভবারের সাথে গ্যাপ কমে আসে
    <section className="pt-4 pb-2 bg-[#FAFAFA] font-sans">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Section Title */}
        <h2 className="text-center text-[22px] md:text-2xl font-semibold text-[#1A2E35] mb-4 tracking-wide font-sans">
          Featured Categories
        </h2>

        {/* Slider Container */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-2 md:-translate-x-5 w-9 h-9 rounded-full bg-[#f58220] text-white flex items-center justify-center shadow-md z-10 hover:bg-[#e6751c] transition-colors focus:outline-none"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Categories Track */}
          <div 
            ref={scrollRef}
            className="flex items-start gap-4 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth px-2 pb-4 pt-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-3 w-[110px] md:w-[130px] flex-shrink-0 cursor-pointer group/card"
              >
                {/* White Image Box */}
                <div className="w-full aspect-square bg-white rounded-[1.5rem] shadow-sm border border-gray-100 flex items-center justify-center p-4 group-hover/card:shadow-md group-hover/card:border-orange-100 group-hover/card:-translate-y-1 transition-all duration-300">
                  <img 
                    src={category.img} 
                    alt={category.name} 
                    className="w-full h-full object-contain group-hover/card:scale-105 transition-transform duration-300"
                    // যদি কোনো কারণে আইকন লোড না হয়, তাহলে ডিফল্ট একটি আইকন দেখাবে, ডিজাইন ভাঙবে না
                    onError={(e) => { e.currentTarget.src = 'https://img.icons8.com/color/144/image.png' }}
                  />
                </div>
                {/* Category Name */}
                <span className="text-[13px] md:text-[14px] font-medium text-gray-700 text-center group-hover/card:text-[#f58220] transition-colors duration-300 font-sans leading-snug">
                  {category.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-2 md:translate-x-5 w-9 h-9 rounded-full bg-[#f58220] text-white flex items-center justify-center shadow-md z-10 hover:bg-[#e6751c] transition-colors focus:outline-none"
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>

        </div>
      </div>

      {/* Hide scrollbar styles for Webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}