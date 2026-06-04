import {motion} from "framer-motion";
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
            className="absolute top-[120%] left-1/2 -translate-x-1/2 w-[1064px] h-[435px] bg-white shadow-xl pt-7.5 pb-12.5 px-27.5 rounded-b-xl z-50 flex gap-0 cursor-default"
        >
            {/* Left: Image Cards */}
            <div className="flex gap-5 flex-1 justify-between">
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
                            className="object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                target.srcset = "";
                                target.src = "https://placehold.co/300x600/333333/ffffff.png?text=Image";
                            }}
                        />
                        {/* Rotated Vertical Text */}
                        <div className="absolute inset-0 flex">
                            <span className="absolute bottom-80 right-3 origin-bottom-right -rotate-90 text-white font-black text-xl uppercase tracking-widest whitespace-nowrap drop-shadow-md">
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
