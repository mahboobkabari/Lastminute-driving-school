import { site } from "@/data/site";
import { Star, Shield, Car, Award } from "./Icon";

export function TrustBar() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 container">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 backdrop-blur-md sm:p-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Trust 1: 5.0 Google Rating */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 first:pt-0">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-50 text-amber-500">
              <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-lg font-black text-[var(--navy)]">
                <span>{site.googleRating.toFixed(1)}</span>
                <span className="text-xs font-bold text-amber-500">★★★★★</span>
              </div>
              <p className="text-xs font-bold text-slate-500">
                {site.googleReviewCount} Google Reviews
              </p>
            </div>
          </div>

          {/* Trust 2: DVSA Standards */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-8">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-red-50 text-[var(--red)]">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-black text-[var(--navy)]">DVSA Standard</div>
              <p className="text-xs font-bold text-slate-500">
                1-to-1 Patient Tuition
              </p>
            </div>
          </div>

          {/* Trust 3: West London Base */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-8">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600">
              <Car className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-black text-[var(--navy)]">London W9 Base</div>
              <p className="text-xs font-bold text-slate-500">
                West & North West Routes
              </p>
            </div>
          </div>

          {/* Trust 4: First-Time Pass Preparation */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-8">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-black text-[var(--navy)]">High Pass Rate</div>
              <p className="text-xs font-bold text-slate-500">
                Mock Tests & Route Mastery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
