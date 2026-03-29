import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <div className="pt-24">
      <Section bg="white">
        <h1 className="font-display text-display-lg text-gray-900 mb-8">Disclaimer</h1>
        <div className="prose prose-gray max-w-3xl font-body text-body-md text-gray-700 space-y-4">
          <p>
            The information provided on j2x.space is for general informational purposes only. All information
            on the site is provided in good faith; however, we make no representation or warranty of any kind,
            express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or
            completeness of any information on the site.
          </p>
          <p>
            Under no circumstance shall J2X have any liability to you for any loss or damage of any kind
            incurred as a result of the use of the site or reliance on any information provided on the site.
            Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>
          <p>
            The site may contain links to other websites or content belonging to or originating from third
            parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy,
            validity, reliability, availability, or completeness by us.
          </p>
          <p>
            J2X does not provide investment advice. All deal-related information displayed on the platform,
            including indicative pricing, valuations, and order book data, is for informational purposes only
            and should not be construed as a recommendation to buy, sell, or hold any security.
          </p>
        </div>
      </Section>
    </div>
  );
}
