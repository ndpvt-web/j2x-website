import { PriceCell } from "./PriceCell";
import { SAMPLE_ORDERS } from "@/lib/mock-data";

export function MiniOrderBook() {
  const orders = SAMPLE_ORDERS.slice(0, 5);

  return (
    <div className="bg-teal-800/50 backdrop-blur-sm rounded-xl border border-teal-700/30 overflow-hidden">
      <div className="px-4 py-3 border-b border-teal-700/30">
        <div className="flex items-center justify-between">
          <span className="font-body font-semibold text-body-sm text-white">Live Sell Orders</span>
          <span className="font-mono text-data-sm text-teal-300">Unicorn Secondaries</span>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2 font-body font-medium text-[11px] uppercase tracking-wider text-teal-300">Company</th>
            <th className="px-4 py-2 font-body font-medium text-[11px] uppercase tracking-wider text-teal-300">Price</th>
            <th className="px-4 py-2 font-body font-medium text-[11px] uppercase tracking-wider text-teal-300 hidden sm:table-cell">Size ($K)</th>
            <th className="px-4 py-2 font-body font-medium text-[11px] uppercase tracking-wider text-teal-300 hidden md:table-cell">Structure</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr
              key={order.id}
              className={`border-t border-teal-700/20 ${i % 2 === 0 ? "bg-teal-800/20" : ""}`}
            >
              <td className="px-4 py-2.5">
                <span className="font-body text-body-sm text-white font-medium">{order.company}</span>
              </td>
              <td className="px-4 py-2.5">
                <span className="font-mono text-data-md text-data-positive">
                  ${order.pricePerShare?.toFixed(2)}
                </span>
              </td>
              <td className="px-4 py-2.5 hidden sm:table-cell">
                <span className="font-mono text-data-md text-teal-300">
                  {order.estSize.toLocaleString()}
                </span>
              </td>
              <td className="px-4 py-2.5 hidden md:table-cell">
                <span className="font-body text-body-sm text-teal-300">{order.structure}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="px-4 py-2.5 border-t border-teal-700/30 bg-teal-900/50">
        <span className="font-mono text-data-sm text-teal-500">Updated live &bull; 5 of 1000+ orders</span>
      </div>
    </div>
  );
}
