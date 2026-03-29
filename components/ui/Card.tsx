"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = "", hoverable = true }: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? {
        y: -2,
        boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.06)",
        transition: { duration: 0.2, ease: "easeOut" },
      } : undefined}
      className={`bg-white rounded-xl shadow-card p-6 transition-shadow duration-200 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
}
