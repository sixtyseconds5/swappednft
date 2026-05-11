import React from "react";
import { footerLinks } from "../mock.js";

const Footer = () => {
  return (
    <footer className="bg-cream border-t-2 border-[#1F2A1B]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="logo-swapped logo-swapped-sm text-3xl">SWAPPED</div>
          <p className="mt-3 text-[14px] text-[#3a3a25] max-w-xs">
            A small, curated NFT story — 222 Swapped Characters on Ethereum.
          </p>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.28em] text-[#6e5c25] font-semibold mb-4">LINKS</div>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[15px] brand-forest hover:text-amber-brand transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:text-right">
          <p className="text-[13px] text-[#3a3a25]">© 2026 SWAPPED CHARACTER. All rights reserved.</p>
          <p className="text-[13px] text-[#3a3a25] mt-2">Ethereum • 222 NFTS • Free Mint</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
