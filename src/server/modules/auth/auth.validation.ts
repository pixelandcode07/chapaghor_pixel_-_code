import { z } from 'zod';

export const authValidationSchema = z.object({
  identifier: z
    .string({ required_error: 'Email or Phone number is required' })
    .min(1, 'Email or Phone number cannot be empty'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password cannot be empty'),
});