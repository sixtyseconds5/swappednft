import React, { useState } from "react";
import { ArrowDown, Sparkles, Ticket, PlayCircle } from "lucide-react";
import {
  mintInfo,
  logoImg,
  forestImg,
  synopsis,
  teaserVideo,
  heroTagline,
} from "../mock.js";
import { ApplyModal } from "./ApplyModal";

const Hero = () => {
  const [openApply, setOpenApply] = useState(false);

  return (
    <section id="top" className="relative bg-canvas overflow-hidden">
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

        {/* Tagline */}
        <div className="mt-6 md:mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F2C829]/50 bg-[#16291A]/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2C829]" />
            <span className="text-[12px] md:text-[13px] tracking-[0.18em] font-semibold brand-yellow uppercase">
              {heroTagline}
            </span>
          </div>
        </div>

        {/* Synopsis */}
        <div className="mt-6 md:mt-8 max-w-3xl mx-auto fade-up">
          <div className="synopsis-card p-6 md:p-7">
            <div className="text-[11px] tracking-[0.32em] font-bold brand-yellow mb-2">SYNOPSIS</div>
            <p className="text-[14.5px] md:text-[15.5px] leading-[1.7] brand-cream">
              {synopsis}
            </p>
          </div>
        </div>

        {/* Teaser Video */}
        <div className="mt-8 md:mt-10 max-w-3xl mx-auto fade-up">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#F2C829]/40 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] bg-black">
            <video
              src={teaserVideo}
              controls
              playsInline
              preload="metadata"
              poster={forestImg}
              className="w-full h-auto block"
              style={{ maxHeight: "480px", aspectRatio: "16 / 9", objectFit: "cover" }}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-3 left-3 pointer-events-none">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#16291A]/85 border border-[#F2C829]/50">
                <PlayCircle size={14} className="brand-yellow" strokeWidth={2.5} />
                <span className="text-[10px] tracking-[0.22em] font-bold brand-yellow">TEASER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Apply CTA card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-[#16291A] border-2 border-[#F2C829] p-8 md:p-9 shadow-[0_30px_60px_-30px_rgba(242,200,41,0.45)]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(247,233,196,0.18) 1px, transparent 1.6px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-yellow-brand opacity-25 blur-3xl pointer-events-none" />

              <div className="relative flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-yellow-brand brand-forest flex items-center justify-center border-2 border-[#0d1a0d] shadow-[3px_3px_0_#0d1a0d]">
                  <Ticket size={22} strokeWidth={2.5} />
                </div>
                <div className="mt-5 text-[11px] tracking-[0.32em] font-bold brand-yellow">
                  GET WHITELISTED
                </div>
                <h3
                  className="font-serif-display brand-cream mt-2"
                  style={{ fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1.0 }}
                >
                  Claim Your Pass
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6]" style={{ color: "#D9CFA8" }}>
                  Complete a few quick tasks to unlock the application form and get a chance at a Swapped Pass (GTD).
                </p>

                <button
                  onClick={() => setOpenApply(true)}
                  className="btn-press btn-primary mt-6 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-extrabold tracking-wide"
                >
                  <Sparkles size={18} strokeWidth={2.5} />
                  Apply Here
                </button>

                <div className="mt-5 flex items-center gap-2 text-[12px]" style={{ color: "#A7D88A" }}>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                  Applications open · Limited spots
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
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
                      className="font-display leading-none"
                      style={{
                        color: m.color || "#F4EBCC",
                        fontSize:
                          m.value === "ETHEREUM"
                            ? "clamp(20px, 2.2vw, 28px)"
                            : "clamp(28px, 3.4vw, 40px)",
                      }}
                    >
                      {m.value}
                      {m.suffix && (
                        <span
                          className="text-base ml-1 align-baseline"
                          style={{ color: "#D9CFA8" }}
                        >
                          {m.suffix}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-center">
            <div className="bounce-y brand-yellow">
              <ArrowDown size={28} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>

      <ApplyModal open={openApply} onClose={() => setOpenApply(false)} />
    </section>
  );
};

export default Hero;
