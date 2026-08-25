import { AuthController } from '@/server/modules/auth/auth.controller';
import { NextRequest } from 'next/server'; // এখানে next/server হবে
import { connectDB } from '@/server/config/db'; // 🔴 Database Connection Import করা হলো

export async function POST(req: NextRequest) {
  await connectDB(); 

  return AuthController.loginUser(req);
}