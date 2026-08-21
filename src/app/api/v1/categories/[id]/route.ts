import { NextRequest } from 'next/server';
import { CategoryController } from '@/server/modules/category/category.controller';

// params কে Promise হিসেবে গ্রহণ করতে হবে (Next.js 15 update)
export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  return CategoryController.updateCategory(req, context);
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  return CategoryController.deleteCategory(req, context);
}