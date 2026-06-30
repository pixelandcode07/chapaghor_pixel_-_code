import React from 'react';
import Image from 'next/image';
import Text3DFlip from '../ui/text-3d-flip';

const features = [
  {
    id: 1,
    title: "Premium Quality",
    description: "Best materials &\nlatest technology",
    iconUrl: "/choose-us/first.png", // Replace with your exact icon filename
  },
  {
    id: 2,
    title: "Fast Turnaround",
    description: "Quick production &\non-time delivery",
    iconUrl: "/choose-us/second.png", // Replace with your exact icon filename
  },
  {
    id: 3,
    title: "Affordable Price",
    description: "Best quality print at\nreasonable price",
    iconUrl: "/choose-us/third.png", // Replace with your exact icon filename
  },
  {
    id: 4,
    title: "Customer Support",
    description: "Friendly support\nanytime you need",
    iconUrl: "/choose-us/fourth.png", // Replace with your exact icon filename
  }
];

export default function ChooseUs() {
  return (
    <section className="w-full py-16 bg-white">
      {/* Main Card Container */}
      <div className="relative w-full md:max-w-[90vw]  7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto rounded-[24px] overflow-hidden bg-[#111111] px-8 py-16 md:py-20">

        {/* ── Background Image ── */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/choose-us/banner.jpg"
            alt="Combo Background"
            fill
            className="object-bottom-left  opacity-60"
            priority
          />
          {/* Optional dark gradient overlay to ensure text readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" /> */}
        </div>

        {/* ── Content (Must be z-10 to stay above background) ── */}
        <div className="relative z-10">
          {/* Title Section */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16 px-4">
            <h5 className="uppercase text-[#FF8D28]"
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '-0.015em',
              }} >
              WHY CHOOSE US
            </h5>
            {/* <Text3DFlip 
              className="uppercase text-[#FF8D28]"
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '-0.015em',
              }} 
            >
              WHY CHOOSE US
            </Text3DFlip> */}

            <div className="flex flex-wrap justify-center gap-[8px]">
              <h1 className="text-white"
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: '39.04px',
                  lineHeight: '100%',
                  letterSpacing: '-0.015em',
                }}>
                Quality Printing You Can
              </h1>
              <h1 className="text-[#FF8D28]"
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: '39.04px',
                  lineHeight: '100%',
                  letterSpacing: '-0.015em',
                }} >
                Trust
              </h1>
              {/* <Text3DFlip 
                className="text-white"
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: '39.04px',
                  lineHeight: '100%',
                  letterSpacing: '-0.015em',
                }} 
              >
                Quality Printing You Can
              </Text3DFlip> */}
              {/* <Text3DFlip
                className="text-[#FF8D28]"
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: '39.04px',
                  lineHeight: '100%',
                  letterSpacing: '-0.015em',
                }}
              >
                Trust
              </Text3DFlip> */}
            </div>

            <h5 className="text-white/90 max-w-[600px] mt-2 flex justify-center items-center text-center"
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '127%',
                letterSpacing: '-0.015em',
              }}>
              We use the best materials and latest technology to deliver the perfect printing quality
            </h5>
            {/* <Text3DFlip
              className="text-white/90 max-w-[600px] mt-2 flex justify-center items-center text-center"
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '127%',
                letterSpacing: '-0.015em',
              }}
            >
              We use the best materials and latest technology to deliver the perfect printing quality
            </Text3DFlip> */}
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center pt-8">

                {/* Icon standing outside the glass box */}
                <div className="mb-6 flex justify-center w-20 h-20 z-10 drop-shadow-lg">
                  <Image
                    src={feature.iconUrl}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                {/* Glassmorphic Description Card */}
                <div
                  className="bg-[#ffffff10] border border-[#ffffff1a] backdrop-blur-md flex flex-col items-center justify-center text-center"
                  style={{
                    width: '212px',
                    height: '118px',
                    borderRadius: '20.7px',
                    padding: '18.11px',
                    gap: '12.07px',
                    opacity: 1,
                  }}
                >
                  <h4
                    className="text-white"
                    style={{
                      fontFamily: 'Urbanist, sans-serif',
                      fontWeight: 700,
                      fontSize: '20.27px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      textAlign: 'center'
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-white/70 whitespace-pre-line"
                    style={{
                      fontFamily: 'Lufga, sans-serif',
                      fontWeight: 400,
                      fontSize: '17.25px',
                      lineHeight: '100%',
                      letterSpacing: '-0.015em',
                      verticalAlign: 'middle'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
        {/* ── End Content ── */}

      </div>
    </section>
  );
}