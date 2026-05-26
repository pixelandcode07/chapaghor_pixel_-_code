"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  hidden: { y: 0 },
  visible: {
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    y: -16,
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
    y: 45,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function CategoryNeeds() {
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
    <>
      <div className="container mx-auto bg-white py-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white pointer-events-none" />

        {/* <div className=""> */}
          <div className="max-w-[62vw] mx-auto relative z-10">
            <h2 className="h-9 text-[36px] font-[300px] text-[#012C60] mb-10 text-center tracking-tight">
              YOUR NEEDS
            </h2>

            {/* ✅ Switched to flex — cards stay at natural 143px width, gap is exactly 23px */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="max-w-[62vw] mx-auto flex flex-wrap justify-center gap-[23px]"
            >
              {categories.map((category) => (
                <Link
                  href={`/category/${category.slug}`}
                  key={category._id}
                  className="block shadow-[17px] shadow-[#FFC3B585] "
                >
                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    className="relative w-35.75 h-38.75 rounded-[17px] cursor-pointer group z-10 hover:z-50"
                  >

                    {/* Face 2: Beige Base (Slides Down) */}
                    <motion.div
                      variants={face2Variants}
                      className="absolute bottom-0 left-0 right-0 h-[85px] bg-[#FBE9DC] rounded-[17px] flex items-end justify-center pb-3 z-0"
                    >
                      <div className="bg-white text-[#012C60] text-[13px] font-medium px-4 py-1.5 rounded shadow-sm border border-gray-50">
                        View Details
                      </div>
                    </motion.div>

                    {/* Face 1: White Card (Slides Up) */}
                    <motion.div
                      variants={face1Variants}
                      style={{
                        boxShadow: "6px 8px 50px 0px rgba(255, 195, 181, 0.52)"
                      }}
                      className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center gap-6 p-4 z-10 border border-transparent group-hover:border-[#FFC3B585] transition-colors duration-300"
                    >
                      <div className="relative w-16 h-16 xl:w-[67px] xl:h-[50px] mb-3">
                        <Image
                          src={category.icon || "/icons/card.svg"}
                          alt={`${category.name} icon`}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <span className="text-[14px] xl:text-[15px] font-medium text-[#012C60] text-center tracking-tight">
                        {category.name}
                      </span>
                    </motion.div>

                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}