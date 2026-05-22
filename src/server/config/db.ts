import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// ഗ্লোবাল ক্যাশ অবজেক্টের জন্য সঠিক ইন্টারফেস তৈরি করা
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// TypeScript-কে গ্লোবাল ভ্যারিয়েবল সম্পর্কে জানানো
declare global {
  // var হিসেবে ডিক্লেয়ার করা বাধ্যতামূলক গ্লোবাল স্কোপের জন্য
  var mongoose: MongooseCache | undefined;
}

// ক্যাশ অবজেক্ট তৈরি করা বা গ্লোবাল থেকে নেওয়া
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export const connectDB = async (): Promise<typeof mongoose> => {
  if (cached.conn) {
    console.log('🚀 Using existing database connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
    };

    console.log('🔄 Initializing new database connection...');
    
    // mongoose.connect রিটার্ন করে typeof mongoose, Connection নয়
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('✅ Database connected successfully');
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};