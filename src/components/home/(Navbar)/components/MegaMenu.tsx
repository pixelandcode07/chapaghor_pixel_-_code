import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MegaMenuProps } from './types-of-navhead/MegaMenuType';

export default function MegaMenu({ isHovered, relatedSubCats, category, index }: MegaMenuProps) {
    return (
        <AnimatePresence>
            {isHovered && relatedSubCats.length > 0 && (
                <>
                    {/* --- INDEX 0: OFFSET PRINT LAYOUT --- */}
                    {index === 0 ? (
                        <>
                            {/* Blur Backdrop Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 top-[100px] w-screen h-screen bg-black/10 backdrop-blur-md z-40 pointer-events-none"
                            />
                            {/* Menu Container */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute top-[137.5%] lg:translate-x-[-30%] xl:translate-x-[-35%] w-637.5 max-w-[100vw] h-[235px] bg-[#FFFFFF] shadow-[0px_4px_15px_7px_#0000001C] rounded-b-xl z-50 flex justify-center cursor-default"
                            >
                                <div className="w-360 max-w-full h-full relative flex items-start pl-[168px] pt-[28px]">
                                    <div className="w-44 h-44.75 shrink-0">
                                        <Image
                                            src={'/nav-logo/offset.png'}
                                            alt='Offset Print Machine'
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
                        </>

                        // {/* --- INDEX 1: SIGNAGE LAYOUT --- */}
                    ) : index === 1 ? (
                        <>
                            {/* Blur Backdrop Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 top-[50px] w-screen h-screen bg-black/10 backdrop-blur-md z-40 pointer-events-none"
                            />

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
                                                src={subCat.image || '/banners/nav-alter.png'}
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
                        </>

                        // {/* --- INDEX 2: CATEGORY 2 LAYOUT --- */}
                    ) : index === 2 ? (
                        <>
                            {/* Blur Backdrop Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 top-[100px] w-screen h-screen bg-black/10 backdrop-blur-md z-40 pointer-events-none"
                            />
                            {/* Menu Container */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                // lg:translate-x-[-30%] xl:
                                className="absolute top-[137.5%] translate-x-[-45%] w-637.5 max-w-[100vw] h-[235px] bg-[#FFFFFF] shadow-[0px_4px_15px_7px_#0000001C] rounded-b-xl z-50 flex justify-center cursor-default"
                            >
                                <div className="w-360 max-w-full h-full relative flex items-start pl-[168px] pt-[28px]">
                                    <div className="w-44 h-44.75 shrink-0">
                                        <Image
                                            src={'/nav-logo/card.png'}
                                            alt='Category 2 Machine'
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
                        </>

                        // {/* --- INDEX 4: CATEGORY 4 LAYOUT --- */}
                    ) : index === 4 ? (
                        <>
                            {/* Blur Backdrop Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 top-[100px] w-screen h-screen bg-black/10 backdrop-blur-md z-40 pointer-events-none"
                            />
                            {/* Menu Container */}
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
                        </>

                        // {/* --- DEFAULT: STANDARD COMPACT DROPDOWN --- */}
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-[110%] left-1/2 -translate-x-1/2 w-56 bg-white border border-gray-100 shadow-xl rounded-b-xl z-50 overflow-hidden"
                        >
                            <div className="h-0.5 w-full bg-[#F05A28]" />
                            <ul className="py-2">
                                {relatedSubCats.map((subCat) => (
                                    <li key={subCat._id}>
                                        <Link
                                            href={`/category/${category.slug}/${subCat.slug}`}
                                            className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[#F05A28] hover:bg-orange-50 transition-colors text-center"
                                        >
                                            {subCat.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </>
            )}
        </AnimatePresence>
    )
}