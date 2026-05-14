import React from "react";
import { logoImg } from "../mock.js";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-10 lg:px-14 pt-6 md:pt-8">
      <div className="flex items-center justify-between">
        <a href="#top" className="select-none flex items-center gap-2">
          <img
            src={logoImg}
            alt="SWAPPED"
            className="logo-img h-10 md:h-12 w-auto"
          />
        </a>

        <div className="text-right leading-tight">
          <div className="text-[10px] md:text-[11px] brand-moss tracking-[0.32em] font-semibold">
            CHARACTER · 333
          </div>
          <div className="text-[10px] md:text-[11px] text-[#E6B85A] tracking-[0.28em] mt-1">
            FREE · MINT TBA
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
