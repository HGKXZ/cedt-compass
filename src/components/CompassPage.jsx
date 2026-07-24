'use client'
import React, { useState } from "react";
import { tokens } from "./tokens";
import { links } from "./data";
import Header from "./Header";
import CategorySection from "./CategorySection";

const CATEGORY_ORDER = ["Academic", "Career", "StudentLife"];

export default function CompassPage() {
  const [lang, setLang] = useState("th");

  const grouped = CATEGORY_ORDER.map((key) => ({
    key,
    items: links.filter((l) => l.category === key),
  }));

  return (
    <div style={{ background: tokens.page, minHeight: "100vh" }}>
      <Header lang={lang} onToggleLang={() => setLang(lang === "en" ? "th" : "en")} />

      <main className="px-4 sm:px-8 pt-6 sm:pt-8 pb-10 max-w-5xl mx-auto">
        {grouped.map((g) => (
          <CategorySection key={g.key} catKey={g.key} lang={lang} items={g.items} />
        ))}
      </main>
    </div>
  );
}
