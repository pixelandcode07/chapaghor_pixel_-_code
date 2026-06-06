"use client";

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const comboData = [
    { id: 1, title: 'Exclusive', image: '/combo/1.png' },
    { id: 2, title: 'Combo', image: '/combo/2.png' },
    { id: 3, title: 'Business Card', image: '/combo/3.png' },
    { id: 4, title: 'Letterhead', image: '/combo/4.png' },
    { id: 5, title: 'Letterhead', image: '/combo/5.png' },
];

export default function Combo() {
    return (
        <section className="relative w-full overflow-hidden bg-[#111111]">
            {/* ── Background Image ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/backgrounds/combo-bg.jpg" // Replace with your actual dark wavy background image path
                    alt="Combo Background"
                    fill
                    className="object-cover opacity-60" 
                    priority
                />
                {/* Optional dark gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
            </div>

            {/* ── Main Content Container ── */}
            <div className="relative z-10 w-[calc(100vw-150px)] mx-auto pt-[52px] pb-[83px]">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <h2 className="text-[36px] md:text-[46px] font-semibold text-white leading-tight tracking-wide">
                        Exclusive Combo <span className="text-[#F05A28]">Deals</span>
                    </h2>
                    <p className="text-gray-300 text-[15px] md:text-[16px] max-w-[400px] leading-relaxed">
                        We provide high quality printing services for you business, event and personal needs
                    </p>
                </div>

                {/* Cards Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-8">
                    {comboData.map((item) => (
                        <div key={item.id} className="relative group cursor-pointer pt-2">
                            
                            {/* Dark Translucent Wrapper (Top Box) */}
                            <div className="absolute top-0 left-0 w-full h-[65%] border border-white/20 rounded-[18px] bg-white/5 backdrop-blur-md z-0 transition-colors duration-300 group-hover:bg-white/10" />

                            {/* Title */}
                            <h3 className="relative z-10 text-white font-medium text-[15px] px-6 pt-5 pb-10">
                                {item.title}
                            </h3>

                            {/* Stacked Image Container */}
                            <div className="relative z-10 px-4 pb-4 mt-2">
                                
                                {/* Layer 1 (Darkest Gray - Back) */}
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[82%] h-full bg-[#404040] rounded-[16px] -z-20 transition-transform duration-500 group-hover:-translate-y-2" />
                                
                                {/* Layer 2 (Medium Gray - Middle) */}
                                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-[91%] h-full bg-[#999999] rounded-[16px] -z-10 transition-transform duration-500 group-hover:-translate-y-1" />
                                
                                {/* Layer 3 (Light Gray - Front Image Box) */}
                                <div className="relative w-full aspect-[5/4] bg-[#E5E5E5] rounded-[16px] flex items-center justify-center p-5 shadow-lg overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 300px"
                                        className="object-contain p-4 transition-transform duration-700 ease-in-out group-hover:scale-110"
                                        onError={(e) => {
                                            const target = e.currentTarget as HTMLImageElement;
                                            target.srcset = "";
                                            target.src = "https://placehold.co/400x300/E5E5E5/999999.png?text=Mockup";
                                        }}
                                    />
                                </div>

                                {/* Orange Circular Arrow Button */}
                                <button className="absolute -bottom-3 -right-2 w-[46px] h-[46px] bg-[#F05A28] rounded-full flex items-center justify-center border-[5px] border-[#1C1A18] text-white transition-transform duration-300 group-hover:rotate-45 z-30 shadow-xl">
                                    <ArrowUpRight size={22} strokeWidth={2} />
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}