import { Document, Model } from 'mongoose';

export type TUserRole = 'user' | 'admin';

export interface TUser extends Document {
  name: string;
  email?: string; // Optional (ইমেইল ছাড়াও রেজিস্ট্রেশন সম্ভব)
  phone?: string; // Optional (ফোন ছাড়াও রেজিস্ট্রেশন সম্ভব)
  password?: string;
  role: TUserRole;
  avatar?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserModel extends Model<TUser> {
  isUserExists(identifier: string): Promise<TUser | null>;
  isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
}