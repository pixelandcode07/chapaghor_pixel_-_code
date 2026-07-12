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




import Link from "next/link";
import React from "react";

export default function LandingPageBtn() {
  return (
    <Link
      href="/view-all-product"
      className="group inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 3xl:px-[42px] 3xl:py-[21px] border border-orange-500 border-solid rounded-[10px] font-medium transition-all duration-[400ms] ease-in-out hover:bg-orange-400 hover:border-white hover:text-white shadow-sm cursor-pointer"
    >
      <span className="text-[21px]">View All Products</span>

      {/* Lucide Arrow Right Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transform w-[20px] h-[20px] transition-transform duration-[400ms] ease-in-out group-hover:translate-x-1"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </Link>
  );
}
