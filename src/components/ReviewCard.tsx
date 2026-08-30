import { Star, Shield } from "./Icon";
import { Review } from "@/data/reviews";

export interface ReviewCardProps {
  review: Review;
  featured?: boolean;
}

export function ReviewCard({ review, featured = false }: ReviewCardProps) {
  const { name, rating, date, tag, quote, fullReview, verified, testCentre } = review;

  return (
    <figure
      className={`card-hover relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all ${
        featured
          ? "border-red-500/20 bg-gradient-to-b from-white to-red-50/20 shadow-lg"
          : "border-slate-200 bg-white text-[var(--ink)] shadow-sm"
      }`}
    >
      <div>
        {/* Top bar: Stars & Tag */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex text-amber-400" aria-label={`${rating} out of 5 stars`}>
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-0.5 text-[11px] font-black uppercase tracking-wider text-slate-600">
            {tag}
          </span>
        </div>

        {/* Lead Quote */}
        <blockquote className="mt-5 text-base sm:text-lg font-bold leading-snug text-[var(--navy)]">
          “{quote}”
        </blockquote>

        {/* Full Review Text */}
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
          {fullReview}
        </p>
      </div>

      {/* Author & Verification Info */}
      <figcaption className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--navy)] text-xs font-black text-white">
            {name.slice(0, 1)}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold text-[var(--navy)]">{name}</span>
              {verified && (
                <span className="inline-flex items-center text-emerald-600" title="Verified Google Review">
                  <Shield className="h-3.5 w-3.5" />
                </span>
              )}
            </div>
            {testCentre && <div className="text-[11px] font-medium text-slate-400">{testCentre}</div>}
          </div>
        </div>

        <span className="text-[11px] font-semibold text-slate-400">{date}</span>
      </figcaption>
    </figure>
  );
}
