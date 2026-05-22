import { Schema, model, models } from 'mongoose';
import { ICategory, CategoryModel } from './category.interface';

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    icon: { type: String, required: true },
    banners: {
      type: [String],
      validate: {
        validator: function (val: string[]) { return val.length <= 2; },
        message: 'You can upload a maximum of 2 banners per category',
      },
      default: []
    },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isNavhead: { type: Boolean, default: true }, // নতুন যুক্ত হলো
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Category = models.Category || model<ICategory, CategoryModel>('Category', categorySchema);