"use client";


import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

export default function ServiceProductCard({ product }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Track mouse movement relative to the card boundaries
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };
    return (
        <div
            className="relative overflow-hidden border-[#E5E5E5] bg-gray-100 shadow-sm flex flex-col justify-end transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl cursor-none 3xl:w-[296px] 3xl:aspect-[296/349] "
            style={{
                // width: '300px',
                // height: '304px',
                borderRadius: '10px',
                borderWidth: '1.03px',
                opacity: 1,
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Custom Mouse Pointer (Arrow) */}
            <div
                className={`absolute z-50 pointer-events-none flex items-center justify-center w-12 h-12 bg-black backdrop-blur-sm rounded-full border border-white/50 transition-opacity duration-300 shadow-lg ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <ArrowRight className="text-white" />
            </div>

            {/* Product Image */}
            <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute top-36 inset-0 bg-linear-to-t from-[#FF6633] via-[#EA4335] to-transparent z-10 opacity-90" />

            {/* Inside Image Text */}
            <span
                className="relative z-20 text-white text-base xl:text-[18.23px] 3xl:text-[23px] font-bold pb-5 drop-shadow-md pointer-events-none"
                style={{
                    lineHeight: '150%',
                    textAlign: 'center',
                }}
            >
                {product.title}
            </span>
        </div>
    )
}
