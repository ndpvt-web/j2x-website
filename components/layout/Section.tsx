import type { SectionBg } from "@/lib/types";

const bgStyles: Record<string, string> = {
  white: "bg-white",
  gray: "bg-gray-50",
  "teal-dark": "bg-teal-900 text-white",
  "teal-darkest": "bg-teal-950 text-white",
  "warm-gradient": "bg-warm-gradient",
};

interface SectionProps {
  bg?: SectionBg;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ bg = "white", children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${bgStyles[bg] || bgStyles.white} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
