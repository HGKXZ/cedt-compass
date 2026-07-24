import React from "react";
import { tokens } from "./tokens";
import { categoryStyle } from "./data";
import CompassCard from "./CompassCard";

export default function CategorySection({ catKey, lang, items }) {
  const cat = categoryStyle[catKey];
  return (
    <div className="mb-8 sm:mb-10">
      <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-wider" style={{ color: tokens.brass, letterSpacing: "0.08em" }}>
        {cat.label[lang]}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item) => (
          <CompassCard key={item.name.en} item={item} lang={lang} />
        ))}
      </div>
    </div>
  );
}
