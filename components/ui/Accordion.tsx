"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-medium text-navy">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-royal transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`grid transition-all duration-200 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-[15px] leading-relaxed text-ink/70">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
