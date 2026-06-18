import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const cardsData = [
  { id: 1, title: 'Exclusive', image: '/cards/exclusive.jpg' }, // Replace with your actual image paths
  { id: 2, title: 'Combo', image: '/cards/combo.jpg' },
  { id: 3, title: 'Business Card', image: '/cards/business-card.jpg' },
  { id: 4, title: 'Letterhead', image: '/cards/letterhead-1.jpg' },
  { id: 5, title: 'Letterhead', image: '/cards/letterhead-2.jpg' },
];

export default function ImagesBox() {
  return (
    <section className="w-full min-h-screen bg-[#0A0A0A] p-8 flex items-center justify-center font-sans">
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1400px] w-full">
        {cardsData.map((card) => (
          
          <div 
            key={card.id} 
            className="group relative flex flex-col w-full rounded-[24px] border border-white/10 bg-[#161616] overflow-hidden transition-all duration-300 hover:border-white/20"
          >
            {/* Header / Title Section */}
            <div className="px-5 pt-5 pb-4 border-b border-white/10 z-20">
              <h3 className="text-white text-[16px] font-medium tracking-wide">
                {card.title}
              </h3>
            </div>

            {/* Content Body */}
            <div className="p-4 relative flex-grow flex flex-col z-10">
              
              {/* Stacked Folder Tabs (Behind Image) */}
              {/* Darker back tab */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[75%] h-12 bg-[#252525] rounded-t-[16px] -z-20 transition-transform duration-500 group-hover:-translate-y-1" />
              {/* Lighter front tab */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[88%] h-12 bg-[#3A3A3A] rounded-t-[16px] -z-10 transition-transform duration-500 group-hover:-translate-y-0.5" />

              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] rounded-[20px] overflow-hidden bg-[#2A2A2A] mt-2 shadow-inner">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* --- The Bottom-Right Cutout Magic --- */}
                {/* 1. Solid background block matching the card's inner background */}
                <div className="absolute bottom-0 right-0 w-[80px] h-[80px] bg-[#161616] rounded-tl-[36px] z-10 pointer-events-none" />

                {/* 2. Top Concave Curve connecting the straight right edge to the rounded block */}
                <div className="absolute bottom-[79px] right-0 w-[24px] h-[24px] z-10 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#161616]">
                    <path d="M0 24 A 24 24 0 0 0 24 0 L 24 24 Z" fill="currentColor" />
                  </svg>
                </div>

                {/* 3. Left Concave Curve connecting the straight bottom edge to the rounded block */}
                <div className="absolute bottom-0 right-[79px] w-[24px] h-[24px] z-10 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#161616]">
                    <path d="M0 24 A 24 24 0 0 0 24 0 L 24 24 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Orange Action Button */}
              {/* Placed inside the main card relative flow, perfectly sitting over the cutout */}
              <div className="absolute bottom-4 right-4 w-[56px] h-[56px] bg-[#FE6A37] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 z-20 shadow-[0_0_15px_rgba(254,106,55,0.4)] cursor-pointer">
                <ArrowUpRight size={28} strokeWidth={2} />
              </div>

            </div>
          </div>
          
        ))}
      </div>
    </section>
  );
}