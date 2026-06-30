
import Image from 'next/image';
import DynamicCards from './components/DynamicCards';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Data array now holds 3 images per card for the stacked rotation
export const comboData = [
    { id: 1, title: 'Exclusive', images: ['/combo/one.jpg', '/combo/two.jpg', '/combo/three.jpg'], price: '1000' },
    { id: 2, title: 'Combo', images: ['/combo/two.jpg', '/combo/three.jpg', '/combo/four.jpg'], price: '1000' },
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
                    className="object-fill opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full md:max-w-[90vw]  7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto px-1 md:px-15 xl:px-25 pt-[52px] pb-[83px]">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div className="flex gap-2.5">
                        <h1 className="text-2xl md:text-[28px] lg:text-[38px] xl:text-[45px] font-normal text-white leading-tight tracking-wide">
                            Exclusive Combo <span className="text-[#F05A28]">Deals</span>
                        </h1>
                    </div>
                    {/* <h4 className=" text-gray-300 text-base md:text-[16px] font-medium w-[400px] pl-16"
                        style={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            letterSpacing: '-0.015em',
                        }}>
                        We provide high quality printing services for you business, event and personal needs
                    </h4> */}
                    <button className="text-white lg:text-[16px] xl:text-[22px] font-medium cursor-pointer flex justify-center items-center">
                        View All<ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </div>

                {/* Cards Grid Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5">
                    {comboData.map((item) => (
                        <DynamicCards key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
}