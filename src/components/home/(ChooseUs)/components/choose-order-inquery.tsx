"use client";

import Image from "next/image";
import ActionButton from "../../landing-page-btn-gorguse";

export default function CustomOrderInquiry() {
  return (
    <section className="w-full ">
      <div className="container-custom flex items-center justify-between gap-2 rounded-[8px] bg-[linear-gradient(to_right,#FEF1E8_0%,#FFFFFF_50%,#FEF1E8_100%)] px-2 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.08)] md:gap-4 md:px-4 md:py-4 lg:gap-5 lg:py-5 xl:rounded-[12px] xl:px-8 xl:py-3 1xl:px-10 1xl:py-4 3xl:px-30 3xl:py-5">
        <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-4 lg:gap-5 1xl:gap-6 3xl:gap-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(240,90,40,0.12)] md:h-16 md:w-16 lg:h-[68px] lg:w-[68px] xl:h-12 xl:w-12 1xl:h-14 1xl:w-14 3xl:h-24.75 3xl:w-24.75">
            <Image
              src="/choose-us/custom-order-inquiry-icon.svg"
              alt="Custom Order Inquiry"
              width={113}
              height={122}
              className="h-6 w-6 md:h-8 md:w-8  xl:h-8 xl:w-8 1xl:h-10 1xl:w-10 3xl:h-60 3xl:w-15 3xl:p-2"
            />
          </div>

          <div className="min-w-0">
            <h3 className="whitespace-nowrap text-[12px] font-semibold leading-tight text-[#012C60] md:text-black md:text-[27px] xl:text-[17px] 1xl:text-[20px] 3xl:text-[26px] tracking-[0.5px]">
              Custom Order <span className="text-[#012C60] md:text-[#F05A28]">Inquiry</span>
            </h3>

            <p className="mt-1 md:max-w-75 xl:max-w-141 3xl:max-w-150 leading-[1.15] text-[#000000] text-[7px] md:text-[15px] xl:text-[11px] 1xl:text-[13px] 3xl:text-[17px] tracking-[0.5px] lg:tracking-[1px]">
              Looking for a product we don&apos;t offer yet?
              <br />
              Send us your custom specifications and we&apos;ll take it forward
              from there.
            </p>
          </div>
        </div>
        <ActionButton
          title="Send Request"
          cardWidth="h-[48px] w-[128px] md:h-[58px] md:w-[160px] xl:h-[84px] xl:w-[220px] 1xl:w-[250px] 3xl:h-[92px] 3xl:w-[280px]"
          buttonBg="bg-[#FF4900]"
          titleColor="text-white"
          arrowBg="bg-white"
          arrowColor="text-black"
        />
      </div>
    </section>
  );
}
