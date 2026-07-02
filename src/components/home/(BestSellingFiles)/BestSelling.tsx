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
        { name: "X-Stand", src: "/best/stand.jpg" },
        { name: "X-Stand", src: "/best/stand.jpg" },
    ];

    return (
        <section className="w-full bg-white pt-10 pb-16">
            <div className="w-full md:max-w-[90vw]  7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto flex flex-col items-center justify-center">

                {/* --- Title --- */}
                <div className="w-full flex justify-center items-center text-[#1E3A8A] mb-10">
                    <h1 className="text-[28px] md:text-[32px] xl:text-[36px] 3xl:text-[40px] font-light text-[#012C60] text-center tracking-normal uppercase">
                        TOP SELLING ITEMS
                    </h1>
                </div>

                {/* --- Cards Grid --- */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 3xl:grid-cols-7 gap-4 md:gap-5 xl:gap-[20px] justify-center items-start">
                    <DynamicCardsReuse products={products} />
                </div>

                {/* --- View All Products Button --- */}
                <div className="mt-14">
                    <LandingPageBtn />
                </div>
            </div>
        </section>
    );
}