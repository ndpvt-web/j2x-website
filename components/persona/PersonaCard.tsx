"use client";

import Link from "next/link";
import { TrendingUp, Handshake, Megaphone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { PersonaConfig } from "@/lib/types";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Handshake,
  Megaphone,
};

export function PersonaCard({ persona }: { persona: PersonaConfig }) {
  const Icon = iconMap[persona.icon] || TrendingUp;

  return (
    <Card className="flex flex-col h-full">
      <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-teal-700" />
      </div>

      <h3 className="font-body font-semibold text-heading-lg text-gray-900 mb-2">
        {persona.title}
      </h3>
      <p className="font-body text-body-sm text-gray-500 mb-4">
        {persona.subtitle}
      </p>

      <ul className="space-y-2 mb-6 flex-1">
        {persona.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-coral-600 mt-2 flex-shrink-0" />
            <span className="font-body text-body-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={persona.ctaHref}
        className="inline-flex items-center font-body font-medium text-[15px] text-coral-600 hover:text-coral-700 transition-colors"
      >
        {persona.ctaText} &rarr;
      </Link>
    </Card>
  );
}
