"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XbotAvatar } from "./XbotAvatar";
import { XbotThinking } from "./XbotThinking";
import { XBOT_DEMO_MESSAGES } from "@/lib/mock-data";

export function XbotChat() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showThinking, setShowThinking] = useState(false);

  useEffect(() => {
    if (visibleCount >= XBOT_DEMO_MESSAGES.length) return;

    const msg = XBOT_DEMO_MESSAGES[visibleCount];
    if (msg?.isXbot) {
      setShowThinking(true);
      const thinkTimer = setTimeout(() => {
        setShowThinking(false);
        setVisibleCount((c) => c + 1);
      }, 1500);
      return () => clearTimeout(thinkTimer);
    }

    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className="bg-white rounded-xl shadow-card p-6 max-w-lg">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
        <XbotAvatar size={32} />
        <span className="font-body font-semibold text-gray-900">Xbot AI</span>
        <span className="text-body-sm text-gray-500">Deal Intelligence</span>
      </div>

      <div className="space-y-3 min-h-[200px]">
        <AnimatePresence>
          {XBOT_DEMO_MESSAGES.slice(0, visibleCount).map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 ${msg.isXbot ? "" : "justify-end"}`}
            >
              {msg.isXbot && <XbotAvatar size={28} />}
              <div
                className={`rounded-lg px-4 py-2.5 max-w-[85%] ${
                  msg.isXbot
                    ? "bg-gradient-to-br from-[rgba(242,195,133,0.08)] to-[rgba(100,227,209,0.08)] border-l-3 border-teal-500"
                    : "bg-teal-50 ml-auto"
                }`}
              >
                <p className="font-body text-body-sm text-gray-700">{msg.content}</p>
                <span className="font-mono text-data-sm text-gray-400 mt-1 block">{msg.timestamp}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {showThinking && (
          <div className="flex gap-3">
            <XbotAvatar size={28} />
            <XbotThinking />
          </div>
        )}
      </div>
    </div>
  );
}
