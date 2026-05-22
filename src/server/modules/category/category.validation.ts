import { z } from 'zod';

const createCategoryZodSchema = z.object({
  name: z.string({ required_error: 'Category name is required' }).min(2),
  slug: z.string({ required_error: 'Slug is required' }),
  icon: z.string({ required_error: 'Icon URL is required' }).url(),
  banners: z.array(z.string().url()).max(2).optional(),
  isFeatured: z.boolean().optional(),
  isActive: z.boolean().optional(),
  isNavhead: z.boolean().optional(), // 👈 এটি অবশ্যই থাকতে হবে
  order: z.number().optional(),
});

const updateCategoryZodSchema = createCategoryZodSchema.partial();

export const CategoryValidation = {
  createCategoryZodSchema,
  updateCategoryZodSchema,
};