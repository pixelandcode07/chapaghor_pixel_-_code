// "use client";

// import { useEffect, useState } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// export default function CustomCursor() {
//   const [isVisible, setIsVisible] = useState(false);
<<<<<<< HEAD
=======
//   const [isEnabled, setIsEnabled] = useState(true);
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889

//   // Motion values track the raw mouse position
//   const mouseX = useMotionValue(-100);
//   const mouseY = useMotionValue(-100);

<<<<<<< HEAD
//   // Springs add the smooth "trailing" animation effect
//   // Outer halo has a bit more drag (lower stiffness) so it trails slightly behind
//   const haloSpringX = useSpring(mouseX, { damping: 25, stiffness: 120 });
//   const haloSpringY = useSpring(mouseY, { damping: 25, stiffness: 120 });

//   // Inner dot is faster/snappier
//   const dotSpringX = useSpring(mouseX, { damping: 30, stiffness: 200 });
//   const dotSpringY = useSpring(mouseY, { damping: 30, stiffness: 200 });
=======
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
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
<<<<<<< HEAD
//       if (!isVisible) setIsVisible(true);
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, [mouseX, mouseY, isVisible]);

//   // Don't render until the mouse moves to avoid it sitting in the corner
=======

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
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
//   if (!isVisible) return null;

//   return (
//     <>
<<<<<<< HEAD
//      {/* 1. The Light Orange Outer Halo (Removed blur, dropped opacity) */}
=======
//       {/* Outer Halo */}
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
//       <motion.div
//         style={{
//           x: haloSpringX,
//           y: haloSpringY,
//         }}
<<<<<<< HEAD
//         className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -ml-6 -mt-6 rounded-full bg-[#F05A28]/15"
//       />

//       {/* 2. The Solid Inner Dot */}
=======
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
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
//       <motion.div
//         style={{
//           x: dotSpringX,
//           y: dotSpringY,
//         }}
<<<<<<< HEAD
=======
//         animate={{
//           opacity: isEnabled ? 1 : 0,
//           scale: isEnabled ? 1 : 0.5,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
//         className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -ml-[5px] -mt-[5px] rounded-full bg-[#F05A28] shadow-sm"
//       />
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import { ArrowRight } from "lucide-react";
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
<<<<<<< HEAD
=======
  const [isArrowMode, setIsArrowMode] = useState(false);
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889

  // Motion values track the raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

<<<<<<< HEAD
  // Springs add the smooth trailing animation
=======
  // Outer halo spring
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
  const haloSpringX = useSpring(mouseX, {
    damping: 25,
    stiffness: 120,
  });

  const haloSpringY = useSpring(mouseY, {
    damping: 25,
    stiffness: 120,
  });

<<<<<<< HEAD
  const dotSpringX = useSpring(mouseX, {
=======
  // Main cursor spring
  const cursorSpringX = useSpring(mouseX, {
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
    damping: 30,
    stiffness: 200,
  });

<<<<<<< HEAD
  const dotSpringY = useSpring(mouseY, {
=======
  const cursorSpringY = useSpring(mouseY, {
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
    damping: 30,
    stiffness: 200,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }
    };

<<<<<<< HEAD
    const hideCursor = () => setIsEnabled(false);
    const showCursor = () => setIsEnabled(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("hide-custom-cursor", hideCursor);
    window.addEventListener("show-custom-cursor", showCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("hide-custom-cursor", hideCursor);
      window.removeEventListener("show-custom-cursor", showCursor);
=======
    // Completely hide custom cursor
    const hideCursor = () => {
      setIsEnabled(false);
    };

    // Show normal custom cursor
    const showCursor = () => {
      setIsEnabled(true);
      setIsArrowMode(false);
    };

  const enableArrowCursor = () => {
  setIsArrowMode(true);
};

const disableArrowCursor = () => {
  setIsArrowMode(false);
};

window.addEventListener(
  "service-card-cursor-enter",
  enableArrowCursor
);

window.addEventListener(
  "service-card-cursor-leave",
  disableArrowCursor
);

    window.addEventListener("mousemove", moveCursor);

    window.addEventListener("hide-custom-cursor", hideCursor);
    window.addEventListener("show-custom-cursor", showCursor);

    window.addEventListener(
      "enable-arrow-custom-cursor",
      enableArrowCursor,
    );

    window.addEventListener(
      "disable-arrow-custom-cursor",
      disableArrowCursor,
    );

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      window.removeEventListener(
        "hide-custom-cursor",
        hideCursor,
      );

      window.removeEventListener(
        "show-custom-cursor",
        showCursor,
      );

      window.removeEventListener(
    "service-card-cursor-enter",
    enableArrowCursor
  );

  window.removeEventListener(
    "service-card-cursor-leave",
    disableArrowCursor
  );
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render until the mouse moves
  if (!isVisible) return null;

  return (
    <>
      {/* Outer Halo */}
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
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -ml-6 -mt-6 rounded-full bg-[#F05A28]/15"
      />

<<<<<<< HEAD
      {/* Inner Dot */}
      <motion.div
        style={{
          x: dotSpringX,
          y: dotSpringY,
        }}
        animate={{
          opacity: isEnabled ? 1 : 0,
          scale: isEnabled ? 1 : 0.5,
        }}
        transition={{
          duration: 0.2,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -ml-[5px] -mt-[5px] rounded-full bg-[#F05A28] shadow-sm"
      />
=======
      {/* Normal Inner Dot */}
      <motion.div
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
        animate={{
          opacity: isEnabled && !isArrowMode ? 1 : 0,
          scale: isEnabled && !isArrowMode ? 1 : 0.5,
        }}
        transition={{
          duration: 0.15,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -ml-[5px] -mt-[5px] rounded-full bg-[#F05A28] shadow-sm"
      />

      {/* Arrow Cursor */}
      <motion.div
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
        animate={{
          opacity: isEnabled && isArrowMode ? 1 : 0,
          scale: isEnabled && isArrowMode ? 1 : 0.6,
        }}
        transition={{
          opacity: {
            duration: 0.15,
          },
          scale: {
            duration: 0.2,
          },
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-8 w-8 -ml-4 -mt-4 items-center justify-center rounded-full bg-black shadow-xl md:h-11 md:w-11 md:-ml-[22px] md:-mt-[22px] xl:h-14 xl:w-14 xl:-ml-7 xl:-mt-7"
      >
        <ArrowRight
          className="h-3.5 w-3.5 text-white md:h-5.5 md:w-5.5"
          strokeWidth={2.5}
        />
      </motion.div>
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
    </>
  );
}