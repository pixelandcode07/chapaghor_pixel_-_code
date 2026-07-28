
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
      <div className="relative w-full xl:max-w-[89vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto xl:rounded-[24px] overflow-hidden bg-[#111111] xl:px-8 py-16 md:py-20">

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
           <h5 className="uppercase text-[#FF8D28] text-[12px] md:text-[14px] lg:text-[16px] 3xl:text-[24px] pb-2.5 font-normal leading-tight tracking-wide">
              WHY CHOOSE US
            </h5>
            <div className="flex flex-wrap justify-center gap-[8px]">
             <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] xl:text-[39px] 3xl:text-[52px] pb-4.25 font-normal leading-tight tracking-wide">
                Quality Printing You Can
              </h1>
             <h1 className="text-[#FF8D28] text-[22px] md:text-[28px] lg:text-[34px] xl:text-[39px] 3xl:text-[52px] font-normal leading-tight tracking-wide">
                Trust
              </h1>
            </div>
           <h5 className="text-white/90 w-full mt-2 flex justify-center items-center text-center text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px] 3xl:text-[24px] font-normal leading-tight tracking-wide max-w-4xl mx-auto">
              We use the best materials and latest technology to deliver the perfect printing quality
            </h5>
          </div>

          {/* Feature Cards Grid (4 Columns) */}
          {/* gap-6 = 24px. The grid handles equal spacing, arrows are overlaid absolutely. */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1350px] mx-auto mt-8">
            {features.map((feature, index) => (
              <div key={feature.id} className="relative flex flex-col items-center">
                
                {/* ── Left/Right Dotted Connector Arrow ── */}
                {/* Spans exactly from the center of this column to the center of the next column */}
                {index < features.length - 1 && (
                  <div className="hidden md:flex absolute top-[40px] left-[50%] w-[calc(100%+24px)] h-[16px] -translate-y-1/2 items-center justify-center z-0 px-[52px] pointer-events-none">
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
              <div className="relative mb-4 md:mb-5 xl:mb-6 flex justify-center items-center w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 z-10 drop-shadow-lg shrink-0">
                  <Image
  src={feature.iconUrl}
  alt={feature.title}
  width={80}
  height={80}
  className="w-full h-full object-contain"
/>
                </div>

                {/* ── Glassmorphic Description Card ── */}
              <div
  className="
    bg-[#ffffff10]
    border border-[#ffffff1a]
    backdrop-blur-[18px]
    flex flex-col justify-center
    text-left

    w-[130px]
    h-[88px]

    md:w-[170px]
    md:h-[100px]

    lg:w-[190px]
    lg:h-[108px]

    xl:w-[212px]
    xl:h-[118px]

    3xl:w-[305px]
    3xl:h-[170px]

    rounded-[14px]
    xl:rounded-[20px]

    px-3
    md:px-4
    3xl:px-6
  "
>
                  {/* Title */}
                 <h4
  className="
    w-full
    text-white
    font-bold

    text-[13px]
    md:text-[15px]
    lg:text-[17px]
    xl:text-[20px]
    3xl:text-[29px]

    leading-tight
    mb-2
    md:mb-3
    xl:mb-5
    3xl:mb-7
  "
>
                    {feature.title}
                  </h4>
                  
                  {/* Description */}
                 <p
  className="
    w-full
    whitespace-pre-line
    text-left
    text-white

    text-[10px]
    md:text-[12px]
    lg:text-[13px]
    xl:text-[17px]
    3xl:text-[25px]

    leading-tight
    tracking-[-0.015em]
  "
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