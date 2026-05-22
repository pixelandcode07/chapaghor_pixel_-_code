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

// Renamed from 'Variants' to avoid collision with Framer Motion's type
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

// Custom variants for the top white card
const face1Variants: Variants = {
  hidden: { y: 0, boxShadow: "0px 1px 3px 1px rgba(0,0,0,0.15)" },
  visible: {
    y: 0,
    boxShadow: "0px 1px 3px 1px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    y: -16,
    boxShadow: "0px 12px 30px 0px rgba(255,195,181,0.5)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Custom variants for the bottom beige card 
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
      <section className="bg-white py-12 relative">
        {/* Soft radial background glow to match the image depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white pointer-events-none" />

        <div className="max-w-[62vw] mx-auto relative z-10">
          {/* Heading */}
          <h2 className="text-[36px] font-light text-[#012C60] mb-10 text-center tracking-tight">
            YOUR NEEDS
          </h2>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 xl:gap-6 place-items-center"
          >
            {categories.map((category) => (
              <Link
                href={`/category/${category.slug}`}
                key={category._id}
                className="block"
              >
                {/* Wrapper handles layout footprint and passes 
                  hover/stagger triggers to Face 1 & Face 2 
                */}
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative w-[143px] h-[155px] cursor-pointer group z-10 hover:z-50"
                >

                  {/* Face 2: Beige Base (Slides Down) */}
                  <motion.div
                    variants={face2Variants}
                    className="absolute bottom-0 left-0 right-0 h-[85px] bg-[#FBE9DC] rounded-b-2xl flex items-end justify-center pb-3 z-0"
                  >
                    {/* Using a div here instead of a button prevents semantically invalid <button> inside <a> warnings */}
                    <div className="bg-white text-[#012C60] text-[13px] font-medium px-4 py-1.5 rounded shadow-sm border border-gray-50">
                      View Details
                    </div>
                  </motion.div>

                  {/* Face 1: White Card (Slides Up) */}
                  <motion.div
                    variants={face1Variants}
                    className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center p-4 z-10 border border-transparent group-hover:border-[#FFC3B585] transition-colors duration-300"
                  >
                    {/* Dynamic Icon */}
                    <div className="relative w-16 h-16 xl:w-20 xl:h-20 mb-3">
                      <Image
                        src={category.icon || "/icons/card.svg"}
                        alt={`${category.name} icon`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Dynamic Label */}
                    <span className="text-[14px] xl:text-[15px] font-medium text-[#012C60] text-center tracking-tight">
                      {category.name}
                    </span>
                  </motion.div>

                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}


