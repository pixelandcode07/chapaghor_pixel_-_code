import { MoveRight } from "lucide-react";
import Image from "next/image";

interface PromoBanner {
  id: number;
  heading: string;
  test_duration: string;
  description: string;
  button_text_color: string;
  button_text_bg_color: string;
  card_image: string;
}

const banners: PromoBanner[] = [
  {
    id: 1,
    heading: "20% OFF",
    test_duration: "During The Weekend",
    description: "On All Printing Products",
    button_text_color: "text-[#F05A28]",
    button_text_bg_color: "bg-white",
    card_image: "/promobanner/orange-promo-banner.png",
  },
  {
    id: 2,
    heading: "20% OFF",
    test_duration: "During The Weekend",
    description: "On All Printing Products",
    button_text_color: "text-white",
    button_text_bg_color: "bg-[#F05A28]",
    card_image: "/promobanner/black-promo-banner.jpg",
  },
];

export default function PromoBanner() {
  return (
    <section className=" ml-1 md:ml-7 lg:ml-0 px-2 md:px-0 pb-5 xl:pb-12">
      {/* Mobile / Tablet */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-2 md:gap-4 w-max md:w-[548px]">
          {banners.map((banner) => (
            <div key={banner.id} className="relative shrink-0 w-[264px] h-[123px] md:w-full md:h-[224px] overflow-hidden rounded-[12px] md:rounded-[14px] snap-start">
              <Image src={banner.card_image} alt={banner.heading} fill sizes="(max-width: 767px) 264px, 548px" className="object-cover" />

              <div className="relative z-10 flex h-full items-center pl-5 md:pl-6">
                <div>
                  {/* <p className="text-[7px] md:text-[10px] font-medium uppercase tracking-[1px] text-white">{banner.title}</p> */}

                  <h2 className="mt-1 text-[18px] md:text-[28px] font-bold leading-[1.05] uppercase tracking-[0.3px] text-white">{banner.heading}</h2>

                  <p className="mt-1 text-[11px] md:text-[16px] font-medium leading-none uppercase text-white">{banner.test_duration}</p>

                  <p className="mt-1 text-[8px] md:text-[12px] text-white">{banner.description}</p>

                  <button className={`mt-3 md:mt-5 flex items-center gap-2 rounded-full px-4 py-1.5 md:px-5 md:py-2.5 text-[8px] md:text-[12px] font-medium leading-none tracking-[0.2px] transition-transform duration-300 hover:scale-105 ${banner.button_text_bg_color} ${banner.button_text_color}`}>
                    Order Now
                     <MoveRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* XL & Above */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4 1xl:gap-4.5 3xl:gap-6 container-custom">
        {banners.map((banner) => (
          // <div key={banner.id} className="relative shrink-0 overflow-hidden rounded-[12px] 1xl:rounded-[14px] 3xl:rounded-[16px] w-[552px] h-[160px] 1xl:w-[635px] 1xl:h-[184px] 3xl:w-full 3xl:h-[246px]">
          <div key={banner.id} className="relative shrink-0 overflow-hidden rounded-[12px] 1xl:rounded-[14px] 3xl:rounded-[16px] w-full lg:h-[224px] 1xl:h-[184px] 3xl:h-[246px]">
            {/* 3xl:w-full 3xl:aspect-[825/246] */}
            <Image src={banner.card_image} alt={banner.heading} fill sizes="(max-width: 1535px) 552px, (max-width: 1919px) 635px, 700px" className="object-cover" />

            <div className="relative z-10 flex h-full items-center pl-7 1xl:pl-8 3xl:pl-10">
              <div>
                {/* <p className="xl:text-[7px] 1xl:text-[8px] 3xl:text-[10px] font-medium uppercase tracking-[1px] text-white">{banner.title}</p> */}

                <h2 className="mt-1 xl:text-[30px] 1xl:text-[35px] 3xl:text-[46px] font-extrabold leading-none uppercase tracking-[0.5px] text-white">{banner.heading}</h2>

                <p className="mt-1 xl:text-[17px] 1xl:text-[19px] 3xl:text-[25px] font-medium leading-none uppercase text-white">{banner.test_duration}</p>

                <p className="mt-1 xl:text-[12px] 1xl:text-[15px] text-white">{banner.description}</p>

                <button className={`mt-3 1xl:mt-3.5 3xl:mt-5 flex items-center gap-2 rounded-full px-4 py-1.5 1xl:px-5 1xl:py-2 3xl:px-6 3xl:py-2.5 text-[8px] lg:text-[12px] xl:text-[16px] font-medium leading-none transition-transform duration-300 hover:scale-105 ${banner.button_text_bg_color} ${banner.button_text_color}`}>
                  Order Now
                  <MoveRight className="w-5 h-5 mt-0.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}