import { Model, Types } from 'mongoose';

export interface ISubCategory {
  name: string;
  slug: string;
  category: Types.ObjectId; 
  icon: string;
  banners: string[]; 
  isFeatured: boolean;
  isActive: boolean;
  order: number;
}

export type SubCategoryModel = Model<ISubCategory, Record<string, unknown>>;