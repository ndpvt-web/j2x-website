"use client";

import { XbotChat } from "./XbotChat";
import { XbotAvatar } from "./XbotAvatar";
import { FadeUp } from "@/components/animations/FadeUp";
import { SlideIn } from "@/components/animations/SlideIn";
import { Bot, Newspaper, Search } from "lucide-react";

const features = [
  { icon: Bot, title: "Due Diligence Chatbot", desc: "AI-powered Q&A linked to company data rooms" },
  { icon: Newspaper, title: "AI News Alerts", desc: "Real-time insights on companies and sectors" },
  { icon: Search, title: "Sector Analysis", desc: "Deep-dive analytics across deal categories" },
];

export function XbotSection() {
  return (
    <div>
      <FadeUp>
        <h2 className="font-display text-display-lg text-gray-900 mb-4">
          AI-powered deal intelligence
        </h2>
        <p className="font-body text-body-lg text-gray-500 mb-12 max-w-2xl">
          Xbot analyzes thousands of data points to surface insights that accelerate your deal process.
        </p>
      </FadeUp>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <SlideIn direction="left">
          <XbotChat />
        </SlideIn>

        <SlideIn direction="right" delay={0.2}>
          <div className="space-y-6">
            {features.map((feat) => (
              <div key={feat.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <feat.icon className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-heading-sm text-gray-900">{feat.title}</h3>
                  <p className="font-body text-body-sm text-gray-500 mt-1">{feat.desc}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-100">
              <XbotAvatar size={24} />
              <span className="font-mono text-data-sm text-gray-500">Powered by J2X AI Engine</span>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}
