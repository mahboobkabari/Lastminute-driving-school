"use client";

import { useState } from "react";
import { FaqItem, faqCategories } from "@/data/faq";
import { Search, ChevronRight, Phone } from "./Icon";
import { site } from "@/data/site";

export interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const filteredFaqs = items.filter((faq) => {
    const matchesCat = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search questions (e.g. manual, provisional licence, 2026 test rules, prices)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm font-medium text-[var(--ink)] placeholder-slate-400 outline-none transition focus:border-[var(--red)] focus:ring-4 focus:ring-red-500/10 shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`rounded-full px-4 py-2 text-xs font-black transition-all ${
                activeCategory === cat
                  ? "bg-[var(--navy)] text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-[var(--navy)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm font-semibold text-slate-500">
            No questions found matching &ldquo;{searchQuery}&rdquo;. Try another search or give us a call!
          </div>
        ) : (
          filteredFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-slate-50/70"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[var(--red)] border border-red-100 hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-black text-[var(--navy)]">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--surface)] text-sm font-black text-[var(--navy)] transition-transform duration-200 ${
                      isOpen ? "rotate-45 bg-red-50 text-[var(--red)]" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-6 pt-4 pb-6 animate-fadeIn">
                    <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>

                    {faq.govLink && (
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <a
                          href={faq.govLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-black text-[var(--red)] hover:underline"
                        >
                          <span>{faq.govLink.label}</span>
                          <ChevronRight className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Need more help banner */}
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-[var(--surface)] to-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-black text-[var(--navy)]">Still have questions before booking?</h4>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">We are happy to advise you on test centres, transmission, or lesson plans.</p>
        </div>
        <a
          href={`tel:${site.phone}`}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-5 py-3 text-xs font-black text-white hover:bg-[var(--navy-2)] shadow-md"
        >
          <Phone className="h-4 w-4 text-red-400" />
          <span>Call {site.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
