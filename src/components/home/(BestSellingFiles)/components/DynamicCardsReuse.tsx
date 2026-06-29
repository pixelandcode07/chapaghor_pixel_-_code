import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Product = {
    name: string;
    src: string;
}

type DynamicCardsReuseProps = {
    products: Product[];
    index?: number;
}

export default function DynamicCardsReuse({ products, index }: DynamicCardsReuseProps) {
    return (
        <>
            {products.map((product, index) => (
                <div
                    key={index}
                    className="relative flex flex-col group cursor-pointer bg-white w-full min-h-[270px] sm:min-h-[305px]"
                >
                    {/* Image & Cutout Wrapper */}
                    <div className="relative w-full h-[180px] md:h-[264px] xl:h-[320px]">
                        {/* Inner image box */}
                        <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                            <Image
                                src={product.src}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 "
                            />

                            {/* White block for the cutout - Scaled for mobile compatibility */}
                            <div className="absolute bottom-0 right-0 w-[56px] h-[56px] sm:w-[76px] sm:h-[76px] bg-white rounded-tl-[28px] sm:rounded-tl-[38px] z-10 pointer-events-none" />

                            {/* Concave curve (Top edge) */}
                            <div className="absolute bottom-[55px] sm:bottom-[75px] right-0 w-5 h-5 sm:w-6 sm:h-6 z-10 pointer-events-none">
                                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
                                    <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                                </svg>
                            </div>

                            {/* Concave curve (Left edge) */}
                            <div className="absolute bottom-0 right-[55px] sm:right-[75px] w-5 h-5 sm:w-6 sm:h-6 z-10 pointer-events-none">
                                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
                                    <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>

                        {/* Circular Button */}
                        <div className="absolute bottom-[2px] right-[2px] w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] bg-[#232F3E] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20">
                            <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={2} />
                        </div>
                    </div>

                    {/* Product Title Pill */}
                    <div className="mt-auto pt-3 flex items-center justify-center w-full">
                        <span className="w-full text-center bg-[#F3F4F6] text-[#1E293B] text-[13px] sm:text-[14px] font-medium px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl group-hover:bg-[#e4e7eb] transition-colors tracking-wide block truncate">
                            {product.name}
                        </span>
                    </div>
                </div>
            ))}
        </>
    )
}
