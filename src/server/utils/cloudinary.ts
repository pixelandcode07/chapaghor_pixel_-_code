import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (
  fileBuffer: Buffer, 
  folder: string = 'chapaghor'
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: folder },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result?.secure_url as string);
        }
      }
    );
    
    // বাফার ডেটা স্ট্রিমে পাঠিয়ে আপলোড সম্পন্ন করা
    uploadStream.end(fileBuffer);
  });
};