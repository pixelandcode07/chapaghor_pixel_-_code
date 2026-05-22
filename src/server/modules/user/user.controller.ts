import { NextRequest } from 'next/server';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserService } from './user.service';
import { userValidationSchema } from './user.validation';
import { TAuthenticatedRequest } from '@/server/middlewares/auth';
import { connectDB } from '@/server/config/db'; // DB connection import

const registerUser = catchAsync(async (req: NextRequest) => {
  // ⚠️ Controller-er shurutei DB connect kore dewa holo route clean rakhar jonno
  await connectDB();

  const body = await req.json();

  // Zod Validation
  const validatedData = userValidationSchema.parse(body);

  // Business Logic Call
  const result = await UserService.createUserIntoDB(validatedData);

  // Send Standardized Response
  return sendResponse({
    statusCode: 201,
    success: true,
    message: 'New customer registered successfully',
    data: result,
  });
});

const getMyProfile = catchAsync(async (req: TAuthenticatedRequest) => {
  // Profile fetch korar ageo DB connection nishchit kora
  await connectDB();

  const userEmailOrPhone = req.user?.email || req.user?.phone;

  const result = await UserService.getMeFromDB(userEmailOrPhone);

  return sendResponse({
    statusCode: 200,
    success: true,
    message: 'User profile fetched successfully',
    data: result,
  });
});

export const UserController = {
  registerUser,
  getMyProfile,
};