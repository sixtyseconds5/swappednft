import React from "react";
import { footerLinks, logoImg } from "../mock.js";

const Footer = () => {
  return (
    <footer className="bg-forest-deep border-t border-[#F2C829]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logoImg} alt="SWAPPED" className="logo-img h-10 w-auto" />
          <p className="mt-4 text-[14px] max-w-xs" style={{ color: "#D9CFA8" }}>
            A small, curated NFT story — 333 Swapped Characters on Robinhood Chain.
          </p>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.28em] text-[#E6B85A] font-semibold mb-4">LINKS</div>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[15px] brand-cream hover:brand-yellow transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:text-right">
          <p className="text-[13px]" style={{ color: "#D9CFA8" }}>© 2026 SWAPPED CHARACTER. All rights reserved.</p>
          <p className="text-[13px] mt-2" style={{ color: "#D9CFA8" }}>Robinhood Chain • 333 NFTS • FREE MINT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
