import React from 'react';

export default function StayConnectedHead() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 mb-12">
      <h5 className="uppercase text-black text-[12px] md:text-[14px] lg:text-[16px] 3xl:text-[24px] pb-2.5 font-normal leading-tight tracking-wide">
        STAY CONNECTED
      </h5>
      <div className="flex flex-wrap justify-center gap-[8px]">
        <h1 className="text-black text-[22px] md:text-[28px] lg:text-[34px] xl:text-[39px] 3xl:text-[52px] pb-4.25 font-normal leading-tight tracking-wide">
          Follow Chapaghor For Daily Inspiration
        </h1>
      </div>
      <ul className="text-[#757575] w-full flex justify-center items-center text-center text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px] 3xl:text-[24px] font-normal leading-tight tracking-wide max-w-4xl mx-auto gap-8">
        <li className="list-disc">Behind the scenes</li>
        <li className="list-disc">Offers</li>
        <li className="list-disc">New Designs</li>
        <li className="list-disc">Tips</li>
      </ul>
    </div>
  );
}
