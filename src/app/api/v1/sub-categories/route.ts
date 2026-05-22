import { NextRequest } from 'next/server';
import { SubCategoryController } from '@/server/modules/subCategory/subCategory.controller';

export async function POST(req: NextRequest) {
  return SubCategoryController.createSubCategory(req);
}

export async function GET(req: NextRequest) {
  return SubCategoryController.getAllSubCategories(req);
}