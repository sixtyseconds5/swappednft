import React from "react";
import { legendCards } from "../mock.js";

const Legend = () => {
  return (
    <section className="relative bg-soft-section overflow-hidden">
      <div className="kana-watermark text-[18vw] md:text-[12vw] leading-none" style={{ top: "10%", right: "-2%" }}>
        龍神
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-24 md:py-28 relative">
        <h2
          className="font-serif-display brand-rust text-center"
          style={{ fontSize: "clamp(56px, 8vw, 110px)", lineHeight: 1.0, fontStyle: "italic" }}
        >
          The Legend
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {legendCards.map((c, i) => (
            <div
              key={c.n}
              className="rounded-2xl border border-[#D9A87E]/70 bg-[#FBE2C2]/55 p-7 hover:bg-[#FBE2C2]/85 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-rust-2 text-[#FFF1DD] flex items-center justify-center font-display text-xl shadow-md">
                {c.n}
              </div>
              <h3 className="mt-5 font-display text-3xl text-[#1a120b]">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#3a281d]">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legend;
