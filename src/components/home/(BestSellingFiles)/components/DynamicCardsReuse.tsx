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
            {products.map((product, idx) => (
                <div
                    key={idx}
                    // ✅ FIX 2: কার্ডগুলো যাতে বিশাল সাইজের না হয়ে যায়, তাই max-w-[260px] এবং mx-auto দেওয়া হয়েছে
                    className="relative flex flex-col group cursor-pointer w-full max-w-[260px] mx-auto"
                >
                    {/* Image & Cutout Wrapper */}
                    <div className="relative w-full aspect-square">
                        
                        {/* Inner image box */}
                        <div className="absolute inset-0 rounded-[16px] xl:rounded-[20px] overflow-hidden bg-gray-50 border border-gray-100">
                            <Image
                                src={product.src}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* White block for the cutout */}
                            <div className="absolute bottom-0 right-0 w-[64px] h-[64px] xl:w-[76px] xl:h-[76px] bg-white rounded-tl-[32px] xl:rounded-tl-[38px] z-10 pointer-events-none" />

                            {/* Concave curve (Top edge) */}
                            <div className="absolute bottom-[63px] xl:bottom-[75px] right-0 w-5 h-5 xl:w-6 xl:h-6 z-10 pointer-events-none">
                                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
                                    <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                                </svg>
                            </div>

                            {/* Concave curve (Left edge) */}
                            <div className="absolute bottom-0 right-[63px] xl:right-[75px] w-5 h-5 xl:w-6 xl:h-6 z-10 pointer-events-none">
                                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
                                    <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>

                        {/* Circular Button */}
                        <div className="absolute bottom-[4px] right-[4px] xl:bottom-[6px] xl:right-[6px] w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] bg-[#111827] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20 shadow-md">
                            <ArrowUpRight className="w-6 h-6 xl:w-7 xl:h-7" strokeWidth={2} />
                        </div>
                    </div>

                    {/* Product Title Pill */}
                    <div className="mt-3 xl:mt-4 flex items-center justify-center w-full">
                        <span className="w-full text-center bg-[#F4F4F5] text-[#012C60] text-[14px] xl:text-[16px] font-normal px-2 py-2.5 xl:py-3 rounded-[8px] xl:rounded-[10px] group-hover:bg-[#E5E7EB] transition-colors tracking-wide block truncate">
                            {product.name}
                        </span>
                    </div>
                </div>
            ))}
        </>
    )
}