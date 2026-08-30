import { InnerHero, PageFooter } from "@/components/InnerHero";
import { BookingForm } from "@/components/BookingForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";
import { Check, Shield, Phone, Clock, Star, MapPin } from "@/components/Icon";

export const metadata = {
  title: "Book a Driving Lesson | Lastminute Driving School London",
  description:
    "Request a driving lesson with Lastminute Driving School in London. Fast response, tailored lesson plans, and door-to-door pickup across West London postcodes.",
  alternates: { canonical: `${site.url}/book` },
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="Lesson Request"
        title="Book your driving lesson in London."
        text="Fill out the form below to request a lesson slot, check pickup availability, or arrange practical test preparation in London W9 and surrounding areas."
        badge="Quick Response"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book a Lesson", href: "/book" },
        ]}
      />

      <main className="bg-[var(--surface)] py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left Column: Reassurance & Checklist */}
          <div className="space-y-8">
            <div>
              <div className="eyebrow text-[var(--red)]">What Happens Next</div>
              <h2 className="display mt-2 text-3xl font-black text-[var(--navy)]">
                A smooth, stress-free start.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Once you submit your enquiry, we will review your requested days, transmission choice, and pickup location, then contact you to schedule your initial session.
              </p>
            </div>

            {/* Checklist Box */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm space-y-4">
              <h3 className="font-black text-base text-[var(--navy)] flex items-center gap-2">
                <Shield className="h-4 w-4 text-[var(--red)]" />
                <span>Before Your First Lesson:</span>
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Valid UK Provisional Licence:</strong> Ensure you have your physical photocard licence ready.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Pickup Postcode:</strong> We provide door-to-door pickup across W9, NW6, W10, W2, NW10, and NW8.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Test Date (if booked):</strong> Let us know if you already have a test booked so we can schedule mock test prep.
                  </span>
                </li>
              </ul>
            </div>

            {/* Trust & Phone Card */}
            <div className="rounded-3xl bg-[#071a33] p-7 text-white shadow-xl">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>5.0 Rating · 82 Google Reviews</span>
              </div>
              <h3 className="mt-3 text-xl font-black text-white">Prefer to talk directly?</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Call us directly to discuss lesson availability or your driving experience:
              </p>

              <a
                href={`tel:${site.phone}`}
                className="mt-5 flex items-center justify-center gap-2.5 rounded-2xl bg-[var(--red)] py-3.5 text-center text-sm font-black text-white shadow-md transition hover:bg-[var(--red-dark)]"
              >
                <Phone className="h-4 w-4" />
                <span>{site.phoneDisplay}</span>
              </a>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-red-400" />
                <span>{site.address.full}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div>
            <BookingForm />
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
