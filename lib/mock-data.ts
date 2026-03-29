import type { Order, CompanyProfile, CompanyFinancials, ChatMessage } from "./types";

export const SAMPLE_ORDERS: Order[] = [
  {
    id: "S-401", date: "2026-03-28", company: "Databricks",
    profile: "Fund Manager", relation: "Direct", estSize: 15000,
    shareClass: "Common", structure: "SPV", pricePerShare: 78.35,
    valuation: 45800, currency: "USD", side: "sell",
    category: "unicorn-secondaries", status: "approved",
  },
  {
    id: "S-400", date: "2026-03-27", company: "SpaceX",
    profile: "Family Office", relation: "Indirect", estSize: 25000,
    shareClass: "Preferred", structure: "Direct", pricePerShare: 185.20,
    valuation: 350000, currency: "USD", side: "sell",
    category: "unicorn-secondaries", status: "approved",
  },
  {
    id: "S-399", date: "2026-03-26", company: "Stripe",
    profile: "Broker-Dealer", relation: "Direct", estSize: 10000,
    shareClass: "Common", structure: "Forward", pricePerShare: 32.10,
    valuation: 65000, currency: "USD", side: "sell",
    category: "unicorn-secondaries", status: "new",
  },
  {
    id: "S-398", date: "2026-03-25", company: "Canva",
    profile: "Investment Bank", relation: "Direct", estSize: 8000,
    shareClass: "Preferred", structure: "SPV", pricePerShare: 28.75,
    valuation: 26000, currency: "USD", side: "sell",
    category: "unicorn-secondaries", status: "approved",
  },
  {
    id: "S-397", date: "2026-03-24", company: "Discord",
    profile: "VC Fund", relation: "Indirect", estSize: 5000,
    shareClass: "Common", structure: "Direct", pricePerShare: 42.50,
    valuation: 15000, currency: "USD", side: "sell",
    category: "unicorn-secondaries", status: "pending",
  },
  {
    id: "B-396", date: "2026-03-24", company: "Anduril",
    profile: "Sovereign Fund", relation: "Direct", estSize: 20000,
    shareClass: "Common", structure: "Direct", pricePerShare: 55.80,
    valuation: 28000, currency: "USD", side: "buy",
    category: "unicorn-secondaries", status: "approved",
  },
];

export const DATABRICKS_PROFILE: CompanyProfile = {
  id: "DAKS-1550",
  legalName: "Databricks, Inc.",
  website: "www.databricks.com",
  ceo: "Ali Ghodsi",
  dealType: "unicorn-secondaries",
  investmentStage: "Series F and beyond",
  sectors: ["AI / machine learning", "Analytics & Data"],
  industryVertical: "Information technology",
  businessModel: "Software",
  valuationRange: "$21 bn to $50 bn",
  location: "San Francisco / Silicon Valley",
};

export const DATABRICKS_FINANCIALS: CompanyFinancials = {
  shareCount: { news: "585.03M", filing: "685.48M" },
  marketPrice: { value: 78.35, ytdChange: 12.73, ytdPercent: 19.4 },
  impliedValuation: { news: "USD 45.8B", filing: "USD 53.7B" },
  lastRoundValuation: { news: "USD 43B", filing: "USD 50.4B" },
  changeSinceLastRound: 6.6,
  revenue: "USD 1.9B",
};

export const XBOT_DEMO_MESSAGES: ChatMessage[] = [
  {
    id: "u1", sender: "You",
    content: "What's Databricks' latest valuation?",
    timestamp: "10:32 AM",
  },
  {
    id: "x1", sender: "Xbot", isXbot: true,
    content: "Databricks' implied valuation is USD 45.8B (news) / USD 53.7B (filing), based on an estimated market price of USD 78.35 per share. This represents a 6.6% increase since the last primary round at USD 43B.",
    timestamp: "10:32 AM",
  },
  {
    id: "u2", sender: "You",
    content: "How does that compare to revenue multiples?",
    timestamp: "10:33 AM",
  },
  {
    id: "x2", sender: "Xbot", isXbot: true,
    content: "At USD 1.9B revenue and a USD 45.8B valuation, Databricks trades at approximately 24.1x revenue. This is in line with high-growth enterprise AI companies in the current market.",
    timestamp: "10:33 AM",
  },
];

export const CHAT_DEMO_MESSAGES: ChatMessage[] = [
  {
    id: "c1", sender: "Harry Jason",
    content: "Hi, I'm interested in the Databricks block you have listed. Can you share more details on the structure?",
    timestamp: "2:14 PM",
  },
  {
    id: "c2", sender: "Sarah Chen",
    content: "Of course. It's a $15M Common block via SPV at $78.35/share. Direct relationship with the seller.",
    timestamp: "2:15 PM",
  },
  {
    id: "c3", sender: "Harry Jason",
    content: "What's the minimum ticket size?",
    timestamp: "2:16 PM",
  },
  {
    id: "c4", sender: "Sarah Chen",
    content: "$2M minimum. We can accommodate up to $15M in a single tranche. Happy to schedule a call to discuss terms.",
    timestamp: "2:17 PM",
  },
];

export const CURATED_LOGOS: string[] = [
  "Databricks", "SpaceX", "ByteDance", "Stripe", "Canva",
  "Discord", "Figma", "Notion", "Airtable", "Plaid",
  "Ripple", "Revolut", "Klarna", "Checkout.com", "Brex",
  "Ramp", "Scale AI", "Anduril", "Flexport", "Relativity",
  "Redwood Materials", "WeBull", "Instacart", "Fanatics", "Epic Games",
  "Reddit", "SHEIN", "GoPuff", "Chime", "Navan",
];
