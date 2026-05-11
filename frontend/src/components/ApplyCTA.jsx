import React, { useState } from "react";
import { ApplyModal } from "./ApplyModal";

const ApplyCTA = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative bg-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-24">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center bg-rust shadow-[0_30px_60px_-30px_rgba(184,91,54,0.6)]">
          {/* subtle inner pattern */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, #fff 1px, transparent 1.5px)",
              backgroundSize: "38px 38px, 60px 60px",
            }}
          />
          <h2
            className="font-display text-[#FFF1DD] relative"
            style={{ fontSize: "clamp(34px, 5.4vw, 72px)", lineHeight: 1.05 }}
          >
            Ready to Claim Your Pass?
          </h2>
          <p className="text-[#FFF1DD]/90 mt-4 text-[15px] md:text-[17px] relative">
            Complete the following steps in order to get a chance for RyuJin Pass (GTD)
          </p>
          <button
            onClick={() => setOpen(true)}
            className="btn-press relative mt-8 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#FFF7E6] brand-rust font-extrabold tracking-wide shadow-[0_12px_24px_-10px_rgba(0,0,0,0.35)] hover:bg-white"
          >
            Apply Here <span className="ml-2">🎴</span>
          </button>
        </div>
      </div>
      <ApplyModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default ApplyCTA;
