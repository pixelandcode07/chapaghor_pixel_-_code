import { z } from 'zod';

const createSubCategoryZodSchema = z.object({
  name: z.string({ required_error: 'Sub-category name is required' }).min(2),
  slug: z.string({ required_error: 'Slug is required' }),
  category: z.string({ required_error: 'Main category ID is required' }),
  icon: z.string({ required_error: 'Icon URL is required' }).url(),
  banners: z.array(z.string().url()).max(2).optional(),
  isFeatured: z.boolean().optional(),
  isActive: z.boolean().optional(),
  order: z.number().optional(),
});

const updateSubCategoryZodSchema = createSubCategoryZodSchema.partial();

export const SubCategoryValidation = { createSubCategoryZodSchema, updateSubCategoryZodSchema };