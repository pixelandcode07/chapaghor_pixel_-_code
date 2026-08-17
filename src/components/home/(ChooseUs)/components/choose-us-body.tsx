import { Minus } from "lucide-react";
import Image from "next/image";

const features = [
  { id: 1, title: "Premium Quality", description: "Best materials &\nlatest technology", iconUrl: "/choose-us/first.png" },
  { id: 2, title: "Fast Turnaround", description: "Quick production &\non-time delivery", iconUrl: "/choose-us/second.png" },
  { id: 3, title: "Affordable Price", description: "Best quality print at\nreasonable price", iconUrl: "/choose-us/third.png" },
  { id: 4, title: "Customer Support", description: "Friendly support\nanytime you need", iconUrl: "/choose-us/fourth.png" },
];

export default function ChooseUsBody() {
  return (
    <section className="w-full bg-white py-2">
      <div className="relative container-custom overflow-hidden bg-[#111111] xl:rounded-[24px]">
        <div className="absolute inset-0 z-0 bg-black">
          <Image src="/choose-us/banner.jpg" alt="Choose us background" fill className="object-cover object-bottom-left opacity-60" priority />
        </div>

        <div className="relative z-10 px-4 py-10 md:px-6 md:py-12 xl:px-8 xl:py-16 3xl:px-12 3xl:py-20">
          <div className="mb-8 flex flex-col items-center justify-center px-2 text-center md:mb-10 xl:mb-12">
           <div className="flex w-full items-center justify-center gap-4 md:gap-5 xl:gap-6 3xl:gap-8">
    <span className="h-[2px] w-12 bg-[#FF8D28] md:w-16 xl:w-20 3xl:w-28" />
    <h5 className="uppercase text-[#FF8D28] text-[12px] md:text-[14px] lg:text-[16px] 3xl:text-[24px] pb-2.5 font-normal leading-tight tracking-wide">
      WHY CHOOSE US
    </h5>
    <span className="h-[2px] w-12 bg-[#FF8D28] md:w-16 xl:w-20 3xl:w-28" />
  </div>
            <div className="flex flex-wrap justify-center gap-2">
              <h1 className="pb-2 text-[22px] font-normal leading-tight tracking-wide text-white md:text-[28px] xl:text-[39px] 3xl:text-[52px]">Quality Printing You Can</h1>
              <h1 className="pb-2 text-[22px] font-normal leading-tight tracking-wide text-[#FF8D28] md:text-[28px] xl:text-[39px] 3xl:text-[52px]">Trust</h1>
            </div>
            <p className="mt-1 max-w-4xl text-center text-[11px] font-normal leading-tight tracking-wide text-white/90 md:text-[14px] xl:text-[18px] 3xl:text-[24px]">We use the best materials and latest technology to deliver the perfect printing quality</p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-4 xl:gap-6 3xl:gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center justify-center">
                {/* Mobile / MD / LG */}
                <div className="flex h-[92px] w-full items-center gap-3 rounded-[8px] bg-[#151619] px-3 md:h-[100px] md:gap-4 md:rounded-[9px] md:px-4 lg:h-[108px] lg:px-5 xl:hidden">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#242528] md:h-14 md:w-14 lg:h-16 lg:w-16 ">
                    <Image src={feature.iconUrl} alt={feature.title} width={64} height={64} className="h-full w-full object-contain p-1.5 md:p-2" />
                  </div>
                  <div className="min-w-0 text-left">
                    <h4 className="text-[11px] font-semibold leading-tight text-white md:text-[14px] lg:text-[15px]">{feature.title}</h4>
                    <p className="mt-1 whitespace-pre-line text-[8px] font-normal leading-tight text-white/70 md:text-[10px] lg:text-[11px]">{feature.description}</p>
                  </div>
                </div>

                {/* XL / 1XL / 3XL */}
                <div className="hidden w-full flex-col items-center justify-center rounded-[14px] border border-[#ffffff1a] bg-[#ffffff10] px-4 py-6 text-center backdrop-blur-[18px] xl:flex xl:min-h-[190px] xl:rounded-[20px] xl:px-5 xl:py-7 1xl:min-h-[205px] 3xl:min-h-[250px] 3xl:px-8 3xl:py-10">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center md:h-16 md:w-16 xl:h-20 xl:w-20 3xl:h-24 3xl:w-24 border-b-2 border-b-orange-600">
                    <Image src={feature.iconUrl} alt={feature.title} width={96} height={96} className="h-full w-full object-contain drop-shadow-lg pb-5" />
                  </div>
                  <h4 className="mt-4 text-[17px] font-bold leading-tight text-white xl:mt-5 xl:text-[20px] 1xl:text-[22px] 3xl:mt-7 3xl:text-[29px]">{feature.title}</h4>
                  <p className="mt-2 whitespace-pre-line text-[12px] font-normal leading-tight tracking-[-0.015em] text-white/90 xl:mt-3 xl:text-[14px] 1xl:text-[16px] 3xl:mt-5 3xl:text-[25px]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}