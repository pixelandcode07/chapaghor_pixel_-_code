import { NextRequest } from 'next/server';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { AuthService } from './auth.service';
import { authValidationSchema } from './auth.validation';

const loginUser = catchAsync(async (req: NextRequest) => {
  const body = await req.json();

  // Zod ভ্যালিডেশন
  const validatedData = authValidationSchema.parse(body);

  // সার্ভিস কল 
  const result = await AuthService.loginUser(validatedData);
  const { accessToken, refreshToken, user } = result;

  // সাকসেস রেসপন্স ফরম্যাট তৈরি
  const response = sendResponse({
    statusCode: 200,
    success: true,
    message: 'User logged in successfully',
    data: {
      accessToken,
      user,
    },
  });

  // Refresh Token কুকিতে পুশ করা 
  response.cookies.set({
    name: 'refreshToken',
    value: refreshToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60, // ৭ দিন (সেকেন্ডে)
    path: '/',
  });

  return response;
});

export const AuthController = {
  loginUser,
};