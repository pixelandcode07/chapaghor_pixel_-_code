import { Category, SubCategory } from "./NavHeadType";

export interface MegaMenuProps {
  isHovered: boolean;
  relatedSubCats: SubCategory[];
  category: Category;
  index: number;
}

export interface ActiveMenu {
  category: Category;
  relatedSubCats: SubCategory[];
  index: number;
}

export interface MegaMenuPanelProps {
  activeMenu: ActiveMenu | null;
}

export interface MegaMenuShellProps {
  activeMenu: ActiveMenu | null;
//   headerHeight: number;
}