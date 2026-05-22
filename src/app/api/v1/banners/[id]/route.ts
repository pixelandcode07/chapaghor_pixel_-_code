import { NextRequest } from 'next/server';
import { BannerController } from '@/server/modules/banner/banner.controller';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  return BannerController.updateBanner(req, { params });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  return BannerController.deleteBanner(req, { params });
}