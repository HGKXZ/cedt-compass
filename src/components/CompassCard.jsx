import React from "react";
import { ArrowUpRight } from "lucide-react";
import { tokens } from "./tokens";
import { categoryStyle } from "./data";

export default function CompassCard({ item, lang }) {
  const cat = categoryStyle[item.category];
  const Icon = cat.icon;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-lg border transition-all duration-150 hover:-translate-y-0.5"
      style={{ background: tokens.paper, borderColor: tokens.paperLine, padding: "1.1rem 1.25rem" }}
    >
      {/* bearing ticks — signature detail along the top edge */}
      <div className="absolute top-0 left-4 right-4 flex justify-between" style={{ transform: "translateY(-1px)" }}>
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} style={{ width: 1, height: i % 3 === 0 ? 5 : 3, background: tokens.brass, opacity: 0.6 }} />
        ))}
      </div>

      <div className="flex items-start justify-between gap-3 mt-2">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md" style={{ background: cat.rampBg }}>
          <Icon size={18} style={{ color: cat.ramp }} strokeWidth={1.75} />
        </div>
        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity mt-1" style={{ color: tokens.brass }} />
      </div>

      <p className="mt-3 text-[11px] font-medium tracking-wide uppercase" style={{ color: tokens.navySoft, letterSpacing: "0.06em" }}>
        {cat.label[lang]}
      </p>

      <h3 className="mt-1 text-[16px] leading-snug" style={{ color: tokens.navy, fontFamily: "Georgia, 'Source Serif 4', serif", fontWeight: 600 }}>
        {item.name[lang]}
      </h3>

      <p
        className="mt-1.5 text-[13px] leading-relaxed"
        style={{ color: tokens.navySoft, fontFamily: lang === "en" ? "'IBM Plex Mono', monospace" : "inherit" }}
      >
        {item.desc[lang]}
      </p>
    </a>
  );
}
