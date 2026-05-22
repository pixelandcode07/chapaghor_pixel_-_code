import { IBanner } from './banner.interface';
import { Banner } from './banner.model';
import redis from '../../config/redis';

const CACHE_KEY = 'banners:all';

const createBannerIntoDB = async (payload: IBanner) => {
  const result = await Banner.create(payload);
  await redis.del(CACHE_KEY);
  return result;
};

const getAllBannersFromDB = async () => {
  const cachedData = await redis.get(CACHE_KEY);
  if (cachedData) return JSON.parse(cachedData);

  // অ্যাডমিন প্যানেলের জন্য সবগুলো ফেচ করা হচ্ছে।
  const result = await Banner.find().sort({ createdAt: -1 });
  
  await redis.set(CACHE_KEY, JSON.stringify(result), 'EX', 3600);
  return result;
};

const updateBannerIntoDB = async (id: string, payload: Partial<IBanner>) => {
  const result = await Banner.findByIdAndUpdate(id, payload, { 
    new: true, 
    runValidators: true 
  });
  
  if (!result) throw new Error('Banner not found!');
  
  await redis.del(CACHE_KEY);
  return result;
};

const deleteBannerFromDB = async (id: string) => {
  const result = await Banner.findByIdAndDelete(id);
  if (!result) throw new Error('Banner not found!');
  
  await redis.del(CACHE_KEY);
  return result;
};

export const BannerService = {
  createBannerIntoDB,
  getAllBannersFromDB,
  updateBannerIntoDB,
  deleteBannerFromDB,
};