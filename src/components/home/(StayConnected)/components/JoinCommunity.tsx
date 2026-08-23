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
    <section className="w-full px-2 py-2 md:px-4 md:py-3 lg:px-0 lg:py-4 xl:py-5 1xl:py-6 3xl:py-7">
      <div className="container-custom flex min-h-[68px] items-center justify-between gap-1.5 rounded-[10px] bg-[#FF4F00] px-3 py-2 shadow-[0_5px_14px_rgba(0,0,0,0.16)] md:min-h-[90px] md:gap-5 md:px-7 md:py-4 lg:min-h-[86px] lg:px-7 xl:min-h-[92px] xl:rounded-[12px] xl:px-8 1xl:min-h-[100px] 1xl:px-10 3xl:min-h-[116px] 3xl:rounded-[16px] 3xl:px-12">
        <div className="flex min-w-0 flex-1 items-center gap-1.5 md:gap-4 lg:gap-5 xl:gap-6 1xl:gap-7 3xl:gap-8">
          <div className="flex shrink-0 items-center">
            {customers.map((customer, index) => (
              <div key={customer.id} className={`relative h-[26px] w-[26px] overflow-hidden rounded-full border border-white md:h-11 md:w-11 md:border-2 lg:h-10 lg:w-10 xl:h-11 xl:w-11 1xl:h-12 1xl:w-12 3xl:h-14 3xl:w-14 ${index !== 0 ? "-ml-1.5 md:-ml-2.5 xl:-ml-3" : ""}`} style={{ zIndex: index + 1 }}>
                <Image src={customer.image} alt="Happy customer" fill sizes="56px" className="object-cover" />
              </div>
            ))}

             <div className="relative z-10 -ml-2 translate-y-[3px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-white bg-[#FF7A45] text-[6px] font-semibold text-white md:-ml-3 md:translate-y-1 md:h-9 md:w-9 md:border-2 md:text-[8px] lg:h-8 lg:w-8 lg:text-[8px] xl:-ml-3.5 xl:h-9 xl:w-9 xl:text-[9px] 1xl:h-10 1xl:w-10 1xl:text-[10px] 3xl:-ml-4 3xl:translate-y-1.5 3xl:h-12 3xl:w-12 3xl:text-[11px]">
              40k+
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="max-w-[108px] text-[11px] font-semibold leading-[1.05] text-white md:max-w-none md:whitespace-nowrap md:text-[16px] lg:text-[17px] xl:text-[18px] 1xl:text-[20px] 3xl:text-[27px]">
              Join 40,000+ Happy Customers
            </h3>

            <p className="mt-1 max-w-[112px] text-[6px] leading-[1.15] text-white/90 md:max-w-none md:whitespace-nowrap md:text-[8px] lg:text-[8px] xl:text-[9px] 1xl:text-[10px] 3xl:text-[13px]">
              Be part of our growing community and stay inspired every day
            </p>
          </div>
        </div>

         <ActionButton
  title="Join Our Community"
  cardWidth="h-[40px] w-[140px] md:h-[54px] md:w-[190px] lg:h-[58px] lg:w-[210px] xl:h-[62px] xl:w-[230px] 1xl:h-[70px] 1xl:w-[260px] 3xl:h-[80px] 3xl:w-[320px]"
  buttonBg="bg-white"
  titleColor="text-black font-normal text-[8px] md:text-[12px] xl:text-[14px] 1xl:text-[16px] 3xl:text-[20px]"
  arrowBg="bg-[#F05A28]"
  arrowColor="text-white"
/>
      </div>
    </section>
  );
}
