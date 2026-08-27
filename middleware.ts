import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// 🔴 FIX: এখানে অবশ্যই JWT_REFRESH_SECRET ব্যবহার করতে হবে, কারণ কুকিতে রিফ্রেশ টোকেন আছে
// .env.local-এর ভ্যালুর সাথে ফলব্যাক ভ্যালু মিলিয়ে দেওয়া হলো
const secret = new TextEncoder().encode(process.env.JWT_REFRESH_SECRET || 'your_super_secret_refresh_key_5544');

const protectedRoutes = ['/dashboard'];
const authRoutes = ['/login', '/register'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const token = request.cookies.get('refreshToken')?.value;

  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  let payload = null;

  if (token) {
    try {
      const verified = await jwtVerify(token, secret);
      payload = verified.payload;
    } catch (error) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('refreshToken');
      return response;
    }
  }

  if (isProtectedRoute) {
    if (!payload) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (isAuthRoute && payload) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};