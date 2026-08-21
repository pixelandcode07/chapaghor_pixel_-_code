"use client";

import IZero from "./IZero";
import IOne from "./IOne";
import ITwo from "./ITwo";
import IThree from "./IThree";
import IFour from "./IFour";

import { MegaMenuPanelProps } from "./types-of-navhead/MegaMenuType";

export default function MegaMenuContent({
  activeMenu,
}: MegaMenuPanelProps) {
  if (!activeMenu) return null;

  const { category, relatedSubCats, index } = activeMenu;

  const isCompactMenu = index === 1 || index === 3;

  const renderLayout = () => {
    switch (index) {
      case 0:
        return (
          <IZero
            category={category}
            relatedSubCats={relatedSubCats}
            index={index}
            isHovered
          />
        );

      case 1:
        return (
          <IOne
            category={category}
            relatedSubCats={relatedSubCats}
            index={index}
            isHovered
          />
        );

      case 2:
        return (
          <ITwo
            category={category}
            relatedSubCats={relatedSubCats}
            index={index}
            isHovered
          />
        );

      case 3:
        return (
          <IThree
            category={category}
            relatedSubCats={relatedSubCats}
            index={index}
            isHovered
          />
        );

      case 4:
        return (
          <IFour
            category={category}
            relatedSubCats={relatedSubCats}
            index={index}
            isHovered
          />
        );

      default:
        return null;
    }
  };

return isCompactMenu ? (
  <div className="w-full flex justify-end">
    <div className="w-full xl:w-[68%] bg-white border-t rounded-b-[8px]">
      {renderLayout()}
    </div>
  </div>
) : (
  <div className="w-full bg-white border-t">
    <div className="mx-auto w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[86.56vw] 3xl_v2:max-w-[84vw] 4xl:max-w-[80vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw]">
      {renderLayout()}
    </div>
  </div>
);
}