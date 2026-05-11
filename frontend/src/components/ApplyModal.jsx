import React, { useState, useEffect } from "react";
import { X, Bell, Heart, Repeat2, MessageCircle, Check } from "lucide-react";
import { applyTasks } from "../mock.js";
import { toast } from "sonner";

const iconMap = { bell: Bell, heart: Heart, repeat: Repeat2, message: MessageCircle };

export const ApplyModal = ({ open, onClose }) => {
  const [done, setDone] = useState({});

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  const allDone = applyTasks.every((t) => done[t.id]);

  const markDone = (id) => {
    setDone((p) => ({ ...p, [id]: true }));
    toast.success("Task completed!", { description: "One step closer to your Swapped Pass." });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 fade-up"
      style={{ background: "rgba(8, 14, 8, 0.7)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#1F3A1F] border border-[#F2C829]/40 shadow-2xl p-7 md:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border border-[#F2C829]/40 text-[#F4EBCC] hover:bg-[#16291A]"
        >
          <X size={18} />
        </button>
        <h3 className="font-display brand-yellow text-3xl">Complete These Tasks</h3>
        <p className="mt-2 text-[14px]" style={{ color: "#D9CFA8" }}>
          Complete these tasks one by one to unlock the application form (mandatory).
        </p>

        <div className="mt-6 space-y-3">
          {applyTasks.map((t) => {
            const Icon = iconMap[t.icon];
            const isDone = !!done[t.id];
            return (
              <div
                key={t.id}
                className="flex items-center justify-between gap-4 p-3 rounded-xl bg-[#16291A] border border-[#F2C829]/20"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDone ? "bg-emerald-500 text-white" : "bg-yellow-brand brand-forest"}`}>
                    {isDone ? <Check size={18} /> : <Icon size={18} />}
                  </div>
                  <span className="text-[14px] font-semibold brand-cream truncate">{t.label}</span>
                </div>
                <button
                  onClick={() => markDone(t.id)}
                  disabled={isDone}
                  className={`btn-press text-[13px] font-bold px-4 py-2 rounded-lg ${
                    isDone
                      ? "bg-emerald-100 text-emerald-700 cursor-default"
                      : "bg-yellow-brand brand-forest hover:opacity-90"
                  }`}
                >
                  {isDone ? "Done" : t.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-6 rounded-xl p-4 text-center transition-all ${
            allDone ? "bg-emerald-900/40 border border-emerald-500/60" : "bg-[#16291A] border border-[#F2C829]/20"
          }`}
        >
          {allDone ? (
            <>
              <p className="font-semibold text-emerald-300">All tasks completed! Now fill out the form to apply.</p>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); toast("Form opening soon"); }}
                className="btn-press inline-flex mt-3 px-6 py-2.5 rounded-lg bg-yellow-brand brand-forest font-bold"
              >
                Open Form
              </a>
            </>
          ) : (
            <p className="text-[13px]" style={{ color: "#D9CFA8" }}>Finish all tasks to unlock the application form.</p>
          )}
        </div>
      </div>
    </div>
  );
};
