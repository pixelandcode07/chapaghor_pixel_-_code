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
//     <section className="w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[80vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//       {banners.map((banner) => (
//         <div
//           key={banner.id}
//           className={`relative flex xl:h-64.5 3xl:h-85.75 items-center overflow-hidden rounded-[40px] ${banner.bg}`}
//         >
//           {/* Content */}
//           <div className="z-10 pl-10">
//             <h2 className="xl:text-[32px] 3xl:text-[42px] font-bold leading-none uppercase tracking-[0.5px] text-white">
//               20% OFF DURING THE <br /> WEEKEND
//             </h2>

//             <button
//               className={`mt-8.75 rounded-full xl:px-7.5 3xl:px-8.75 xl:py-5.25 3xl:py-6.25 xl:text-[24px] 3xl:text-[32px] font-bold leading-none tracking-[0.5px] transition-transform duration-300 hover:scale-105 ${banner.buttonBg} ${banner.buttonText}`}
//             >
//               Get Now
//             </button>
//           </div>

//           {/* Image */}
//           <div className="absolute -right-15 xl:-bottom-20 3xl:-bottom-30 h-full w-[55%]">
//             <Image
//               src="/promobanner/mugs.png"
//               alt="Mugs"
//               fill
//               className="object-contain object-bottom"
//             />
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }



import Image from "next/image";

const banners = [
  {
    id: 1,
    bg: "bg-[#F77443]",
    buttonBg: "bg-white",
    buttonText: "text-[#F77443]",
  },
  {
    id: 2,
    bg: "bg-[#2381E6]",
    buttonBg: "bg-[#5BE229]",
    buttonText: "text-white",
  },
];

export default function PromoBanner() {
  return (
    <section className="w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[80vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto px-2 md:px-0">

      {/* Mobile / Tablet / LG */}
      <div className="xl:hidden overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-4 md:gap-6 w-max">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`relative shrink-0 w-75 h-32.5 md:w-131.25 md:h-59.75 lg:w-156.25 lg:h-65 flex items-center overflow-hidden rounded-[15px] md:rounded-[28px] snap-start ${banner.bg}`}
            >
              {/* Content */}
              <div className="z-10 pl-5 md:pl-8.75 lg:pl-10">
                <h2 className="text-[16px] md:text-[30px] font-bold leading-none uppercase tracking-[0.5px] text-white">
                  20% OFF DURING THE <br /> WEEKEND
                </h2>

                <button
                  className={`mt-8 rounded-full px-3.5 py-2 md:px-7 md:py-4 text-[12px] md:text-[22px] font-bold leading-none tracking-[0.5px] transition-transform duration-300 hover:scale-105 ${banner.buttonBg} ${banner.buttonText}`}
                >
                  Get Now
                </button>
              </div>

              <div className="absolute -right-5 -bottom-8 md:-right-10 md:-bottom-20 lg:-right-15 h-full w-[55%]">
                <Image
                  src="/promobanner/mugs.png"
                  alt="Mugs"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* XL & Above */}
      <div className="hidden xl:grid xl:grid-cols-2 gap-8">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`relative flex xl:h-64.5 3xl:h-85.75 items-center overflow-hidden xl:rounded-[30px] 3xl:rounded-[40px] ${banner.bg}`}
          >
            {/* Content */}
            <div className="z-10 pl-10">
              <h2 className="xl:text-[32px] 3xl:text-[42px] font-bold leading-none uppercase tracking-[0.5px] text-white">
                20% OFF DURING THE <br /> WEEKEND
              </h2>

              <button
                className={`mt-8.75 rounded-full xl:px-7.5 3xl:px-8.75 xl:py-5.25 3xl:py-6.25 xl:text-[24px] 3xl:text-[32px] font-bold leading-none tracking-[0.5px] transition-transform duration-300 hover:scale-105 ${banner.buttonBg} ${banner.buttonText}`}
              >
                Get Now
              </button>
            </div>

            <div className="absolute -right-15 xl:-bottom-20 3xl:-bottom-30 h-full w-[55%]">
              <Image
                src="/promobanner/mugs.png"
                alt="Mugs"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}