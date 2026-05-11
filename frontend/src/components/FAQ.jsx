import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../mock.js";

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="relative bg-canvas overflow-hidden">
      <div className="kana-watermark text-[18vw] md:text-[12vw] leading-none" style={{ top: "6%", left: "-3%" }}>
        質問
      </div>
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-28 relative">
        <div className="text-center">
          <div className="text-[12px] tracking-[0.32em] font-bold text-amber-brand mb-3">QUESTIONS</div>
          <h2
            className="font-serif-display brand-forest"
            style={{ fontSize: "clamp(64px, 9vw, 130px)", lineHeight: 0.95 }}
          >
            FAQ
          </h2>
          <p className="text-[#3a3a25] mt-3 text-sm md:text-base tracking-wide">
            Everything you need to know about Swapped Character
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="faq-item" data-open={isOpen}>
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left"
                >
                  <span className="font-extrabold text-[15px] md:text-[16px] brand-forest">{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`brand-forest transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2.5}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height,opacity] duration-400 ease-out"
                  style={{ maxHeight: isOpen ? "700px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-5 md:px-6 pb-5 text-[14.5px] leading-[1.65] text-[#3a3a25] whitespace-pre-line">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
