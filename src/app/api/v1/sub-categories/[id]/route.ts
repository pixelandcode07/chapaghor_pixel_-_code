import { NextRequest } from 'next/server';
import { SubCategoryController } from '@/server/modules/subCategory/subCategory.controller';

// params কে Promise হিসেবে গ্রহণ করতে হবে
export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  // context পাস করে দিন, কন্ট্রোলার যদি await context.params ব্যবহার করে থাকে তবে এটি কাজ করবে
  return SubCategoryController.updateSubCategory(req, context);
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  return SubCategoryController.deleteSubCategory(req, context);
}