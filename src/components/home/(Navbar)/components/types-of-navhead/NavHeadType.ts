export type SubCategory = {
  _id: string;
  name: string;
  slug: string;
  category: { _id: string; name: string };
  icon?: string;
};

export type Category = {
  _id: string;
  name: string;
  slug: string;
  icon?: string;
  isActive: boolean;
  isNavhead: boolean;
  isFeatured: boolean;
};

export interface NavLinksProps {
  category: Category;
  relatedSubCats: SubCategory[];
  index: number;
  totalCategories: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  // onMouseLeave: () => void;
}
