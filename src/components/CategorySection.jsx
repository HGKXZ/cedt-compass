import React from "react";
import { getTokens } from "./tokens";
import { categoryStyle } from "./data";
import CompassCard from "./CompassCard";

export default function CategorySection({ catKey, lang, items, theme }) {
  const tokens = getTokens(theme);
  const cat = categoryStyle[catKey];
  return (
    <div className="mb-8 sm:mb-10">
      <h2
        className="mb-3 text-xl sm:text-2xl font-semibold tracking-wide"
        style={{ color: tokens.brass, fontFamily: "Georgia, 'Source Serif 4', serif" }}
      >
        {cat.label[lang]}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item) => (
          <CompassCard key={item.name.en} item={item} lang={lang} theme={theme} />
        ))}
      </div>
    </div>
  );
}
