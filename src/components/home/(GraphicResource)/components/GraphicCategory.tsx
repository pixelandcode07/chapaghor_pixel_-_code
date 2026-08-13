import { ChevronRight } from "lucide-react";
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
    <div className="mb-5 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
      {categories.map((category) => {
        const active = category === activeCategory;

        return (
          <Button
            key={category}
            variant="outline"
            onClick={() => onCategoryChange(category)}
            className={`
              h-7 shrink-0 rounded-full border px-4
              text-[9px] font-medium shadow-none
              transition-all
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
        className="ml-auto hidden h-7 shrink-0 rounded-full border border-[#ff7043] px-3 text-[9px] font-medium text-[#ff7043] hover:bg-[#fff2ed] hover:text-[#ff7043] sm:flex"
      >
        Browse Library
        <ChevronRight size={12} />
      </Button>
    </div>
  );
}