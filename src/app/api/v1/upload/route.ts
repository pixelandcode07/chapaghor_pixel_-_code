import { NextRequest, NextResponse } from 'next/server';
import { uploadToCloudinary } from '@/server/utils/cloudinary';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
      return NextResponse.json({ success: false, message: 'No image file provided' }, { status: 400 });
    }

    // File কে Buffer-এ কনভার্ট করা
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Cloudinary তে আপলোড
    const secureUrl = await uploadToCloudinary(buffer, 'chapaghor/uploads');

    return NextResponse.json({
      success: true,
      message: 'Image uploaded successfully',
      data: { url: secureUrl },
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}