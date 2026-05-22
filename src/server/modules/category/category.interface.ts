import { Model } from 'mongoose';

export interface ICategory {
  name: string;
  slug: string;
  icon: string;
  banners: string[]; 
  isFeatured: boolean;
  isActive: boolean;
  isNavhead: boolean; // Navbar-এ দেখানোর জন্য নতুন যুক্ত হলো
  order: number;
}

export type CategoryModel = Model<ICategory, Record<string, unknown>>;