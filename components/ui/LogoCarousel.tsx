import { CURATED_LOGOS } from "@/lib/mock-data";

export function LogoCarousel() {
  return (
    <div>
      <h3 className="font-body font-semibold text-center text-body-sm uppercase tracking-wider text-teal-300 mb-8">
        Active across 1000+ companies
      </h3>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-teal-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-teal-900 to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-logo-scroll">
          {[...CURATED_LOGOS, ...CURATED_LOGOS].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex-shrink-0 px-6 py-3 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="font-body font-medium text-body-sm text-white whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
