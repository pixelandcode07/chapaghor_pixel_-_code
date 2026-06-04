export type SubCategory = {
    _id: string;
    name: string;
    slug: string;
    category: { _id: string; name: string };
    image?: string;
};

export type Category = {
    _id: string;
    name: string;
    slug: string;
    isActive: boolean;
    isNavhead: boolean;
};