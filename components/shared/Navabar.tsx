"use client";

import React from 'react';
import Link from 'next/link';
import { Search, MapPin, User, Heart, ShoppingCart, Menu, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full font-sans shadow-sm">
      {/* --- Top Section (White Background) --- */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between gap-6 md:gap-12">
          
          {/* Logo */}
          <Link href="/" className="flex items-center min-w-max">
            {/* এখানে আপনি আপনার আসল লোগো ইমেজ ব্যবহার করতে পারেন */}
            <div className="text-2xl font-bold text-red-600 flex items-center gap-2">
              <span className="border-2 border-red-600 rounded-full w-8 h-8 flex items-center justify-center text-xs">C</span>
              <span className="hidden sm:block">Chapaghor</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search in..." 
              className="w-full bg-[#f3f4f6] text-gray-700 text-sm rounded-md py-3 px-4 pr-12 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-5 sm:gap-7 min-w-max">
            <button className="flex flex-col items-center text-gray-700 hover:text-[#f58220] transition-colors">
              <MapPin size={22} strokeWidth={1.5} />
              <span className="text-[12px] mt-1 font-medium hidden sm:block">Track Order</span>
            </button>
            
            <button className="flex flex-col items-center text-gray-700 hover:text-[#f58220] transition-colors">
              <User size={22} strokeWidth={1.5} />
              <span className="text-[12px] mt-1 font-medium hidden sm:block">Sign In</span>
            </button>
            
            <button className="flex flex-col items-center text-gray-700 hover:text-[#f58220] transition-colors">
              <Heart size={22} strokeWidth={1.5} />
              <span className="text-[12px] mt-1 font-medium hidden sm:block">Wishlist</span>
            </button>
            
            <button className="flex flex-col items-center text-gray-700 hover:text-[#f58220] transition-colors relative">
              <div className="relative">
                <ShoppingCart size={22} strokeWidth={1.5} />
                <span className="absolute -top-2 -right-2 bg-[#f58220] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
              <span className="text-[12px] mt-1 font-medium hidden sm:block">Cart</span>
            </button>
            
            <button className="flex flex-col items-center text-gray-700 hover:text-[#f58220] transition-colors">
              <Menu size={22} strokeWidth={1.5} />
              <span className="text-[12px] mt-1 font-medium hidden sm:block">More</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- Bottom Section (Dark Green Background) --- */}
      <nav className="bg-[#052e26]">
        {/* 'no-scrollbar' ক্লাসটি ছোট স্ক্রিনে মেনু স্ক্রল করার সুবিধার্থে দেওয়া হয়েছে */}
        <div className="max-w-[1400px] mx-auto px-4 overflow-x-auto">
          <ul className="flex items-center gap-8 py-3.5 text-white text-[14px] font-medium min-w-max">
            
            {/* Dropdown Menu Item (Offset Printing) */}
            <li className="group relative cursor-pointer">
              <div className="flex items-center gap-1 hover:text-gray-300 transition-colors py-1">
                Offset Printing <ChevronDown size={16} />
              </div>
              {/* Dropdown Content */}
              <div className="absolute top-full left-0 mt-0 w-56 bg-white text-black shadow-lg border border-gray-100 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2 text-[13px] font-normal">
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Business Cards</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors text-pink-600 font-medium">Letterheads</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Envelopes</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Cash Memo</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Money Receipt</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Offset Sticker</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Calendars</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Flyers</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Folded Leaflets & Flyers</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Notepads</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Posters & Ad Posters</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-pink-600 transition-colors">Presentation Folders</li>
                </ul>
              </div>
            </li>

            {/* Other Menu Items */}
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors py-1">
              Signage <ChevronDown size={16} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors py-1">
              Wedding Card <ChevronDown size={16} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors py-1">
              Digital Printing <ChevronDown size={16} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors py-1">
              Gift Item <ChevronDown size={16} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors py-1">
              Crest <ChevronDown size={16} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors py-1">
              Packaging <ChevronDown size={16} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors py-1">
              Stationery <ChevronDown size={16} />
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
}