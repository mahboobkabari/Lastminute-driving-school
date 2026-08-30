import Link from "next/link";
import React from "react";
import { Header } from "./Header";
import { SiteFooter } from "./SiteFooter";
import { ChevronRight } from "./Icon";

export interface InnerHeroProps {
  eyebrow: string;
  title: string;
  text: string;
  badge?: string;
  breadcrumbs?: { label: string; href: string }[];
  children?: React.ReactNode;
}

export function InnerHero({
  eyebrow,
  title,
  text,
  badge,
  breadcrumbs = [{ label: "Home", href: "/" }],
  children,
}: InnerHeroProps) {
  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-[#071a33] pb-16 pt-32 text-white sm:pb-24 sm:pt-40">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(215,25,32,0.22),transparent_45%),linear-gradient(135deg,#071a33_0%,#0b284a_50%,#071a33_100%)] pointer-events-none" />

        <div className="container relative z-10">
          {/* Breadcrumb trail */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-bold text-slate-300">
              {breadcrumbs.map((bc, idx) => (
                <React.Fragment key={bc.href}>
                  <Link href={bc.href} className="transition-colors hover:text-white">
                    {bc.label}
                  </Link>
                  <ChevronRight className="h-3 w-3 text-slate-400" />
                </React.Fragment>
              ))}
              <span className="text-white" aria-current="page">
                {title.length > 30 ? `${title.slice(0, 30)}...` : title}
              </span>
            </nav>
          )}

          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2.5">
              <span className="eyebrow inline-flex items-center gap-1.5 text-red-300">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                {eyebrow}
              </span>
              {badge && (
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                  {badge}
                </span>
              )}
            </div>

            <h1 className="display text-4xl font-black sm:text-5xl lg:text-6xl text-white">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-slate-300">
              {text}
            </p>

            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageFooter() {
  return <SiteFooter />;
}
