"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface PersonaHeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  children?: React.ReactNode;
}

export function PersonaHero({ headline, subheadline, ctaText, ctaHref, children }: PersonaHeroProps) {
  return (
    <section className="bg-teal-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-display text-display-xl text-white mb-6 leading-tight">
              {headline}
            </h1>
            <p className="font-body text-body-lg text-teal-300 mb-8 max-w-lg">
              {subheadline}
            </p>
            <a
              href={ctaHref}
              className="inline-flex items-center px-8 py-4 rounded-lg bg-coral-600 text-white font-body font-medium text-[17px] hover:bg-coral-700 transition-colors"
            >
              {ctaText}
            </a>
          </motion.div>

          {children && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
