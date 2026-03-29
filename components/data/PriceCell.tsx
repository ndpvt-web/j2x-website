import { ArrowUp, ArrowDown } from "lucide-react";

interface PriceCellProps {
  value: number;
  change?: number;
  currency?: string;
}

export function PriceCell({ value, change, currency = "USD" }: PriceCellProps) {
  const isPositive = change !== undefined && change >= 0;
  const colorClass = change === undefined
    ? "text-gray-700"
    : isPositive ? "text-data-positive" : "text-data-negative";

  return (
    <span className={`font-mono text-data-md font-medium ${colorClass} inline-flex items-center gap-1`}>
      {currency} {value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      {change !== undefined && (
        <>
          {isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          <span className="text-data-sm">({Math.abs(change).toFixed(1)}%)</span>
        </>
      )}
    </span>
  );
}
