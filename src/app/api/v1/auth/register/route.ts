import { UserController } from '@/server/modules/user/user.controller';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return UserController.registerUser(req);
}