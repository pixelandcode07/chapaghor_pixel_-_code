import { ChevronRight, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const categories = [
  "All Resources",
  "Stationery",
  "Business Card",
  "Banner",
  "X-Stand",
  "Social Media",
  "Packaging",
  "Mockups",
  "Others",
];

interface GraphicCategoryProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GraphicCategory({
  activeCategory,
  onCategoryChange,
}: GraphicCategoryProps) {
  return (
    <div className="flex items-center gap-2 py-4 md:py-5 xl:py-8 overflow-x-auto scrollbar-none">
      {categories.map((category) => {
        const active = category === activeCategory;

        return (
          <Button
            key={category}
            variant="outline"
            onClick={() => onCategoryChange(category)}
            className={`
              shrink-0 rounded-[15px] border px-4
              text-[12px] md:text-[15px] font-normal shadow-none
              transition-all cursor-pointer
              ${
                active
                  ? "border-[#ff6b32] bg-[#ff6b32] text-white hover:bg-[#ff6b32] hover:text-white"
                  : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
              }
            `}
          >
            {category}
          </Button>
        );
      })}

      {/* Browse Library */}
      <Button
        variant="ghost"
        className=" hidden shrink-0 text-[12px] md:text-[15px] rounded-full border border-[#ff7043] px-3 cursor-pointer font-normal text-[#ff7043] hover:bg-[#fff2ed] hover:text-[#ff7043] sm:flex"
      >
        Browse Library
        <MoveRight size={12} />
      </Button>
    </div>
  );
}