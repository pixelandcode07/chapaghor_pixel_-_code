import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MegaMenuProps } from "./types-of-navhead/MegaMenuType";
import { ArrowRight } from "lucide-react";

export default function IOne({ relatedSubCats, category }: MegaMenuProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[168%] lg:-left-48 xl:-left-64 w-[1600px] lg:h-[380px] xl:h-[485px] bg-white pt-7.5 lg:pl-12 xl:pl-20 pr-27.5 rounded-b-xl z-50 flex gap-0 cursor-default"
        >
            {/* Left: Image Cards */}
            <div className="max-w-[670px] xl:max-w-[870px] flex lg:gap-2 xl:gap-5 flex-1 justify-between pl-5">
                {relatedSubCats.slice(0, 4).map((subCat) => (
                    <Link
                        key={subCat._id}
                        href={`/category/${category.slug}/${subCat.slug}`}
                        className="relative lg:w-[350px] xl:w-[450px] lg:h-[300px] xl:h-[400px] bg-gray-100 group overflow-hidden block shadow-sm border border-gray-200"
                    >
                        <Image
                            src={subCat.icon || '/banners/nav-alter.png'}
                            alt={subCat.name}
                            fill
                            sizes="200px"
                            // Added grayscale by default to match the image style
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                target.srcset = "";
                                target.src = "https://placehold.co/300x600/333333/ffffff.png?text=Image";
                            }}
                        />

                        {/* Orange Gradient Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F05A28]/95 via-[#F05A28]/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />

                        {/* Rotated Vertical Text */}
                        <div className="absolute inset-y-0 right-3 w-[24px] z-20 pointer-events-none">
                            <span className="absolute bottom-2 left-8 origin-bottom-left -rotate-90 text-white font-black text-[22px] uppercase tracking-widest whitespace-nowrap drop-shadow-lg">
                                {subCat.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Right: Text List */}
            <div className="w-[200px] flex flex-col gap-3 border-l border-gray-100 lg:pl-4 xl:pl-8 shrink-0 py-2">
                {relatedSubCats.map((subCat) => (
              <Link
                key={subCat._id}
                href={`/category/${category.slug}/${subCat.slug}`}
                className="block break-inside-avoid font-normal text-[16px] 3xl:text-[18px] leading-6.25 text-[#012C60] hover:text-[#F05A28] whitespace-nowrap group relative w-full overflow-hidden "
              >
                {/* FRONT OF BUTTON */}
                <span className="relative flex h-full w-full items-start text-[#012C60] transition-all duration-500 [transform:translateY(0)_rotateX(0)] group-hover:opacity-0 group-hover:[transform:translateY(50%)_rotateX(90deg)]">
                  {subCat.name}
                </span>

                {/* BACK OF BUTTON */}
                <span className="absolute left-0 top-0 flex h-full w-full items-start text-[#012C60] opacity-0 transition-all duration-500 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:[transform:translateY(0)_rotateX(0)]">
                  {subCat.name}
                </span>
              </Link>
            ))}
            <button className="w-full bg-[#FD7034] text-white font-normal cursor-pointer flex items-center justify-center p-0.5 rounded-md">View all <ArrowRight/> </button>
            </div>
        </motion.div>
    )
}
