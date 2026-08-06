import React from "react";
import Image from "next/image";
import { Languages, Sun, Moon } from "lucide-react";
import { getTokens } from "./tokens";
import { copy } from "./data";

export default function Header({ lang, onToggleLang, theme, onToggleTheme }) {
  const tokens = getTokens(theme);

  return (
    <header
      className="flex items-center justify-between gap-4 px-4 sm:px-8"
      style={{ background: tokens.paper, borderBottom: `1px solid ${tokens.paperLine}`, paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
    >
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        {/* Logo */}
        <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border overflow-hidden" style={{ borderColor: tokens.paperLine, background: "#fff" }}>
          <Image src="/logo.png" alt="CEDT Compass logo" fill className="object-cover" sizes="(min-width: 640px) 56px, 48px" />
        </div>
        <div className="min-w-0">
          <h1
            className="text-lg sm:text-2xl leading-tight truncate"
            style={{ color: tokens.navy, fontFamily: "Georgia, 'Source Serif 4', serif", fontWeight: 700 }}
          >
            {copy[lang].title}
          </h1>
          <p className="text-xs sm:text-sm leading-snug truncate" style={{ color: tokens.navySoft }}>
            {copy[lang].subtitle}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          onClick={onToggleTheme}
          aria-label="Toggle dark/light mode"
          className="flex items-center justify-center rounded-md border h-8 w-8 sm:h-9 sm:w-9 transition-colors cursor-pointer"
          style={{ borderColor: tokens.paperLine, color: tokens.navySoft, background: tokens.page }}
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <button
          onClick={onToggleLang}
          className="flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          style={{ borderColor: tokens.paperLine, color: tokens.navySoft, background: tokens.page }}
        >
          <Languages size={14} />
          {lang === "en" ? "ไทย" : "EN"}
        </button>
      </div>
    </header>
  );
}
