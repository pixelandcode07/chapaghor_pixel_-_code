"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // Motion values track the raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs add the smooth "trailing" animation effect
  // Outer halo has a bit more drag (lower stiffness) so it trails slightly behind
  const haloSpringX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const haloSpringY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  // Inner dot is faster/snappier
  const dotSpringX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const dotSpringY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY, isVisible]);

  // Don't render until the mouse moves to avoid it sitting in the corner
  if (!isVisible) return null;

  return (
    <>
     {/* 1. The Light Orange Outer Halo (Removed blur, dropped opacity) */}
      <motion.div
        style={{
          x: haloSpringX,
          y: haloSpringY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -ml-6 -mt-6 rounded-full bg-[#F05A28]/15"
      />

      {/* 2. The Solid Inner Dot */}
      <motion.div
        style={{
          x: dotSpringX,
          y: dotSpringY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -ml-[5px] -mt-[5px] rounded-full bg-[#F05A28] shadow-sm"
      />
    </>
  );
}