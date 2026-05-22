import { Model } from 'mongoose';

export interface IBanner {
  title: string;
  imageUrl: string;
  link?: string; // ব্যানারে ক্লিক করলে কোথায় যাবে (ঐচ্ছিক)
  isActive: boolean;
}

export type BannerModel = Model<IBanner, Record<string, unknown>>;