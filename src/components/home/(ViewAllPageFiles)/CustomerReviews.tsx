import React from "react";
import { Star, StarHalf, ChevronDown } from "lucide-react";

export default function CustomerReviews() {
    const reviews = [
        {
            id: 1,
            date: "Fri, 25 Apr, 2025",
            author: "Jananee Manoranjitham",
            text: "The prints are amazing!I loved it,",
        },
        {
            id: 2,
            date: "Sat, 3 May, 2025",
            author: "Ashwin Suman Lakra",
            text: "The best service",
        },
        {
            id: 3,
            date: "Wed, 7 May, 2025",
            author: "TECHNO",
            text: "Good!",
        },
    ];

    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-4 max-w-[1235px] text-gray-800">
                {/* --- Main Header Section --- */}
                <h2 className="text-[26px] font-bold text-[#4B5563] mb-4 tracking-tight">
                    Customer Reviews
                </h2>

                {/* Overall Rating */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-[2px] text-[#FBBF24]">
                        <Star fill="currentColor" size={20} strokeWidth={0} />
                        <Star fill="currentColor" size={20} strokeWidth={0} />
                        <Star fill="currentColor" size={20} strokeWidth={0} />
                        <Star fill="currentColor" size={20} strokeWidth={0} />
                        <StarHalf fill="currentColor" size={20} strokeWidth={0} />
                    </div>
                    <span className="text-[14px] text-gray-600">
                        Overall 4.7 out of 5 from 7 Reviews
                    </span>
                </div>

                {/* Recommendation Stats */}
                <div className="flex items-center gap-2 mb-10">
                    <span className="text-[32px] font-bold text-gray-800 leading-none">
                        71.4%
                    </span>
                    <span className="text-[13px] text-gray-600 leading-[1.2]">
                        of respondents would <br /> recommend this to a friend
                    </span>
                </div>

                {/* --- Sub Header (Corrected Layout) --- */}
                {/* As requested: "Highest to lowest" section is placed 
        to the LEFT of the "Customer Reviews" title. 
      */}
                <div className="flex justify-between items-center gap-6 mb-6">

                    <h3 className="text-[18px] font-bold text-[#4B5563]">
                        Customer Reviews
                    </h3>

                    <button className="flex items-center gap-1 text-[14px] text-gray-600 hover:text-gray-900 transition-colors">
                        Highest to lowest <ChevronDown size={16} />
                    </button>
                </div>

                {/* --- Reviews List --- */}
                <div className="flex flex-col gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="flex flex-col">
                            {/* 5 Stars for Individual Review */}
                            <div className="flex items-center gap-[2px] text-[#FBBF24] mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} fill="currentColor" size={16} strokeWidth={0} />
                                ))}
                            </div>

                            {/* Date and Author */}
                            <div className="text-[13px] text-[#9CA3AF] mb-2">
                                {review.date} <span className="mx-1 text-[#6B7280]">by</span>{" "}
                                <span className="text-[#6B7280]">{review.author}</span>
                            </div>

                            {/* Review Text */}
                            <p className="text-[15px] text-gray-800">{review.text}</p>
                        </div>
                    ))}
                </div>

                {/* --- Pagination --- */}
                <div className="flex justify-center items-center gap-3 mt-12 mb-4">
                    <button className="px-3 py-1.5 border border-gray-200 text-gray-400 bg-gray-50 rounded-[3px] text-[14px] cursor-not-allowed">
                        Prev
                    </button>
                    <span className="text-[15px] text-gray-600 font-medium px-2">
                        1 / 3
                    </span>
                    <button className="px-3 py-1.5 border border-gray-400 text-gray-800 bg-white hover:bg-gray-50 rounded-[3px] text-[14px] transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}