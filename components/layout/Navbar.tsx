"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-glass border-b border-black/[0.06] shadow-glass"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex-shrink-0 font-display text-2xl tracking-tight">
            <span className={scrolled ? "text-teal-900" : "text-white"}>J2X</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`font-body font-medium text-[15px] transition-colors ${
                      scrolled ? "text-gray-700 hover:text-teal-800" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`font-body font-medium text-[15px] cursor-pointer ${
                      scrolled ? "text-gray-700" : "text-white/90"
                    }`}
                  >
                    {item.label}
                  </span>
                )}
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-card-hover p-2 min-w-[240px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 rounded-lg hover:bg-teal-50 transition-colors"
                        >
                          <div className="font-body font-medium text-gray-900 text-body-sm">{child.label}</div>
                          {child.description && (
                            <div className="font-body text-gray-500 text-body-sm mt-0.5">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              className={`hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg font-body font-medium text-[15px] border transition-colors ${
                scrolled
                  ? "border-teal-800 text-teal-800 hover:bg-teal-50"
                  : "border-white/50 text-white hover:bg-white/10"
              }`}
            >
              Login
            </Link>
            <Link
              href="#"
              className="inline-flex items-center px-5 py-2.5 rounded-lg font-body font-medium text-[15px] bg-coral-600 text-white hover:bg-coral-700 transition-colors"
            >
              Get Started
            </Link>
            <button
              className="lg:hidden p-2 cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={`w-6 h-6 ${scrolled ? "text-gray-700" : "text-white"}`} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
