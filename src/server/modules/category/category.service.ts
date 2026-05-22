import { ICategory } from './category.interface';
import { Category } from './category.model';
import redis from '../../config/redis';

const CACHE_KEY = 'categories:all';

const createCategoryIntoDB = async (payload: ICategory) => {
  const isExists = await Category.findOne({ slug: payload.slug });
  if (isExists) throw new Error('Category with this slug already exists!');
  
  const result = await Category.create(payload);
  await redis.del(CACHE_KEY);
  return result;
};

const getAllCategoriesFromDB = async () => {
  const cachedData = await redis.get(CACHE_KEY);
  if (cachedData) return JSON.parse(cachedData);

  const result = await Category.find().sort({ order: 1, createdAt: -1 });
  
  await redis.set(CACHE_KEY, JSON.stringify(result), 'EX', 3600);
  return result;
};

const updateCategoryIntoDB = async (id: string, payload: Partial<ICategory>) => {
  if (payload.slug) {
    const isExists = await Category.findOne({ slug: payload.slug, _id: { $ne: id } });
    if (isExists) throw new Error('Category with this slug already exists!');
  }
  
  const result = await Category.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
  if (!result) throw new Error('Category not found!');
  
  await redis.del(CACHE_KEY);
  return result;
};

const deleteCategoryFromDB = async (id: string) => {
  const result = await Category.findByIdAndDelete(id);
  if (!result) throw new Error('Category not found!');
  
  await redis.del(CACHE_KEY);
  return result;
};

const reorderCategoriesInDB = async (payload: { _id: string; order: number }[]) => {
  const bulkOps = payload.map((item) => ({
    updateOne: { filter: { _id: item._id }, update: { order: item.order } }
  }));
  await Category.bulkWrite(bulkOps);
  await redis.del(CACHE_KEY);
  return true;
};

export const CategoryService = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
  updateCategoryIntoDB,
  deleteCategoryFromDB,
  reorderCategoriesInDB,
};