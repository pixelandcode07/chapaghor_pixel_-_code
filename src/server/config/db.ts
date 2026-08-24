import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined.");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached =
  global.mongooseCache ??
  (global.mongooseCache = {
    conn: null,
    promise: null,
  });

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    console.log("✅ Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔄 Connecting to MongoDB...");

    // 🔴 FIX 1: TypeScript-কে বোঝানো হলো যে এটি একটি string (as string)
    cached.promise = mongoose.connect(MONGODB_URI as string, {
      dbName: "chapaghor", // 🔴 FIX 2: ডেটাবেসের নাম ফিক্স করে দেওয়া হলো
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
      family: 4, // 🔴 FIX 3: লোকালহোস্টের ECONNREFUSED এরর সমাধানের জন্য IPv4 ফোর্স করা হলো
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ MongoDB Connected Successfully");
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("❌ MongoDB Connection Error");
    console.error(error);
    throw error;
  }
}