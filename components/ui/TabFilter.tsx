"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
}

interface TabFilterProps {
  tabs: readonly Tab[] | Tab[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
}

export function TabFilter({ tabs, activeTab, onTabChange }: TabFilterProps) {
  const [active, setActive] = useState(activeTab || tabs[0]?.id || "");

  const handleClick = (id: string) => {
    setActive(id);
    onTabChange?.(id);
  };

  return (
    <div className="flex gap-1 border-b border-gray-100">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleClick(tab.id)}
          className={`relative px-4 py-3 font-body font-medium text-body-sm transition-colors cursor-pointer ${
            active === tab.id ? "text-teal-800" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
          {active === tab.id && (
            <motion.div
              layoutId="tab-underline"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-800"
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
