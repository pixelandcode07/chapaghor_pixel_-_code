import React from 'react';

export default function ConnectedFeatureBar() {
  return (
    <div className="px-3 xl:px-14 container-custom py-0 my-0 mx-auto">
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-stretch justify-between gap-4 sm:gap-0">
        {/* Design Tips */}
        <div className="flex items-center gap-3 flex-1 sm:border-r sm:border-gray-100 sm:pr-4 lg:pr-6">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Design Tips</h4>
            <p className="text-xs text-gray-500 leading-tight mt-0.5">
              Helpful tips & tricks
              <br className="hidden sm:block" />
              for perfect prints
            </p>
          </div>
        </div>

        {/* Daily Offers */}
        <div className="flex items-center gap-3 flex-1 sm:border-r sm:border-gray-100 sm:px-4 lg:px-6">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Daily Offers
            </h4>
            <p className="text-xs text-gray-500 leading-tight mt-0.5">
              Exclusive discounts
              <br className="hidden sm:block" />
              and seasonal offers
            </p>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="flex items-center gap-3 flex-1 sm:border-r sm:border-gray-100 sm:px-4 lg:px-6">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Customer Reviews
            </h4>
            <p className="text-xs text-gray-500 leading-tight mt-0.5">
              Real experiences from
              <br className="hidden sm:block" />
              our happy customers
            </p>
          </div>
        </div>

        {/* Latest Projects */}
        <div className="flex items-center gap-3 flex-1 sm:pl-4 lg:pl-6">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Latest Projects
            </h4>
            <p className="text-xs text-gray-500 leading-tight mt-0.5">
              Explore our latest
              <br className="hidden sm:block" />
              creative works
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
