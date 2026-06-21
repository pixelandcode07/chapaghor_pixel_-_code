import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CustomBusinessCards() {
    // Replace these src paths with the actual names of the images in your /public folder
    const products = [
        { name: "Mat Business Card", src: "/view-all-product/custom/one.png" },
        { name: "Spot Business Card", src: "/view-all-product/custom/two.png" },
        { name: "Spot Business Card", src: "/view-all-product/custom/three.png" },
        { name: "Back to Back Di", src: "/view-all-product/custom/four.png" },
        { name: "Back to Back Mat", src: "/view-all-product/custom/five.jpg" },
    ];

    return (
        // <section className="">
        <div className="w-[calc(100vw-200px)] mx-auto pb-5 bg-white flex flex-col items-center justify-center">
            {/* --- Title --- */}
            <div className="flex flex-col justify-center items-center mb-10 text-[#1E3A8A]">
                {/* <KineticText text="BEST SELLING" className="text-[36px] font-light text-[#012C60] mb-10 text-center tracking-normal " /> */}
                <h1 className="text-[36px] font-light text-[#012C60] mb-2 text-center tracking-normal ">
                    Custom Business Cards
                </h1>
                <h2 className="text-[22px] font-light text-[#012C60] text-center tracking-normal ">
                    Custom business cards with premium materials, finishes, and fast delivery, perfect for making a strong first impression.
                </h2>
            </div>

            {/* --- Cards Grid --- */}
            {/* <div className="flex flex-row justify-center gap-[19.8px]  border-2 border-gray-950"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-[19.8px]">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col group cursor-pointer  bg-white min-w-[235px] min-h-[305px]"
                    >
                        {/* Image & Cutout Wrapper */}
                        <div
                            className="relative w-full"
                            style={{ height: "244px" }}
                        >
                            {/* Inner image box (overflow hidden handles the outer rounded corners) */}
                            <div className="absolute inset-0 rounded-[20px] overflow-hidden ">
                                <Image
                                    src={product.src}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* White block for the cutout */}
                                <div className="absolute bottom-0 right-0 w-[76px] h-[76px] bg-white rounded-tl-[38px] z-10 pointer-events-none" />

                                {/* Concave curve (Top edge) */}
                                <div className="absolute bottom-[75px] -right-0.5 w-6 h-6 z-10 pointer-events-none">
                                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
                                        <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                                    </svg>
                                </div>

                                {/* Concave curve (Left edge) */}
                                <div className="absolute bottom-0 right-[75px] w-6 h-6 z-10 pointer-events-none">
                                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
                                        <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>

                            {/* Circular Button (Placed OUTSIDE the overflow-hidden box, but inside the 244px relative container) */}
                            <div className="absolute bottom-[2px] right-[2px] w-[64px] h-[64px] bg-[#232F3E] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20 ">
                                <ArrowUpRight size={28} strokeWidth={2} />
                            </div>
                        </div>

                        {/* Product Title Pill */}
                        <div className="mt-auto flex items-center justify-center">
                            <span className=" min-w-[235px] text-center bg-[#F3F4F6] text-[#1E293B] text-[14px] font-medium px-5 py-2.5 rounded-xl group-hover:bg-[#e4e7eb] transition-colors tracking-wide">
                                {product.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}