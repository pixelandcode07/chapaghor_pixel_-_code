"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DynamicCardsReuse from "./components/DynamicCardsReuse";
import LandingPageBtn from "../LandingPageBtn";

export default function BestSelling() {
    const products = [
        { name: "Mug", src: "/best/mug.jpg" },
        { name: "Business Card", src: "/best/card.jpg" },
        { name: "Photo Frame", src: "/best/frame.jpg" },
        { name: "ID Card", src: "/best/id.jpg" },
        { name: "X-Stand", src: "/best/stand.jpg" },
        // { name: "X-Stand", src: "/best/stand.jpg" },
        // { name: "X-Stand", src: "/best/stand.jpg" },
    ];

    return (
        <section className="w-full bg-white pt-[90px] pb-[83px]">
            <div className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto flex flex-col items-center justify-center">

                {/* --- Title --- */}
                <div className="w-full flex justify-center items-center mb-11">
                    <h1 className="text-[28px] md:text-[32px] xl:text-[36px] 3xl:text-[48px] font-light text-[#012C60] text-center tracking-normal uppercase">
                        TOP SELLING ITEMS
                    </h1>
                </div>

                {/* --- Cards Grid --- */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 justify-center items-start">
                    <DynamicCardsReuse products={products} />
                </div>

                {/* --- View All Products Button --- */}
                <div className="mt-13.75">
                    <LandingPageBtn />
                </div>
            </div>
        </section>
    );
}