// import React from 'react';
// import Image from 'next/image';
// // import { KineticText } from '../ui/kinetic-text';

// const orderSteps = [
//   {
//     id: 1,
//     title: 'Choose Product',
//     description: 'Select the product you need',
//     iconUrl: '/order/first.png'
//   },
//   {
//     id: 2,
//     title: 'Upload Design',
//     description: 'Select options and upload your design file',
//     iconUrl: '/order/second.png'
//   },
//   {
//     id: 3,
//     title: 'Preview & Confirm',
//     description: 'Check preview and confirm you order',
//     iconUrl: '/order/third.png'
//   },
//   {
//     id: 4,
//     title: 'Make Payment',
//     description: 'Complete your payment securely',
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
//     <section className="w-full bg-white overflow-hidden">
//       {/* Main Container */}
//       <div className="relative w-full md:max-w-[90vw] 3xl:max-w-[76vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto py-12 px-4">

//         {/* Title Section */}
//         <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
//           <h5
//             style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
//             className="uppercase text-[#FF8D28] mb-2 font-normal leading-none tracking-normal text-[16px] lg:text-[14px] xl:text-[33.33px]"
//           >
//             How To Order
//           </h5>
//           <h1
//             style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
//             className="text-[#1C3E6E] capitalize font-light leading-none text-[28px] md:text-[36px] lg:text-[28px] xl:text-[36px] 3xl:text-[48px]"
//           >
//             Easy Steps To Order
//           </h1>
//         </div>

//         {/* Steps Layout */}
//         <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center lg:items-start justify-center lg:justify-between w-full relative gap-10 lg:gap-0">
//           {orderSteps.map((step, index) => (
//             <React.Fragment key={step.id}>

//               {/* Individual Step Card */}
//               <div className="flex flex-col items-center text-center w-full ">

//                 {/* Updated Icon Circle */}
//                 <div
//                   className="relative rounded-full bg-white flex items-center justify-center mb-4 xl:mb-6 w-[76px] h-[76px] lg:w-[60px] lg:h-[60px] xl:w-[76px] xl:h-[76px] shadow-[0px_2px_4px_1px_#0000001F]"
//                 >
//                   <Image
//                     src={step.iconUrl}
//                     alt={step.title}
//                     width={36}
//                     height={36}
//                     className="object-contain w-[36px] h-[36px] lg:w-[28px] lg:h-[28px] xl:w-[36px] xl:h-[36px]"
//                   />

//                   {/* Overlapping Orange Number Badge */}
//                   <div className="absolute -bottom-[10px] lg:-bottom-[8px] xl:-bottom-[10px] left-[35%] -translate-x-1/2 w-[28px] h-[28px] lg:w-[24px] lg:h-[24px] xl:w-[28px] xl:h-[28px] bg-[#FF8D28] text-white rounded-full flex items-center justify-center text-[13px] lg:text-[11px] xl:text-[13px] font-bold border-[2px] border-white z-10 shadow-sm">
//                     {step.id}
//                   </div>
//                 </div>

//                 {/* Step Text Content - Scaled down for lg */}
//                 <h4 className="text-[#6838A2] font-medium text-[18px] lg:text-[14px] xl:text-[16px] 3xl:text-[21.33px] mb-2 lg:mb-1 xl:mb-2 lg:leading-tight xl:leading-normal">
//                   {step.title}
//                 </h4>
//                 <p className="text-[#012C60] font-light text-[14px] lg:text-[11px] xl:text-[14px] 3xl:text-[21.33px] leading-relaxed lg:leading-snug xl:leading-relaxed whitespace-pre-line">
//                   {step.description}
//                 </p>

//               </div>

//               {/* Connecting Arrow - Scaled down width for lg screens */}
//               {index < orderSteps.length - 1 && (
//                 <div className="hidden lg:flex flex-1 items-center justify-center mt-[38px] lg:mt-[30px] xl:mt-[38px] px-1 xl:px-2 min-w-[30px] xl:min-w-[50px]">
//                   <Image
//                     src="/order/arrow.png"
//                     alt="Next step arrow"
//                     width={80}
//                     height={24}
//                     className="object-contain w-[80px] lg:w-[50px] xl:w-[80px] h-auto"
//                   />
//                 </div>
//               )}

//             </React.Fragment>
//           ))}

//         </div>

//         {/* Decorative Round Arrow */}
//         <div className='hidden xl:flex flex-1'>
//           <Image
//             src={'/order/round-arrow.png'}
//             alt="Round arrow decoration"
//             width={120}
//             height={120}
//             className="absolute bottom-10 -right-16 opacity-50 2xl:opacity-100"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }






import React from 'react';
import Image from 'next/image';

const orderSteps = [
  {
    id: 1,
    title: 'Choose Product',
    description: 'Select the product you need',
    iconUrl: '/order/first.png'
  },
  {
    id: 2,
    title: 'Upload Design',
    description: 'Select options and upload your design file',
    iconUrl: '/order/second.png'
  },
  {
    id: 3,
    title: 'Preview & Confirm',
    description: 'Check preview and confirm you order',
    iconUrl: '/order/third.png'
  },
  {
    id: 4,
    title: 'Make Payment',
    description: 'Complete your payment securely',
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
      <div className="relative w-full md:max-w-[90vw] 3xl:max-w-[76vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto py-12 px-4">

        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <h5
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            className="uppercase text-[#FF8D28] mb-2 font-normal leading-none tracking-normal text-[16px] lg:text-[14px] xl:text-[33.33px]"
          >
            How To Order
          </h5>
          <h1
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            className="text-[#1C3E6E] capitalize font-light leading-none text-[28px] md:text-[36px] lg:text-[28px] xl:text-[36px] 3xl:text-[48px]"
          >
            Easy Steps To Order
          </h1>
        </div>

        {/* Steps Grid Layout (5 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4 xl:gap-6 w-full relative">
          {orderSteps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center w-full">

              {/* ── Absolutely Positioned Connecting Arrow ── */}
              {/* Spans perfectly from the right side of the current icon towards the next one */}
              {index < orderSteps.length - 1 && (
                <div className="hidden lg:flex absolute z-0 w-[146px] items-center justify-center pointer-events-none
                  lg:top-[20px] lg:left-[calc(50%+42px)] 
                  xl:top-[24px] xl:left-[calc(50%+48px)]
                  3xl:left-[calc(50%+56px)]"
                >
                  <svg width="147" height="18" viewBox="0 0 147 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M146.225 17.2636L142.117 10.7534L138.533 17.5662L146.225 17.2636ZM0.250398 14.5393L0.500308 15.1574C13.631 9.84801 36.1119 3.62642 61.5989 1.83725C87.0875 0.0479829 115.527 2.69541 140.617 15.0665L140.912 14.4686L141.207 13.8707C115.833 1.35998 87.1351 -1.29198 61.5056 0.507195C35.8745 2.30647 13.2566 8.56116 0.000488193 13.9213L0.250398 14.5393Z" fill="#6839A3" />
                  </svg>
                </div>
              )}

              {/* Icon Circle (z-10 keeps it floating over the arrow start/endpoints) */}
              <div
                className="relative rounded-full bg-white flex items-center justify-center mb-4 xl:mb-6 w-[76px] h-[76px] lg:w-[70px] lg:h-[70px] xl:w-[101px] xl:h-[101px] shadow-[0px_2px_4px_1px_#0000001F] z-10"
              >
                <Image
                  src={step.iconUrl}
                  alt={step.title}
                  width={44}
                  height={44}
                  className="object-contain w-[44px] h-[44px] lg:w-[38px] lg:h-[38px] xl:w-[43px] xl:h-[43px]"
                />

                {/* Overlapping Orange Number Badge */}
                <div className="absolute -bottom-[10px] lg:-bottom-[8px] xl:-bottom-[10px] left-[35%] -translate-x-1/2 w-[28px] h-[28px] lg:w-[24px] lg:h-[24px] xl:w-[33px] xl:h-[33px] bg-[#FF8D28] text-white rounded-full flex items-center justify-center text-[13px] lg:text-[11px] xl:text-[21px] font-medium z-10 ">
                  {step.id}
                </div>
              </div>

              {/* Step Text Content (Now gets 100% of column width) */}
              <div className="w-full px-1">
                <h4 className="text-[#6838A2] font-medium text-[18px] lg:text-[14px] xl:text-[16px] 3xl:text-[21.33px] mb-2 lg:mb-1 xl:mb-2 lg:leading-tight xl:leading-normal whitespace-nowrap">
                  {step.title}
                </h4>
                <p className="text-[#012C60] font-light text-[14px] lg:text-[11px] xl:text-[14px] 3xl:text-[21.33px] leading-relaxed lg:leading-snug xl:leading-relaxed description-text">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Decorative Round Arrow */}
        <div className='hidden xl:flex flex-1'>
          <Image
            src={'/order/round-arrow.png'}
            alt="Round arrow decoration"
            width={120}
            height={120}
            className="absolute bottom-30 -right-16 opacity-50 2xl:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}