import { ArrowRight } from 'lucide-react';
import DynamicCardsReuse from './components/DynamicCardsReuse';
import LandingPageBtn from '@/components/home/LandingPageBtn';

export default function TopSelling() {
  const products = [
    { name: 'Mug', src: '/best/mug.jpg' },
    { name: 'Business Card', src: '/best/card.jpg' },
    { name: 'Photo Frame', src: '/best/frame.jpg' },
    { name: 'ID Card', src: '/best/id.jpg' },
    { name: 'X-Stand', src: '/best/stand.jpg' },
    { name: 'Letterhead', src: '/best/mug.jpg' },
    { name: 'Envelope', src: '/best/stand.jpg' },
    { name: 'Envelope', src: '/best/id.jpg' },
    { name: 'Envelope', src: '/best/stand.jpg' },
  ];

  return (
    <section className="w-full bg-white py-4 md:py-6 xl:py-10 3xl:pb-10 3xl:pt-19">
      <div className="">

        {/* Title */}
        <div className="flex items-center justify-between mb-2.5 xl:mb-8 3xl:mb-13 xl:justify-center px-5 md:px-8">
          <h1 className="text-xl md:text-[32px] xl:text-[36px] 3xl:text-[48px] font-light text-[#012C60] uppercase leading-none tracking-[0.5]">
            TOP SELLING ITEMS
          </h1>

          <button className="xl:hidden text-[#FD7034] text-sm font-medium">
            View All
          </button>
        </div>

        {/* Mobile / Tablet / LG */}
        <div className="xl:hidden overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory scroll-pl-5 md:scroll-pl-8">
          <div className="flex gap-3.75 md:gap-5 w-max pb-2 px-5 md:px-8">
            <DynamicCardsReuse
              products={products}
              isHorizontal
            />

            {/* View All Card */}
            <div className="w-18 shrink-0 flex flex-col items-center justify-center">
              <button className="w-12 h-12 rounded-full border border-[#D6D6D6] bg-white flex items-center justify-center hover:bg-[#FD7034] hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>

              <span className="mt-3 text-xs text-[#012C60]">View All</span>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden container-custom xl:grid grid-cols-6 xl:gap-4.5 1xl:gap-5.25 3xl:gap-8 items-start xl:px-0">
          <DynamicCardsReuse products={products} />
        </div>

        {/* Desktop Button */}
        <div className="hidden xl:flex justify-center mt-10  3xl:mt-20">
          <LandingPageBtn href="#" >
            View All Products
          </LandingPageBtn>
        </div>
      </div>
    </section>
  );
}
