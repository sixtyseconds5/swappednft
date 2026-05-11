import React from "react";
import { ArrowDown } from "lucide-react";
import { mintInfo, characters, logoImg, forestImg, synopsis } from "../mock.js";

const Hero = () => {
  return (
    <section id="top" className="relative bg-canvas overflow-hidden">
      {/* Forest background layer */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(${forestImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.1)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,58,31,0.7) 0%, rgba(22,41,26,0.95) 100%)",
        }}
      />
      <div className="leaf-overlay" />
      <div className="sun-orb" style={{ top: "-80px", right: "-100px" }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-32 md:pt-36 pb-24">
        {/* Hero Title (logo image) */}
        <div className="flex flex-col items-center text-center">
          <img
            src={logoImg}
            alt="SWAPPED"
            className="logo-img w-full max-w-[760px] h-auto"
            style={{ maxHeight: "clamp(140px, 18vw, 260px)", objectFit: "contain" }}
          />
        </div>

        {/* Synopsis */}
        <div className="mt-10 md:mt-12 max-w-3xl mx-auto fade-up">
          <div className="synopsis-card p-6 md:p-7">
            <div className="text-[11px] tracking-[0.32em] font-bold brand-yellow mb-2">SYNOPSIS</div>
            <p className="text-[14.5px] md:text-[15.5px] leading-[1.7] brand-cream">
              {synopsis}
            </p>
          </div>
        </div>

        {/* Big title + 4-card fan */}
        <div className="relative mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="text-[12px] tracking-[0.32em] font-bold text-amber-warm mb-3">
              MEET THE FOUR
            </div>
            <h2
              className="font-serif-display brand-cream"
              style={{ fontSize: "clamp(56px, 8vw, 110px)", lineHeight: 0.95 }}
            >
              Four lives,<br />one twist.
            </h2>
            <p className="mt-6 max-w-md text-[15px] md:text-[16px] leading-[1.6] brand-cream/90" style={{color: "#D9CFA8"}}>
              When worlds collide and souls cross over, something extraordinary happens. Meet the cast at the heart of the Swapped story.
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
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
        <div className="relative mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-[#F2C829]/25 bg-[#16291A]/70 backdrop-blur-sm p-5 md:p-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {mintInfo.map((m) => (
                  <div key={m.label} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] tracking-[0.22em] text-[#E6B85A] font-semibold">
                        {m.label}
                      </span>
                      {m.pulse && <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />}
                    </div>
                    <div
                      className="font-display text-3xl md:text-4xl"
                      style={{ color: m.color || "#F4EBCC" }}
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
            <div className="bounce-y brand-yellow">
              <ArrowDown size={28} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
