"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MiniOrderBook } from "@/components/data/MiniOrderBook";
import { fadeUp } from "@/lib/animations";

const personaPills = [
  { label: "I'm an Investor", href: "/investor" },
  { label: "I'm an Intermediary", href: "/intermediaries" },
  { label: "I'm a Corporate", href: "/company-startups" },
];

export function HeroSection() {
  return (
    <section className="relative bg-teal-900 min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="font-display text-display-xl text-white mb-6">
              The marketplace for private deals
            </h1>
            <p className="font-body text-body-lg text-teal-300 mb-8 max-w-lg">
              Live pricing, AI intelligence, and real-time collaboration for investors, intermediaries, and deal makers.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {personaPills.map((pill) => (
                <Link
                  key={pill.label}
                  href={pill.href}
                  className="px-5 py-2.5 rounded-full border border-teal-500 text-teal-300 font-body font-medium text-body-sm hover:bg-teal-800 hover:text-white transition-colors"
                >
                  {pill.label}
                </Link>
              ))}
            </div>

            <Link
              href="#"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-coral-600 text-white font-body font-medium text-[17px] hover:bg-coral-700 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <MiniOrderBook />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
