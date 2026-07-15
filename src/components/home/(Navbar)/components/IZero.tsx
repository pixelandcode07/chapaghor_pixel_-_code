import Image from "next/image";
import Link from "next/link";
import { MegaMenuProps } from "./types-of-navhead/MegaMenuType";
import MegaMenuWrapper from "./MegaMenuWrapper";
import { ArrowRight, MoveRight } from "lucide-react";

export default function IZero({ relatedSubCats, category }: MegaMenuProps) {
  return (
    <MegaMenuWrapper className="border-t lg:translate-x-[-15%] xl:translate-x-[-33%] lg:w-[1500px] xl:w-[2000px] 3xl_v2:w-[2400px] 4xl:w-[3500px] 10xl:w-[6000px] lg:h-[255px] xl:h-[320px] flex justify-center py-[23px]">
      {/* Updated Content Section Width & Centering */}
      <div className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto h-full relative flex items-start ">
        {/* Image Div: Added 3xl:w-[431px] and 3xl:h-[271px] */}
        <div className="w-44 h-44.75 3xl:w-[431px] 3xl:h-[271px] shrink-0 transition-all duration-300">
          <Image
            src={"/nav-logo/offset.png"}
            alt="Offset Print Machine"
            width={176}
            height={179}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="ml-[70px] mt-[14px] h-[157px] ">
          <div className="columns-2 md:columns-4 lg:columns-4 xl:columns-6 3xl:columns-6 gap-9 [column-rule:1px_solid_#E5E7EB]">
            {relatedSubCats.map((subCat) => (
              <Link
                key={subCat._id}
                href={`/category/${category.slug}/${subCat.slug}`}
                className="group relative flex items-start gap-2 break-inside-avoid overflow-hidden whitespace-nowrap font-normal text-[16px] 3xl:text-[18px] leading-6.25 text-[#012C60] hover:text-[#F05A28] space-y-2"
              >
                {/* Fixed Icon */}
                <MoveRight size={18} className="mt-[2px] shrink-0" />

                {/* Animated Text Container */}
                <div className="relative overflow-hidden h-6 ">
                  {/* Front Text */}
                  <span className="block transition-all duration-200 [transform:translateY(0)_rotateX(0)] group-hover:opacity-0 group-hover:[transform:translateY(50%)_rotateX(90deg)] ">
                    {subCat.name}
                  </span>

                  {/* Back Text */}
                  <span className="absolute left-0 top-0 block opacity-0 transition-all duration-200 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:[transform:translateY(0)_rotateX(0)] ">
                    {subCat.name}
                  </span>
                </div>
              </Link>
            ))}
            <button className="w-full bg-[#FD7034] text-white font-normal cursor-pointer flex items-center justify-center gap-1.5 p-0.5 rounded-md">
              View all <ArrowRight size={18} />{" "}
            </button>
          </div>
        </div>
      </div>
    </MegaMenuWrapper>
  );
}
