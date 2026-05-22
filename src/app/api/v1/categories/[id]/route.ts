import { NextRequest } from 'next/server';
import { CategoryController } from '@/server/modules/category/category.controller';

// Edit (Update) এর জন্য PATCH রিকোয়েস্ট
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  return CategoryController.updateCategory(req, { params });
}

// Delete এর জন্য DELETE রিকোয়েস্ট
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  return CategoryController.deleteCategory(req, { params });
}