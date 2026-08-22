"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import ActionButton from "../../landing-page-btn-gorguse";
import Link from "next/dist/client/link";

const customers = [
  { id: 1, image: "/community/face_1.png" },
  { id: 2, image: "/community/face_2.png" },
  { id: 3, image: "/community/f3.png" },
];

export default function JoinCommunity() {
  return (
    <section className="w-full px-2 py-2 md:px-0 md:py-3 lg:py-4 xl:py-5 1xl:py-6 3xl:py-7">
      <div className="container-custom flex min-h-[76px] items-center justify-between gap-3 rounded-[10px] bg-[#FF4F00] px-4 py-3 shadow-[0_5px_14px_rgba(0,0,0,0.16)] md:min-h-[82px] md:gap-5 md:px-6 md:py-4 lg:min-h-[86px] lg:px-7 xl:min-h-[92px] xl:rounded-[12px] xl:px-8 1xl:min-h-[100px] 1xl:px-10 3xl:min-h-[116px] 3xl:rounded-[16px] 3xl:px-12">
      <div className="flex shrink-0 items-center pl-1 md:pl-0">
  {customers.map((customer, index) => (
    <div
      key={customer.id}
      className={`relative h-8 w-8 overflow-hidden rounded-full border-2 border-white md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 1xl:h-12 1xl:w-12 3xl:h-14 3xl:w-14 ${
        index !== 0 ? "-ml-2 md:-ml-2.5 xl:-ml-3" : ""
      }`}
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

  {/* 40k+ circle  */}
  <div className="relative z-10 -ml-2.5 mt-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#FF7A45] text-[6px] font-semibold text-white md:-ml-3 md:mt-3.5 md:h-8 md:w-8 md:text-[7px] lg:-ml-3.5 lg:mt-4 lg:h-9 lg:w-9 lg:text-[8px] xl:-ml-4 xl:mt-4 xl:h-10 xl:w-10 xl:text-[9px] 1xl:-ml-5 1xl:mt-5 1xl:h-11 1xl:w-11 1xl:text-[10px] 3xl:-ml-6 3xl:mt-6 3xl:h-12 3xl:w-12 3xl:text-[11px]">
  40k+
</div>
</div>
<div className="min-w-0">
            <h3 className="truncate text-[13px] font-semibold leading-tight text-white md:text-[15px] lg:text-[17px] xl:text-[18px] 1xl:text-[20px] 3xl:text-[27px]">
              Join 40,000+ Happy Customers
            </h3>

            <p className="mt-0.5 truncate text-[6px] leading-tight text-white/90 md:text-[7px] lg:text-[8px] xl:text-[9px] 1xl:text-[10px] 3xl:text-[13px]">
              Be part of our growing community and stay inspired every day
            </p>
          </div>
{/* // TODO: add link/route here later */}
   <Link href="#"> 
  <ActionButton
    title="Join Our Community"
    cardWidth="h-[48px] w-[155px] md:h-[54px] md:w-[190px] lg:h-[58px] lg:w-[210px] xl:h-[62px] xl:w-[230px] 1xl:h-[70px] 1xl:w-[260px] 3xl:h-[80px] 3xl:w-[320px]"
    buttonBg="bg-white"
    titleColor="text-black font-normal"
    arrowBg="bg-[#F05A28]"
    arrowColor="text-white"
  />
</Link>
      </div>
    </section>
  );
}