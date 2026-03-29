import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PersonaHero } from "@/components/persona/PersonaHero";
import { DataTable } from "@/components/data/DataTable";
import { TabFilter } from "@/components/ui/TabFilter";
import { ChatDemo } from "@/components/chat/ChatDemo";
import { XbotSection } from "@/components/xbot/XbotSection";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { Card } from "@/components/ui/Card";
import { SAMPLE_ORDERS } from "@/lib/mock-data";
import { DEAL_CATEGORIES } from "@/lib/constants";
import { Upload, Bell, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "For Intermediaries",
  description: "The collaboration platform for deal makers. Upload deals, find counterparties, and close faster with real-time chat and AI due diligence.",
};

const dealSteps = [
  { icon: Upload, title: "Upload Your Deal", desc: "Submit transaction details across any asset category" },
  { icon: Users, title: "Find Counterparties", desc: "Reach 5,700+ investors and institutional partners" },
  { icon: Bell, title: "Track & Notify", desc: "Real-time notifications on order activity and counterparty interest" },
];

export default function IntermediariesPage() {
  return (
    <>
      <PersonaHero
        headline="The collaboration platform for deal makers"
        subheadline="Upload deals, find counterparties, and close faster with real-time chat and AI due diligence."
        ctaText="List Your First Deal"
        ctaHref="#get-started"
      />

      <Section bg="white">
        <FadeUp>
          <h2 className="font-display text-display-lg text-gray-900 mb-4">
            Optimize your deal management
          </h2>
          <p className="font-body text-body-lg text-gray-500 mb-12 max-w-2xl">
            From upload to close, manage your entire deal pipeline in one place.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {dealSteps.map((step, i) => (
            <FadeUp key={step.title} delay={i * 0.1}>
              <Card>
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="font-body font-semibold text-heading-sm text-gray-900 mb-2">{step.title}</h3>
                <p className="font-body text-body-sm text-gray-500">{step.desc}</p>
                {i < dealSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-300 absolute top-1/2 -right-3 hidden md:block" />
                )}
              </Card>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <FadeUp>
          <h2 className="font-display text-display-lg text-gray-900 mb-4">
            Live deal sheets
          </h2>
          <p className="font-body text-body-lg text-gray-500 mb-8 max-w-2xl">
            Monitor market deal flow and track your own deals in real time.
          </p>
          <TabFilter tabs={DEAL_CATEGORIES as unknown as { id: string; label: string }[]} />
          <div className="mt-6">
            <DataTable orders={SAMPLE_ORDERS} />
          </div>
        </FadeUp>
      </Section>

      <Section bg="white">
        <ChatDemo />
      </Section>

      <Section bg="warm-gradient" id="dataroom">
        <XbotSection />
      </Section>

      <Section bg="teal-dark" className="text-center" id="get-started">
        <FadeUp>
          <h2 className="font-display text-display-lg text-white mb-6">
            Ready to syndicate your next deal?
          </h2>
          <Button variant="primary" className="text-lg px-8 py-4">
            List Your First Deal
          </Button>
        </FadeUp>
      </Section>
    </>
  );
}
