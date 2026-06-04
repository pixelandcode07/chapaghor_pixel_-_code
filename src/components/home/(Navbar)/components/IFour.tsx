import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MegaMenuProps } from "./types-of-navhead/MegaMenuType";

export default function IFour({ relatedSubCats, category }: MegaMenuProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[137.5%] lg:translate-x-[-30%] xl:translate-x-[-56%] w-637.5 max-w-[100vw] h-[235px] bg-[#FFFFFF] shadow-[0px_4px_15px_7px_#0000001C] rounded-b-xl z-50 flex justify-center cursor-default"
        >
            <div className="w-360 max-w-full h-full relative flex items-start pl-[168px] pt-[28px]">
                <div className="w-44 h-44.75 shrink-0">
                    <Image
                        src={'/nav-logo/stationary.png'}
                        alt='Category 4 Machine'
                        width={176}
                        height={179}
                        className='w-full h-full object-contain'
                    />
                </div>
                <div className="ml-[136px] mt-[14px] h-[157px] pr-8">
                    <div className="columns-2 md:columns-4 lg:columns-6 gap-x-12 [column-rule:1px_solid_#E5E7EB]">
                        {relatedSubCats.map((subCat) => (
                            <Link
                                key={subCat._id}
                                href={`/category/${category.slug}/${subCat.slug}`}
                                className="block break-inside-avoid w-[110px] font-['Helvetica_Neue',_sans-serif] font-normal text-[16px] leading-6.25 text-[#012C60] hover:text-[#F05A28] transition-colors whitespace-nowrap"
                            >
                                {subCat.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
