import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

// টোকেন তৈরি করার ফাংশন
const createToken = (
  payload: Record<string, any>,
  secret: Secret,
  expiresIn: string
): string => {
  return jwt.sign(payload, secret, {
    expiresIn,
  });
};

// টোকেন ভেরিফাই করার ফাংশন (পরবর্তীতে Auth Middleware-এ কাজে লাগবে)
const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const JwtHelpers = {
  createToken,
  verifyToken,
};