import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-10 lg:px-14 pt-6 md:pt-8">
      <div className="flex items-center justify-between">
        <a href="#top" className="select-none">
          <span
            className="text-3xl md:text-4xl tracking-wide font-bold brand-rust"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, letterSpacing: "0.04em" }}
          >
            RYUJIN
          </span>
        </a>

        <div className="text-right leading-tight">
          <div className="font-jp text-[11px] md:text-xs text-[#B98A5B] tracking-[0.18em]">
            ミス・イン・モーション
          </div>
          <div className="text-[10px] md:text-[11px] text-[#B98A5B] tracking-[0.32em]">
            MYTH IN MOTION
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
