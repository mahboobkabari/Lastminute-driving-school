"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, Phone } from "@/components/Icon";
import { site } from "@/data/site";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--ink)]">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 sm:py-32 bg-[var(--surface)]">
        <div className="container max-w-2xl text-center space-y-8 px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-amber-800">
            Unexpected Issue
          </div>

          <h1 className="display text-4xl sm:text-6xl font-black text-[var(--navy)]">
            Something went wrong
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600">
            We encountered an unexpected error while loading this page. Please try refreshing or return to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--red)] px-8 py-4 text-sm font-black text-white shadow-md shadow-red-900/20 transition hover:bg-[var(--red-dark)] cursor-pointer"
            >
              <span>Try Again</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              href="/"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-black text-[var(--navy)] hover:bg-slate-50 transition"
            >
              <span>Return Home</span>
            </Link>

            <a
              href={`tel:${site.phone}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-black text-[var(--navy)] hover:bg-slate-50 transition"
            >
              <Phone className="h-4 w-4 text-[var(--red)]" />
              <span>Call {site.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
