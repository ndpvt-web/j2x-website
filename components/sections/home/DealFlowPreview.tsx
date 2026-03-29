"use client";

import { useState } from "react";
import { DataTable } from "@/components/data/DataTable";
import { TabFilter } from "@/components/ui/TabFilter";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { SAMPLE_ORDERS } from "@/lib/mock-data";
import { DEAL_CATEGORIES } from "@/lib/constants";

export function DealFlowPreview() {
  const [activeCategory, setActiveCategory] = useState("unicorn-secondaries");

  const filteredOrders = SAMPLE_ORDERS.filter(
    (o) => o.category === activeCategory || activeCategory === "all"
  );

  return (
    <div>
      <FadeUp>
        <h2 className="font-display text-display-lg text-gray-900 mb-4">
          Live market pricing on 1000+ unicorns
        </h2>
        <p className="font-body text-body-lg text-gray-500 mb-8 max-w-2xl">
          Real indicative bids and offers submitted by verified J2X members.
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <TabFilter
          tabs={DEAL_CATEGORIES as unknown as { id: string; label: string }[]}
          activeTab={activeCategory}
          onTabChange={setActiveCategory}
        />

        <div className="mt-6 relative">
          <DataTable orders={filteredOrders} blurAfter={3} />

          {/* Blur overlay CTA */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-4">
            <div className="flex gap-3">
              <Button variant="primary">View All Deals</Button>
              <Button variant="secondary">Sign Up for Access</Button>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
