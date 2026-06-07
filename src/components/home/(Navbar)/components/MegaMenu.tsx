import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MegaMenuProps } from './types-of-navhead/MegaMenuType';
import BlurBackdrop from './BlurBackdrop';
import IZero from './IZero';
import IOne from './IOne';
import ITwo from './ITwo';
import IThree from './IThree';
import IFour from './IFour';

export default function MegaMenu({ isHovered, relatedSubCats, category, index }: MegaMenuProps) {
    return (
        <AnimatePresence>
            {isHovered && relatedSubCats.length > 0 && (
                <>
                    {/* --- INDEX 0: OFFSET PRINT LAYOUT --- */}
                    {index === 0 ? (
                        <>
                            {/* Blur Backdrop Overlay */}
                            <BlurBackdrop />
                            {/* Menu Container */}
                            <IZero relatedSubCats={relatedSubCats} category={category} isHovered={isHovered} index={index} />
                        </>

                        // {/* --- INDEX 1: SIGNAGE LAYOUT --- */}
                    ) : index === 1 ? (
                        <>
                            {/* Blur Backdrop Overlay */}
                            <BlurBackdrop />
                            {/* Menu Container */}
                            <IOne relatedSubCats={relatedSubCats} category={category} isHovered={isHovered} index={index} />
                        </>
                        // {/* --- INDEX 2: CATEGORY 2 LAYOUT --- */}
                    ) : index === 2 ? (
                        <>
                            {/* Blur Backdrop Overlay */}
                            <BlurBackdrop />
                            {/* Menu Container */}
                            <ITwo relatedSubCats={relatedSubCats} category={category} isHovered={isHovered} index={index} />
                        </>

                        // {/* --- INDEX 3: PHOTO GIFTS / MASONRY LAYOUT --- */}
                    ) : index === 3 ? (
                        <>
                            {/* Blur Backdrop Overlay */}
                            <BlurBackdrop />

                            {/* Menu Container */}
                            <IThree
                                relatedSubCats={relatedSubCats} category={category} index={index} isHovered={isHovered}
                            />
                        </>)
                        // {/* --- INDEX 4: CATEGORY 4 LAYOUT --- */}
                        : index === 4 ? (
                            <>
                                {/* Blur Backdrop Overlay */}
                                <BlurBackdrop />
                                {/* Menu Container */}
                                <IFour relatedSubCats={relatedSubCats} category={category} isHovered={isHovered} index={index} />
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