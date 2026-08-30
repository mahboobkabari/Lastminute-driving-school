import Link from "next/link";
import { dvsa2026TestStructure, dvsa2026BookingRules } from "@/data/dvsaGuidance";
import { Check, Shield, Award, ArrowRight } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function TestGuidanceSection({ light = false }: { light?: boolean }) {
  return (
    <section className="space-y-12">
      <SectionHeading
        eyebrow="2026 DVSA Driving Test Guide"
        title="What is actually assessed in the UK practical driving test."
        text="The Driver and Vehicle Standards Agency (DVSA) evaluates safe, independent driving across 5 core stages. Here is the verified structure you will be assessed on."
        light={light}
      />

      {/* 4 Test Pillars Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {dvsa2026TestStructure.map((sec, idx) => (
          <div
            key={idx}
            className={`rounded-3xl border p-7 transition-all ${
              light
                ? "border-white/15 bg-white/5 text-white backdrop-blur-sm"
                : "border-slate-200 bg-white text-[var(--ink)] shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={`rounded-full px-3 py-0.5 text-xs font-black uppercase tracking-wider ${
                  light ? "bg-red-500/20 text-red-300" : "bg-red-50 text-[var(--red)]"
                }`}
              >
                {sec.duration}
              </span>
              <span className={`text-xs font-extrabold ${light ? "text-slate-400" : "text-slate-400"}`}>
                Part 0{idx + 1}
              </span>
            </div>

            <h3 className={`mt-4 text-xl font-black ${light ? "text-white" : "text-[var(--navy)]"}`}>
              {sec.title}
            </h3>

            <p className={`mt-3 text-sm leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>
              {sec.description}
            </p>

            {/* Checklist */}
            <div className="mt-5 space-y-2">
              <div className={`text-xs font-black uppercase tracking-wider ${light ? "text-slate-400" : "text-slate-400"}`}>
                Assessment Checklist:
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {sec.checklist.map((item, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${light ? "text-red-400" : "text-[var(--red)]"}`} />
                    <span className={light ? "text-slate-200" : "text-slate-600"}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor Tip */}
            <div
              className={`mt-6 rounded-2xl p-4 text-xs font-medium ${
                light ? "bg-white/10 text-slate-200 border border-white/10" : "bg-[var(--surface)] text-slate-700 border border-slate-100"
              }`}
            >
              <strong className={light ? "text-red-300" : "text-[var(--navy)]"}>Instructor Tip: </strong>
              <span>{sec.tips[0]}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 2026 DVSA Booking Policy Updates Notice */}
      <div
        className={`rounded-3xl border p-8 sm:p-10 ${
          light
            ? "border-red-500/30 bg-red-950/20 text-white"
            : "border-slate-200 bg-[var(--surface)] text-[var(--navy)]"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--red)]">
              <Shield className="h-4 w-4" />
              <span>Official DVSA 2026 Booking Integrity Rules</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black">
              Important 2026 Driving Test Booking Changes
            </h4>
            <p className={`text-sm leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>
              The DVSA requires learners to book and manage tests directly via GOV.UK. We guide you through the process, ensure your skills meet the official standard, and provide dual-control vehicle hire on test day.
            </p>
          </div>

          <a
            href="https://www.gov.uk/book-driving-test"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3.5 text-xs font-black text-white hover:bg-[var(--navy-2)] shadow-md"
          >
            <span>Book Official Test on GOV.UK</span>
            <span>↗</span>
          </a>
        </div>

        {/* 4 Rules Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dvsa2026BookingRules.map((rule, rIdx) => (
            <div
              key={rIdx}
              className={`rounded-2xl p-4 border text-xs ${
                light
                  ? "bg-white/5 border-white/10 text-slate-300"
                  : "bg-white border-slate-200 text-slate-600 shadow-sm"
              }`}
            >
              <div className={`font-black mb-1.5 ${light ? "text-white" : "text-[var(--navy)]"}`}>
                {rule.rule}
              </div>
              <p className="leading-relaxed">{rule.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
