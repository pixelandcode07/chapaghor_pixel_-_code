import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MegaMenuProps } from './types-of-navhead/MegaMenuType';

export default function IThree({ relatedSubCats, category }: MegaMenuProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            // className="absolute top-[234%] left-1/2 -translate-x-1/2 -left-2.5 w-[1250px] bg-[#FFFFFF] shadow-[0px_4px_15px_7px_#0000001C] rounded-b-xl z-50 pt-7.5 pb-16.5 pl-19 pr-25.5 flex justify-center cursor-default"
            className="absolute top-[234%] -left-[780px] w-[1900px] bg-[#FFFFFF] shadow-[0px_4px_15px_7px_#0000001C] rounded-b-xl z-50 pt-7.5 pb-16.5 pl-[300px] flex justify-start cursor-default"
        >
            {/* Updated grid to support exact dimensions and a 2px gap (135 + 135 + 2 = exactly 272px for tall images) */}
            <div className="grid grid-cols-[repeat(4,330px)] auto-rows-[225px] gap-[8px]">
                {relatedSubCats.map((subCat, i) => {
                    // Index 0: Text Description Card
                    if (i === 0 || i === 6 || i === 9) {
                        return (
                            <Link
                                key={subCat._id}
                                href={`/category/${category.slug}/${subCat.slug}`}
                                className="col-span-1 row-span-1 w-[330px] h-[225px] bg-gray-50 border border-gray-100 rounded-lg p-6 flex flex-col justify-center "
                            >
                                {/* hover:bg-orange-50 transition-colors group */}
                                <h3 className="text-[#000000] font-normal text-[16px] leading-5">
                                    {subCat.name}
                                </h3>
                            </Link>
                        );
                    }

                    // Index 1 to 5: Image Layout Configurations
                    // Added explicit width and height as requested
                    let gridClass = "col-span-1 row-span-1 w-[330px] h-[225px]";

                    if (i === 4) gridClass = "col-span-1 row-span-2 w-[330px] h-[460px]"; // Tall portrait
                    if (i === 5) gridClass = "col-span-1 row-span-2 w-[330px] h-[460px]"; // Tall portrait

                    return (
                        <Link
                            key={subCat._id}
                            href={`/category/${category.slug}/${subCat.slug}`}
                            className={`${gridClass} relative rounded-[9px] overflow-hidden group shadow-sm bg-gray-100`}
                        >
                            <Image
                                src={subCat.icon || '/banners/nav-alter.png'}
                                alt={subCat.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 330px"
                                // Added `grayscale group-hover:grayscale-0` and updated to `transition-all`
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                onError={(e) => {
                                    const target = e.currentTarget as HTMLImageElement;
                                    target.srcset = "";
                                    target.src = "https://placehold.co/400x400/eeeeee/999999.png?text=Icon";
                                }}
                            />
                        </Link>
                    );
                })}
            </div>
        </motion.div>
    )
}