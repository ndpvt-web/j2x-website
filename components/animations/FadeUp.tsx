"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  return (
    <motion.div
      variants={fadeUp}
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
