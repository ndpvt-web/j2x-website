import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24">
      <Section bg="white">
        <h1 className="font-display text-display-lg text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-3xl font-body text-body-md text-gray-700 space-y-4">
          <p>
            J2X (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our
            website j2x.space.
          </p>
          <h2 className="font-body font-semibold text-heading-md text-gray-900">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account,
            submit a contact form, or communicate with us. This may include your name, email address,
            role, and message content.
          </p>
          <h2 className="font-body font-semibold text-heading-md text-gray-900">How We Use Your Information</h2>
          <p>
            We use the information we collect to operate and maintain our platform, respond to your
            inquiries, send you relevant communications, and improve our services.
          </p>
          <h2 className="font-body font-semibold text-heading-md text-gray-900">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <h2 className="font-body font-semibold text-heading-md text-gray-900">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us through the form on
            our website or email us at privacy@j2x.space.
          </p>
        </div>
      </Section>
    </div>
  );
}
