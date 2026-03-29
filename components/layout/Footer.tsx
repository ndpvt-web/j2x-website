import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "Marketplace", href: "/investor" },
    { label: "Company Profiles", href: "/investor#profiles" },
    { label: "Data Room", href: "/intermediaries#dataroom" },
    { label: "Chat", href: "/investor#chat" },
    { label: "Xbot AI", href: "#xbot" },
  ],
  "For You": [
    { label: "Investors", href: "/investor" },
    { label: "Intermediaries", href: "/intermediaries" },
    { label: "Corporates / Startups", href: "/company-startups" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-teal-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body font-semibold text-body-sm text-teal-300 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-body-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-teal-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl">J2X</span>
            <span className="text-body-sm text-gray-500">Built for Deal Makers</span>
          </div>
          <p className="text-body-sm text-gray-500">
            J2X &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
