import { NextRequest } from 'next/server';
import { JwtPayload, Secret } from 'jsonwebtoken';
import { JwtHelpers } from '../utils/jwt';

export type TAuthenticatedRequest = NextRequest & {
  user?: JwtPayload & {
    userId: string;
    role: string;
    email?: string;
    phone?: string;
  };
};

export const auth = (...requiredRoles: string[]) => {
  return async (req: TAuthenticatedRequest) => {
    // 1. Authorization Header theke token extract kora
    const authHeader = req.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('You are not authorized to access this route!');
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      throw new Error('Invalid token format!');
    }

    // 2. Token Verify kora
    let verifiedUser: JwtPayload;
    try {
      verifiedUser = JwtHelpers.verifyToken(
        token,
        (process.env.JWT_ACCESS_SECRET || 'secret_access_123') as Secret
      );
    } catch (error) {
      throw new Error('Token has expired or is invalid!');
    }

    // 3. Role Checking (Authorization)
    if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
      throw new Error('Forbidden! You do not have permission to access this route.');
    }

    // 4. Request Object-e User Payload attach kore dewa
    req.user = verifiedUser as any;
  };
};