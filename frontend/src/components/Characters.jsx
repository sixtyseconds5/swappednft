import React from "react";
import { characters } from "../mock.js";

const Characters = () => {
  return (
    <section id="characters" className="relative bg-cream overflow-hidden">
      <div className="kana-watermark text-[18vw] md:text-[12vw] leading-none" style={{ top: "4%", right: "-2%" }}>
        魂
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-24 md:py-28 relative">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-[12px] tracking-[0.32em] font-bold text-amber-brand mb-3">
              MEET THE FOUR
            </div>
            <h2
              className="font-serif-display brand-forest"
              style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.95 }}
            >
              The Characters
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-[#3a3a25] leading-relaxed">
            Four souls. Four worlds. One twist of fate. Meet the cast at the heart of the Swapped universe — each
            crafted by hand, each with a story of their own.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((c, i) => (
            <div
              key={c.id}
              className="char-tile fade-up"
              style={{ animationDelay: `${i * 90}ms`, background: c.tint }}
            >
              <div className="char-img-wrap">
                <img src={c.img} alt={c.name} loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.22em] font-bold uppercase" style={{ color: c.accent }}>
                    No. 0{c.id}
                  </span>
                  <span className="text-[11px] tracking-[0.2em] text-[#6e5c25] font-semibold">{c.tag}</span>
                </div>
                <h3 className="font-display text-2xl mt-2 brand-forest">{c.name}</h3>
                <div className="text-[13px] font-semibold text-amber-brand mb-2">{c.role}</div>
                <p className="text-[13.5px] leading-[1.55] text-[#3a3a25]">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;
