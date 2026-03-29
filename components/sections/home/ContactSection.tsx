"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { CheckCircle } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <FadeUp>
        <h2 className="font-display text-display-lg text-white mb-4">
          Ready to make your next deal?
        </h2>
        <p className="font-body text-body-lg text-teal-300 mb-10">
          Join 5,700+ investors and intermediaries on J2X.
        </p>
      </FadeUp>

      {submitted ? (
        <FadeUp>
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-12 h-12 text-data-positive" />
            <p className="font-body text-body-lg text-white">Thank you! We&apos;ll be in touch shortly.</p>
          </div>
        </FadeUp>
      ) : (
        <FadeUp delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-500 font-body text-body-md focus:outline-none focus:ring-2 focus:ring-coral-600"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-500 font-body text-body-md focus:outline-none focus:ring-2 focus:ring-coral-600"
              />
            </div>
            <select
              required
              className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-teal-300 font-body text-body-md focus:outline-none focus:ring-2 focus:ring-coral-600"
              defaultValue=""
            >
              <option value="" disabled>Select your role</option>
              <option value="investor">Investor</option>
              <option value="intermediary">Intermediary</option>
              <option value="corporate">Corporate / Startup</option>
              <option value="other">Other</option>
            </select>
            <textarea
              placeholder="Tell us about your needs..."
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-500 font-body text-body-md focus:outline-none focus:ring-2 focus:ring-coral-600 resize-none"
            />
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button variant="primary" type="submit" disabled={loading} className="flex-1">
                {loading ? "Sending..." : "Get Started"}
              </Button>
              <Button variant="ghost" className="flex-1 text-white hover:text-teal-300">
                Request a Demo
              </Button>
            </div>
          </form>
        </FadeUp>
      )}
    </div>
  );
}
