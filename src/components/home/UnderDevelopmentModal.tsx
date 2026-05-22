"use client";

import { X, Wrench, ArrowRight, UserPlus, Code } from "lucide-react";
import Link from "next/link";

export default function UnderDevelopmentModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-50/90 backdrop-blur-sm p-4">
      {/* Modal Card */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        
        {/* Orange Header Strip */}
        <div className="bg-[#F05A28] py-8 flex justify-center items-center relative">
          <img 
            src="/logos/loginandregisterpagelogo.png" 
            alt="Chapaghor Logo" 
            className="h-12 object-contain"
          />
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white hover:bg-white/20 p-1 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-[#F05A28]">
              <Wrench size={32} />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#003B5C]">Under Development</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We are currently upgrading the Chapaghor platform to bring you a better printing experience. To explore the dashboard, please log in or create an account.
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Link 
              href="/login" 
              className="w-full flex items-center justify-center gap-2 bg-[#003B5C] text-white py-3 rounded-xl font-medium hover:bg-[#002a42] transition-colors"
            >
              <ArrowRight size={18} /> Go to Login
            </Link>
            <Link 
              href="/register" 
              className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              <UserPlus size={18} /> Create an Account
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-50 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">© 2026 Chapaghor. All rights reserved.</p>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
            <Code size={14} /> 
            <span>Currently developing by <strong>Pixel & Code</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}