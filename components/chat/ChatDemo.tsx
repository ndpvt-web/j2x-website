"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";
import { FadeUp } from "@/components/animations/FadeUp";
import { CHAT_DEMO_MESSAGES } from "@/lib/mock-data";
import { MessageCircle } from "lucide-react";

export function ChatDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= CHAT_DEMO_MESSAGES.length) return;

    setShowTyping(true);
    const timer = setTimeout(() => {
      setShowTyping(false);
      setVisibleCount((c) => c + 1);
    }, 1200);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div>
      <FadeUp>
        <h2 className="font-display text-display-lg text-gray-900 mb-4">
          Close deals in real time
        </h2>
        <p className="font-body text-body-lg text-gray-500 mb-12 max-w-2xl">
          Connect directly with counterparties through our integrated messaging system. No more email chains.
        </p>
      </FadeUp>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Chat sidebar */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-card overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-teal-700" />
            <span className="font-body font-semibold text-body-sm text-gray-900">Deal Conversations</span>
          </div>
          {["Databricks - S-401", "SpaceX - S-400", "Stripe - S-399"].map((deal, i) => (
            <div key={deal} className={`px-4 py-3 border-b border-gray-100 cursor-pointer transition-colors ${i === 0 ? "bg-teal-50" : "hover:bg-gray-50"}`}>
              <span className="font-body text-body-sm font-medium text-gray-900">{deal}</span>
              <p className="font-body text-body-sm text-gray-500 mt-0.5 truncate">
                {i === 0 ? "Happy to schedule a call..." : i === 1 ? "Awaiting documentation" : "Under review"}
              </p>
            </div>
          ))}
        </div>

        {/* Chat messages */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-card p-6 min-h-[320px] flex flex-col">
          <div className="flex items-center gap-2 pb-4 border-b border-gray-100 mb-4">
            <span className="font-body font-semibold text-body-sm text-gray-900">Databricks - S-401</span>
            <span className="font-mono text-data-sm text-gray-500">Unicorn Secondaries</span>
          </div>
          <div className="space-y-4 flex-1">
            <AnimatePresence>
              {CHAT_DEMO_MESSAGES.slice(0, visibleCount).map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChatBubble message={msg} isRight={i % 2 !== 0} />
                </motion.div>
              ))}
            </AnimatePresence>
            {showTyping && <TypingIndicator />}
          </div>
        </div>
      </div>
    </div>
  );
}
