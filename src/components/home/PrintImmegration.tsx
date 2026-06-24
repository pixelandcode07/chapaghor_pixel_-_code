"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Category = {
  _id: string;
  name: string;
  slug: string;
  icon: string;
  isFeatured: boolean;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.0, 0.0, 0.2, 1.0] }
  }
};

const face1Variants: Variants = {
  hidden: { top: 0, bottom: 0 },
  visible: {
    top: 0,
    bottom: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    top: -10,
    bottom: 32,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const face2Variants: Variants = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    y: 22,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function PrintImmegration() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedCategories = async () => {
      try {
        const res = await fetch("/api/v1/categories");
        const data = await res.json();
        if (data.success) {
          const featured = data.data.filter((c: Category) => c.isFeatured);
          setCategories(featured);
        }
      } catch (error) {
        console.error("Failed to load featured categories", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeaturedCategories();
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "80px 0" }}>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <Loader2 size={40} style={{ color: "#F05A28", animation: "spin 1s linear infinite" }} />
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="w-full pt-10 pb-[65px] relative flex flex-col items-center">
        <div className="relative z-10 w-full flex flex-col items-center">
          
          <h1 className="lg:text-3xl xl:text-[36px] font-light text-[#012C60] mb-10 text-center tracking-normal">
            PRINT YOUR IMAGINATION
          </h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            // ✅ FIX: Fixed Width + Exactly 24px Gap
            className="w-[92vw] sm:w-[85vw] md:w-[75vw] lg:w-[900px] xl:w-[1020px] flex flex-wrap justify-center gap-[24px]"
          >
            {categories.map((category) => (
              <button
                key={category._id}
                className="block shadow-[17px] shadow-[#FFC3B585]"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                  // কার্ডের ফিক্সড সাইজ (Desktop-এ ১৩০px এবং ১৫px)
                  className="relative w-[130px] h-[140px] xl:w-[150px] xl:h-[160px] rounded-[17px] cursor-pointer group z-10 hover:z-50"
                >
                  <motion.div
                    variants={face2Variants}
                    className="absolute bottom-0 left-0 right-0 h-[95px] bg-[#FBE9DC] rounded-b-[17px] flex items-end justify-center pb-3 z-0"
                  >
                    <div className="bg-white text-[#012C60] text-[13px] font-medium px-4 py-1.5 rounded shadow-sm border border-gray-50">
                      View Details
                    </div>
                  </motion.div>

                  <motion.div
                    variants={face1Variants}
                    className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center gap-6 p-4 z-10 border border-transparent group-hover:border-[#FFC3B585] transition-colors duration-300 shadow-[6.9px_10.85px_45.37px_-5.92px_#DCDBDD] group-hover:shadow-[6.9px_10.85px_45.37px_-5.92px_#DCDBDD]"
                  >
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mb-3 transform transition-all duration-500 ease-in-out group-hover:scale-110">
                      <Image
                        src={category.icon || "/icons/card.svg"}
                        alt={`${category.name} icon`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm lg:text-base xl:text-[16.49px] whitespace-nowrap font-light text-[#012C60] text-center tracking-normal">
                      {category.name}
                    </span>
                  </motion.div>
                </motion.div>
              </button>
            ))}
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}