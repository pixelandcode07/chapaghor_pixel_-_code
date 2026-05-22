import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your_secret_key');

export const verifyAdmin = async (req: NextRequest) => {
  const token = req.cookies.get('refreshToken')?.value;
  if (!token) return false;

  try {
    const { payload } = await jwtVerify(token, secret);
    return payload.role === 'admin'; // অ্যাডমিন কি না চেক করে ট্রু/ফলস রিটার্ন করবে
  } catch {
    return false;
  }
};