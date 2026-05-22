"use client";

import { useState } from "react";
import CategoryNeeds from "@/components/home/CategoryNeeds";
import NavbHead from "@/components/home/NavbHead";
import UnderDevelopmentModal from "@/components/home/UnderDevelopmentModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col relative">
      
      {/* Modal Logic */}
      {isModalOpen && (
        <UnderDevelopmentModal onClose={() => setIsModalOpen(false)} />
      )}

      {/* Header */}
      <NavbHead />

      {/* Category Needs */}
      <CategoryNeeds />

      {/* Main content */}
      <div className="flex-grow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-[#003B5C] mb-4">
              Welcome to Chapaghor
            </h1>
            <p className="text-gray-500">
              Header and Needs section are ready!
            </p>
          </div>
        </div>
      </div>
      
    </main>
  );
}