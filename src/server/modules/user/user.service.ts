import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: Partial<TUser>) => {
  const query: any = { $or: [] };
  
  if (payload.email) query.$or.push({ email: payload.email });
  if (payload.phone) query.$or.push({ phone: payload.phone });

  // ডাইনামিকালি এক্সিস্টিং ইউজার চেক
  if (query.$or.length > 0) {
    const isUserExists = await User.findOne(query);
    if (isUserExists) {
      if (payload.email && isUserExists.email === payload.email) {
        throw new Error('User already exists with this email address');
      }
      if (payload.phone && isUserExists.phone === payload.phone) {
        throw new Error('User already exists with this phone number');
      }
    }
  }

  const result = await User.create(payload);
  
  // সেনসিটিভ পাসওয়ার্ড ডেটা রিমুভ করে অবজেক্ট রিটার্ন করা
  const userObj = result.toObject();
  delete userObj.password;
  
  return userObj;
};

export const UserService = {
  createUserIntoDB,
};