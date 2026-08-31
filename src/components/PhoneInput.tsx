"use client";

import { useState, useRef, useEffect, useId } from "react";
import { countries, Country, defaultCountry } from "@/data/countries";

export interface PhoneInputProps {
  id?: string;
  name?: string;
  value: string;
  countryCode: string;
  onChange: (phone: string) => void;
  onCountryChange: (country: Country) => void;
  placeholder?: string;
  hasError?: boolean;
  required?: boolean;
  disabled?: boolean;
}

export function PhoneInput({
  id = "phone-number",
  name = "phone",
  value,
  countryCode,
  onChange,
  onCountryChange,
  placeholder,
  hasError = false,
  required = false,
  disabled = false,
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const listboxId = useId();

  // Find currently selected country or fallback to default UK
  const selectedCountry =
    countries.find((c) => c.dialCode === countryCode) || defaultCountry;

  // Filter countries by search query
  const filteredCountries = countries.filter((c) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.includes(q) ||
      c.code.toLowerCase().includes(q)
    );
  });

  // Handle outside clicks to close dropdown
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle selecting a country
  function handleSelectCountry(country: Country) {
    onCountryChange(country);
    setIsOpen(false);
    setSearch("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }

  // Keyboard navigation inside dropdown search / list
  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      setSearch("");
      triggerRef.current?.focus();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredCountries.length - 1 ? prev + 1 : prev
      );
      scrollItemIntoView(highlightedIndex + 1);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      scrollItemIntoView(highlightedIndex - 1);
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCountries[highlightedIndex]) {
        handleSelectCountry(filteredCountries[highlightedIndex]);
      }
      return;
    }

    if (e.key === "Tab") {
      setIsOpen(false);
      setSearch("");
    }
  }

  function scrollItemIntoView(index: number) {
    if (!listboxRef.current) return;
    const item = listboxRef.current.children[index] as HTMLElement;
    if (item) {
      item.scrollIntoView({ block: "nearest" });
    }
  }

  const activePlaceholder =
    placeholder || selectedCountry.placeholder || "Enter phone number";

  return (
    <div ref={containerRef} className="relative mt-1.5 w-full min-w-0">
      {/* Outer Input Container */}
      <div
        className={`group flex items-center w-full max-w-full min-w-0 rounded-2xl border bg-white transition-all duration-200 ${
          hasError
            ? "border-red-500 bg-red-50/20 ring-2 ring-red-500/10"
            : "border-slate-200 focus-within:border-[var(--red)] focus-within:ring-4 focus-within:ring-red-500/10"
        } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        {/* Country Selector Trigger Button */}
        <button
          ref={triggerRef}
          type="button"
          suppressHydrationWarning
          disabled={disabled}
          onClick={() => setIsOpen((prev) => !prev)}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-label={`Selected country: ${selectedCountry.name}, dial code ${selectedCountry.dialCode}. Click to change country.`}
          className="flex shrink-0 items-center gap-1.5 rounded-l-2xl py-3.5 pl-3.5 pr-2.5 text-sm font-bold text-[var(--navy)] hover:bg-slate-50 transition-colors focus:outline-none focus-visible:bg-slate-100 cursor-pointer"
        >
          <span className="text-base leading-none" aria-hidden="true">
            {selectedCountry.flag}
          </span>
          <span className="text-xs sm:text-sm font-extrabold tracking-tight">
            {selectedCountry.dialCode}
          </span>
          <svg
            className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-[var(--red)]" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Vertical Divider */}
        <div className="h-6 w-px bg-slate-200 shrink-0" aria-hidden="true" />

        {/* Local Number Input */}
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          required={required}
          disabled={disabled}
          suppressHydrationWarning
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={activePlaceholder}
          className="w-full min-w-0 flex-1 bg-transparent px-3.5 py-3.5 text-sm font-medium text-[var(--ink)] placeholder-slate-400 outline-none"
        />
      </div>

      {/* Country Dropdown Popover */}
      {isOpen && (
        <div
          id={listboxId}
          className="absolute left-0 top-full z-50 mt-1.5 w-72 sm:w-80 max-w-[calc(100vw-32px)] rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/15 animate-fadeIn"
        >
          {/* Search Box */}
          <div className="relative mb-2">
            <input
              ref={searchInputRef}
              type="text"
              suppressHydrationWarning
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setHighlightedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search country or code..."
              aria-label="Search country name or international dial code"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-[var(--ink)] placeholder-slate-400 outline-none focus:border-[var(--red)] focus:bg-white focus:ring-2 focus:ring-red-500/10"
            />
          </div>

          {/* Scrollable Country Options List */}
          <ul
            ref={listboxRef}
            role="listbox"
            aria-label="Country list"
            className="max-h-56 overflow-y-auto overflow-x-hidden rounded-xl modal-scrollbar py-1 text-xs space-y-0.5"
          >
            {filteredCountries.length === 0 ? (
              <li className="py-3 px-3 text-center text-xs text-slate-400">
                No countries match &quot;{search}&quot;
              </li>
            ) : (
              filteredCountries.map((c, index) => {
                const isSelected = c.code === selectedCountry.code && c.dialCode === selectedCountry.dialCode;
                const isHighlighted = index === highlightedIndex;
                const isEndOfFeatured = !search.trim() && index === 3;

                return (
                  <div key={`${c.code}-${c.dialCode}`}>
                    <li
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelectCountry(c)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`flex items-center justify-between gap-2.5 rounded-xl px-3 py-2.5 cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-red-50 text-[var(--red)] font-bold"
                          : isHighlighted
                          ? "bg-slate-100 text-[var(--navy)]"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1 truncate">
                        <span className="text-base shrink-0 leading-none" aria-hidden="true">
                          {c.flag}
                        </span>
                        <span className="truncate text-xs font-semibold">{c.name}</span>
                      </div>
                      <span className="text-xs font-extrabold text-slate-400 shrink-0 ml-2 tabular-nums">
                        {c.dialCode}
                      </span>
                    </li>
                    {isEndOfFeatured && (
                      <div className="my-1.5 border-b border-slate-100" aria-hidden="true" />
                    )}
                  </div>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
