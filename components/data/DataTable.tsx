"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Order } from "@/lib/types";

interface DataTableProps {
  orders: Order[];
  blurAfter?: number;
}

export function DataTable({ orders, blurAfter }: DataTableProps) {
  const [sortKey, setSortKey] = useState<string>("date");
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const columns = [
    { key: "id", label: "ID" },
    { key: "date", label: "Date" },
    { key: "company", label: "Company" },
    { key: "profile", label: "Profile" },
    { key: "estSize", label: "Est Size ($K)" },
    { key: "shareClass", label: "Share Class" },
    { key: "structure", label: "Structure" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="bg-teal-50 border-b-2 border-gray-100">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                className="px-4 py-3 text-left font-body font-semibold text-[13px] uppercase tracking-[0.05em] text-gray-500 cursor-pointer hover:text-teal-800 transition-colors select-none"
              >
                <span className="inline-flex items-center gap-1">
                  {col.label}
                  {sortKey === col.key && (
                    sortAsc ? <ChevronUp className="w-3 h-3 text-teal-500" /> : <ChevronDown className="w-3 h-3 text-teal-500" />
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr
              key={order.id}
              className={`border-t border-gray-100 hover:bg-teal-50 transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } ${blurAfter !== undefined && i >= blurAfter ? "blur-[3px] select-none pointer-events-none" : ""}`}
            >
              <td className="px-4 py-3 font-mono text-data-md text-gray-500">{order.id}</td>
              <td className="px-4 py-3 font-mono text-data-md text-gray-700">{order.date}</td>
              <td className="px-4 py-3 font-body text-body-sm font-medium text-gray-900">{order.company}</td>
              <td className="px-4 py-3 font-body text-body-sm text-gray-700">{order.profile}</td>
              <td className="px-4 py-3 font-mono text-data-md font-medium text-gray-900">{order.estSize.toLocaleString()}</td>
              <td className="px-4 py-3 font-body text-body-sm text-gray-700">{order.shareClass}</td>
              <td className="px-4 py-3 font-body text-body-sm text-gray-700">{order.structure}</td>
              <td className="px-4 py-3"><StatusBadge status={order.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
