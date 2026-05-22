import { Secret } from 'jsonwebtoken';
import { JwtHelpers } from '../../utils/jwt';
import { User } from '../user/user.model';
import { TLoginInput, TLoginResponse } from './auth.interface';

const loginUser = async (payload: TLoginInput): Promise<TLoginResponse> => {
  // ১. ইউজার ইমেইল অথবা ফোন নম্বর দিয়ে এক্সিস্ট করে কিনা চেক করা 
  const user = await User.isUserExists(payload.identifier);
  
  if (!user) {
    throw new Error('No user found with this email or phone number');
  }

  // ২. ইউজার অ্যাকাউন্ট অ্যাক্টিভ আছে কিনা চেক করা
  if (!user.isActive) {
    throw new Error('This user account is deactivated');
  }

  // ৩. পাসওয়ার্ড ম্যাচ করা 
  const isPasswordMatched = await User.isPasswordMatched(payload.password, user.password);
  
  if (!isPasswordMatched) {
    throw new Error('Incorrect password. Please try again.');
  }

  // ৪. JWT Payload তৈরি
  const jwtPayload = {
    userId: user._id,
    name: user.name,
    email: user.email || '',
    phone: user.phone || '',
    role: user.role,
  };

  // ৫. JwtHelpers ব্যবহার করে Access Token তৈরি 
  const accessToken = JwtHelpers.createToken(
    jwtPayload,
    (process.env.JWT_ACCESS_SECRET || 'secret_access_123') as Secret,
    process.env.JWT_ACCESS_EXPIRES_IN || '1d'
  );

  // ৬. JwtHelpers ব্যবহার করে Refresh Token তৈরি 
  const refreshToken = JwtHelpers.createToken(
    jwtPayload,
    (process.env.JWT_REFRESH_SECRET || 'secret_refresh_123') as Secret,
    process.env.JWT_REFRESH_EXPIRES_IN || '7d'
  );

  const userObj = user.toObject();
  delete userObj.password;

  return {
    accessToken,
    refreshToken,
    user: userObj,
  };
};

export const AuthService = {
  loginUser,
};