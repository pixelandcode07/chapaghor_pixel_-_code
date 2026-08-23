// import Link from 'next/link'
// import React from 'react'
// import { Button } from '../ui/button'

// export default function LandingPageBtn() {
//     return (
//         <Link href={'/view-all-product'} className="w-full sm:w-auto">
//             <button
//                 // variant={"ghost"}
//                 className="group relative w-full overflow-hidden rounded-md bg-transparent hover:bg-transparent text-[16px] xl:text-[21px] font-bold shadow-sm transition-all duration-300"
//             >
//                 {/* FRONT OF BUTTON - Initial State (#FD7034) */}
//                 <span className="relative flex h-full w-full items-center justify-center  text-black px-[42px] py-[21px] transition-all duration-500 [transform:translateY(0)_rotateX(0)] group-hover:opacity-0 group-hover:[transform:translateY(50%)_rotateX(90deg)]">
//                     View All Products
//                 </span>

//                 {/* BACK OF BUTTON - Hover State (#012C60) */}
//                 <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center  text-black px-[42px] py-[21px] opacity-0 transition-all duration-500 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:[transform:translateY(0)_rotateX(0)]">
//                     View All Products
//                 </span>
//             </button>
//         </Link>
//     )
// }




// import Link from "next/link";
// import React from "react";

// export default function LandingPageBtn() {
//   return (
//     <Link href="/view-all-product" className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] border border-[#FD7034] border-solid bg-[#FFE0D085] px-3.5 py-1.5 text-[#FD7034] font-medium shadow-sm cursor-pointer transition-all duration-[400ms] ease-in-out hover:bg-orange-400 hover:border-white hover:text-white sm:gap-2 sm:px-4 sm:py-2 md:rounded-[7px] md:px-5 md:py-2.5 lg:rounded-[8px] lg:px-5.5 lg:py-2.5 xl:rounded-[8px] xl:px-6 xl:py-3 1xl:px-7 1xl:py-3.5 3xl:rounded-[10px] 3xl:px-[42px] 3xl:py-[21px]">
//       <span className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 1xl:text-[18px] 3xl:text-[21px]">
//         View All Products
//       </span>

//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transform transition-transform duration-[400ms] ease-in-out group-hover:translate-x-1 md:h-4 md:w-4 lg:h-4.5 lg:w-4.5 xl:h-5 xl:w-5 1xl:h-5.5 1xl:w-5.5 3xl:h-5 3xl:w-5" aria-hidden="true">
//         <path d="M5 12h14" />
//         <path d="m12 5 7 7-7 7" />
//       </svg>
//     </Link>
//   );
// }




import Link from "next/link";
import { ReactNode } from "react";

interface LandingPageBtnProps {
  href?: string;
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

const LandingPageBtn = ({
  href = "#",
  children = "View All Products",
  icon,
  iconPosition = "right",
  className = "",
}: LandingPageBtnProps) => {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full
        border border-[#FD7034]
        px-6.75 py-3.5
        text-[14px] font-bold text-[#FD7034]
        transition-all duration-300 tracking-[0.5px] hover:bg-[#F05A28]/15 hover:text-black
        ${className}
      `}
    >
      {icon && iconPosition === "left" && icon}

      {children}

      {icon && iconPosition === "right" && icon}
    </Link>
  );
};

export default LandingPageBtn;
