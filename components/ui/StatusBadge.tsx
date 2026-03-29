import type { OrderStatus } from "@/lib/types";

const statusConfig: Record<string, { bg: string; text: string; label: string }> = {
  approved: { bg: "bg-data-positive/10", text: "text-data-positive", label: "Approved" },
  pending: { bg: "bg-data-pending/10", text: "text-data-pending", label: "Pending" },
  new: { bg: "bg-data-new/10", text: "text-data-new", label: "New" },
};

export function StatusBadge({ status }: { status: OrderStatus }) {
  const config = statusConfig[status] || statusConfig.pending;
  return (
    <span className={`${config.bg} ${config.text} text-body-sm font-medium px-3 py-1 rounded-full`}>
      {config.label}
    </span>
  );
}
