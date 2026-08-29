

'use client';

import { useEffect, useState } from 'react';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const allResourcesCategory = 'All Resources';

const categories = [
  'Stationery',
  'Business Card',
  'Banner',
  'X-Stand',
  'Social Media',
  'Packaging',
  'Mockups',
  'Others',
];

interface GraphicCategoryProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GraphicCategory({
  activeCategory,
  onCategoryChange,
}: GraphicCategoryProps) {
  const [highlightBrowse, setHighlightBrowse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightBrowse(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getCategoryClass = (category: string) => {
    const active = category === activeCategory;

    return `
      h-[28px] md:h-[37px] xl:h-[34px] 1xl:h-[36px] 3xl:h-[48px]
      w-[90px] md:w-[117px] xl:w-[118px] 3xl:w-[152px]
      shrink-0 rounded-full border p-0
      text-[12px] md:text-[15px] xl:text-[12px] font-normal
      shadow-none transition-all cursor-pointer
      ${
        active
          ? 'border-[#ff6b32] bg-[#ff6b32] text-white hover:bg-[#ff6b32] hover:text-white'
          : 'border-gray-200 bg-white text-gray-500 hover:bg-gray-50'
      }
    `;
  };

  return (
    <div className="flex items-center gap-1 1xl:gap-1.5 3xl:gap-2 py-4 md:py-5 xl:py-10">
      <div className="flex min-w-0 flex-1 items-center gap-1 1xl:gap-1.5 3xl:gap-[9px] overflow-x-auto scrollbar-none">
        {/* Static All Resources Button */}
        <Button
          variant="outline"
          onClick={() => onCategoryChange('All Resources')}
          className={`h-[28px] md:h-[37px] xl:h-[32px] 1xl:h-[36px] 3xl:h-[48px]
    w-[90px] md:w-[117px] xl:w-[134px] 1xl:w-[154px] 3xl:w-[205px]
    shrink-0 rounded-full border p-0
    text-[12px] md:text-[15px] xl:text-[12px] 1xl:text-[13px] 3xl:text-[18px] font-normal
    shadow-none transition-all cursor-pointer
    ${
      activeCategory === 'All Resources'
        ? 'border-[#ff6b32] bg-[#ff6b32] text-white hover:bg-[#ff6b32] hover:text-white'
        : 'border-gray-200 bg-white text-gray-500 hover:bg-gray-50'
    }`}>
          All Resources
        </Button>

        {/* Dynamic Category Buttons */}
        {categories.map(category => {
          const active = category === activeCategory;

          return (
            <Button
              key={category}
              variant="outline"
              onClick={() => onCategoryChange(category)}
              className={`h-[28px] md:h-[37px] xl:h-[34px] 1xl:h-[36px] 3xl:h-[48px]
        w-[90px] md:w-[117px] xl:w-[110px] 1xl:w-[113px] 3xl:w-[152px]
        shrink-0 rounded-full border p-0
        text-[12px] md:text-[15px] xl:text-[12px] 1xl:text-[13px] 3xl:text-[18px] font-normal
        shadow-none transition-all cursor-pointer
        ${
          active
            ? 'border-[#ff6b32] bg-[#ff6b32] text-white hover:bg-[#ff6b32] hover:text-white'
            : 'border-gray-200 bg-white text-gray-500 hover:bg-gray-50'
        }`}>
              {category}
            </Button>
          );
        })}
      </div>

      {/* Static Browse Library Button */}
      <Button
        variant="ghost"
        className={`hidden md:flex items-center justify-center
          w-[90px] md:w-[140px] xl:w-[142px] 1xl:w-[164px] 3xl:w-[218px]
          h-[28px] md:h-[37px] xl:h-[31px] 1xl:h-[36px] 3xl:h-[48px]
          shrink-0 rounded-full border border-[#ff7043]
          text-[12px] md:text-[15px] xl:text-[12px] 1xl:text-[13px] 3xl:text-[18px] font-normal cursor-pointer
          transition-all duration-500
          ${
            highlightBrowse
              ? 'bg-[#FFE0D6] text-[#ff7043] shadow-[0_0_18px_rgba(255,112,67,0.25)] scale-[1.03]'
              : 'bg-white text-[#ff7043] shadow-none scale-100'
          }
          hover:text-[#ff7043]`}>
        Browse <span className="hidden md:block">Library</span>
        <MoveRight size={12} />
      </Button>
    </div>
  );
}
