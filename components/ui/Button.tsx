"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const variantStyles: Record<string, string> = {
  primary: "bg-coral-600 text-white hover:bg-coral-700",
  secondary: "bg-transparent text-teal-800 border border-teal-800 hover:bg-teal-50",
  ghost: "bg-transparent text-gray-700 hover:text-gray-900",
  "data-action": "bg-teal-800 text-white hover:bg-teal-700",
  danger: "bg-data-negative text-white hover:opacity-90",
};

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: string;
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-body font-medium text-[15px] transition-colors duration-150 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
