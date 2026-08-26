// "use client";

// import Image from "next/image";

// const orderSteps = [
//   {
//     id: 1,
//     title: "Choose Product",
//     description: "Select the product you need",
//     iconUrl: "/order/first.png",
//   },
//   {
//     id: 2,
//     title: "Upload Design",
//     description: "Select options and upload your design file",
//     iconUrl: "/order/second.png",
//   },
//   {
//     id: 3,
//     title: "Preview & Confirm",
//     description: "Check preview and confirm you order",
//     iconUrl: "/order/third.png",
//   },
//   {
//     id: 4,
//     title: "Make Payment",
//     description: "Complete your payment securely",
//     iconUrl: "/order/fourth.png",
//   },
//   {
//     id: 5,
//     title: "Fast Delivery",
//     description: "Get you product on time",
//     iconUrl: "/order/fifth.png",
//   },
// ];

// export default function HowToOrder() {
//   return (
//     <section className="w-full overflow-hidden bg-white">
//       {/* Mobile */}
//       <div className="md:hidden w-full px-3 py-6">
//         {/* Mobile Title */}
//         <div className="mb-7 flex flex-col items-center justify-center text-center">
//           <div className="flex w-full items-center justify-center gap-2">
//             <span className="h-px w-8 bg-[#6839A3]" />

//             <h5 className="text-[10px] font-normal uppercase leading-none tracking-normal text-[#6839A3]">
//               HOW TO ORDER
//             </h5>

//             <span className="h-px w-8 bg-[#6839A3]" />
//           </div>

//           <h1 className="mt-1 text-[15px] font-light capitalize leading-none text-[#6839A3]">
//             Easy Steps To Order
//           </h1>

//           <p className="mt-2 max-w-[170px] text-[6px] leading-[1.2] text-[#757575]">
//             Just follow these simple steps
//             <br />
//             and leave the rest to us.
//           </p>
//         </div>

//         {/* Mobile Timeline */}
//         <div className="relative mx-auto w-full max-w-[320px]">
//           {/* Vertical Dotted Line */}
//           <div className="absolute left-[15px] top-[16px] bottom-[16px] border-l border-dotted border-[#FF8D28]" />

//           <div className="flex flex-col gap-3">
//             {orderSteps.map((step) => (
//               <div key={step.id} className="relative flex items-center">
//                 {/* Number */}
//                 <div className="relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#FF8D28] text-[11px] font-medium text-white shadow-sm">
//                   {step.id}
//                 </div>

//                 {/* Step Card */}
//                 <div className="ml-3 flex h-[58px] flex-1 items-center rounded-[6px] bg-white px-2.5 shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
//                   {/* Icon */}
//                   <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#FFF1E9]">
//                     <Image
//                       src={step.iconUrl}
//                       alt={step.title}
//                       width={25}
//                       height={25}
//                       className="h-[25px] w-[25px] object-contain"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="ml-3 min-w-0">
//                     <h4 className="text-[10px] font-medium leading-tight text-[#6838A2]">
//                       {step.title}
//                     </h4>

//                     <p className="mt-1 text-[7px] font-light leading-[1.2] text-[#012C60]">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* MD / LG / XL / 1XL / 3XL */}
//       <div className="hidden md:block">
//         <div className="relative mx-auto w-full px-4 py-12 md:max-w-[90vw] lg:max-w-[90vw] 3xl:max-w-[76vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw]">
//           {/* Title Section */}
//           <div className="mb-12 flex flex-col items-center justify-center text-center md:mb-16">
//             <h5
//               style={{
//                 fontFamily:
//                   '"Helvetica Neue", Helvetica, Arial, sans-serif',
//               }}
//               className="mb-2 text-[16px] font-normal uppercase leading-none tracking-normal text-[#FF8D28] lg:text-[14px] xl:text-[33.33px]"
//             >
//               How To Order
//             </h5>

//             <h1
//               style={{
//                 fontFamily:
//                   '"Helvetica Neue", Helvetica, Arial, sans-serif',
//               }}
//               className="text-[28px] font-light capitalize leading-none text-[#1C3E6E] md:text-[36px] lg:text-[28px] xl:text-[36px] 3xl:text-[48px]"
//             >
//               Easy Steps To Order
//             </h1>
//           </div>

//           {/* Steps Grid */}
//           <div className="relative grid w-full grid-cols-1 gap-10 md:grid-cols-5 lg:gap-4 xl:gap-6">
//             {orderSteps.map((step, index) => (
//               <div
//                 key={step.id}
//                 className="relative flex w-full flex-col items-center text-center"
//               >
//                 {/* Connecting Arrow */}
//                 {index < orderSteps.length - 1 && (
//                   <div className="pointer-events-none absolute z-0 hidden w-[146px] items-center justify-center lg:flex lg:left-[calc(50%+42px)] lg:top-[20px] xl:left-[calc(50%+48px)] xl:top-[24px] 3xl:left-[calc(50%+56px)]">
//                     <svg
//                       width="147"
//                       height="18"
//                       viewBox="0 0 147 18"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-auto w-full"
//                     >
//                       <path
//                         d="M146.225 17.2636L142.117 10.7534L138.533 17.5662L146.225 17.2636ZM0.250398 14.5393L0.500308 15.1574C13.631 9.84801 36.1119 3.62642 61.5989 1.83725C87.0875 0.0479829 115.527 2.69541 140.617 15.0665L140.912 14.4686L141.207 13.8707C115.833 1.35998 87.1351 -1.29198 61.5056 0.507195C35.8745 2.30647 13.2566 8.56116 0.000488193 13.9213L0.250398 14.5393Z"
//                         fill="#6839A3"
//                       />
//                     </svg>
//                   </div>
//                 )}

//                 {/* Icon Circle */}
//                 <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white shadow-[0px_2px_4px_1px_#0000001F] md:h-[76px] md:w-[76px] lg:h-[70px] lg:w-[70px] xl:mb-6 xl:h-[101px] xl:w-[101px]">
//                   <Image
//                     src={step.iconUrl}
//                     alt={step.title}
//                     width={44}
//                     height={44}
//                     className="h-[44px] w-[44px] object-contain lg:h-[38px] lg:w-[38px] xl:h-[43px] xl:w-[43px]"
//                   />

//                   {/* Number */}
//                   <div className="absolute -bottom-[10px] left-[35%] z-10 flex h-[28px] w-[28px] -translate-x-1/2 items-center justify-center rounded-full bg-[#FF8D28] text-[13px] font-medium text-white lg:-bottom-[8px] lg:h-[24px] lg:w-[24px] lg:text-[11px] xl:-bottom-[10px] xl:h-[33px] xl:w-[33px] xl:text-[21px]">
//                     {step.id}
//                   </div>
//                 </div>

//                 {/* Step Content */}
//                 <div className="w-full px-1">
//                   <h4 className="mb-2 whitespace-nowrap text-[18px] font-medium leading-normal text-[#6838A2] lg:mb-1 lg:text-[14px] lg:leading-tight xl:mb-2 xl:text-[16px] 3xl:text-[21.33px]">
//                     {step.title}
//                   </h4>

//                   <p className="description-text text-[14px] font-light leading-relaxed text-[#012C60] lg:text-[11px] lg:leading-snug xl:text-[14px] xl:leading-relaxed 3xl:text-[21.33px]">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Decorative Round Arrow */}
//           <div className="hidden flex-1 xl:flex">
//             <Image
//               src="/order/round-arrow.png"
//               alt="Round arrow decoration"
//               width={120}
//               height={120}
//               className="absolute -right-16 bottom-30 opacity-50 2xl:opacity-100"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const orderSteps = [
  {
    id: 1,
    title: "Choose Product",
    description: "Select the product you need",
    iconUrl: "/order/first.png",
  },
  {
    id: 2,
    title: "Upload Design",
    description: "Select options and upload your design file",
    iconUrl: "/order/second.png",
  },
  {
    id: 3,
    title: "Preview & Confirm",
    description: "Check preview and confirm you order",
    iconUrl: "/order/third.png",
  },
  {
    id: 4,
    title: "Make Payment",
    description: "Complete your payment securely",
    iconUrl: "/order/fourth.png",
  },
  {
    id: 5,
    title: "Fast Delivery",
    description: "Get you product on time",
    iconUrl: "/order/fifth.png",
  },
];

export default function HowToOrder() {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* Mobile */}
      <div className="md:hidden w-full px-3 py-6">
        <div className="mb-7 flex flex-col items-center justify-center text-center">
          <div className="flex w-full items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#6839A3]" />
            <h5 className="text-[10px] font-normal uppercase leading-none tracking-normal text-[#6839A3]">HOW TO ORDER</h5>
            <span className="h-px w-8 bg-[#6839A3]" />
          </div>

          <h1 className="mt-1 text-[15px] font-light capitalize leading-none text-[#6839A3]">Easy Steps To Order</h1>

          <p className="mt-2 max-w-[170px] text-[6px] leading-[1.2] text-[#757575]">
            Just follow these simple steps
            <br />
            and leave the rest to us.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[320px]">
          <div className="absolute left-[15px] top-[16px] bottom-[16px] border-l border-dotted border-[#FF8D28]" />

          <div className="flex flex-col gap-3">
            {orderSteps.map((step) => (
              <div key={step.id} className="relative flex items-center">
                <div className="relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#FF8D28] text-[11px] font-medium text-white shadow-sm">{step.id}</div>

                <div className="ml-3 flex h-[58px] flex-1 items-center rounded-[6px] bg-white px-2.5 shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#FFF1E9]">
                    <Image src={step.iconUrl} alt={step.title} width={25} height={25} className="h-[25px] w-[25px] object-contain" />
                  </div>

                  <div className="ml-3 min-w-0">
                    <h4 className="text-[10px] font-medium leading-tight text-[#6838A2]">{step.title}</h4>
                    <p className="mt-1 text-[7px] font-light leading-[1.2] text-[#012C60]">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MD / LG / XL / 1XL / 3XL */}
      <div className="hidden md:block">
        <div className="relative mx-auto w-full px-4 py-12 md:max-w-[90vw] lg:max-w-[90vw] 3xl:max-w-[76vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw]">
          <div className="mb-12 flex flex-col items-center justify-center text-center md:mb-16">
            <h5 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }} className="mb-2 text-[16px] uppercase leading-none tracking-normal text-[#012C60] lg:text-[14px] xl:text-[33.33px]">
              How To Order
            </h5>

            <h1 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }} className="text-[28px] font-normal capitalize leading-none text-[#6839A3] md:text-[36px] lg:text-[28px] xl:text-[36px] 3xl:text-[48px]">
              Easy Steps To Order
            </h1>
          </div>

          <div className="relative grid w-full grid-cols-5 gap-3 md:gap-3 lg:gap-4 xl:gap-6">
            {orderSteps.map((step, index) => (
              <div key={step.id} className="relative flex w-full min-w-0 flex-col items-center text-center">
                {/* Connecting Arrow - XL and above only */}
                {index < orderSteps.length - 1 && (
                  <div className="pointer-events-none absolute z-0 hidden w-[146px] items-center justify-center xl:flex xl:left-[calc(50%+48px)] xl:top-[24px] 3xl:left-[calc(50%+56px)]">
                    <svg width="147" height="18" viewBox="0 0 147 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
                      <path d="M146.225 17.2636L142.117 10.7534L138.533 17.5662L146.225 17.2636ZM0.250398 14.5393L0.500308 15.1574C13.631 9.84801 36.1119 3.62642 61.5989 1.83725C87.0875 0.0479829 115.527 2.69541 140.617 15.0665L140.912 14.4686L141.207 13.8707C115.833 1.35998 87.1351 -1.29198 61.5056 0.507195C35.8745 2.30647 13.2566 8.56116 0.000488193 13.9213L0.250398 14.5393Z" fill="#6839A3" />
                    </svg>
                  </div>
                )}

                {/* Icon Circle */}
                <div className="relative z-10 mb-4 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_2px_4px_1px_#0000001F] md:h-[70px] md:w-[70px] lg:h-[70px] lg:w-[70px] xl:mb-6 xl:h-[101px] xl:w-[101px]">
                  <Image src={step.iconUrl} alt={step.title} width={44} height={44} className="h-[40px] w-[40px] object-contain md:h-[38px] md:w-[38px] lg:h-[38px] lg:w-[38px] xl:h-[43px] xl:w-[43px]" />

                  {/* Number */}
                  <div className="absolute -bottom-[8px] left-1/2 z-10 flex h-[24px] w-[24px] -translate-x-1/2 items-center justify-center rounded-full bg-[#7D7C7D] text-[11px] font-medium text-white xl:-bottom-[10px] xl:left-[35%] xl:h-[33px] xl:w-[33px] xl:text-[21px]">
                    {step.id}
                  </div>
                </div>

                {/* Step Content */}
                <div className="mt-1 w-full min-w-0 px-1 md:mt-3 lg:mt-3 xl:mt-0">
                  <h4 className="mb-1 text-center text-[13px] font-medium leading-tight text-[#6838A2] md:text-[13px] lg:text-[14px] xl:mb-2 xl:whitespace-nowrap xl:text-[16px] 3xl:text-[21.33px]">
                    {step.title}
                  </h4>

                  <p className="mx-auto max-w-[125px] text-center text-[10px] font-light leading-[1.1] text-[#012C60] md:max-w-[130px] 3xl:max-w-[194px] md:text-[10px] tracking-[1px] lg:max-w-[145px] lg:text-[11px] xl:max-w-none xl:text-[14px] xl:leading-[1.2] 3xl:text-[17.5px]">
  {step.description}
</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Round Arrow */}
          <div className="hidden flex-1 xl:flex">
            <Image src="/order/round-arrow.png" alt="Round arrow decoration" width={120} height={120} className="absolute -right-16 bottom-30 opacity-50 2xl:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
}