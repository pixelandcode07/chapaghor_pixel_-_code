// "use client";

// import { useEffect, useState } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// export default function CustomCursor() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isEnabled, setIsEnabled] = useState(true);

//   // Motion values track the raw mouse position
//   const mouseX = useMotionValue(-100);
//   const mouseY = useMotionValue(-100);

//   // Springs add the smooth trailing animation
//   const haloSpringX = useSpring(mouseX, {
//     damping: 25,
//     stiffness: 120,
//   });

//   const haloSpringY = useSpring(mouseY, {
//     damping: 25,
//     stiffness: 120,
//   });

//   const dotSpringX = useSpring(mouseX, {
//     damping: 30,
//     stiffness: 200,
//   });

//   const dotSpringY = useSpring(mouseY, {
//     damping: 30,
//     stiffness: 200,
//   });

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);

//       if (!isVisible) {
//         setIsVisible(true);
//       }
//     };

//     const hideCursor = () => setIsEnabled(false);
//     const showCursor = () => setIsEnabled(true);

//     window.addEventListener("mousemove", moveCursor);
//     window.addEventListener("hide-custom-cursor", hideCursor);
//     window.addEventListener("show-custom-cursor", showCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       window.removeEventListener("hide-custom-cursor", hideCursor);
//       window.removeEventListener("show-custom-cursor", showCursor);
//     };
//   }, [mouseX, mouseY, isVisible]);

//   // Don't render until the mouse moves
//   if (!isVisible) return null;

//   return (
//     <>
//       {/* Outer Halo */}
//       <motion.div
//         style={{
//           x: haloSpringX,
//           y: haloSpringY,
//         }}
//         animate={{
//           opacity: isEnabled ? 1 : 0,
//           scale: isEnabled ? 1 : 0.5,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -ml-6 -mt-6 rounded-full bg-[#F05A28]/15"
//       />

//       {/* Inner Dot */}
//       <motion.div
//         style={{
//           x: dotSpringX,
//           y: dotSpringY,
//         }}
//         animate={{
//           opacity: isEnabled ? 1 : 0,
//           scale: isEnabled ? 1 : 0.5,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -ml-[5px] -mt-[5px] rounded-full bg-[#F05A28] shadow-sm"
//       />
//     </>
//   );
// }

// =================================================================
// =================================================================
// =================================================================



// 'use client';

// import { useEffect, useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';

// export default function CustomCursor() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isEnabled, setIsEnabled] = useState(true);
//   const [isArrowMode, setIsArrowMode] = useState(false);

//   // Motion values track the raw mouse position
//   const mouseX = useMotionValue(-100);
//   const mouseY = useMotionValue(-100);

//   // Outer halo spring
//   const haloSpringX = useSpring(mouseX, {
//     damping: 25,
//     stiffness: 120,
//   });

//   const haloSpringY = useSpring(mouseY, {
//     damping: 25,
//     stiffness: 120,
//   });

//   // Main cursor spring
//   const cursorSpringX = useSpring(mouseX, {
//     damping: 30,
//     stiffness: 200,
//   });

//   const cursorSpringY = useSpring(mouseY, {
//     damping: 30,
//     stiffness: 200,
//   });

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);

//       if (!isVisible) {
//         setIsVisible(true);
//       }
//     };

//     // Completely hide custom cursor
//     const hideCursor = () => {
//       setIsEnabled(false);
//     };

//     // Show normal custom cursor
//     const showCursor = () => {
//       setIsEnabled(true);
//       setIsArrowMode(false);
//     };

//     const enableArrowCursor = () => {
//       setIsArrowMode(true);
//     };

//     const disableArrowCursor = () => {
//       setIsArrowMode(false);
//     };

//     window.addEventListener('service-card-cursor-enter', enableArrowCursor);

//     window.addEventListener('service-card-cursor-leave', disableArrowCursor);

//     window.addEventListener('mousemove', moveCursor);

//     window.addEventListener('hide-custom-cursor', hideCursor);
//     window.addEventListener('show-custom-cursor', showCursor);

//     window.addEventListener('enable-arrow-custom-cursor', enableArrowCursor);

//     window.addEventListener('disable-arrow-custom-cursor', disableArrowCursor);

//     return () => {
//       window.removeEventListener('mousemove', moveCursor);

//       window.removeEventListener('hide-custom-cursor', hideCursor);

//       window.removeEventListener('show-custom-cursor', showCursor);

//       window.removeEventListener(
//         'service-card-cursor-enter',
//         enableArrowCursor
//       );

//       window.removeEventListener(
//         'service-card-cursor-leave',
//         disableArrowCursor
//       );
//     };
//   }, [mouseX, mouseY, isVisible]);

//   // Don't render until the mouse moves
//   if (!isVisible) return null;

//   return (
//     <>
//       {/* Outer Halo */}
//       <motion.div
//         style={{
//           x: haloSpringX,
//           y: haloSpringY,
//         }}
//         animate={{
//           opacity: isEnabled ? 1 : 0,
//           scale: isEnabled ? 1 : 0.5,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -ml-6 -mt-6 rounded-full bg-[#F05A28]/15"
//       />

//       {/* Normal Inner Dot */}
//       <motion.div
//         style={{
//           x: cursorSpringX,
//           y: cursorSpringY,
//         }}
//         animate={{
//           opacity: isEnabled && !isArrowMode ? 1 : 0,
//           scale: isEnabled && !isArrowMode ? 1 : 0.5,
//         }}
//         transition={{
//           duration: 0.15,
//         }}
//         className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -ml-[5px] -mt-[5px] rounded-full bg-[#F05A28] shadow-sm"
//       />

//       {/* Arrow Cursor */}
//       <motion.div
//         style={{
//           x: cursorSpringX,
//           y: cursorSpringY,
//         }}
//         animate={{
//           opacity: isEnabled && isArrowMode ? 1 : 0,
//           scale: isEnabled && isArrowMode ? 1 : 0.6,
//         }}
//         transition={{
//           opacity: {
//             duration: 0.15,
//           },
//           scale: {
//             duration: 0.2,
//           },
//         }}
//         className="cursor-pointer pointer-events-none fixed left-0 top-0 z-[9999] flex h-8 w-8 -ml-4 -mt-4 items-center justify-center rounded-full bg-black shadow-xl md:h-11 md:w-11 md:-ml-[22px] md:-mt-[22px] xl:h-14 xl:w-14 xl:-ml-7 xl:-mt-7">
//         <ArrowRight
//           className="h-3.5 w-3.5 text-white md:h-5.5 md:w-5.5"
//           strokeWidth={2.5}
//         />
//       </motion.div>
//     </>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isArrowMode, setIsArrowMode] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer halo spring
  const haloSpringX = useSpring(mouseX, {
    damping: 25,
    stiffness: 120,
  });

  const haloSpringY = useSpring(mouseY, {
    damping: 25,
    stiffness: 120,
  });

  // Main cursor spring
  const cursorSpringX = useSpring(mouseX, {
    damping: 30,
    stiffness: 200,
  });

  const cursorSpringY = useSpring(mouseY, {
    damping: 30,
    stiffness: 200,
  });

  useEffect(() => {
    // Track mouse
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    // Completely hide custom cursor
    const hideCursor = () => {
      setIsEnabled(false);
    };

    // Show normal custom cursor
    const showCursor = () => {
      setIsEnabled(true);
      setIsArrowMode(false);
    };

    // Service card enter
    const enableArrowCursor = () => {
      setIsArrowMode(true);
    };

    // Service card leave
    const disableArrowCursor = () => {
      setIsArrowMode(false);
    };

    window.addEventListener('mousemove', moveCursor);

    window.addEventListener(
      'hide-custom-cursor',
      hideCursor
    );

    window.addEventListener(
      'show-custom-cursor',
      showCursor
    );

    window.addEventListener(
      'service-card-cursor-enter',
      enableArrowCursor
    );

    window.addEventListener(
      'service-card-cursor-leave',
      disableArrowCursor
    );

    window.addEventListener(
      'enable-arrow-custom-cursor',
      enableArrowCursor
    );

    window.addEventListener(
      'disable-arrow-custom-cursor',
      disableArrowCursor
    );

    return () => {
      window.removeEventListener(
        'mousemove',
        moveCursor
      );

      window.removeEventListener(
        'hide-custom-cursor',
        hideCursor
      );

      window.removeEventListener(
        'show-custom-cursor',
        showCursor
      );

      window.removeEventListener(
        'service-card-cursor-enter',
        enableArrowCursor
      );

      window.removeEventListener(
        'service-card-cursor-leave',
        disableArrowCursor
      );

      window.removeEventListener(
        'enable-arrow-custom-cursor',
        enableArrowCursor
      );

      window.removeEventListener(
        'disable-arrow-custom-cursor',
        disableArrowCursor
      );
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render until mouse moves
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* ========================================
          OUTER HALO
      ======================================== */}
      <motion.div
        style={{
          x: haloSpringX,
          y: haloSpringY,
        }}
        animate={{
          opacity: isEnabled ? 1 : 0,
          scale: isEnabled ? 1 : 0.5,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          h-10
          w-10
          -ml-5
          -mt-5
          rounded-full
          bg-[#F05A28]/15
        "
      />

      {/* ========================================
          NORMAL INNER DOT
      ======================================== */}
      <motion.div
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
        animate={{
          opacity:
            isEnabled && !isArrowMode ? 1 : 0,
          scale:
            isEnabled && !isArrowMode ? 1 : 0.5,
        }}
        transition={{
          duration: 0.15,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-2
          w-2
          -ml-1
          -mt-1
          rounded-full
          bg-[#F05A28]
          shadow-sm
        "
      />

      {/* ========================================
          SERVICE CARD ARROW CURSOR
      ======================================== */}
      <motion.div
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
        animate={{
          opacity:
            isEnabled && isArrowMode ? 1 : 0,
          scale:
            isEnabled && isArrowMode ? 1 : 0.6,
        }}
        transition={{
          opacity: {
            duration: 0.15,
          },
          scale: {
            duration: 0.2,
          },
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]

          flex
          h-8
          w-8
          -ml-4
          -mt-4

          items-center
          justify-center

          rounded-full
          bg-black
          shadow-xl

          md:h-11
          md:w-11
          md:-ml-[22px]
          md:-mt-[22px]

          xl:h-14
          xl:w-14
          xl:-ml-7
          xl:-mt-7
        "
      >
        <ArrowRight
          className="
            h-3.5
            w-3.5
            text-white

            md:h-5
            md:w-5

            xl:h-6
            xl:w-6
          "
          strokeWidth={2.5}
        />
      </motion.div>
    </>
  );
}