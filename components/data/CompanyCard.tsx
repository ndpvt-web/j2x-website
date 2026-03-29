import type { CompanyProfile, CompanyFinancials } from "@/lib/types";

interface CompanyCardProps {
  profile: CompanyProfile;
  financials: CompanyFinancials;
}

export function CompanyCard({ profile, financials }: CompanyCardProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* General Information */}
      <div className="bg-white rounded-xl shadow-card overflow-hidden">
        <div className="px-6 py-4 bg-teal-800 text-white">
          <h3 className="font-body font-semibold text-heading-sm">General Information</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="bg-data-positive/20 text-data-positive text-data-sm font-medium px-2 py-0.5 rounded-full">
              APPROVED
            </span>
            <span className="font-mono text-data-sm text-teal-300">{profile.id}</span>
          </div>
        </div>
        <div className="p-6">
          <table className="w-full">
            <tbody className="divide-y divide-gray-100">
              {[
                ["Legal Name", profile.legalName],
                ["Website", profile.website],
                ["CEO", profile.ceo],
                ["Deal Type", profile.dealType.replace("-", " ")],
                ["Investment Stage", profile.investmentStage],
                ["Sectors", profile.sectors.join(", ")],
                ["Industry", profile.industryVertical],
                ["Business Model", profile.businessModel],
                ["Valuation Range", profile.valuationRange],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="py-2.5 pr-4 font-body text-body-sm text-gray-500 whitespace-nowrap">{label}</td>
                  <td className="py-2.5 font-body text-body-sm text-gray-900 font-medium">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial Data */}
      <div className="bg-white rounded-xl shadow-card overflow-hidden">
        <div className="px-6 py-4 bg-teal-800 text-white">
          <h3 className="font-body font-semibold text-heading-sm">{profile.legalName}</h3>
          <span className="font-body text-body-sm text-teal-300">{profile.location}</span>
        </div>
        <div className="p-6">
          <h4 className="font-body font-semibold text-heading-sm text-gray-900 mb-4">Financial Data</h4>
          <table className="w-full">
            <tbody className="divide-y divide-gray-100">
              {[
                ["Share Count (News)", financials.shareCount.news],
                ["Share Count (Filing)", financials.shareCount.filing],
                ["Est. Market Price", `USD ${financials.marketPrice.value}`],
                ["YTD Change", `${financials.marketPrice.ytdPercent}% (USD ${financials.marketPrice.ytdChange})`],
                ["Implied Valuation (News)", financials.impliedValuation.news],
                ["Implied Valuation (Filing)", financials.impliedValuation.filing],
                ["Last Round Valuation", financials.lastRoundValuation.news],
                ["Change Since Last Round", `${financials.changeSinceLastRound}%`],
                ["Revenue", financials.revenue],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="py-2.5 pr-4 font-body text-body-sm text-gray-500 whitespace-nowrap">{label}</td>
                  <td className="py-2.5 font-mono text-data-md text-gray-900 font-medium">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
