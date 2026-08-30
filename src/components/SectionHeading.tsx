import React from "react";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  center?: boolean;
  badge?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
  badge,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${center ? "mx-auto text-center" : "text-left"} ${
        light ? "text-white" : "text-[var(--ink)]"
      } ${className}`}
    >
      <div
        className={`mb-3.5 flex items-center gap-2 ${
          center ? "justify-center" : "justify-start"
        }`}
      >
        <span
          className={`eyebrow inline-flex items-center gap-1.5 ${
            light ? "text-red-300" : "text-[var(--red)]"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
        {badge && (
          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-extrabold tracking-wide uppercase ${
              light
                ? "bg-white/10 text-white/90 border border-white/15"
                : "bg-red-50 text-[var(--red)] border border-red-100"
            }`}
          >
            {badge}
          </span>
        )}
      </div>
      <h2
        className={`display text-3xl font-black sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[var(--navy)]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-[var(--muted)]"
          } ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
