import { ArrowRight } from "lucide-react";
import DynamicCardsReuse from "./components/DynamicCardsReuse";
<<<<<<< HEAD
import LandingPageBtn from "../LandingPageBtn";
=======
import LandingPageBtn from "@/components/home/LandingPageBtn";
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889

export default function TopSelling() {
  const products = [
    { name: "Mug", src: "/best/mug.jpg" },
    { name: "Business Card", src: "/best/card.jpg" },
    { name: "Photo Frame", src: "/best/frame.jpg" },
    { name: "ID Card", src: "/best/id.jpg" },
    { name: "X-Stand", src: "/best/stand.jpg" },
    { name: "Letterhead", src: "/best/mug.jpg" },
    { name: "Envelope", src: "/best/stand.jpg" },
    { name: "Envelope", src: "/best/id.jpg" },
    { name: "Envelope", src: "/best/stand.jpg" },
  ];

  return (
<<<<<<< HEAD
    <section className="w-full bg-white pt-[21px] md:pt-[48px] xl:pt-[90px] pb-[28px] md:pb-[43px] lg:pb-[83px]">
      <div className="w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto">

        {/* Title */}
        <div className="flex items-center justify-between mb-4 xl:mb-8 xl:justify-center px-2 md:px-0">
          <h1 className="text-[28px] md:text-[32px] xl:text-[36px] 3xl:text-[48px] font-light text-[#012C60] uppercase">
=======
    <section className="w-full bg-white py-4 md:py-6 xl:py-10 3xl:pb-20 3xl:pt-19">
      <div className="container-custom">

        {/* Title */}
        <div className="flex items-center justify-between mb-2 xl:mb-8 3xl:mb-13 xl:justify-center px-2 md:px-0">
          <h1 className="text-xl md:text-[32px] xl:text-[36px] 3xl:text-[48px] font-light text-[#012C60] uppercase leading-none  tracking-[0.5]">
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
            TOP SELLING ITEMS
          </h1>

          <button className="xl:hidden text-[#FD7034] text-sm font-medium">
            View All
          </button>
        </div>

        {/* Mobile / Tablet / LG */}
        <div className="xl:hidden overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
          <div className="flex gap-3.75 md:gap-5 w-max pb-2 pl-5">
            <DynamicCardsReuse
              products={products}
              isHorizontal
            />

            {/* View All Card */}
            <div className="w-18 shrink-0 flex flex-col items-center justify-center">
              <button className="w-12 h-12 rounded-full border border-[#D6D6D6] bg-white flex items-center justify-center hover:bg-[#FD7034] hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>

              <span className="mt-3 text-xs text-[#012C60]">
                View All
              </span>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden xl:grid grid-cols-6 xl:gap-4.5 1xl:gap-5.25 3xl:gap-7 items-start">
          <DynamicCardsReuse products={products} />
        </div>

        {/* Desktop Button */}
<<<<<<< HEAD
        <div className="hidden xl:flex justify-center mt-14">
          <LandingPageBtn />
=======
        <div className="hidden xl:flex justify-center mt-10  3xl:mt-16.25">
          <LandingPageBtn href="#" >
            View All Products
          </LandingPageBtn>
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
        </div>
      </div>
    </section>
  );
}