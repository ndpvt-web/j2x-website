"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";

interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
  delay?: number;
}

export function SlideIn({ children, direction = "left", className, delay = 0 }: SlideInProps) {
  return (
    <motion.div
      variants={direction === "left" ? slideInLeft : slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
