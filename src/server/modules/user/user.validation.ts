import { z } from 'zod';

export const userValidationSchema = z
  .object({
    name: z.string({ required_error: 'Name is required' }).min(2, 'Name is too short'),
    email: z.string().email('Invalid email address').optional().or(z.literal('')),
    phone: z.string().min(11, 'Phone number must be at least 11 characters').optional().or(z.literal('')),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, 'Password must be at least 6 characters'),
  })
  .refine((data) => data.email || data.phone, {
    message: 'Either email or phone number must be provided.',
    path: ['email', 'phone'],
  });