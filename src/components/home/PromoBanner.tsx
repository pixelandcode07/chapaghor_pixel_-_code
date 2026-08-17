// import Image from "next/image";

// const banners = [
//   {
//     id: 1,
//     bg: "bg-[#F77443]",
//     buttonBg: "bg-white",
//     buttonText: "text-[#F77443]",
//   },
//   {
//     id: 2,
//     bg: "bg-[#2381E6]",
//     buttonBg: "bg-[#5BE229]",
//     buttonText: "text-white",
//   },
// ];

// export default function PromoBanner() {
//   return (
//     <section className="w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[80vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto px-2 md:px-0">

//       {/* Mobile / Tablet / LG */}
//       <div className="xl:hidden overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
//         <div className="flex gap-4 md:gap-6 w-max">
//           {banners.map((banner) => (
//             <div
//               key={banner.id}
//               className={`relative shrink-0 w-75 h-32.5 md:w-131.25 md:h-59.75 lg:w-156.25 lg:h-65 flex items-center overflow-hidden rounded-[15px] md:rounded-[28px] snap-start ${banner.bg}`}
//             >
//               {/* Content */}
//               <div className="z-10 pl-5 md:pl-8.75 lg:pl-10">
//                 <h2 className="text-[16px] md:text-[30px] font-bold leading-none uppercase tracking-[0.5px] text-white">
//                   20% OFF DURING THE <br /> WEEKEND
//                 </h2>

//                 <button
//                   className={`mt-8 rounded-full px-3.5 py-2 md:px-7 md:py-4 text-[12px] md:text-[22px] font-bold leading-none tracking-[0.5px] transition-transform duration-300 hover:scale-105 ${banner.buttonBg} ${banner.buttonText}`}
//                 >
//                   Get Now
//                 </button>
//               </div>

//               <div className="absolute -right-5 -bottom-8 md:-right-10 md:-bottom-20 lg:-right-15 h-full w-[55%]">
//                 <Image
//                   src="/promobanner/mugs.png"
//                   alt="Mugs"
//                   fill
//                   className="object-contain object-bottom"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* XL & Above */}
//       <div className="hidden xl:grid xl:grid-cols-2 gap-8">
//         {banners.map((banner) => (
//           <div
//             key={banner.id}
//             className={`relative flex xl:h-64.5 3xl:h-85.75 items-center overflow-hidden xl:rounded-[30px] 3xl:rounded-[40px] ${banner.bg}`}
//           >
//             {/* Content */}
//             <div className="z-10 pl-10">
//               <h2 className="xl:text-[32px] 3xl:text-[42px] font-bold leading-none uppercase tracking-[0.5px] text-white">
//                 20% OFF DURING THE <br /> WEEKEND
//               </h2>

//               <button
//                 className={`mt-8.75 rounded-full xl:px-7.5 3xl:px-8.75 xl:py-5.25 3xl:py-6.25 xl:text-[24px] 3xl:text-[32px] font-bold leading-none tracking-[0.5px] transition-transform duration-300 hover:scale-105 ${banner.buttonBg} ${banner.buttonText}`}
//               >
//                 Get Now
//               </button>
//             </div>

//             <div className="absolute -right-15 xl:-bottom-20 3xl:-bottom-30 h-full w-[55%]">
//               <Image
//                 src="/promobanner/mugs.png"
//                 alt="Mugs"
//                 fill
//                 className="object-contain object-bottom"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

const banners = [
  {
    id: 1,
    bg: "bg-[#F05A28]",
    buttonBg: "bg-white",
    buttonText: "text-[#F05A28]",
    image: "/promobanner/mugs.png",
  },
  {
    id: 2,
    bg: "bg-[#1F1F24]",
    buttonBg: "bg-[#F05A28]",
    buttonText: "text-white",
    image: "/promobanner/mugs.png",
  },
];

export default function PromoBanner() {
  return (
    <section className="w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[80vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto px-2 md:px-0">
      {/* Mobile / Tablet / LG */}
      <div className="xl:hidden overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-4 md:gap-6 w-max">
          {banners.map((banner) => (
            <div key={banner.id} className={`relative shrink-0 w-[264px] h-[123px] md:w-[548px] md:h-[224px] flex items-center overflow-hidden rounded-[12px] md:rounded-[14px] snap-start ${banner.bg}`}>
              {/* Content */}
              <div className="relative z-10 pl-5 md:pl-6">
                <h2 className="text-[18px] md:text-[28px] font-bold leading-[1.05] uppercase tracking-[0.3px] text-white">
                  20% OFF
                  <br />
                  <span className="text-[11px] md:text-[16px]">DURING THE WEEKEND</span>
                </h2>

                <p className="mt-1 text-[8px] md:text-[12px] text-white">On All Printing Products</p>

                <button className={`mt-3 md:mt-5 flex items-center gap-2 rounded-full px-4 py-1.5 md:px-5 md:py-2.5 text-[8px] md:text-[12px] font-medium leading-none tracking-[0.2px] transition-transform duration-300 hover:scale-105 ${banner.buttonBg} ${banner.buttonText}`}>
                  Order Now
                  <span className="text-[12px] md:text-[14px]">→</span>
                </button>
              </div>

              {/* Product Image */}
              <div className="absolute right-[-12px] bottom-[-8px] h-full w-[52%] md:right-[-25px] md:bottom-[-20px] md:w-[53%]">
                <Image src={banner.image} alt="Chapaghor printing products" fill sizes="(max-width: 767px) 140px, 290px" className="object-contain object-bottom" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* XL & Above */}
      <div className="hidden xl:grid xl:grid-cols-2 gap-4 1xl:gap-5 3xl:gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className={`relative flex items-center shrink-0 overflow-hidden rounded-[12px] 1xl:rounded-[14px] 3xl:rounded-[16px] w-[552px] h-[160px] 1xl:w-[635px] 1xl:h-[184px] 3xl:w-[700px] 3xl:h-[246px] ${banner.bg}`}>
            {/* Content */}
            <div className="relative z-10 pl-7 1xl:pl-8 3xl:pl-10">
              <p className="text-[7px] 1xl:text-[8px] 3xl:text-[10px] font-medium uppercase tracking-[1px] text-white">Premium Printing Solutions</p>

              <h2 className="mt-1 text-[24px] 1xl:text-[28px] 3xl:text-[36px] font-bold leading-none uppercase tracking-[0.3px] text-white">
                20% OFF
              </h2>

              <p className="mt-1 text-[10px] 1xl:text-[12px] 3xl:text-[15px] font-medium leading-none uppercase text-white">During The Weekend</p>

              <p className="mt-1 text-[8px] 1xl:text-[9px] 3xl:text-[11px] text-white">On All Printing Products</p>

              <button className={`mt-3 1xl:mt-3.5 3xl:mt-5 flex items-center gap-2 rounded-full px-4 py-1.5 1xl:px-5 1xl:py-2 3xl:px-6 3xl:py-2.5 text-[8px] 1xl:text-[9px] 3xl:text-[12px] font-medium leading-none transition-transform duration-300 hover:scale-105 ${banner.buttonBg} ${banner.buttonText}`}>
                Order Now
                <span className="text-[12px] 3xl:text-[15px]">→</span>
              </button>
            </div>

            {/* Product Image */}
            <div className="absolute right-[-18px] bottom-[-10px] h-full w-[52%] 1xl:right-[-22px] 1xl:bottom-[-12px] 3xl:right-[-30px] 3xl:bottom-[-18px] 3xl:w-[53%]">
              <Image src={banner.image} alt="Chapaghor printing products" fill sizes="(max-width: 1535px) 300px, 450px" className="object-contain object-bottom" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}