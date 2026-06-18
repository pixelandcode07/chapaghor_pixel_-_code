// "use client";

// import { ArrowUpIcon } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Button } from "./ui/button";

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <>
//       {isVisible && (
//         <Button
//           onClick={scrollToTop}
//           className="fixed bottom-80 right-16 z-50 p-6 rounded-full "
//           size={'icon'}
//           aria-label="Scroll to top"
//         >
//           <ArrowUpIcon />
//         </Button>
//       )}
//     </>
//   );
// }



"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          // The fixed positioning from your original code (bottom-80 right-16 z-50) is retained here. 
          // The rest are exact translations of the Uiverse.io hover animations.
          className="group fixed bottom-80 right-16 z-50 flex h-[50px] w-[50px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-[#F05A28]/15 font-semibold shadow-[0px_0px_0px_4px_#FD7034] transition-all duration-300 hover:w-[140px] hover:rounded-[50px] hover:bg-[#F05A28]/15"
          // className="group fixed bottom-80 right-16 z-50 flex h-[50px] w-[50px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-[rgb(20,20,20)] font-semibold shadow-[0px_0px_0px_4px_rgba(180,160,255,0.253)] transition-all duration-300 hover:w-[140px] hover:rounded-[50px] hover:bg-[#F05A28]/15"
          aria-label="Scroll to top"
        >
          {/* Uiverse SVG Icon */}
          <svg
            className="w-[12px] fill-black transition-all duration-300 group-hover:-translate-y-[200%]"
            viewBox="0 0 384 512"
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
          
          {/* Replaces the CSS ::before element for cleaner React implementation */}
          <span className="absolute bottom-[-20px] text-[0px] text-black transition-all duration-300 group-hover:static group-hover:text-[13px] group-hover:opacity-100">
            Back to Top
          </span>
        </button>
      )}
    </>
  );
}