type SubCategory = {
    _id: string;
    name: string;
    slug: string;
    category: {
        _id: string;
        name: string;
    };
    image?: string;
};

type Category = {
    _id: string;
    name: string;
    slug: string;
    isActive: boolean;
    isNavhead: boolean;
};

export interface MegaMenuProps {
    isHovered: boolean;
    relatedSubCats: SubCategory[];
    category: Category;
    index: number;
}