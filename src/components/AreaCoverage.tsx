import { coverageAreas, nearbyTestCentres } from "@/data/coverage";
import { site } from "@/data/site";
import { MapPin, Car, Shield, ArrowRight } from "./Icon";
import Link from "next/link";

export function AreaCoverage() {
  return (
    <div className="space-y-12">
      {/* Postcodes Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coverageAreas.map((area) => (
          <div
            key={area.postcode}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-xl bg-red-50 px-3 py-1 text-sm font-black text-[var(--red)] border border-red-100">
                {area.postcode}
              </span>
              <span className="text-xs font-bold text-slate-400">{area.borough}</span>
            </div>
            <h4 className="mt-4 text-lg font-black text-[var(--navy)]">{area.name}</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">{area.description}</p>
          </div>
        ))}
      </div>

      {/* Test Centres Focus */}
      <div className="rounded-3xl border border-slate-200 bg-[var(--surface)] p-8 sm:p-10">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--red)]">
          <Car className="h-4 w-4" />
          <span>Local DVSA Test Centres We Prepare You For</span>
        </div>

        <h3 className="mt-2 text-2xl sm:text-3xl font-black text-[var(--navy)]">
          Targeted London Test Route Practice
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          We familiarize you with real test routes, junction layouts, and tricky roundabouts around the most common West and North London test centres.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {nearbyTestCentres.map((centre, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="font-black text-base text-[var(--navy)]">{centre.name}</div>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600">
                  {centre.travelTime}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <MapPin className="h-3.5 w-3.5 text-red-500 shrink-0" />
                <span>{centre.location} ({centre.postcode})</span>
              </div>

              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                {centre.features.map((feat, fIdx) => (
                  <li key={fIdx}>• {feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Based at <strong>{site.address.full}</strong>. Door-to-door pickup available across W9 & West London.
          </div>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--red)] px-6 py-3 text-xs font-black text-white hover:bg-[var(--red-dark)] shadow-md shadow-red-900/20"
          >
            <span>Check Pickup Availability</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
