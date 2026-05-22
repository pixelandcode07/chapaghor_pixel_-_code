import { NextRequest } from 'next/server';
import { connectDB } from '@/server/config/db';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { CategoryService } from './category.service';
import { CategoryValidation } from './category.validation';

const createCategory = catchAsync(async (req: NextRequest) => {
  await connectDB();
  const body = await req.json();
  const validatedData = CategoryValidation.createCategoryZodSchema.parse(body);
  const result = await CategoryService.createCategoryIntoDB(validatedData);
  return sendResponse({ statusCode: 201, success: true, message: 'Category created', data: result });
});

const getAllCategories = catchAsync(async (req: NextRequest) => {
  await connectDB();
  const result = await CategoryService.getAllCategoriesFromDB();
  return sendResponse({ statusCode: 200, success: true, message: 'Categories fetched', data: result });
});

const updateCategory = catchAsync(async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await context.params;
  const body = await req.json();
  const validatedData = CategoryValidation.updateCategoryZodSchema.parse(body);
  const result = await CategoryService.updateCategoryIntoDB(id, validatedData);
  return sendResponse({ statusCode: 200, success: true, message: 'Category updated', data: result });
});

const deleteCategory = catchAsync(async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await context.params;
  const result = await CategoryService.deleteCategoryFromDB(id);
  return sendResponse({ statusCode: 200, success: true, message: 'Category deleted', data: result });
});

const reorderCategories = catchAsync(async (req: NextRequest) => {
  await connectDB();
  const body = await req.json();
  await CategoryService.reorderCategoriesInDB(body);
  return sendResponse({ statusCode: 200, success: true, message: 'Categories reordered successfully', data: null });
});

export const CategoryController = { 
  createCategory, 
  getAllCategories, 
  updateCategory, 
  deleteCategory, 
  reorderCategories 
};