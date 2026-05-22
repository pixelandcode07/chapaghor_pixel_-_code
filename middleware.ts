import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose'; // Edge-compatible JWT verification

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your_secret_key');

// ১. যেসব পেজ লগইন ছাড়া দেখা যাবে না
const protectedRoutes = ['/dashboard']; // এখানে শুধুমাত্র ড্যাশবোর্ড রাখুন

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('refreshToken')?.value;

  // ২. প্রোটেক্টেড রাউটে যাওয়ার চেষ্টা
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtectedRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      // ৩. টোকেন ভেরিফাই করা (এটি আসল কি না চেক করা)
      const { payload } = await jwtVerify(token, secret);
      
      // ৪. রোল চেক করা (ইউজার কি অ্যাডমিন?)
      // ধরে নিচ্ছি আপনার JWT payload এ 'role' আছে
      if (payload.role !== 'admin') {
        // অ্যাডমিন না হলে হোমপেজে ফেরত পাঠাও
        return NextResponse.redirect(new URL('/', request.url));
      }

      // সব ঠিক থাকলে রিকোয়েস্ট এক্সেপ্ট করো
      return NextResponse.next();
    } catch (error) {
      // টোকেন ভ্যালিড না হলে লগইন পেজে পাঠাও
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // লগইন/রেজিস্টার পেজে অলরেডি লগড-ইন থাকলে রিডাইরেক্ট
  if ((pathname === '/login' || pathname === '/register') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};