import React from 'react';
import Image from 'next/image';

const orderSteps = [
  { 
    id: 1, 
    title: 'Choose Product', 
    description: 'Select the product\nyou need', 
    iconUrl: '/icons/step-1.png' // Replace with your exact icon path
  },
  { 
    id: 2, 
    title: 'Upload Design', 
    description: 'Upload your design', 
    iconUrl: '/icons/step-2.png' // Replace with your exact icon path
  },
  { 
    id: 3, 
    title: 'Preview & Confirm', 
    description: 'Check preview and\nconfirm you order', 
    iconUrl: '/icons/step-3.png' // Replace with your exact icon path
  },
  { 
    id: 4, 
    title: 'Make Payment', 
    description: 'Complete your\npayment securely', 
    iconUrl: '/icons/step-4.png' // Replace with your exact icon path
  },
  { 
    id: 5, 
    title: 'Fast Delivery', 
    description: 'Get you product\non time', 
    iconUrl: '/icons/step-5.png' // Replace with your exact icon path
  },
];

export default function HowToOrder() {
  return (
    <section className="w-full bg-white">
      {/* Main Container mapped to your exact specifications */}
      <div className="w-[calc(100vw-200px)] mx-auto pt-[77px] pb-[85px]">
        
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h3 
            className="uppercase text-[#FF8D28] mb-2"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            How To Order
          </h3>
          <h2 
            className="text-[#1C3E6E] capitalize"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 300,
              fontSize: '36px',
              lineHeight: '100%',
            }}
          >
            Easy Steps To Order
          </h2>
        </div>

        {/* Steps Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full relative">
          {orderSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              
              {/* Individual Step Card */}
              <div className="flex flex-col items-center text-center w-[180px] shrink-0">
                
                {/* ── Updated Icon Circle ── */}
                <div 
                  className="relative rounded-full bg-white flex items-center justify-center mb-6"
                  style={{
                    width: '76px',
                    height: '76px',
                    opacity: 1,
                    boxShadow: '0px 2px 4px 1px #0000001F'
                  }}
                >
                  <Image 
                    src={step.iconUrl} 
                    alt={step.title} 
                    width={36} // Scaled slightly down to fit inside the new 76px circle perfectly
                    height={36} 
                    className="object-contain"
                  />
                  
                  {/* Overlapping Orange Number Badge */}
                  <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[28px] h-[28px] bg-[#FF8D28] text-white rounded-full flex items-center justify-center text-[13px] font-bold border-[2px] border-white z-10 shadow-sm">
                    {step.id}
                  </div>
                </div>

                {/* Step Text Content */}
                <h4 className="text-[#1C3E6E] font-semibold text-[18px] mb-2">
                  {step.title}
                </h4>
                <p className="text-[#1C3E6E]/70 text-[14px] leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>

              </div>

              {/* Connecting Arrow (Renders between steps only) */}
              {index < orderSteps.length - 1 && (
                <div className="hidden lg:flex flex-1 items-center justify-center mt-[38px] px-2 min-w-[50px]">
                  <Image 
                    src="/icons/step-arrow.png" // Replace with your exact arrow icon path
                    alt="Next step arrow" 
                    width={80} 
                    height={24} 
                    className="object-contain opacity-70"
                  />
                </div>
              )}

            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
}