import React, { useState } from "react";
import { ApplyModal } from "./ApplyModal";
import { logoImg } from "../mock.js";

const ApplyCTA = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative bg-forest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-24">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center bg-forest-deep border-2 border-[#F2C829] shadow-[0_30px_60px_-30px_rgba(242,200,41,0.45)]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(247,233,196,0.18) 1px, transparent 1.6px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-yellow-brand opacity-25 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-yellow-brand opacity-15 blur-3xl" />

          <div className="relative flex flex-col items-center">
            <img
              src={logoImg}
              alt="SWAPPED"
              className="logo-img max-w-[440px] w-full h-auto"
              style={{ maxHeight: "110px", objectFit: "contain" }}
            />
            <h2
              className="font-serif-display brand-cream mt-4"
              style={{ fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.05 }}
            >
              Claim Your Pass
            </h2>
            <p className="mt-4 text-[15px] md:text-[17px] max-w-2xl mx-auto" style={{ color: "#D9CFA8" }}>
              Complete the following steps in order to get a chance for a Swapped Pass (GTD).
            </p>
            <button
              onClick={() => setOpen(true)}
              className="btn-press btn-primary mt-8 inline-flex items-center justify-center px-9 py-4 rounded-xl font-extrabold tracking-wide"
            >
              Apply Here
            </button>
          </div>
        </div>
      </div>
      <ApplyModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default ApplyCTA;
