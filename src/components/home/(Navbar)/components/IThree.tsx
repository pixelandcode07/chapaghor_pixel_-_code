import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MegaMenuProps } from './types-of-navhead/MegaMenuType';
import MegaMenuWrapper from './MegaMenuWrapper';

export default function IThree({ relatedSubCats, category }: MegaMenuProps) {
    return (
         <MegaMenuWrapper className="border-t lg:-left-[480px] xl:-left-[500px] lg:w-[1100px] xl:w-[1380px] bg-[#FFFFFF] rounded-b-xl z-50 lg:py-5 xl:pt-7.5 3xl:pb-12.75 lg:pl-[80px] xl:pl-[57px] flex justify-start cursor-default">
            {/* Updated grid to support exact dimensions and a 2px gap (135 + 135 + 2 = exactly 272px for tall images) */}
            <div className="grid md:grid-cols-[repeat(4,200px)] 3xl:grid-cols-[repeat(4,274px)] auto-rows-[147px] 3xl:auto-rows-[147px] gap-[8px]">
                {relatedSubCats.map((subCat, i) => {
                    // Index 0: Text Description Card
                    if (i === 0 || i === 6 || i === 9) {
                        return (
                            <Link
                                key={subCat._id}
                                href={`/category/${category.slug}/${subCat.slug}`}
                                className="col-span-1 row-span-1 md:w-[200px] 3xl:w-[274px] 3xl:h-[147px] bg-gray-50 border border-gray-100 rounded-lg p-6 flex flex-col justify-center "
                            >
                                {/* hover:bg-orange-50 transition-colors group */}
                                <h3 className="text-[#000000] font-normal text-[16px] leading-5 tracking-[0.5px]">
                                    {subCat.name}
                                </h3>
                            </Link>
                        );
                    }

                    // Index 1 to 5: Image Layout Configurations
                    // Added explicit width and height as requested
                    let gridClass = "col-span-1 row-span-1 md:w-[200px] 3xl:w-[274px] h-[147px] 3xl:h-[147px]";

                    if (i === 4) gridClass = "col-span-1 row-span-2 md:w-[200px] 3xl:w-[274px] 3xl:h-[300px]"; // Tall portrait
                    if (i === 5) gridClass = "col-span-1 row-span-2 md:w-[200px] 3xl:w-[274px] 3xl:h-[300px]"; // Tall portrait

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
                                sizes="(max-width: 768px) 3100vxl:w, 274px"
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
       </MegaMenuWrapper>
    )
}