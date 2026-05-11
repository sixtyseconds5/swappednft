import React from "react";
import { legendCards, coverImage } from "../mock.js";

const Legend = () => {
  return (
    <section className="relative bg-soft-section overflow-hidden">
      <div className="kana-watermark text-[18vw] md:text-[12vw] leading-none" style={{ top: "6%", right: "-2%" }}>
        交換
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-24 md:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-6">
            <div className="text-[12px] tracking-[0.32em] font-bold text-amber-brand mb-3">THE STORY</div>
            <h2
              className="font-serif-display brand-forest"
              style={{ fontSize: "clamp(56px, 8vw, 110px)", lineHeight: 0.95 }}
            >
              The Legend
            </h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-[#3a3a25] max-w-md">
              A quiet myth that traveled through forests, oceans, and skies before it found you. Here is how it goes.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#1F2A1B]/15 shadow-[0_30px_60px_-30px_rgba(28,38,18,0.5)] float-y">
              <img src={coverImage} alt="Swapped cover" className="w-full h-[320px] md:h-[360px] object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {legendCards.map((c, i) => (
            <div
              key={c.n}
              className="rounded-2xl border-2 border-[#1F2A1B]/15 bg-[#FBF3D2]/70 p-7 hover:bg-[#FBF3D2]/95 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-brand brand-forest flex items-center justify-center font-display text-xl border-2 border-[#1F2A1B] shadow-[3px_3px_0_#1F2A1B]">
                {c.n}
              </div>
              <h3 className="mt-5 font-display text-3xl brand-forest">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#3a3a25]">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legend;
