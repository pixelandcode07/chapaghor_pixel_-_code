import mongoose from 'mongoose';
import { ISubCategory } from './subCategory.interface';
import { SubCategory } from './subCategory.model';
import redis from '../../config/redis';

const CACHE_KEY = 'subCategories:all';

const createSubCategoryIntoDB = async (payload: ISubCategory) => {
  const isExists = await SubCategory.findOne({ slug: payload.slug });
  if (isExists) throw new Error('Sub-category with this slug already exists!');
  
  const result = await SubCategory.create(payload);
  await redis.del(CACHE_KEY);
  return result;
};

const getAllSubCategoriesFromDB = async () => {
  const cachedData = await redis.get(CACHE_KEY);
  if (cachedData) return JSON.parse(cachedData);

  const result = await SubCategory.aggregate([
    { $sort: { order: 1, createdAt: -1 } }, // order অনুযায়ী সর্ট
    { $lookup: { from: 'categories', localField: 'category', foreignField: '_id', as: 'categoryDetails' } },
    { $unwind: { path: '$categoryDetails', preserveNullAndEmptyArrays: true } },
    { $addFields: { category: '$categoryDetails' } },
    { $project: { categoryDetails: 0 } }
  ]);

  await redis.set(CACHE_KEY, JSON.stringify(result), 'EX', 3600);
  return result;
};

const updateSubCategoryIntoDB = async (id: string, payload: Partial<ISubCategory>) => {
  if (payload.slug) {
    const isExists = await SubCategory.findOne({ slug: payload.slug, _id: { $ne: id } });
    if (isExists) throw new Error('Sub-category with this slug already exists!');
  }
  
  const updatedDoc = await SubCategory.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
  if (!updatedDoc) throw new Error('Sub-category not found!');
  
  await redis.del(CACHE_KEY);

  const result = await SubCategory.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(id) } },
    { $lookup: { from: 'categories', localField: 'category', foreignField: '_id', as: 'category' } },
    { $unwind: { path: '$category', preserveNullAndEmptyArrays: true } }
  ]);
  return result[0];
};

const deleteSubCategoryFromDB = async (id: string) => {
  const result = await SubCategory.findByIdAndDelete(id);
  if (!result) throw new Error('Sub-category not found!');
  
  await redis.del(CACHE_KEY);
  return result;
};

const reorderSubCategoriesInDB = async (payload: { _id: string; order: number }[]) => {
  const bulkOps = payload.map((item) => ({
    updateOne: { filter: { _id: item._id }, update: { order: item.order } }
  }));
  await SubCategory.bulkWrite(bulkOps);
  await redis.del(CACHE_KEY);
  return true;
};

export const SubCategoryService = {
  createSubCategoryIntoDB,
  getAllSubCategoriesFromDB,
  updateSubCategoryIntoDB,
  deleteSubCategoryFromDB,
  reorderSubCategoriesInDB,
};