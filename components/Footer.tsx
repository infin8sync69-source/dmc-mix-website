const links = {
  Products: [
    { label: "Mortars & Block Laying", href: "#products" },
    { label: "Preparation & Repairing", href: "#products" },
    { label: "Rendering", href: "#products" },
    { label: "Insulation (EIFS)", href: "#products" },
    { label: "Finishing", href: "#products" },
    { label: "Tiling & Grouts", href: "#products" },
  ],
  Company: [
    { label: "About DMC", href: "https://www.dmc-mix.com/profile/" },
    { label: "Application", href: "#application" },
    { label: "Projects", href: "https://www.dmc-mix.com/projects/" },
    { label: "Machines", href: "https://www.dmc-mix.com/machines/" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dmc-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-white tracking-tight">DMC</span>
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <path d="M20 5 L23 12 L30 10 L25 17 L32 20 L25 23 L30 30 L23 28 L20 35 L17 28 L10 30 L15 23 L8 20 L15 17 L10 10 L17 12 Z" fill="#4e8b2e" opacity="0.85" />
              </svg>
              <span className="text-xs font-semibold text-gray-400 tracking-widest ml-1 uppercase">
                Mix Â· Finishing Systems
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-gray-500">
              The Middle East&apos;s leading producer of high-quality pre-mixed dry mortars, renders,
              and EIFS systems â engineered for the region&apos;s demanding climate and building
              standards.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.dmc-mix.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-dmc-green transition-colors">dmc-mix.com â</a>
              <a href="mailto:info@dmc-mix.com" className="text-xs text-gray-500 hover:text-dmc-green transition-colors">info@dmc-mix.com</a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-gray-500 hover:text-dmc-green transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            Â© {new Date().getFullYear()} Dry Mortar Company (DMC). All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Engineered for the Middle East Â· EIFS Specialists
          </p>
        </div>
      </div>
    </footer>
  );
}
