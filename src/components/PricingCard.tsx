"use client";

import Link from "next/link";
import { Check, ArrowRight } from "./Icon";
import { PricingPackage } from "@/data/pricing";
import { useBookingModal } from "./BookingModal";

export interface PricingCardProps {
  pkg: PricingPackage;
}

export function PricingCard({ pkg }: PricingCardProps) {
  const { openBookingModal } = useBookingModal();
  const { name, price, unit, summary, idealFor, features, isPopular, badge, savingsNote } = pkg;

  return (
    <article
      className={`card-hover relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all ${
        isPopular
          ? "border-[var(--red)] bg-white shadow-2xl shadow-slate-900/10 ring-2 ring-red-500/20"
          : "border-slate-200 bg-white text-[var(--ink)] shadow-sm"
      }`}
    >
      {/* Popular Floating Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[var(--red)] px-4 py-1 text-[11px] font-black tracking-widest text-white uppercase shadow-md">
          {badge || "Most Popular"}
        </div>
      )}

      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-black uppercase tracking-wider text-slate-400">Driving Package</div>
          {savingsNote && (
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
              {savingsNote}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-xl sm:text-2xl font-black tracking-tight text-[var(--navy)]">
          {name}
        </h3>

        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500">
          {summary}
        </p>

        {/* Price Tag */}
        <div className="my-6 rounded-2xl bg-[var(--surface)] p-4 text-center border border-slate-100">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl sm:text-4xl font-black text-[var(--navy)]">{price}</span>
          </div>
          <div className="mt-1 text-xs font-semibold text-slate-500">{unit}</div>
        </div>

        {/* Ideal Learner Callout */}
        <div className="text-xs font-medium text-slate-600 bg-slate-50 rounded-xl p-3 mb-6">
          <strong className="font-bold text-[var(--navy)]">Best For: </strong>
          <span>{idealFor}</span>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3">
          <div className="text-xs font-black uppercase tracking-wider text-slate-400">What&apos;s Included:</div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
            {features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check className="h-3 w-3" />
                </span>
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <Link
          href={`/book?package=${encodeURIComponent(name)}`}
          onClick={(e) => {
            e.preventDefault();
            openBookingModal({ course: name });
          }}
          className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-center text-sm font-black tracking-tight transition-all ${
            isPopular
              ? "bg-[var(--red)] text-white hover:bg-[var(--red-dark)] shadow-lg shadow-red-900/20"
              : "bg-[var(--navy)] text-white hover:bg-[var(--navy-2)]"
          }`}
        >
          <span>Choose Package</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="mt-2 text-center text-[11px] text-slate-400">Example rate · Confirm details upon booking</p>
      </div>
    </article>
  );
}
