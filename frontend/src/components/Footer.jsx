import React from "react";
import { footerLinks } from "../mock.js";

const Footer = () => {
  return (
    <footer className="bg-[#F8E7CF] border-t border-[#D9A87E]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div
            className="text-3xl brand-rust"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, letterSpacing: "0.04em" }}
          >
            RYUJIN
          </div>
          <p className="mt-3 text-[14px] text-[#5b3f2a]">Myth in Motion. Free Mint on Ethereum.</p>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.28em] text-[#7a563b] font-semibold mb-4">LINKS</div>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="text-[15px] text-[#2a1d14] hover:brand-rust transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:text-right">
          <p className="text-[13px] text-[#5b3f2a]">© 2026 RYUJIN. All rights reserved.</p>
          <p className="text-[13px] text-[#5b3f2a] mt-2">Ethereum • 1111 NFTS • Free Mint</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
