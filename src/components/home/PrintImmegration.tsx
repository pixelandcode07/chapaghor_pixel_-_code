"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Loader2, SquareArrowOutUpRight } from "lucide-react";
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

          <h1 className="lg:text-3xl 3xl:text-[40px] font-light text-[#012C60] mb-10 text-center tracking-normal">
            PRINT YOUR IMAGINATION
          </h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-[92vw] sm:w-[85vw] md:w-[75vw] lg:w-[900px] xl:w-[1006px] flex flex-wrap justify-center gap-4 xl:gap-[24px]"
          >
            {categories.map((category) => (
              <button
                key={category._id}
                className="block outline-none"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative w-[130px] h-[140px] xl:w-[147.4px] xl:h-[159.76px] rounded-[17.5px] cursor-pointer group z-10 hover:z-50"
                >
                  <motion.div
                    variants={face2Variants}
                    className="absolute bottom-0 left-0 right-0 h-[95px] bg-[#FD7034] rounded-b-[17.5px] flex items-end justify-center pb-3 z-0"
                  >
                    {/* <div className="bg-white text-[#012C60] text-[13px] font-medium px-4 py-1.5 rounded shadow-xl border border-gray-100">
                    </div> */}
                     <h2 className="flex justify-center items-center gap-0.5 text-base font-medium text-white"> ORDER  <SquareArrowOutUpRight className="h-3.5 w-3.5" /></h2>
                  </motion.div>

                  <motion.div
                    variants={face1Variants}
                    className="absolute inset-0 bg-white rounded-[17.5px] flex flex-col items-center justify-center gap-4 xl:gap-5 p-4 z-10 border border-transparent group-hover:border-white transition-colors duration-300 shadow-[6.9px_10.85px_45.37px_-5.92px_#DCDBDD] hover:shadow-none "
                  >
                    <div className="relative w-14 h-14 xl:w-[80px] xl:h-[80px] mb-1 transform transition-all duration-500 ease-in-out group-hover:scale-110">
                      <Image
                        src={category.icon || "/icons/card.svg"}
                        alt={`${category.name} icon`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm xl:text-[16px] 3xl:text-[18px] whitespace-nowrap font-light text-[#012C60] text-center tracking-normal">
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