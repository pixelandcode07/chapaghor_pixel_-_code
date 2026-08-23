import Image from "next/image";

export default function StayConnectedHead() {
  return (
    <div className="container-custom relative flex items-center justify-center mb-12 px-1 md:px-4">
  <div className="absolute left-6 top-1/2 z-0 w-[50px] h-[50px] -translate-y-1/2 md:static md:translate-y-0 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 3xl:w-40 3xl:h-40">
    <Image src="/connected/first.png" alt="" fill sizes="160px" className="object-contain" />
  </div>

  <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">
    <h5 className="uppercase text-black text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 1xl:text-[20px] 3xl:text-[27px] pb-1 md:pb-2.5 font-normal leading-tight tracking-wide">
      STAY CONNECTED
    </h5>

    <h1 className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4 pb-1 md:pb-4.25 font-semibold leading-tight tracking-wide">
      <span className="text-[#FD7034] md:text-black text-[18px] md:text-[28px] lg:text-[34px] xl:text-[31px] 1xl:text-[35px] 3xl:text-[47px]">
        Follow Chapaghor 
      </span>
      <span className="text-[#757575] md:text-black text-[15px] md:text-[28px] lg:text-[34px] xl:text-[31px] 1xl:text-[35px] 3xl:text-[47px] ">
        For Daily Inspiration
      </span>
    </h1>

    <ul className="flex w-max max-w-none justify-center items-center gap-2 md:gap-5 text-center text-[#757575] text-[12px] md:text-[15px] lg:text-[17px] xl:text-[18px] 3xl:text-[24px] font-normal leading-tight tracking-wide whitespace-nowrap">
      <li className="flex items-center gap-1"><span className="">•</span>Behind the scenes</li>
      <li className="flex items-center gap-1"><span className="">•</span>Offers</li>
      <li className="flex items-center gap-1"><span className="">•</span>New Designs</li>
      <li className="flex items-center gap-1"><span className="">•</span>Tips</li>
    </ul>
  </div>

  <div className="absolute right-6 top-1/2 z-0 w-[50px] h-[50px] -translate-y-1/2 md:static md:translate-y-0 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 3xl:w-40 3xl:h-40">
    <Image src="/connected/second.png" alt="" fill sizes="160px" className="object-contain" />
  </div>
</div>
  );
}