import { AuthController } from '@/server/modules/auth/auth.controller';
import { NextRequest } from 'next/server'; // এখানে next/server হবে

export async function POST(req: NextRequest) {
  return AuthController.loginUser(req);
}