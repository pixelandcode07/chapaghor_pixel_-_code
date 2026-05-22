import { z } from 'zod';

const createBannerZodSchema = z.object({
  title: z.string({
    required_error: 'Banner title is required',
  }).min(2, 'Title must be at least 2 characters long'),
  
  imageUrl: z.string({
    required_error: 'Image URL is required',
  }).url('Invalid Image URL format'),
  
  link: z.string().url('Invalid URL format').optional().or(z.literal('')),
    
  isActive: z.boolean().optional(),
});

const updateBannerZodSchema = createBannerZodSchema.partial();

export const BannerValidation = {
  createBannerZodSchema,
  updateBannerZodSchema,
};