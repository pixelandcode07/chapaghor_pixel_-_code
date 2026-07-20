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
      className="border-t absolute top-[168%] lg:-left-48 xl:-left-36 w-350 lg:h-95 xl:h-[532px] bg-white pt-10.25 pb-14.25 lg:pl-12 xl:pl-30.5 pr-27.5 rounded-b-xl z-50 flex gap-0 cursor-default"
    >
      {/* Left: Image Cards */}
      <div className="max-w-[670px] xl:max-w-[870px] flex lg:gap-2 xl:gap-4.25 flex-1 justify-between pl-5">
        {relatedSubCats.slice(0, 4).map((subCat) => (
          <Link
            key={subCat._id}
            href={`/category/${category.slug}/${subCat.slug}`}
            className="relative w-[169px] h-[434px] shrink-0 bg-gray-100 group overflow-hidden block border border-gray-200 rounded-[15px]"
          >
            <Image
              src={subCat.icon || "/banners/nav-alter.png"}
              alt={subCat.name}
              fill
              sizes="200px"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.srcset = "";
                target.src =
                  "https://placehold.co/300x600/333333/ffffff.png?text=Image";
              }}
            />

            {/* Orange Gradient Overlay */}
            {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F05A28]/95 via-[#F05A28]/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" /> */}

            {/* Rotated Vertical Text */}
            <div className="absolute inset-y-0 right-3 w-[24px] z-20 pointer-events-none">
              <span className="absolute -bottom-1 left-15.5 origin-bottom-left -rotate-90 text-white font-black text-[50px] uppercase tracking-widest whitespace-nowrap">
                {subCat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Right: Text List */}
      <div className="w-full flex flex-col justify-between border-l border-gray-100 lg:pl-4 xl:pl-[87px] shrink-0 py-2">
        <ul className="w-full flex flex-col gap-3">
          {relatedSubCats.map((subCat) => (
            <li key={subCat._id} className="list-none">
              <Link
                href={`/category/${category.slug}/${subCat.slug}`}
                className="group flex items-center font-normal text-[16px] 3xl:text-[18px] leading-6.25 text-[#012C60] hover:text-[#F05A28] transition-colors duration-200 whitespace-nowrap"
              >
                {/* Smooth hover bullet icon */}
                <span className="inline-block w-0 h-1.5 rounded-full bg-[#F05A28] opacity-0 mr-0 transition-all duration-300 ease-out group-hover:w-1.5 group-hover:opacity-100 group-hover:mr-2 shrink-0" />
                <span className="truncate">{subCat.name}</span>
              </Link>
            </li>
          ))}
           <button className="w-[200px] mt-4 bg-[#FD7034] text-white font-normal cursor-pointer flex items-center justify-center gap-1.5 py-1.5 rounded-md hover:bg-[#e05a20] transition-colors duration-200">
          View all <ArrowRight size={18} />
        </button>
        </ul>

       
      </div>
    </motion.div>
  );
}