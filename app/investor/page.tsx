import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PersonaHero } from "@/components/persona/PersonaHero";
import { CompanyCard } from "@/components/data/CompanyCard";
import { DataTable } from "@/components/data/DataTable";
import { TabFilter } from "@/components/ui/TabFilter";
import { ChatDemo } from "@/components/chat/ChatDemo";
import { XbotSection } from "@/components/xbot/XbotSection";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { MiniOrderBook } from "@/components/data/MiniOrderBook";
import { DATABRICKS_PROFILE, DATABRICKS_FINANCIALS, SAMPLE_ORDERS } from "@/lib/mock-data";
import { DEAL_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Investors",
  description:
    "Source from verified deal flow. Access live order books, company profiles, and AI-powered intelligence on 1000+ private companies.",
};

export default function InvestorPage() {
  return (
    <>
      <PersonaHero
        headline="Source from verified deal flow"
        subheadline="Access live order books, company profiles, and AI-powered intelligence on 1000+ private companies."
        ctaText="Start Sourcing Deals"
        ctaHref="#get-started"
      >
        <MiniOrderBook />
      </PersonaHero>

      <Section bg="white" id="profiles">
        <FadeUp>
          <h2 className="font-display text-display-lg text-gray-900 mb-4">
            Deep-dive company profiles
          </h2>
          <p className="font-body text-body-lg text-gray-500 mb-8 max-w-2xl">
            Every company comes with detailed financials, share structure, and market intelligence.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <CompanyCard profile={DATABRICKS_PROFILE} financials={DATABRICKS_FINANCIALS} />
        </FadeUp>
      </Section>

      <Section bg="gray">
        <FadeUp>
          <h2 className="font-display text-display-lg text-gray-900 mb-4">
            Access live market pricing
          </h2>
          <p className="font-body text-body-lg text-gray-500 mb-8 max-w-2xl">
            Real indicative bids and offers from registered broker-dealers and institutional partners.
          </p>
          <TabFilter tabs={DEAL_CATEGORIES as unknown as { id: string; label: string }[]} />
          <div className="mt-6">
            <DataTable orders={SAMPLE_ORDERS} />
          </div>
        </FadeUp>
      </Section>

      <Section bg="white" id="chat">
        <ChatDemo />
      </Section>

      <Section bg="warm-gradient">
        <XbotSection />
      </Section>

      <Section bg="teal-dark" className="text-center" id="get-started">
        <FadeUp>
          <h2 className="font-display text-display-lg text-white mb-6">
            Ready to source your next deal?
          </h2>
          <Button variant="primary" className="text-lg px-8 py-4">
            Start Sourcing Deals
          </Button>
        </FadeUp>
      </Section>
    </>
  );
}
