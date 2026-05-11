import React from "react";
import { legendCards, forestImg } from "../mock.js";

const Legend = () => {
  return (
    <section className="relative bg-forest overflow-hidden">
      <div className="leaf-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-24 md:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-6">
            <div className="text-[12px] tracking-[0.32em] font-bold text-amber-warm mb-3">THE STORY</div>
            <h2
              className="font-serif-display brand-cream"
              style={{ fontSize: "clamp(56px, 8vw, 110px)", lineHeight: 0.95 }}
            >
              The Legend
            </h2>
            <p className="mt-5 text-[16px] leading-[1.6] max-w-md" style={{ color: "#D9CFA8" }}>
              A quiet myth that traveled through forests, oceans, and skies before it found you. Here is how it goes.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F2C829]/25 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] float-y">
              <img src={forestImg} alt="Swapped forest cover" className="w-full h-[320px] md:h-[360px] object-cover" />
              <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(22,41,26,0.5) 100%)"}} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {legendCards.map((c, i) => (
            <div
              key={c.n}
              className="rounded-2xl border border-[#F2C829]/25 bg-[#16291A]/60 p-7 hover:bg-[#16291A]/90 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-brand brand-forest flex items-center justify-center font-display text-xl border-2 border-[#16291A] shadow-[3px_3px_0_#16291A]">
                {c.n}
              </div>
              <h3 className="mt-5 font-display text-3xl brand-cream">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: "#D9CFA8" }}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legend;
