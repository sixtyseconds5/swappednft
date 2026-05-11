import React from "react";
import { ArrowDown } from "lucide-react";
import { heroInfo, mintInfo, characters } from "../mock.js";

const Hero = () => {
  return (
    <section id="top" className="relative bg-canvas overflow-hidden">
      <div className="sun-orb" style={{ top: "-80px", right: "-100px" }} />
      <div className="deco-lines" />
      <div className="kana-watermark text-[20vw] md:text-[14vw] leading-none" style={{ top: "58%", left: "3%" }}>
        交換
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-32 md:pt-36 pb-24">
        {/* Intro */}
        <div className="max-w-xl fade-up">
          <p className="text-[17px] md:text-[19px] leading-[1.55] text-[#2a2418]">
            {heroInfo.intro}{" "}
            <span className="font-extrabold text-amber-brand">{heroInfo.highlight}</span>
          </p>
        </div>

        {/* Big title + 4-card fan */}
        <div className="relative mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative">
            <h1
              className="logo-swapped leading-[0.9] select-none"
              style={{ fontSize: "clamp(96px, 14vw, 220px)" }}
            >
              SWAPPED
            </h1>
            <div className="mt-4 md:mt-6">
              <div className="font-jp brand-forest font-extrabold tracking-[0.04em]" style={{ fontSize: "clamp(20px, 2.6vw, 36px)" }}>
                {heroInfo.jpTitle}
              </div>
              <div className="brand-forest font-bold tracking-[0.3em] mt-1" style={{ fontSize: "clamp(11px, 1vw, 14px)" }}>
                {heroInfo.enTitle}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="char-fan scale-90 md:scale-100">
              {characters.map((c, i) => (
                <div
                  key={c.id}
                  className={`nft-card cf${i + 1}`}
                  style={{ background: c.tint }}
                >
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Card + CTA */}
        <div className="relative mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="rounded-2xl border-2 border-[#1F2A1B]/15 bg-[#FBF3D2]/80 backdrop-blur-sm p-5 md:p-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {mintInfo.map((m) => (
                  <div key={m.label} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] tracking-[0.22em] text-[#6e5c25] font-semibold">
                        {m.label}
                      </span>
                      {m.pulse && <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />}
                    </div>
                    <div
                      className="font-display text-3xl md:text-4xl"
                      style={{ color: m.color || "#1F2A1B" }}
                    >
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="btn-press btn-primary inline-flex items-center justify-center px-7 py-4 rounded-xl font-extrabold tracking-wide">
                Twitter (coming soon)
              </button>
              <button className="btn-press btn-outline inline-flex items-center justify-center px-7 py-4 rounded-xl font-extrabold tracking-wide">
                Join Discord (soon)
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-center">
            <div className="bounce-y brand-forest">
              <ArrowDown size={28} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
