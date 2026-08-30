import Link from "next/link";
import { InnerHero, PageFooter } from "@/components/InnerHero";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";
import { pricingPackages, pricingNotice } from "@/data/pricing";
import { site } from "@/data/site";
import { Check, Shield, Award, Clock, ArrowRight } from "@/components/Icon";

export const metadata = {
  title: "Pricing & Lesson Packages | Lastminute Driving School London",
  description:
    "Explore transparent driving lesson prices and discounted block booking packages for Lastminute Driving School in London. Single lessons, 5-hour and 10-hour blocks, and practical test day hire.",
  alternates: { canonical: `${site.url}/pricing` },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="Transparent Tuition Rates"
        title="Driving lesson prices & packages in London."
        text="High-quality 1-to-1 instruction with no hidden fees. Save with our structured lesson blocks or book a single assessment drive."
        badge="Configurable Packages"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing & Packages", href: "/pricing" },
        ]}
      />

      <main>
        {/* Pricing Notice & Grid */}
        <section className="bg-[var(--surface)] py-20 sm:py-28">
          <div className="container space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <SectionHeading
                center
                eyebrow="Lesson Rates"
                title="Choose the package that matches your pace."
                text="All packages include 1-to-1 tuition, door-to-door pickup in our coverage zone, and personalized progress debriefs."
              />

              <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-xs font-semibold text-amber-900">
                <strong>Pricing Transparency Notice:</strong> {pricingNotice.disclaimer}
              </div>
            </div>

            {/* Packages Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingPackages.map((pkg) => (
                <PricingCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Included in Every Lesson */}
        <section className="py-20 sm:py-28 bg-white border-y border-slate-200">
          <div className="container max-w-5xl space-y-12">
            <SectionHeading
              center
              eyebrow="The Lastminute Guarantee"
              title="What is always included in every lesson."
              text="We pride ourselves on high standards, reliability, and total respect for your learning time."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-[var(--surface)] p-6">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-red-50 text-[var(--red)] mb-4">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="font-black text-base text-[var(--navy)]">Strictly 1-to-1</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  No piggybacking or dropping other learners off. You receive 100% of your instructor&apos;s attention.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[var(--surface)] p-6">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-blue-600 mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-black text-base text-[var(--navy)]">Full Duration</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Every 2-hour lesson is a full 120 minutes of coaching, driving practice, and personalized feedback.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[var(--surface)] p-6">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-50 text-amber-600 mb-4">
                  <Award className="h-5 w-5" />
                </div>
                <h4 className="font-black text-base text-[var(--navy)]">DVSA Curriculum</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Structured learning tracking all 27 DVSA core competencies from cockpit drills to independent navigation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[var(--surface)] p-6">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600 mb-4">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="font-black text-base text-[var(--navy)]">Door-to-Door</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Pickup and return from your home, college, or workplace within our London coverage areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction
          title="Ready to book your first assessment lesson?"
          text="Get in touch today to check current availability for your preferred day and pickup location."
        />
      </main>

      <PageFooter />
    </div>
  );
}
