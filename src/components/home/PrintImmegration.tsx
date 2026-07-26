"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { CustomSquareArrowOutUpRight } from "./(Navbar)/components/custom/icons";
import { Category } from "./(Navbar)/components/types-of-navhead/NavHeadType";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.0, 0.0, 0.2, 1.0] },
  },
};

const face1Variants: Variants = {
  hidden: { top: 0, bottom: 0 },
  visible: {
    top: 0,
    bottom: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    top: -10,
    bottom: 32,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const face2Variants: Variants = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    y: 22,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function PrintImmegration() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const canHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches;

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
      <div
        style={{ display: "flex", justifyContent: "center", padding: "80px 0" }}
      >
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <Loader2
          size={40}
          style={{ color: "#F05A28", animation: "spin 1s linear infinite" }}
        />
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="w-full md:pt-9 xl:pt-13.5 pb-8 xl:pb-13.75 3xl:pb-21.5 relative flex flex-col items-center">
        <div className="relative z-10 w-full flex flex-col items-center">
          <h1 className="text-[23px] md:text-[26px] xl:text-3xl 3xl:text-[48px] tracking-[0.5px] font-light text-[#012C60] mb-5.25 md:mb-6.75 xl:mb-9.75 3xl:mb-15 text-center">
            PRINT YOUR IMAGINATION
          </h1>

          <div className="w-full max-w-[92vw] md:max-w-149 lg:max-w-187.5 xl:max-w-[73vw] 3xl:max-w-[71vw] mx-auto rounded-xl">
            <div className="w-full md:overflow-x-auto xl:overflow-visible scrollbar-hide">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-6 gap-5 md:gap-5.75 xl:gap-6.25 3xl:gap-8.5 md:h-50 justify-between items-center md:w-max xl:w-full"
              >
                {categories.map((category) => (
                  <button key={category._id} className="block outline-none">
                    <motion.div
                      variants={itemVariants}
                      whileHover={canHover ? "hover" : undefined}
                      animate={
                        activeCard === category._id ? "hover" : "visible"
                      }
                      onTap={() => {
                        if (!canHover) {
                          setActiveCard(
                            activeCard === category._id ? null : category._id,
                          );
                        }
                      }}
                      className="relative justify-self-center w-27.5 h-29.75 md:w-32.75 md:h-35.5 xl:w-32.25 xl:h-35 3xl:w-[196.39px] 3xl:h-[212.87px] rounded-[13.06px] md:rounded-[15.54px] xl:rounded-[15.23px] 3xl:rounded-[23.35px] cursor-pointer group z-10 hover:z-50 shadow-[6.9px_10.85px_45.37px_-5.92px_#DCDBDD]"
                    >
                      <motion.div
                        variants={face2Variants}
                        className="absolute bottom-0 left-0 right-0 h-23.75 bg-[#FD7034] rounded-b-[17.5px] flex items-end justify-center mb-0.5 pb-3 z-0"
                      >
                        <h2 className="flex items-center justify-center gap-0.5 text-sm xl:text-[16px] 3xl:text-[23px] font-light text-white tracking-[0.5px]">
                          ORDER
                          <CustomSquareArrowOutUpRight className="size-3 xl:size-4.5 mb-1 xl:mt-1 ml-1" />
                        </h2>
                      </motion.div>

                      <motion.div
                        variants={face1Variants}
                        className="absolute inset-0 bg-white rounded-[17.5px] flex flex-col items-center justify-center gap-4 xl:gap-5 p-4 z-10 border border-transparent group-hover:border-white transition-colors duration-300"
                      >
                        <div className="relative w-14 h-14 xl:w-20 xl:h-20 3xl:w-26.75 3xl:h-26.75 mb-1 transform transition-all duration-500 ease-in-out group-hover:scale-75">
                          <Image
                            src={category.icon || "/icons/card.svg"}
                            alt={`${category.name} icon`}
                            fill
                            className="object-contain"
                          />
                        </div>

                        <span className="text-sm xl:text-[16px] 3xl:text-[22px] whitespace-nowrap font-light text-[#012C60] text-center tracking-[0.5px]">
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
      </div>
    </div>
  );
}
