import React from "react";
import { Twitter, MessagesSquare } from "lucide-react";
import { logoImg } from "../mock.js";

const ApplyCTA = () => {
  return (
    <section className="relative bg-forest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-24">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center bg-forest-deep border-2 border-[#F2C829] shadow-[0_30px_60px_-30px_rgba(242,200,41,0.45)]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(247,233,196,0.18) 1px, transparent 1.6px)",
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
              Join the Community
            </h2>
            <p className="mt-4 text-[15px] md:text-[17px] max-w-2xl mx-auto" style={{ color: "#D9CFA8" }}>
              Follow the journey of the Swapped souls. Be the first to hear lore drops, mint updates, and exclusive
              giveaways.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="btn-press btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-extrabold tracking-wide">
                <Twitter size={18} strokeWidth={2.5} />
                Twitter (coming soon)
              </button>
              <button className="btn-press btn-outline inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-extrabold tracking-wide">
                <MessagesSquare size={18} strokeWidth={2.5} />
                Join Discord (soon)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyCTA;
