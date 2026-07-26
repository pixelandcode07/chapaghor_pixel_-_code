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
  
  // কুকি থেকে টোকেন নেওয়া
  const token = request.cookies.get('refreshToken')?.value;

  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  let payload = null;

  // 🔴 FIX: টোকেন থাকলে আগে সেটি ভেরিফাই করে নেব (লুপ এড়ানোর জন্য)
  if (token) {
    try {
      const verified = await jwtVerify(token, secret);
      payload = verified.payload;
    } catch (error) {
      // টোকেন ইনভ্যালিড/মেয়াদোত্তীর্ণ হলে কুকি থেকে ডিলিট করে লগইন পেজে পাঠাব
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('refreshToken');
      return response;
    }
  }

  // ১. ইউজার প্রোটেক্টেড রাউটে (ড্যাশবোর্ডে) যেতে চাইলে
  if (isProtectedRoute) {
    if (!payload) {
      // ভ্যালিড পেলোড না থাকলে লগইন পেজে পাঠাও
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // রোল চেক (ইউজার অ্যাডমিন না হলে হোম পেজে ফেরত পাঠাও)
    if (payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // ২. লগইন করা ইউজার (যাদের ভ্যালিড পেলোড আছে) যদি আবার লগইন/রেজিস্টার পেজে যায়
  if (isAuthRoute && payload) {
    // সরাসরি ড্যাশবোর্ডে রিডাইরেক্ট করো
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // ৩. বাকি সব রাউটে নরমালি যেতে দাও
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};