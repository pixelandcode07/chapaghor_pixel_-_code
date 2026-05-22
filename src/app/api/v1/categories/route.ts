import { NextRequest } from 'next/server';
import { CategoryController } from '@/server/modules/category/category.controller';

export async function POST(req: NextRequest) {
  return CategoryController.createCategory(req);
}

export async function GET(req: NextRequest) {
  return CategoryController.getAllCategories(req);
}