import { NextRequest } from 'next/server';
import { SubCategoryController } from '@/server/modules/subCategory/subCategory.controller';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  return SubCategoryController.updateSubCategory(req, { params });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  return SubCategoryController.deleteSubCategory(req, { params });
}