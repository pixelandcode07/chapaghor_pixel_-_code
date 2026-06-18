import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MegaMenuProps } from "./types-of-navhead/MegaMenuType";

export default function IOne({ relatedSubCats, category }: MegaMenuProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[234%] -left-2.5 w-[1250px] h-[435px] bg-white shadow-xl pt-7.5 pb-12.5 px-27.5 rounded-b-xl z-50 flex gap-0 cursor-default"
        >
            {/* Left: Image Cards */}
            <div className="max-w-[680px] flex gap-5 flex-1 justify-between">
                {relatedSubCats.slice(0, 4).map((subCat) => (
                    <Link
                        key={subCat._id}
                        href={`/category/${category.slug}/${subCat.slug}`}
                        className="relative w-[150px] h-[300px] bg-gray-100 group overflow-hidden block shadow-sm border border-gray-200"
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
            <div className="w-[200px] flex flex-col gap-3 border-l border-gray-100 pl-8 shrink-0 py-2">
                {relatedSubCats.map((subCat) => (
                    <Link
                        key={subCat._id}
                        href={`/category/${category.slug}/${subCat.slug}`}
                        className="text-[14px] text-[#012C60] font-medium hover:text-[#F05A28] transition-colors whitespace-nowrap"
                    >
                        {subCat.name}
                    </Link>
                ))}
            </div>
        </motion.div>
    )
}
