import Link from "next/link";
import { Check, ArrowRight } from "./Icon";
import { Course } from "@/data/courses";

export interface CourseCardProps {
  course: Course;
  compact?: boolean;
}

export function CourseCard({ course, compact = false }: CourseCardProps) {
  const {
    slug,
    title,
    tagline,
    summary,
    idealFor,
    duration,
    transmission,
    keyOutcomes,
    badge,
    featured,
  } = course;

  return (
    <article
      id={slug}
      className={`card-hover group relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all ${
        featured
          ? "border-red-500/30 bg-gradient-to-b from-[#071a33] to-[#0a2344] text-white shadow-xl"
          : "border-slate-200/90 bg-white text-[var(--ink)] shadow-sm"
      }`}
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${
              featured
                ? "bg-red-500/20 text-red-300 border border-red-400/30"
                : "bg-red-50 text-[var(--red)] border border-red-100"
            }`}
          >
            {transmission}
          </span>
          {badge && (
            <span
              className={`rounded-full px-3 py-0.5 text-xs font-black uppercase tracking-wider ${
                featured
                  ? "bg-white/20 text-white"
                  : "bg-[var(--navy)] text-white"
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3
          className={`mt-6 text-xl sm:text-2xl font-black tracking-tight ${
            featured ? "text-white" : "text-[var(--navy)]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-xs sm:text-sm font-semibold italic ${
            featured ? "text-red-300" : "text-[var(--red)]"
          }`}
        >
          {tagline}
        </p>

        {/* Summary Description */}
        <p
          className={`mt-4 text-sm leading-relaxed ${
            featured ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {summary}
        </p>

        {/* Ideal Learner Callout */}
        {!compact && (
          <div
            className={`mt-6 rounded-2xl p-4 text-xs ${
              featured
                ? "bg-white/5 border border-white/10 text-slate-200"
                : "bg-[var(--surface)] text-slate-700 border border-slate-100"
            }`}
          >
            <strong
              className={`block font-extrabold uppercase tracking-wider mb-1 ${
                featured ? "text-white" : "text-[var(--navy)]"
              }`}
            >
              Ideal For:
            </strong>
            <span>{idealFor}</span>
          </div>
        )}

        {/* Key Outcomes */}
        {!compact && keyOutcomes && keyOutcomes.length > 0 && (
          <div className="mt-6 space-y-2.5">
            <div
              className={`text-xs font-black uppercase tracking-wider ${
                featured ? "text-slate-300" : "text-slate-500"
              }`}
            >
              Key Learning Outcomes
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {keyOutcomes.slice(0, 3).map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10px] font-black ${
                      featured
                        ? "bg-red-500/30 text-red-300"
                        : "bg-red-50 text-[var(--red)]"
                    }`}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  <span
                    className={`leading-snug ${
                      featured ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Info & Action */}
      <div
        className={`mt-8 border-t pt-5 flex items-center justify-between gap-4 ${
          featured ? "border-white/15" : "border-slate-100"
        }`}
      >
        <div>
          <div
            className={`text-[11px] font-bold uppercase tracking-wider ${
              featured ? "text-slate-300" : "text-slate-400"
            }`}
          >
            Duration
          </div>
          <div
            className={`text-xs sm:text-sm font-black ${
              featured ? "text-white" : "text-[var(--navy)]"
            }`}
          >
            {duration.split("(")[0]}
          </div>
        </div>

        <Link
          href={`/book?course=${encodeURIComponent(title)}`}
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-black tracking-tight transition-all ${
            featured
              ? "bg-[var(--red)] text-white hover:bg-[var(--red-dark)] shadow-md shadow-red-900/40"
              : "bg-[var(--navy)] text-white hover:bg-[var(--navy-2)]"
          }`}
        >
          <span>Book Course</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
