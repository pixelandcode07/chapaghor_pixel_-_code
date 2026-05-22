import { NextRequest } from 'next/server';
import { BannerController } from '@/server/modules/banner/banner.controller';

export async function POST(req: NextRequest) {
  return BannerController.createBanner(req);
}

export async function GET(req: NextRequest) {
  return BannerController.getAllBanners(req);
}