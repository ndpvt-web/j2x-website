import { Section } from "@/components/layout/Section";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { MetricBar } from "@/components/data/MetricBar";
import { PersonaGrid } from "@/components/persona/PersonaGrid";
import { DealFlowPreview } from "@/components/sections/home/DealFlowPreview";
import { XbotSection } from "@/components/xbot/XbotSection";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { ChatDemo } from "@/components/chat/ChatDemo";
import { ContactSection } from "@/components/sections/home/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* S1: Hero -- teal-900, live order book, persona routing */}
      <HeroSection />

      {/* S2: Metric Counter Bar */}
      <Section bg="white" className="!py-12 lg:!py-16">
        <MetricBar />
      </Section>

      {/* S3: Three-Persona Feature Grid */}
      <Section bg="gray">
        <PersonaGrid />
      </Section>

      {/* S4: Live Deal Flow Preview */}
      <Section bg="white">
        <DealFlowPreview />
      </Section>

      {/* S5: AI Intelligence / Xbot -- exclusive warm gradient */}
      <Section bg="warm-gradient">
        <XbotSection />
      </Section>

      {/* S6: Logo Carousel */}
      <Section bg="teal-dark" className="!py-16">
        <LogoCarousel />
      </Section>

      {/* S7: Real-Time Chat Preview */}
      <Section bg="white">
        <ChatDemo />
      </Section>

      {/* S8: Contact / CTA */}
      <Section bg="teal-dark">
        <ContactSection />
      </Section>
    </>
  );
}
