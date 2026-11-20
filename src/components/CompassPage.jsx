'use client'
import React, { useState } from "react";
import { getTokens } from "./tokens";
import { links, copy } from "./data";
import Header from "./Header";
import CategorySection from "./CategorySection";

const CATEGORY_ORDER = ["Academic", "Career", "StudentLife"];

export default function CompassPage() {
  const [lang, setLang] = useState("th");
  const [theme, setTheme] = useState("light");
  const tokens = getTokens(theme);

  const grouped = CATEGORY_ORDER.map((key) => ({
    key,
    items: links.filter((l) => l.category === key),
  }));

  return (
    <div style={{ background: tokens.page, minHeight: "100vh", transition: "background 0.2s ease" }}>
      <Header
        lang={lang}
        onToggleLang={() => setLang(lang === "en" ? "th" : "en")}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <main className="px-4 sm:px-8 pt-6 sm:pt-8 pb-10 max-w-5xl mx-auto">
        <p
          className="mb-8 max-w-2xl text-sm sm:text-base leading-relaxed"
          style={{ color: tokens.navySoft }}
        >
          {copy[lang].intro}
        </p>

        {grouped.map((g) => (
          <CategorySection key={g.key} catKey={g.key} lang={lang} items={g.items} theme={theme} />
        ))}
      </main>
    </div>
  );
}