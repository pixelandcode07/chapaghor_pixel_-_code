import { Schema, model, models } from 'mongoose';
import { ISubCategory, SubCategoryModel } from './subCategory.interface';

const subCategorySchema = new Schema<ISubCategory>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    icon: { type: String, required: true },
    banners: {
      type: [String],
      validate: {
        validator: function (val: string[]) { return val.length <= 2; },
        message: 'Max 2 banners allowed',
      },
      default: []
    },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const SubCategory = models.SubCategory || model<ISubCategory, SubCategoryModel>('SubCategory', subCategorySchema);