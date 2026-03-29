"use client";

import { PersonaCard } from "./PersonaCard";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeUp } from "@/components/animations/FadeUp";
import { PERSONAS } from "@/lib/constants";

export function PersonaGrid() {
  return (
    <div>
      <FadeUp>
        <h2 className="font-display text-display-lg text-gray-900 mb-4">
          Built for every side of the deal
        </h2>
        <p className="font-body text-body-lg text-gray-500 mb-12 max-w-2xl">
          Whether you&apos;re sourcing, syndicating, or raising -- J2X gives you the tools to move faster.
        </p>
      </FadeUp>

      <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PERSONAS.map((persona) => (
          <StaggerItem key={persona.type}>
            <PersonaCard persona={persona} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
