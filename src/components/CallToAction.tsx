"use client";

import { site } from "@/data/site";
import { Button } from "./Button";
import { Phone, Star, Shield } from "./Icon";
import { useBookingModal } from "./BookingModal";

export function CallToAction({
  title = "Ready to start learning to drive with confidence?",
  text = "Tell us where you are on your driving journey and we will design a personalized lesson plan that matches your pace and goals.",
  primaryAction = { label: "Book a Driving Lesson", href: "/book" },
  secondaryAction = { label: "Explore Courses", href: "/courses" },
}: {
  title?: string;
  text?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}) {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="container py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071a33] via-[#0b274c] to-[#071a33] p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-14 lg:p-16 border border-white/15">
        {/* Decorative Glow */}
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--red)] opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-blue-600 opacity-15 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow inline-flex items-center gap-1.5 text-red-300">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                Zero-Stress Tuition
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-0.5 text-xs font-bold text-amber-400 backdrop-blur-sm border border-white/10">
                <Star className="h-3.5 w-3.5 fill-amber-400" />
                5.0 Rated Driving School
              </span>
            </div>

            <h2 className="display text-3xl font-black sm:text-4xl lg:text-5xl text-white">
              {title}
            </h2>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
              {text}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                href={primaryAction.href}
                variant="primary"
                size="lg"
                onClick={
                  primaryAction.href === "/book"
                    ? () => openBookingModal()
                    : undefined
                }
              >
                {primaryAction.label}
              </Button>
              <Button href={secondaryAction.href} variant="outline" size="lg">
                {secondaryAction.label}
              </Button>
            </div>
          </div>

          {/* Quick Call Box */}
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-md">
            <div className="text-xs font-black uppercase tracking-wider text-red-300">
              Prefer to speak directly?
            </div>
            <h3 className="mt-2 text-2xl font-black text-white">Give us a call today</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ask about current lesson availability in London W9 or discuss your upcoming practical test date.
            </p>

            <a
              href={`tel:${site.phone}`}
              className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-center text-base font-black text-[var(--navy)] shadow-md transition hover:bg-slate-100"
            >
              <Phone className="h-5 w-5 text-[var(--red)]" />
              <span>{site.phoneDisplay}</span>
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-300">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span>Door-to-door pickup across West London</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
