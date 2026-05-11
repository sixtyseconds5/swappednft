import React from "react";
import { ChevronDown, ArrowDown } from "lucide-react";
import { heroInfo, mintInfo, nftImages } from "../mock.js";

const Hero = () => {
  return (
    <section id="top" className="relative bg-canvas overflow-hidden">
      {/* decorative orb */}
      <div className="sun-orb" style={{ top: "-60px", right: "-80px" }} />
      <div className="deco-lines" />

      {/* kana watermark */}
      <div className="kana-watermark text-[20vw] md:text-[14vw] leading-none" style={{ top: "60%", left: "4%" }}>
        ミス
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-32 md:pt-36 pb-24">
        {/* Intro Text */}
        <div className="max-w-xl fade-up">
          <p className="text-[17px] md:text-[19px] leading-[1.55] text-[#2a1d14]">
            {heroInfo.intro}{" "}
            <span className="brand-rust font-extrabold">{heroInfo.highlight}</span>
          </p>
        </div>

        {/* Big Title block */}
        <div className="relative mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative">
            <h1
              className="font-display brand-rust leading-[0.85] select-none"
              style={{ fontSize: "clamp(96px, 14vw, 230px)" }}
            >
              <span className="inline-block">RYU</span>
              <br />
              <span className="inline-block ml-[8%]">JIN</span>
            </h1>
            <div className="mt-4 md:mt-6">
              <div className="font-jp brand-rust font-extrabold tracking-[0.04em]" style={{ fontSize: "clamp(22px, 3vw, 40px)" }}>
                {heroInfo.jpTitle}
              </div>
              <div className="brand-rust font-bold tracking-[0.3em] mt-1" style={{ fontSize: "clamp(12px, 1.1vw, 16px)" }}>
                {heroInfo.enTitle}
              </div>
            </div>
          </div>

          {/* NFT fan stack */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="nft-fan">
              <div className="nft-card c1">
                <img src={nftImages[1]} alt="Ryujin NFT 2" className="w-full h-full object-cover" />
              </div>
              <div className="nft-card c3">
                <img src={nftImages[2]} alt="Ryujin NFT 3" className="w-full h-full object-cover" />
              </div>
              <div className="nft-card c2">
                <img src={nftImages[0]} alt="Ryujin NFT 1" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="relative mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#D9A87E]/60 bg-[#FBE9CF]/70 backdrop-blur-sm p-5 md:p-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {mintInfo.map((m) => (
                  <div key={m.label} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] tracking-[0.22em] text-[#7a563b] font-semibold">
                        {m.label}
                      </span>
                      {m.pulse && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
                      )}
                    </div>
                    <div
                      className="font-display text-3xl md:text-4xl"
                      style={{ color: m.color || "#1a120b" }}
                    >
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="https://x.com/NftRyuJin"
                target="_blank"
                rel="noreferrer"
                className="btn-press inline-flex items-center justify-center px-7 py-4 rounded-xl bg-rust text-[#FFF1DD] font-extrabold tracking-wide shadow-[0_10px_22px_-10px_rgba(184,91,54,0.7)] hover:shadow-[0_18px_30px_-12px_rgba(184,91,54,0.75)]"
              >
                Follow us on X
              </a>
              <button
                className="btn-press inline-flex items-center justify-center px-7 py-4 rounded-xl border-2 border-rust brand-rust font-extrabold tracking-wide hover:bg-[#C45A33]/8"
              >
                Join Discord (soon)
              </button>
            </div>
          </div>

          {/* Right column down arrow */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <div className="bounce-y brand-rust">
              <ArrowDown size={28} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
      <ChevronDown className="hidden" />
    </section>
  );
};

export default Hero;
