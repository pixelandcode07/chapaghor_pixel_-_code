"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MostSearch() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll handler for the chevron buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Adjust the 250 value to scroll more or less per click
      const scrollAmount = direction === "left" ? -250 : 250;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Dummy array to map the identical cards shown in the design
  // Increased to 8 to ensure there is enough content to scroll
  const cards = Array(8).fill({
    name: "Business Cards",
    icon: "/view-all-product/c7b93826f40cba3f93d75c02ebd46704163d8001.png",
  });

  return (
    <div className="container mx-auto flex flex-col items-center mt-12 mb-16">
      {/* Wrapper to align with the 1235px banner width */}
      <div className="w-full max-w-[1235px]">
        
        {/* Title and Navigation Arrows */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[32px] font-light text-[#003366]">
            Most Searched Products
          </h2>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ChevronLeft strokeWidth={1.5} className="text-gray-400 w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ChevronRight strokeWidth={1.5} className="text-gray-400 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Row */}
        <div 
          ref={scrollRef}
          className="flex gap-[18px] overflow-x-auto pb-6 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex items-center gap-3 shrink-0 bg-white rounded-[8px] shadow-[4px_4px_20px_0px_#00000036] opacity-80 hover:opacity-100 transition-opacity cursor-pointer px-4"
              style={{
                width: "198px",
                height: "71px",
              }}
            >
              <div className="relative w-[34px] h-[24px] flex shrink-0">
                <Image
                  src={card.icon}
                  alt={card.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[15px] font-light text-[#003366]">
                {card.name}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}