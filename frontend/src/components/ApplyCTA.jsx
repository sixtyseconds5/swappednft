import React, { useState } from "react";
import { ApplyModal } from "./ApplyModal";

const ApplyCTA = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative bg-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-24">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center bg-forest border-2 border-[#1F2A1B] shadow-[0_30px_60px_-30px_rgba(28,38,18,0.6)]">
          <div aria-hidden className="absolute inset-0 dot-pattern opacity-30" />
          <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-yellow-brand opacity-30 blur-2xl" />
          <h2
            className="logo-swapped relative"
            style={{ fontSize: "clamp(40px, 6.4vw, 90px)", lineHeight: 1.05 }}
          >
            CLAIM YOUR PASS
          </h2>
          <p className="text-[#F5E9B6] mt-5 text-[15px] md:text-[17px] relative max-w-2xl mx-auto">
            Complete the following steps in order to get a chance for a Swapped Pass (GTD)
          </p>
          <button
            onClick={() => setOpen(true)}
            className="btn-press btn-primary relative mt-8 inline-flex items-center justify-center px-9 py-4 rounded-xl font-extrabold tracking-wide"
          >
            Apply Here 🎴
          </button>
        </div>
      </div>
      <ApplyModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default ApplyCTA;
