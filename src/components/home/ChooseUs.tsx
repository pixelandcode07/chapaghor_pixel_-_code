
import React from 'react';
import Image from 'next/image';

const features = [
  {
    id: 1,
    title: "Premium Quality",
    description: "Best materials &\nlatest technology",
    iconUrl: "/choose-us/first.png",
  },
  {
    id: 2,
    title: "Fast Turnaround",
    description: "Quick production &\non-time delivery",
    iconUrl: "/choose-us/second.png",
  },
  {
    id: 3,
    title: "Affordable Price",
    description: "Best quality print at\nreasonable price",
    iconUrl: "/choose-us/third.png",
  },
  {
    id: 4,
    title: "Customer Support",
    description: "Friendly support\nanytime you need",
    iconUrl: "/choose-us/fourth.png",
  }
];

export default function ChooseUs() {
  return (
    <section className="w-full py-16 bg-white">
      {/* Main Card Container */}
      <div className="relative w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto rounded-[24px] overflow-hidden bg-[#111111] px-8 py-16 md:py-20">

        {/* ── Background Image ── */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/choose-us/banner.jpg"
            alt="Combo Background"
            fill
            className="object-bottom-left opacity-60"
            priority
          />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10">
          
          {/* Title Section */}
          <div className="flex flex-col items-center justify-center text-center px-4 mb-12">
            <h5 className="uppercase text-[#FF8D28] text-[16px] 3xl:text-[24px] pb-2.5 font-normal leading-tight tracking-wide">
              WHY CHOOSE US
            </h5>
            <div className="flex flex-wrap justify-center gap-[8px]">
              <h1 className="text-white text-[39.04px] 3xl:text-[52px] pb-4.25 font-normal leading-tight tracking-wide">
                Quality Printing You Can
              </h1>
              <h1 className="text-[#FF8D28] text-[39.04px] 3xl:text-[52px] font-normal leading-tight tracking-wide">
                Trust
              </h1>
            </div>
            <h5 className="text-white/90 w-full mt-2 flex justify-center items-center text-center text-[18px] 3xl:text-[24px] font-normal leading-tight tracking-wide">
              We use the best materials and latest technology to deliver the perfect printing quality
            </h5>
          </div>

          {/* Feature Cards Grid (4 Columns) */}
          {/* gap-6 = 24px. The grid handles equal spacing, arrows are overlaid absolutely. */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-[1350px] mx-auto mt-8">
            {features.map((feature, index) => (
              <div key={feature.id} className="relative flex flex-col items-center">
                
                {/* ── Left/Right Dotted Connector Arrow ── */}
                {/* Spans exactly from the center of this column to the center of the next column */}
                {index < features.length - 1 && (
                  <div className="hidden lg:flex absolute top-[40px] left-[50%] w-[calc(100%+24px)] h-[16px] -translate-y-1/2 items-center justify-center z-0 px-[52px] pointer-events-none">
                    <div className="relative w-full h-full">
                      <Image 
                        src="/choose-us/left-right-arrows.png" 
                        alt="connector arrow" 
                        fill 
                        className="object-contain opacity-70"
                      />
                    </div>
                  </div>
                )}

                {/* ── Icon (Relative + z-10 keeps it above the arrows) ── */}
                <div className="relative mb-6 flex justify-center items-center w-20 h-20 z-10 drop-shadow-lg shrink-0">
                  <Image
                    src={feature.iconUrl}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                {/* ── Glassmorphic Description Card ── */}
                <div className="bg-[#ffffff10] border border-[#ffffff1a] backdrop-blur-[18px] flex flex-col items-start justify-center text-left w-[212px] h-[118px] rounded-[20.7px] 3xl:w-[305px] 3xl:h-[170px] 3xl:aspect-[305/170] px-4 3xl:px-6"
                >
                  {/* Title */}
                  <h4 className="w-full text-white font-bold text-[20.27px] leading-[100%] tracking-[0%] text-left mb-7
                    3xl:text-[29.19px]"
                  >
                    {feature.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="w-full text-[#FFFFFF] text-[17.25px] leading-[100%] tracking-[-0.015em] whitespace-pre-line text-left 3xl:text-[24.84px] 3xl:align-middle"
                  >
                    {feature.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}