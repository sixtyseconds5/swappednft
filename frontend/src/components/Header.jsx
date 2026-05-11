import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-10 lg:px-14 pt-6 md:pt-8">
      <div className="flex items-center justify-between">
        <a href="#top" className="select-none flex items-center gap-2">
          <span
            className="logo-swapped logo-swapped-sm text-3xl md:text-4xl"
          >
            SWAPPED
          </span>
        </a>

        <div className="text-right leading-tight">
          <div className="font-jp text-[11px] md:text-xs text-[#7d6a2f] tracking-[0.18em]">
            スワップド
          </div>
          <div className="text-[10px] md:text-[11px] text-[#7d6a2f] tracking-[0.32em] font-semibold">
            CHARACTER · 222
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
