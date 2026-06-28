// import React from 'react';
// import Image from 'next/image';
// import { KineticText } from '../ui/kinetic-text';

// const orderSteps = [
//   {
//     id: 1,
//     title: 'Choose Product',
//     description: 'Select the product\nyou need',
//     iconUrl: '/order/first.png'
//   },
//   {
//     id: 2,
//     title: 'Upload Design',
//     description: 'Upload your design',
//     iconUrl: '/order/second.png'
//   },
//   {
//     id: 3,
//     title: 'Preview & Confirm',
//     description: 'Check preview and\nconfirm you order',
//     iconUrl: '/order/third.png'
//   },
//   {
//     id: 4,
//     title: 'Make Payment',
//     description: 'Complete your\npayment securely',
//     iconUrl: '/order/fourth.png'
//   },
//   {
//     id: 5,
//     title: 'Fast Delivery',
//     description: 'Get you product\non time',
//     iconUrl: '/order/fifth.png'
//   },
// ];

// export default function HowToOrder() {
//   return (
//     <section className="w-full bg-white">
//       {/* Main Container mapped to your exact specifications */}
//       {/* <div className="relative w-[calc(100vw-300px)] mx-auto pt-[77px] pb-[85px]"> */}
//       <div className="relative container xl:w-[calc(100vw-300px)] mx-auto py-3.75 px-1 md:px-2.5">

//         {/* Title Section */}
//         <div className="flex flex-col items-center justify-center text-center mb-16">
//           <h5 style={{
//             fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
//             fontWeight: 400,
//             fontSize: '18px',
//             lineHeight: '100%',
//             letterSpacing: '0%',
//           }}
//             className="uppercase text-[#FF8D28] mb-2 font-normal text-base">
//             How To Order
//           </h5>
//           <h1 style={{
//             fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
//             fontWeight: 300,
//             fontSize: '36px',
//             lineHeight: '100%',
//           }}
//             className="text-[#1C3E6E] capitalize font-normal text-[36px]">
//             Easy Steps To Order
//           </h1>
//           {/* <KineticText
//             text='How To Order'
//             style={{
//               fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
//               fontWeight: 400,
//               fontSize: '18px',
//               lineHeight: '100%',
//               letterSpacing: '0%',
//             }}
//             className="uppercase text-[#FF8D28] mb-2 font-normal text-base" /> */}

//           {/* <KineticText
//             style={{
//               fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
//               fontWeight: 300,
//               fontSize: '36px',
//               lineHeight: '100%',
//             }}
//             text='Easy Steps To Order'
//             className="text-[#1C3E6E] capitalize font-normal text-[36px]" /> */}
//         </div>

//         {/* Steps Layout */}
//         <div className="flex flex-col lg:flex-row items-start justify-between w-full relative">
//           {orderSteps.map((step, index) => (
//             <React.Fragment key={step.id}>

//               {/* Individual Step Card */}
//               <div className="flex flex-col items-center text-center w-[180px] shrink-0">

//                 {/* ── Updated Icon Circle ── */}
//                 <div
//                   className="relative rounded-full bg-white flex items-center justify-center mb-6"
//                   style={{
//                     width: '76px',
//                     height: '76px',
//                     opacity: 1,
//                     boxShadow: '0px 2px 4px 1px #0000001F'
//                   }}
//                 >
//                   <Image
//                     src={step.iconUrl}
//                     alt={step.title}
//                     width={36}
//                     height={36}
//                     className="object-contain"
//                   />

//                   {/* Overlapping Orange Number Badge */}
//                   <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[28px] h-[28px] bg-[#FF8D28] text-white rounded-full flex items-center justify-center text-[13px] font-bold border-[2px] border-white z-10 shadow-sm">
//                     {step.id}
//                   </div>
//                 </div>

//                 {/* Step Text Content */}
//                 <h4 className="text-[#1C3E6E] font-semibold text-[18px] mb-2">
//                   {step.title}
//                 </h4>
//                 <p className="text-[#1C3E6E]/70 text-[14px] leading-relaxed whitespace-pre-line">
//                   {step.description}
//                 </p>

//               </div>

//               {/* Connecting Arrow (Renders between steps only) */}
//               {index < orderSteps.length - 1 && (
//                 <div className="hidden lg:flex flex-1 items-center justify-center mt-[38px] px-2 min-w-[50px]">
//                   <Image
//                     src="/order/arrow.png"
//                     alt="Next step arrow"
//                     width={80}
//                     height={24}
//                     className="object-contain"
//                   />
//                 </div>
//               )}

//             </React.Fragment>
//           ))}

//         </div>
//         <div className='hidden xl:flex flex-1'>
//           <Image
//             src={'/order/round-arrow.png'}
//             alt="Round arrow decoration"
//             width={120}
//             height={120}
//             className="absolute bottom-30 -right-24"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import Image from 'next/image';
// import { KineticText } from '../ui/kinetic-text';

const orderSteps = [
  {
    id: 1,
    title: 'Choose Product',
    description: 'Select the product\nyou need',
    iconUrl: '/order/first.png'
  },
  {
    id: 2,
    title: 'Upload Design',
    description: 'Upload your design',
    iconUrl: '/order/second.png'
  },
  {
    id: 3,
    title: 'Preview & Confirm',
    description: 'Check preview and\nconfirm you order',
    iconUrl: '/order/third.png'
  },
  {
    id: 4,
    title: 'Make Payment',
    description: 'Complete your\npayment securely',
    iconUrl: '/order/fourth.png'
  },
  {
    id: 5,
    title: 'Fast Delivery',
    description: 'Get you product\non time',
    iconUrl: '/order/fifth.png'
  },
];

export default function HowToOrder() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Main Container */}
      <div className="relative container w-full lg:max-w-7xl xl:w-[calc(100vw-100px)]  mx-auto py-12 px-4">

        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <h5 
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            className="uppercase text-[#FF8D28] mb-2 font-normal leading-none tracking-normal text-[16px] lg:text-[14px] xl:text-[18px]"
          >
            How To Order
          </h5>
          <h1 
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            className="text-[#1C3E6E] capitalize font-light leading-none text-[28px] md:text-[36px] lg:text-[28px] xl:text-[36px]"
          >
            Easy Steps To Order
          </h1>
        </div>

        {/* Steps Layout */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center lg:items-start justify-center lg:justify-between w-full relative gap-10 lg:gap-0">
          {orderSteps.map((step, index) => (
            <React.Fragment key={step.id}>

              {/* Individual Step Card */}
              <div className="flex flex-col items-center text-center w-full md:w-[45%] lg:w-[130px] xl:w-[180px] shrink-0">

                {/* Updated Icon Circle */}
                <div
                  className="relative rounded-full bg-white flex items-center justify-center mb-4 xl:mb-6 w-[76px] h-[76px] lg:w-[60px] lg:h-[60px] xl:w-[76px] xl:h-[76px] shadow-[0px_2px_4px_1px_#0000001F]"
                >
                  <Image
                    src={step.iconUrl}
                    alt={step.title}
                    width={36}
                    height={36}
                    className="object-contain w-[36px] h-[36px] lg:w-[28px] lg:h-[28px] xl:w-[36px] xl:h-[36px]"
                  />

                  {/* Overlapping Orange Number Badge */}
                  <div className="absolute -bottom-[10px] lg:-bottom-[8px] xl:-bottom-[10px] left-[35%] -translate-x-1/2 w-[28px] h-[28px] lg:w-[24px] lg:h-[24px] xl:w-[28px] xl:h-[28px] bg-[#FF8D28] text-white rounded-full flex items-center justify-center text-[13px] lg:text-[11px] xl:text-[13px] font-bold border-[2px] border-white z-10 shadow-sm">
                    {step.id}
                  </div>
                </div>

                {/* Step Text Content - Scaled down for lg */}
                <h4 className="text-[#1C3E6E] font-semibold text-[18px] lg:text-[14px] xl:text-[18px] mb-2 lg:mb-1 xl:mb-2 lg:leading-tight xl:leading-normal">
                  {step.title}
                </h4>
                <p className="text-[#1C3E6E]/70 text-[14px] lg:text-[11px] xl:text-[14px] leading-relaxed lg:leading-snug xl:leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>

              </div>

              {/* Connecting Arrow - Scaled down width for lg screens */}
              {index < orderSteps.length - 1 && (
                <div className="hidden lg:flex flex-1 items-center justify-center mt-[38px] lg:mt-[30px] xl:mt-[38px] px-1 xl:px-2 min-w-[30px] xl:min-w-[50px]">
                  <Image
                    src="/order/arrow.png"
                    alt="Next step arrow"
                    width={80}
                    height={24}
                    className="object-contain w-[80px] lg:w-[50px] xl:w-[80px] h-auto"
                  />
                </div>
              )}

            </React.Fragment>
          ))}

        </div>

        {/* Decorative Round Arrow */}
        <div className='hidden xl:flex flex-1'>
          <Image
            src={'/order/round-arrow.png'}
            alt="Round arrow decoration"
            width={120}
            height={120}
            className="absolute bottom-10 -right-16 opacity-50 2xl:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}