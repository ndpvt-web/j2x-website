"use client";

import { CountUp } from "@/components/animations/CountUp";
import { HERO_METRICS } from "@/lib/constants";

export function MetricBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {HERO_METRICS.map((metric) => (
        <div key={metric.label} className="text-center">
          <CountUp
            end={metric.value}
            prefix={metric.prefix || ""}
            suffix={metric.suffix}
          />
          <p className="font-body text-[12px] uppercase tracking-wider text-gray-500 mt-2">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
