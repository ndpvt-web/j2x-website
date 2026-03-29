import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PersonaHero } from "@/components/persona/PersonaHero";
import { ChatDemo } from "@/components/chat/ChatDemo";
import { XbotSection } from "@/components/xbot/XbotSection";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { Card } from "@/components/ui/Card";
import { Building2, Video, Newspaper, MessageCircle, Search, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "For Corporates & Startups",
  description: "Promote your company to 5,700+ investors. Build your profile, share video pitches, and connect with institutional buyers globally.",
};

const features = [
  { icon: Building2, title: "Company Profile Builder", desc: "Searchable profile with sector tags, financials, and team info visible to 5,700+ investors" },
  { icon: Video, title: "Video Pitch", desc: "Upload video presentations with engagement metrics -- views, likes, and comments tracked" },
  { icon: Newspaper, title: "News & Updates", desc: "Publish company updates with tags and engagement tracking to keep investors informed" },
  { icon: MessageCircle, title: "Investor Chat", desc: "Real-time messaging with interested investors. No more cold email chains" },
  { icon: Search, title: "AI-Powered Discovery", desc: "Xbot surfaces your company to relevant investors based on sector and deal type matching" },
  { icon: BarChart3, title: "Engagement Analytics", desc: "Track profile views, pitch engagement, and investor interest in real time" },
];

export default function CorporatesPage() {
  return (
    <>
      <PersonaHero
        headline="Promote your company to 5,700+ investors"
        subheadline="Build your profile, share video pitches, and connect with institutional buyers globally."
        ctaText="Create Your Profile"
        ctaHref="#get-started"
      />

      <Section bg="white">
        <FadeUp>
          <h2 className="font-display text-display-lg text-gray-900 mb-4">
            Everything you need to raise capital
          </h2>
          <p className="font-body text-body-lg text-gray-500 mb-12 max-w-2xl">
            From company profiles to video pitches, J2X gives you the tools to stand out.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <FadeUp key={feat.title} delay={i * 0.08}>
              <Card className="h-full">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="font-body font-semibold text-heading-sm text-gray-900 mb-2">{feat.title}</h3>
                <p className="font-body text-body-sm text-gray-500">{feat.desc}</p>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <FadeUp>
          <h2 className="font-display text-display-lg text-gray-900 mb-4">
            Connect with investors in real time
          </h2>
          <p className="font-body text-body-lg text-gray-500 mb-8 max-w-2xl">
            Respond to investor inquiries, schedule calls, and share materials -- all in one place.
          </p>
        </FadeUp>
        <ChatDemo />
      </Section>

      <Section bg="warm-gradient">
        <XbotSection />
      </Section>

      <Section bg="teal-dark" className="text-center" id="get-started">
        <FadeUp>
          <h2 className="font-display text-display-lg text-white mb-6">
            Ready to reach 5,700+ investors?
          </h2>
          <Button variant="primary" className="text-lg px-8 py-4">
            Create Your Profile
          </Button>
        </FadeUp>
      </Section>
    </>
  );
}
