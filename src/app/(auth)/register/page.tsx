"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  identifier: z.string().min(1, "Email or Phone is required"), 
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.identifier);
      const payload = {
        name: data.name,
        email: isEmail ? data.identifier : "",
        phone: !isEmail ? data.identifier : "",
        password: data.password,
      };

      const response = await axios.post("/api/v1/auth/register", payload);
      if (response.data.success) {
        toast.success("Account created! Please log in.");
        router.push("/login");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    // flex-row-reverse: ব্যানার ডানদিকে নেওয়া হয়েছে
    <div className="flex min-h-screen flex-row-reverse bg-white selection:bg-[#F05A28]/20">
      
      {/* --- Right Side: Banner Image (Hidden on Mobile) --- */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-100">
        <img 
          src="/banners/register_login_banner.png" 
          alt="Chapaghor Register Banner" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>

      {/* --- Left Side: Register Form --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16">
        <div className="w-full max-w-[420px]">
          
          <h2 className="text-[32px] font-semibold text-gray-900 text-center mb-10">
            Create an account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Full Name Field */}
            <div className="relative">
              <label className="absolute -top-2.5 left-3 bg-white px-1.5 text-[12px] text-gray-500 font-medium z-10">
                Full Name
              </label>
              <input
                {...register("name")}
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-[#1E293B] focus:ring-1 focus:ring-[#1E293B] transition-colors bg-transparent"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 absolute">{errors.name.message}</p>}
            </div>

            {/* Phone/Email Field */}
            <div className="relative pt-2">
              <label className="absolute top-0 left-3 bg-white px-1.5 text-[12px] text-gray-500 font-medium z-10">
                Phone number or Email
              </label>
              <input
                {...register("identifier")}
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-[#1E293B] focus:ring-1 focus:ring-[#1E293B] transition-colors bg-transparent"
              />
              {errors.identifier && <p className="text-red-500 text-xs mt-1 absolute">{errors.identifier.message}</p>}
            </div>

            {/* Password Field */}
            <div className="relative pt-2">
              <label className="absolute top-0 left-3 bg-white px-1.5 text-[12px] text-gray-500 font-medium z-10">
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-[#1E293B] focus:ring-1 focus:ring-[#1E293B] transition-colors bg-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1 absolute">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1E293B] hover:bg-[#0f172a] text-white font-medium text-[15px] py-3.5 rounded-lg transition-colors flex items-center justify-center mt-6 disabled:opacity-70"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="px-3 text-xs text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            {/* Google Signup Button */}
            <button
              type="button"
              className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium text-[14px] py-3 rounded-lg transition-colors flex items-center justify-center gap-3 mt-4"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with google
            </button>
          </form>

          <p className="text-center text-xs text-gray-600 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-[#F05A28] font-semibold hover:underline">
              Sign In
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
}