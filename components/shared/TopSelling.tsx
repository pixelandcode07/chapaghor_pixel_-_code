"use client";

import React from 'react';
import { ShoppingCart, Flame } from 'lucide-react';

export default function TopSelling() {
  // প্রিন্টিং রিলেটেড প্রোডাক্ট ডেটা
  const products = [
    {
      id: 1,
      title: 'Premium Business Cards (500 pcs)',
      price: '800',
      oldPrice: '1,000',
      save: '200',
      isBestSelling: true,
      image: 'https://images.unsplash.com/photo-1589041127521-b3b0cb5ee189?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Custom Printed Coffee Mug',
      price: '250',
      oldPrice: '350',
      save: '100',
      isBestSelling: false,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Corporate Diary & Pen Set',
      price: '550',
      oldPrice: '650',
      save: '100',
      isBestSelling: true,
      image: 'https://images.unsplash.com/photo-1531346878377-a541e4ab0d4b?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Lanyard with PVC ID Card (10 pcs)',
      price: '1,200',
      oldPrice: '1,500',
      save: '300',
      isBestSelling: true,
      image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA] font-sans">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Section Title */}
        <h2 className="text-center text-[26px] md:text-3xl font-semibold text-[#1A2E35] mb-10">
          Top Selling Products
        </h2>

        {/* Product Grid (2x2 like screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 flex p-5 sm:p-6 relative hover:shadow-md transition-shadow duration-300"
            >
              
              {/* Best Selling Badge (Top Right) */}
              {product.isBestSelling && (
                <div className="absolute top-0 right-0 bg-[#ff4d4f] text-white text-[11px] font-bold px-2.5 py-1.5 flex items-center gap-1 rounded-bl-xl rounded-tr-xl">
                  <Flame size={14} strokeWidth={2.5} />
                  Best Selling
                </div>
              )}

              {/* Left Side: Product Image */}
              <div className="w-2/5 sm:w-1/3 min-w-[120px] flex items-center justify-center pr-4 sm:pr-6">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right Side: Product Info */}
              <div className="w-3/5 sm:w-2/3 flex flex-col justify-center">
                
                {/* Title */}
                <h3 className="text-[17px] sm:text-lg font-medium text-gray-800 mb-2 leading-snug">
                  {product.title}
                </h3>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl font-bold text-[#f58220]">
                    ৳{product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-[15px] font-medium text-gray-400 line-through">
                      ৳{product.oldPrice}
                    </span>
                  )}
                </div>

                {/* Save Badge */}
                {product.save && (
                  <span className="inline-block bg-[#84cc16] text-white text-[11px] font-bold px-3 py-0.5 rounded-full w-max mb-5 tracking-wide">
                    Save ৳{product.save}
                  </span>
                )}

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                  
                  {/* Add To Cart Button */}
                  <button className="flex-1 flex items-center justify-center gap-2 border border-[#f58220] text-[#f58220] hover:bg-[#fff7f0] px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-[13px] sm:text-sm font-semibold transition-colors">
                    <ShoppingCart size={16} strokeWidth={2.5} />
                    Add To Cart
                  </button>

                  {/* Buy Now Button */}
                  <button className="flex-1 bg-[#f58220] hover:bg-[#e6751c] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-[13px] sm:text-sm font-semibold transition-colors shadow-sm">
                    Buy now
                  </button>
                  
                </div>

              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}