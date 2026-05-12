import React, { useState, useEffect } from "react";
import {
  X,
  Bell,
  Heart,
  Repeat2,
  MessageCircle,
  Check,
  AtSign,
  Link2,
  ExternalLink,
  Lock,
  Unlock,
} from "lucide-react";
import { toast } from "sonner";

// Task definitions. Each task is described with the kind of verification:
//  - simple: just click and confirm
//  - username: click + provide X username
//  - link: click + provide retweet/post link
const tasks = [
  {
    id: 1,
    label: "Follow us on X",
    desc: "Follow @SwappedNFT then confirm your X username below.",
    cta: "Follow on X",
    icon: "bell",
    verify: "username",
    href: "https://x.com/intent/follow?screen_name=SwappedNFT",
  },
  {
    id: 2,
    label: "Like the Pinned Post",
    desc: "Open the pinned post and click Like.",
    cta: "Open Post",
    icon: "heart",
    verify: "simple",
    href: "https://x.com/SwappedNFT",
  },
  {
    id: 3,
    label: "Retweet the Pinned Post",
    desc: "Retweet our pinned post, then paste the URL of your retweet below.",
    cta: "Open Post",
    icon: "repeat",
    verify: "link",
    href: "https://x.com/SwappedNFT",
  },
  {
    id: 4,
    label: "Comment Your Favorite Character",
    desc: "Drop a comment under the pinned post telling us your favorite character.",
    cta: "Open Post",
    icon: "message",
    verify: "simple",
    href: "https://x.com/SwappedNFT",
  },
];

const iconMap = { bell: Bell, heart: Heart, repeat: Repeat2, message: MessageCircle };

const sanitizeUsername = (raw) => raw.replace(/^@+/, "").trim();
const isValidUsername = (u) => /^[A-Za-z0-9_]{1,15}$/.test(u);
const isValidRetweetLink = (u) =>
  /^https?:\/\/(www\.)?(x|twitter)\.com\/[^/]+\/status\/\d+/i.test(u.trim());

export const ApplyModal = ({ open, onClose }) => {
  // state per task:
  // pending | opened | done
  const [state, setState] = useState({});
  // user inputs
  const [username, setUsername] = useState("");
  const [retweetLink, setRetweetLink] = useState("");
  // controls input panels visible only after clicking action
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [showRetweetInput, setShowRetweetInput] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  const setTaskState = (id, s) => setState((p) => ({ ...p, [id]: s }));

  const handleOpenAction = (task) => {
    window.open(task.href, "_blank", "noopener,noreferrer");
    setTaskState(task.id, "opened");
    if (task.verify === "username") setShowUsernameInput(true);
    if (task.verify === "link") setShowRetweetInput(true);
  };

  const handleSimpleConfirm = (task) => {
    setTaskState(task.id, "done");
    toast.success("Task confirmed", { description: task.label });
  };

  const submitUsername = () => {
    const clean = sanitizeUsername(username);
    if (!isValidUsername(clean)) {
      toast.error("Invalid X username", {
        description: "Use letters, numbers, or _ (max 15 chars).",
      });
      return;
    }
    setUsername(clean);
    setTaskState(1, "done");
    toast.success("Username saved", { description: `@${clean} verified` });
  };

  const submitRetweetLink = () => {
    const link = retweetLink.trim();
    if (!isValidRetweetLink(link)) {
      toast.error("Invalid retweet link", {
        description: "Paste a full URL like https://x.com/yourname/status/123...",
      });
      return;
    }
    setTaskState(3, "done");
    toast.success("Retweet link saved");
  };

  const allDone = tasks.every((t) => state[t.id] === "done");
  const completedCount = tasks.filter((t) => state[t.id] === "done").length;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 fade-up"
      style={{ background: "rgba(8, 14, 8, 0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#1F3A1F] border border-[#F2C829]/45 shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border border-[#F2C829]/40 text-[#F4EBCC] hover:bg-[#16291A]"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h3 className="font-display brand-yellow text-2xl md:text-3xl">Complete These Tasks</h3>
        <p className="mt-2 text-[14px]" style={{ color: "#D9CFA8" }}>
          Finish all four steps to unlock the application form.
        </p>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-[12px] mb-1.5">
            <span className="brand-yellow font-bold tracking-wider">
              PROGRESS {completedCount}/{tasks.length}
            </span>
            <span style={{ color: "#A7D88A" }}>
              {allDone ? "Form unlocked!" : "Form locked"}
            </span>
          </div>
          <div className="h-2 rounded-full bg-[#16291A] overflow-hidden border border-[#F2C829]/20">
            <div
              className="h-full bg-yellow-brand transition-all duration-500"
              style={{ width: `${(completedCount / tasks.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Tasks */}
        <div className="mt-5 space-y-3">
          {tasks.map((t) => {
            const Icon = iconMap[t.icon];
            const s = state[t.id] || "pending";
            const isDone = s === "done";
            const isOpened = s === "opened";
            return (
              <div
                key={t.id}
                className="rounded-xl bg-[#16291A] border border-[#F2C829]/20 p-3.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isDone ? "bg-emerald-500 text-white" : "bg-yellow-brand brand-forest"
                      }`}
                    >
                      {isDone ? <Check size={18} /> : <Icon size={18} />}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[14px] font-semibold brand-cream truncate">
                        {t.label}
                      </div>
                      <div className="text-[12px] leading-tight" style={{ color: "#A39871" }}>
                        {t.desc}
                      </div>
                    </div>
                  </div>

                  {/* Action button */}
                  {!isDone && (
                    <div className="flex-shrink-0">
                      {t.verify === "simple" ? (
                        isOpened ? (
                          <button
                            onClick={() => handleSimpleConfirm(t)}
                            className="btn-press text-[12px] font-bold px-3.5 py-2 rounded-lg bg-yellow-brand brand-forest"
                          >
                            I did it
                          </button>
                        ) : (
                          <button
                            onClick={() => handleOpenAction(t)}
                            className="btn-press inline-flex items-center gap-1.5 text-[12px] font-bold px-3.5 py-2 rounded-lg bg-yellow-brand brand-forest"
                          >
                            {t.cta}
                            <ExternalLink size={13} strokeWidth={2.5} />
                          </button>
                        )
                      ) : (
                        <button
                          onClick={() => handleOpenAction(t)}
                          className="btn-press inline-flex items-center gap-1.5 text-[12px] font-bold px-3.5 py-2 rounded-lg bg-yellow-brand brand-forest"
                        >
                          {t.cta}
                          <ExternalLink size={13} strokeWidth={2.5} />
                        </button>
                      )}
                    </div>
                  )}
                  {isDone && (
                    <span className="text-[12px] font-bold text-emerald-400 flex items-center gap-1">
                      <Check size={14} strokeWidth={3} /> Done
                    </span>
                  )}
                </div>

                {/* Username input for Task 1 */}
                {t.verify === "username" && showUsernameInput && !isDone && (
                  <div className="mt-3 pt-3 border-t border-[#F2C829]/15">
                    <label className="text-[11px] tracking-[0.22em] font-bold brand-yellow flex items-center gap-1.5 mb-2">
                      <AtSign size={13} strokeWidth={2.5} />
                      YOUR X USERNAME
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-1 flex items-center gap-1 rounded-lg bg-[#0d1a0d] border border-[#F2C829]/30 px-3">
                        <span className="text-[#A39871] text-sm">@</span>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="your_username"
                          className="flex-1 bg-transparent py-2.5 text-[14px] brand-cream outline-none placeholder-[#5e6b50]"
                          maxLength={20}
                        />
                      </div>
                      <button
                        onClick={submitUsername}
                        disabled={!username.trim()}
                        className="btn-press text-[12px] font-bold px-4 rounded-lg bg-yellow-brand brand-forest disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}

                {/* Retweet link input for Task 3 */}
                {t.verify === "link" && showRetweetInput && !isDone && (
                  <div className="mt-3 pt-3 border-t border-[#F2C829]/15">
                    <label className="text-[11px] tracking-[0.22em] font-bold brand-yellow flex items-center gap-1.5 mb-2">
                      <Link2 size={13} strokeWidth={2.5} />
                      RETWEET URL
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="url"
                        value={retweetLink}
                        onChange={(e) => setRetweetLink(e.target.value)}
                        placeholder="https://x.com/yourname/status/12345..."
                        className="flex-1 rounded-lg bg-[#0d1a0d] border border-[#F2C829]/30 px-3 py-2.5 text-[13px] brand-cream outline-none placeholder-[#5e6b50]"
                      />
                      <button
                        onClick={submitRetweetLink}
                        disabled={!retweetLink.trim()}
                        className="btn-press text-[12px] font-bold px-4 py-2.5 rounded-lg bg-yellow-brand brand-forest disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer: Open Form (gated) */}
        <div
          className={`mt-6 rounded-xl p-5 text-center transition-all ${
            allDone
              ? "bg-emerald-900/40 border border-emerald-500/60"
              : "bg-[#16291A] border border-[#F2C829]/20"
          }`}
        >
          {allDone ? (
            <>
              <div className="flex items-center justify-center gap-2 mb-2 text-emerald-300">
                <Unlock size={18} strokeWidth={2.5} />
                <span className="font-semibold">All tasks completed!</span>
              </div>
              <p className="text-[13px] mb-3" style={{ color: "#A7D88A" }}>
                {username && `Verified as @${username}. `}You can now access the application form.
              </p>
              <a
                href="https://forms.gle/example"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  toast.success("Form opening...", {
                    description: "Form link will be provided closer to mint.",
                  });
                }}
                className="btn-press inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-yellow-brand brand-forest font-bold"
              >
                <ExternalLink size={15} strokeWidth={2.5} />
                Open Application Form
              </a>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2 mb-1.5" style={{ color: "#A39871" }}>
                <Lock size={16} strokeWidth={2.5} />
                <span className="text-[13px] font-semibold">Form is locked</span>
              </div>
              <p className="text-[12.5px]" style={{ color: "#A39871" }}>
                Complete all {tasks.length} tasks above to unlock the application form.
              </p>
              <button
                disabled
                className="mt-3 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0d1a0d] border border-[#F2C829]/20 text-[#5e6b50] cursor-not-allowed text-[13px] font-bold"
              >
                <Lock size={14} strokeWidth={2.5} />
                Open Application Form
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
