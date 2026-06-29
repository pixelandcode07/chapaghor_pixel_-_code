import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DynamicCardsReuse from "./components/DynamicCardsReuse";

export default function BestSelling() {
    const products = [
        { name: "Mug", src: "/best/mug.jpg" },
        { name: "Business Card", src: "/best/card.jpg" },
        { name: "Photo Frame", src: "/best/frame.jpg" },
        { name: "ID Card", src: "/best/id.jpg" },
        { name: "X-Stand", src: "/best/stand.jpg" },
    ];

    return (
        <div className="container lg:w-full mx-auto px-1 md:px-2.5 py-16 bg-white flex flex-col items-center justify-center">
            {/* --- Title --- */}
            <div className="flex justify-center items-center text-[#1E3A8A]">
                <h1 className="text-[30px] md:text-[36px] font-light text-[#012C60]  text-center tracking-normal">
                    BEST SELLING
                </h1>
            </div>

            {/* --- Cards Grid --- */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-[19.8px] w-full mt-10">
                <DynamicCardsReuse products={products} />
            </div>

            {/* --- View All Products Button --- */}
            <div className="mt-12">
                <Link href={'/view-all-product'} className="w-full sm:w-auto">
                    <Button
                        variant={"landing_page_view_btn"}
                        size={"landing_page_view_btn_size"}
                        className="transition-colors duration-300 hover:bg-[#FD7034] hover:text-white "
                    >
                        View All Products
                    </Button>
                </Link>
            </div>
        </div>
    );
}