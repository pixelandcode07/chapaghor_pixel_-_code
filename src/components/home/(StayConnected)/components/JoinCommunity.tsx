"use client";

import Image from "next/image";
import ActionButton from "../../landing-page-btn-gorguse";

const customers = [
  { id: 1, image: "/community/face_1.png" },
  { id: 2, image: "/community/face_2.png" },
  { id: 3, image: "/community/f3.png" },
];

export default function JoinCommunity() {
  return (
    <section className="w-full px-0 pb-2 md:px-0  md:pb-3  lg:py-4 xl:py-5 1xl:py-6 3xl:py-7">
      <div className="container-custom flex h-[90px] items-center justify-between gap-1.5 rounded-[10px] bg-[#FF4F00] px-3 shadow-[0_5px_14px_rgba(0,0,0,0.16)] md:h-[101px] md:gap-5 md:px-7 lg:h-[86px] xl:h-[72px] xl:rounded-[12px] xl:px-10 1xl:h-[80px] 1xl:px-25 3xl:h-[137px] 3xl:rounded-[16px] 3xl:px-30">
        
        {/* Left Side (Fixed Widths per Breakpoint) */}
        <div className="flex w-[108px] shrink-0 items-center gap-1.5 md:w-[342px] md:gap-4 lg:w-[400px] xl:w-[429px] xl:gap-6 1xl:w-[474px] 1xl:gap-7 3xl:w-[637px] 3xl:gap-8">
          
          {/* Responsive Icon Section */}
          <div className="flex shrink-0 items-center">
            {customers.map((customer, index) => (
              <div
                key={customer.id}
                className={`relative h-[26px] w-[26px] overflow-hidden rounded-full border border-white md:h-11 md:w-11 md:border-2 lg:h-10 lg:w-10 xl:h-11 xl:w-11 1xl:h-12 1xl:w-12 3xl:h-14 3xl:w-14 ${
                  index !== 0 ? "-ml-1.5 md:-ml-2.5 xl:-ml-3" : ""
                }`}
                style={{ zIndex: index + 1 }}
              >
                <Image
                  src={customer.image}
                  alt="Happy customer"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
            ))}

            <div className="relative z-10 -ml-2 flex h-[22px] w-[22px] translate-y-[3px] shrink-0 items-center justify-center rounded-full border border-white bg-[#FF7A45] text-[6px] font-semibold text-white md:-ml-3 md:h-9 md:w-9 md:translate-y-1 md:border-2 md:text-[8px] lg:h-8 lg:w-8 lg:text-[8px] xl:-ml-3.5 xl:h-9 xl:w-9 xl:text-[9px] 1xl:h-10 1xl:w-10 1xl:text-[10px] 3xl:-ml-4 3xl:h-12 3xl:w-12 3xl:translate-y-1.5 3xl:text-[11px]">
              40k+
            </div>
          </div>

          {/* Typography Section */}
          <div className="flex-1">
            <h3 className="whitespace-nowrap font-['Helvetica_Neue',_sans-serif] font-medium leading-[1.2] tracking-normal text-white text-[10.59px] md:text-[22.4px] xl:text-[22.66px] 1xl:text-[25.04px] 3xl:text-[34.58px]">
              Join 40,000+ <br className="lg:hidden" /> Happy Customers
            </h3>

            <p className="mt-1 whitespace-nowrap font-['Helvetica_Neue',_sans-serif] font-medium leading-[1.2] tracking-normal text-white/90 text-[6.07px] md:text-[12.85px] xl:text-[11.33px] 1xl:text-[12.52px] 3xl:text-[17.29px]">
              Be part of our growing community <br className="lg:hidden" /> and stay inspired every day
            </p>
          </div>
        </div>

        {/* Right Side (Auto adjusts now that left is strict) */}
        <ActionButton
          title="Join Our Community"
          cardWidth="h-[26px] w-[130px] md:h-[54px] md:w-[235px] lg:h-[58px] lg:w-[235px] xl:h-[52px] xl:w-[228px] 1xl:h-[57px] 1xl:w-[260px] 3xl:h-[80px] 3xl:w-[360px]"
          iconCardWidth="h-[20px] w-[20px] md:h-[41px] md:w-[41px] lg:h-[43px] lg:w-[43px] xl:h-[41px] xl:w-[41px] 1xl:h-[46px] 1xl:w-[46px] 3xl:h-[64px] 3xl:w-[64px]"
          buttonBg="bg-white"
          titleColor="text-black font-normal tracking-[1px] text-[6px] md:text-[12px] xl:text-[14px] 1xl:text-[16px] 3xl:text-[20px]"
          arrowBg="bg-[#F05A28]"
          arrowColor="text-white"
        />
      </div>
    </section>
  );
}