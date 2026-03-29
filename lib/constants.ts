import type { NavItem, PersonaConfig, Metric } from "./types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Platform",
    children: [
      { label: "Marketplace", href: "/investor", description: "Live order books and deal flow" },
      { label: "Company Profiles", href: "/investor#profiles", description: "1000+ private company profiles" },
      { label: "Data Room", href: "/intermediaries#dataroom", description: "Secure document sharing" },
      { label: "Chat", href: "/investor#chat", description: "Real-time deal communication" },
    ],
  },
  { label: "For Investors", href: "/investor" },
  { label: "For Intermediaries", href: "/intermediaries" },
  { label: "For Corporates", href: "/company-startups" },
  {
    label: "Insights",
    children: [
      { label: "News", href: "#news", description: "AI-powered market intelligence" },
      { label: "Xbot AI", href: "#xbot", description: "Due diligence chatbot" },
      { label: "Market Data", href: "#market", description: "Live pricing on 1000+ unicorns" },
    ],
  },
];

export const PERSONAS: PersonaConfig[] = [
  {
    type: "investor",
    title: "Source exclusive deal flow",
    subtitle: "Access live order books, AI intelligence, and 1000+ private companies.",
    icon: "TrendingUp",
    features: [
      "Live indicative pricing on secondaries",
      "AI-powered news alerts and analysis",
      "Direct chat with broker-dealers",
    ],
    ctaText: "Learn More",
    ctaHref: "/investor",
  },
  {
    type: "intermediary",
    title: "Syndicate and collaborate",
    subtitle: "Upload deals, find counterparties, close faster.",
    icon: "Handshake",
    features: [
      "Upload and syndicate transactions",
      "Real-time counterparty matching",
      "AI due diligence via Xbot",
    ],
    ctaText: "Learn More",
    ctaHref: "/intermediaries",
  },
  {
    type: "corporate",
    title: "Promote and raise capital",
    subtitle: "Put your company in front of 5,700+ institutional investors.",
    icon: "Megaphone",
    features: [
      "Searchable company profile builder",
      "Video pitch with engagement metrics",
      "Direct investor chat",
    ],
    ctaText: "Learn More",
    ctaHref: "/company-startups",
  },
];

export const HERO_METRICS: Metric[] = [
  { value: 1000, suffix: "+", label: "Companies Listed" },
  { value: 5700, suffix: "+", label: "Verified Investors" },
  { value: 25, prefix: "$", suffix: "B+", label: "Deal Volume" },
  { value: 440, suffix: "+", label: "Secondaries Participants" },
];

export const DEAL_CATEGORIES = [
  { id: "unicorn-secondaries", label: "Unicorn Secondaries" },
  { id: "buyout-ma", label: "Buyout / M&A" },
  { id: "real-estate", label: "Real Estate / Real Assets" },
] as const;

export const ORDER_TABS = [
  { id: "buy", label: "Buy Orders" },
  { id: "sell", label: "Sell Orders" },
  { id: "termsheets", label: "New Termsheets" },
  { id: "issues", label: "New Issues" },
] as const;
