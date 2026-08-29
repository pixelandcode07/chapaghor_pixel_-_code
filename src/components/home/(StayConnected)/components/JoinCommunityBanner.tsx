import React from 'react';

export default function JoinCommunityBanner() {
  return (
    <section className=" container-custom py-4  mx-auto">
      <div className=" ">
        <div className="bg-[#FF6B00] rounded-2xl  px-5 sm:px-8 py-5 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-lg">
          {/* Left side: Avatars + Text */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
            {/* Overlapping Avatars */}
            <div className="relative flex items-center -space-x-3 flex-shrink-0">
              {/* Avatar 1 */}
              <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-[3px] border-white overflow-hidden bg-gray-200">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Avatar 2 */}
              <div className="relative z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-[3px] border-white overflow-hidden bg-gray-200">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Avatar 3 + Badge */}
              <div className="relative z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-[3px] border-white overflow-hidden bg-gray-200">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 40k+ Badge */}
              <div className="absolute -right-3 -bottom-1 z-40 bg-[#FF8A3D] text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm">
                40k+
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center sm:text-left">
              <h2 className="text-white text-lg sm:text-xl font-bold leading-tight">
                Join 40,000+ Happy Customers
              </h2>
              <p className="text-orange-100 text-xs sm:text-sm mt-0.5 leading-snug">
                Be part of our growing community and stay inspired every day
              </p>
            </div>
          </div>

          {/* Right side: Button */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold text-sm sm:text-base px-5 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200">
              Join Our Community
              <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
