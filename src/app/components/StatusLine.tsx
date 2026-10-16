import { useEffect, useState } from "react";

const SECTIONS = ["portfolio", "architecture", "about", "contact"];

const FIELDS = [
  { label: "role", value: "data scientist" },
  { label: "focus", value: "production ai", hot: true },
  { label: "stack", value: "python · ml · cloud" },
];

/** Vim's ruler position: Top, Bot, or the percentage scrolled. */
function rulerPosition() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0 || window.scrollY <= 0) return "Top";
  if (window.scrollY >= max - 1) return "Bot";
  return `${Math.round((window.scrollY / max) * 100)}%`;
}

/** The section whose top has passed the middle of the viewport, else "home". */
function activeSection() {
  const middle = window.innerHeight / 2;
  let active = "home";
  for (const id of SECTIONS) {
    const top = document.getElementById(id)?.getBoundingClientRect().top;
    if (top !== undefined && top <= middle) active = id;
  }
  return active;
}

/** A Vim-style status bar fixed to the bottom of the viewport, following the scroll. */
export function StatusLine() {
  const [section, setSection] = useState("home");
  const [position, setPosition] = useState("Top");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setSection(activeSection());
      setPosition(rulerPosition());
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 flex items-stretch border-t border-border bg-background/90 backdrop-blur-md mono-caps">
      <span className="flex items-center px-3 py-2 bg-primary text-primary-foreground font-medium">NORMAL</span>
      <span className="flex items-center px-3 py-2 text-chrome normal-case tracking-[0.08em] truncate">
        ~/ridwan/{section}
      </span>
      <div className="ml-auto flex items-stretch">
        {FIELDS.map((field) => (
          <p key={field.label} className="hidden lg:flex items-center gap-2 px-4 py-2 border-l border-border text-[10.5px]">
            <span className="text-muted-foreground">{field.label}</span>
            <span className={field.hot ? "text-primary" : "text-foreground"}>{field.value}</span>
          </p>
        ))}
        <p className="flex items-center justify-end w-16 px-3 py-2 border-l border-border text-[10.5px] text-foreground">
          {position}
        </p>
      </div>
    </div>
  );
}
