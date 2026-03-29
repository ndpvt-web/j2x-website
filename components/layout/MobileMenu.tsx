"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-teal-900"
        >
          <div className="flex items-center justify-between px-6 h-16">
            <span className="font-display text-2xl text-white">J2X</span>
            <button onClick={onClose} className="p-2 cursor-pointer" aria-label="Close menu">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <nav className="px-6 pt-8 flex flex-col gap-2">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 text-white font-body font-medium text-xl hover:text-teal-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="py-3">
                    <span className="text-white/60 font-body font-medium text-xl">{item.label}</span>
                    {item.children && (
                      <div className="mt-2 ml-4 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="block py-2 text-teal-300 font-body text-lg hover:text-white transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Link
              href="#"
              onClick={onClose}
              className="block w-full text-center py-4 rounded-lg bg-coral-600 text-white font-body font-medium text-lg hover:bg-coral-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
