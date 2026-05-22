import { NextRequest } from 'next/server';
import { connectDB } from '@/server/config/db';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { BannerService } from './banner.service';
import { BannerValidation } from './banner.validation';
import redis from '@/server/config/redis'; // Redis Import

const CACHE_KEY = 'banners:all';

const createBanner = catchAsync(async (req: NextRequest) => {
  await connectDB();
  const body = await req.json();

  const validatedData = BannerValidation.createBannerZodSchema.parse(body);
  const result = await BannerService.createBannerIntoDB(validatedData);

  // নতুন ডেটা যোগ হলে ক্যাশ মুছে ফেলা
  await redis.del(CACHE_KEY);

  return sendResponse({
    statusCode: 201,
    success: true,
    message: 'Banner created successfully',
    data: result,
  });
});

const getAllBanners = catchAsync(async (req: NextRequest) => {
  // ১. Redis থেকে ক্যাশ চেক করা
  const cachedData = await redis.get(CACHE_KEY);
  
  if (cachedData) {
    return sendResponse({
      statusCode: 200,
      success: true,
      message: 'Banners fetched from Cache',
      data: JSON.parse(cachedData),
    });
  }

  // ২. ডাটাবেজ থেকে নিয়ে Redis-এ সেভ করা
  await connectDB();
  const result = await BannerService.getAllBannersFromDB();

  await redis.set(CACHE_KEY, JSON.stringify(result), 'EX', 3600); // ১ ঘণ্টার জন্য ক্যাশ

  return sendResponse({
    statusCode: 200,
    success: true,
    message: 'Banners fetched successfully',
    data: result,
  });
});

// ⚠️ Next.js 15 fix: params কে Promise হিসেবে হ্যান্ডেল করা
const updateBanner = catchAsync(async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
  await connectDB();
  
  const { id } = await context.params;
  const body = await req.json();

  const validatedData = BannerValidation.updateBannerZodSchema.parse(body);
  const result = await BannerService.updateBannerIntoDB(id, validatedData);

  // ডেটা আপডেট হলে ক্যাশ ইনভ্যালিডেট করা
  await redis.del(CACHE_KEY);

  return sendResponse({
    statusCode: 200,
    success: true,
    message: 'Banner updated successfully',
    data: result,
  });
});

// ⚠️ Next.js 15 fix: params কে Promise হিসেবে হ্যান্ডেল করা
const deleteBanner = catchAsync(async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
  await connectDB();
  
  const { id } = await context.params;

  const result = await BannerService.deleteBannerFromDB(id);

  // ডেটা ডিলিট হলে ক্যাশ ইনভ্যালিডেট করা
  await redis.del(CACHE_KEY);

  return sendResponse({
    statusCode: 200,
    success: true,
    message: 'Banner deleted successfully',
    data: result,
  });
});

export const BannerController = {
  createBanner,
  getAllBanners,
  updateBanner,
  deleteBanner,
};