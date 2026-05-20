"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // স্লাইডারের জন্য ইমেজের ডেটা (আপনার ডিজাইনারের করা ব্যানার ইমেজগুলো এখানে বসিয়ে দেবেন)
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1589041127521-b3b0cb5ee189?w=1200&h=600&fit=crop",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=1200&h=600&fit=crop",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop",
    }
  ];

  // Auto slide effect (৫ সেকেন্ড পরপর অটো স্লাইড হবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-6 font-sans bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[420px]">
          
          {/* =========================================
              LEFT SIDE: MAIN SLIDER (68% width)
          ========================================= */}
          <div className="relative w-full lg:w-[68%] h-[250px] sm:h-[300px] lg:h-full rounded-2xl overflow-hidden group shadow-sm">
            
            {/* Slides (শুধু ইমেজ) */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Left Arrow (মাউস হোভার করলে দেখাবে) */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#f58220] py-4 px-1.5 rounded-r-md z-20 transition-all shadow-md focus:outline-none opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>

            {/* Right Arrow (মাউস হোভার করলে দেখাবে) */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#f58220] py-4 px-1.5 rounded-l-md z-20 transition-all shadow-md focus:outline-none opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>

            {/* Dots Pagination (নিচের দিকে মাঝখানে) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.3)] ${
                    index === currentSlide ? "bg-[#f58220] w-6" : "bg-white/80 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>


          {/* =========================================
              RIGHT SIDE: STATIC BANNER (32% width)
          ========================================= */}
          <div className="relative w-full lg:w-[32%] h-[180px] sm:h-[220px] lg:h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            {/* Background Image Only (কোনো লেখা নেই) */}
            <img
              src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=800&fit=crop"
              alt="Promo Banner"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
}