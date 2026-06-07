import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust path to your shadcn button

export default function BestSelling() {
    // Replace these src paths with the actual names of the images in your /public folder
    const products = [
        { name: "Mug", src: "/best/mug.jpg" },
        { name: "Business Card", src: "/best/card.jpg" },
        { name: "Photo Frame", src: "/best/frame.jpg" },
        { name: "ID Card", src: "/best/id.jpg" },
        { name: "X-Stand", src: "/best/stand.jpg" },
        // { name: "ID Card", src: "/best/id.jpg" },
        // { name: "X-Stand", src: "/best/stand.jpg" },
    ];

    return (
        // <section className="">
        <div className="w-[calc(100vw-200px)] mx-auto py-16 bg-white flex flex-col items-center justify-center">
            {/* --- Title --- */}
            <h2
                className="mb-10 text-[#1E3A8A] "
                style={{
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontWeight: 300,
                    fontSize: "36px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "center",
                }}
            >
                BEST SELLING
            </h2>

            {/* --- Cards Grid --- */}
            {/* <div className="flex flex-row justify-center gap-[19.8px]  border-2 border-gray-950"> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-[19.8px] w-[calc(100vw-200px)] mx-auto">
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
                            <div className="absolute inset-0 rounded-[20px] overflow-hidden shadow-sm">
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
                            <div className="absolute bottom-[2px] right-[2px] w-[64px] h-[64px] bg-[#232F3E] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20 shadow-md">
                                <ArrowUpRight size={28} strokeWidth={2} />
                            </div>
                        </div>

                        {/* Product Title Pill */}
                        <div className="mt-auto flex items-start">
                            <span className="bg-[#F3F4F6] text-[#1E293B] text-[14px] font-medium px-5 py-2.5 rounded-xl inline-flex group-hover:bg-[#e4e7eb] transition-colors tracking-wide">
                                {product.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- View All Products Button --- */}
            <div className="mt-12">
                <Button
                    variant={"best_sell_btn"}
                    size={"best_sell_btn_size"}
                >
                    View All Products
                </Button>
            </div>
        </div>
        // {/* </section> */}
    );
}