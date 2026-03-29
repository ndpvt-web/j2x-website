import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsOfUsePage() {
  return (
    <div className="pt-24">
      <Section bg="white">
        <h1 className="font-display text-display-lg text-gray-900 mb-8">Terms of Use</h1>
        <div className="prose prose-gray max-w-3xl font-body text-body-md text-gray-700 space-y-4">
          <p>
            By accessing and using j2x.space (&quot;the Site&quot;), you accept and agree to be bound by
            these Terms of Use. If you do not agree to these terms, please do not use the Site.
          </p>
          <h2 className="font-body font-semibold text-heading-md text-gray-900">Use of the Site</h2>
          <p>
            The Site is intended for use by accredited investors, registered broker-dealers, financial
            advisors, and corporate entities seeking to participate in private market transactions.
            You agree to use the Site only for lawful purposes.
          </p>
          <h2 className="font-body font-semibold text-heading-md text-gray-900">Intellectual Property</h2>
          <p>
            All content on the Site, including text, graphics, logos, and software, is the property
            of J2X and is protected by applicable intellectual property laws.
          </p>
          <h2 className="font-body font-semibold text-heading-md text-gray-900">Limitation of Liability</h2>
          <p>
            J2X shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages arising out of your use of the Site or any information provided therein.
          </p>
          <h2 className="font-body font-semibold text-heading-md text-gray-900">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws,
            without regard to conflict of law principles.
          </p>
        </div>
      </Section>
    </div>
  );
}
