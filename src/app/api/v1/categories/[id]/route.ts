import { NextRequest } from 'next/server';
import { BannerController } from '@/server/modules/banner/banner.controller';

// params কে Promise হিসেবে গ্রহণ করতে হবে
export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  return BannerController.updateBanner(req, context);
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  return BannerController.deleteBanner(req, context);
}