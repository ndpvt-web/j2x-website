// Core data types for J2X website
// Every component's props derive from these

// --- Order Book ---
export type OrderSide = "buy" | "sell";
export type DealCategory =
  | "unicorn-secondaries"
  | "buyout-ma"
  | "real-estate"
  | "primary-equity";

export interface Order {
  id: string;
  date: string;
  company: string;
  profile: string;
  relation: string;
  estSize: number;
  shareClass: string;
  structure: string;
  pricePerShare?: number;
  valuation?: number;
  currency: string;
  side: OrderSide;
  category: DealCategory;
  status: OrderStatus;
}

export type OrderStatus = "approved" | "pending" | "new";

// --- Company Profile ---
export interface CompanyProfile {
  id: string;
  legalName: string;
  website: string;
  ceo: string;
  dealType: DealCategory;
  investmentStage: string;
  sectors: string[];
  industryVertical: string;
  businessModel: string;
  valuationRange: string;
  location: string;
  logoUrl?: string;
}

export interface CompanyFinancials {
  shareCount: { news: string; filing: string };
  marketPrice: { value: number; ytdChange: number; ytdPercent: number };
  impliedValuation: { news: string; filing: string };
  lastRoundValuation: { news: string; filing: string };
  changeSinceLastRound: number;
  revenue: string;
}

// --- Persona ---
export type PersonaType = "investor" | "intermediary" | "corporate";

export interface PersonaConfig {
  type: PersonaType;
  title: string;
  subtitle: string;
  icon: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

// --- Navigation ---
export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

// --- Metrics ---
export interface Metric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

// --- Chat Demo ---
export interface ChatMessage {
  id: string;
  sender: string;
  avatar?: string;
  content: string;
  timestamp: string;
  isXbot?: boolean;
}

// --- Contact Form ---
export interface ContactFormData {
  name: string;
  email: string;
  role: PersonaType | "other";
  message: string;
}

// --- Component Variants ---
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "data-action"
  | "danger";

export type CardVariant = "company" | "deal" | "feature" | "metric";

export type SectionBg =
  | "white"
  | "gray"
  | "teal-dark"
  | "teal-darkest"
  | "warm-gradient";
