
import Image from 'next/image';
import DynamicCards from './components/DynamicCards';
import { ArrowRight } from 'lucide-react';

// Data array now holds 3 images per card for the stacked rotation
export const comboData = [
    { id: 1, title: 'Exclusive', images: ['/combo/one.jpg', '/combo/two.jpg', '/combo/three.jpg'], price: '1000' },
    { id: 2, title: 'Combo', images: ['/combo/two.jpg', '/combo/three.jpg', '/combo/four.jpg'], price: '1000' },
    { id: 3, title: 'Business Card', images: ['/combo/three.jpg', '/combo/four.jpg', '/combo/five.jpg'], price: '1000' },
    { id: 2, title: 'Combo', images: ['/combo/two.jpg', '/combo/three.jpg', '/combo/four.jpg'], price: '1000' },
    { id: 3, title: 'Business Card', images: ['/combo/three.jpg', '/combo/four.jpg', '/combo/five.jpg'], price: '1000' },
    { id: 4, title: 'Letterhead', images: ['/combo/four.jpg', '/combo/five.jpg', '/combo/one.jpg'], price: '1000' },
    { id: 5, title: 'Letterhead', images: ['/combo/five.jpg', '/combo/one.jpg', '/combo/two.jpg'], price: '1000' },
    { id: 3, title: 'Business Card', images: ['/combo/three.jpg', '/combo/four.jpg', '/combo/five.jpg'], price: '1000' },
    { id: 4, title: 'Letterhead', images: ['/combo/four.jpg', '/combo/five.jpg', '/combo/one.jpg'], price: '1000' },
    { id: 5, title: 'Letterhead', images: ['/combo/five.jpg', '/combo/one.jpg', '/combo/two.jpg'], price: '1000' },
];


// Extracted Card Component to manage its own 3D stack timer


export default function Combo() {
    return (
        <section className="relative w-full overflow-hidden bg-[#111111]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banners/combo-bg.jpg"
                    alt="Combo Background"
                    fill
                    className="object-center backdrop-opacity-100/50 blur-in-3xl"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/90" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full md:max-w-[90vw] 3xl:max-w-[78.80vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto  pt-[69px] pb-[115px]">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div className="flex gap-2.5">
                        <h1 className="text-2xl md:text-[28px] lg:text-[38px] xl:text-[45px] 3xl:text-[60px] font-normal text-white leading-tight tracking-wide">
                            Exclusive Combo <span className="text-[#F05A28]">Deals</span>
                        </h1>
                    </div>
                    <button
                        style={{
                            letterSpacing: '1.3px'
                        }}
                        className="text-white lg:text-[16px] xl:text-[22px] 3xl:text-[29px] font-light leading-relaxed cursor-pointer flex justify-center items-center">
                        View All<ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </div>

                {/* Cards Grid Section */}
                {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5 3xl:gap-6.25">
                    {comboData.map((item) => (
                        <DynamicCards key={item.id} item={item} />
                    ))}
                </div> */}

                {/* Mobile / Tablet / LG */}
<div className="xl:hidden overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
  <div className="flex gap-4 w-max pb-2">
    {comboData.map((item) => (
      <DynamicCards
        key={item.id}
        item={item}
        isHorizontal
      />
    ))}

    {/* View All Card */}
    <div className="w-[72px] shrink-0 snap-start flex flex-col items-center justify-center">
      <button className="w-12 h-12 rounded-full border border-[#5A5A5A] bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-[#F05A28] transition-colors">
        <ArrowRight className="w-5 h-5" />
      </button>

      <span className="mt-3 text-xs text-white">
        View All
      </span>
    </div>
  </div>
</div>

{/* Desktop */}
<div className="hidden xl:grid xl:grid-cols-5 gap-4.5 3xl:gap-6.25">
  {comboData.map((item) => (
    <DynamicCards
      key={item.id}
      item={item}
    />
  ))}
</div>

            </div>
        </section>
    );
}