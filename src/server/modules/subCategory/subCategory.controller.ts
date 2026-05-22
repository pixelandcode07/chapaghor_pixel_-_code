import { NextRequest } from 'next/server';
import { connectDB } from '@/server/config/db';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { SubCategoryService } from './subCategory.service';
import { SubCategoryValidation } from './subCategory.validation';

const createSubCategory = catchAsync(async (req: NextRequest) => {
  await connectDB();
  const body = await req.json();
  const validatedData = SubCategoryValidation.createSubCategoryZodSchema.parse(body);
  const result = await SubCategoryService.createSubCategoryIntoDB(validatedData);
  return sendResponse({ statusCode: 201, success: true, message: 'Sub-category created', data: result });
});

const getAllSubCategories = catchAsync(async (req: NextRequest) => {
  await connectDB();
  const result = await SubCategoryService.getAllSubCategoriesFromDB();
  return sendResponse({ statusCode: 200, success: true, message: 'Sub-categories fetched', data: result });
});

const updateSubCategory = catchAsync(async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await context.params;
  const body = await req.json();
  const validatedData = SubCategoryValidation.updateSubCategoryZodSchema.parse(body);
  const result = await SubCategoryService.updateSubCategoryIntoDB(id, validatedData);
  return sendResponse({ statusCode: 200, success: true, message: 'Sub-category updated', data: result });
});

const deleteSubCategory = catchAsync(async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await context.params;
  const result = await SubCategoryService.deleteSubCategoryFromDB(id);
  return sendResponse({ statusCode: 200, success: true, message: 'Sub-category deleted', data: result });
});

const reorderSubCategories = catchAsync(async (req: NextRequest) => {
  await connectDB();
  const body = await req.json();
  await SubCategoryService.reorderSubCategoriesInDB(body);
  return sendResponse({ statusCode: 200, success: true, message: 'Sub-categories reordered successfully', data: null });
});

export const SubCategoryController = { createSubCategory, getAllSubCategories, updateSubCategory, deleteSubCategory, reorderSubCategories };