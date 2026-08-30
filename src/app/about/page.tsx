import Image from "next/image";
import Link from "next/link";
import { InnerHero, PageFooter } from "@/components/InnerHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";
import { Check, Star, Shield, Car, Award, ArrowRight } from "@/components/Icon";
import { site } from "@/data/site";
import { instructors } from "@/data/instructors";

export const metadata = {
  title: "About Us | Lastminute Driving School London",
  description:
    "Learn about Lastminute Driving School in London W9. Discover our calm, patient driving tuition philosophy, instructor standards, and track record of building safe, confident drivers.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  const leadInstructor = instructors[0];

  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="About Lastminute Driving School"
        title="Patient, calm, and confidence-building driving instruction in London."
        text="We believe learning to drive should be empowering, not stressful. Based in London W9, we help complete beginners and nervous drivers become safe, composed, and independent road users."
        badge="London W9 Based"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />

      <main>
        {/* Section 1: Our Story & Philosophy */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-slate-200 bg-slate-100 shadow-xl">
                <Image
                  src="/images/learner-01.jpg"
                  alt="Learner holding driving test pass certificate beside instructor car"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 text-[var(--navy)] backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span>5.0 Rating · 82 Google Reviews</span>
                  </div>
                  <div className="mt-1 text-sm font-black">Proven London Results</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <SectionHeading
                eyebrow="Our Mission"
                title="Teaching the thinking, not just the routine."
                text="Lastminute Driving School was established with a singular focus: providing high-quality, patient 1-to-1 driving tuition tailored to London's demanding road environment."
              />

              <p className="text-base leading-relaxed text-slate-600">
                London roads require more than just technical clutch control. They demand proactive observation, spatial awareness, anticipation of cyclists and pedestrians, and absolute composure in multi-lane roundabouts.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded-2xl border border-slate-200 bg-[var(--surface)] p-5">
                  <div className="flex items-center gap-2 font-black text-[var(--navy)]">
                    <Shield className="h-4 w-4 text-[var(--red)]" />
                    <span>Calm Environment</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Never rushed or criticized. We create a supportive space where mistakes become learning moments.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[var(--surface)] p-5">
                  <div className="flex items-center gap-2 font-black text-[var(--navy)]">
                    <Award className="h-4 w-4 text-emerald-600" />
                    <span>Test Route Savvy</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Extensive experience across Greenford, Mill Hill, Hendon, and Isleworth DVSA test routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Instructor Spotlight */}
        <section className="bg-[var(--surface)] py-20 sm:py-28 border-y border-slate-200">
          <div className="container max-w-5xl space-y-12">
            <SectionHeading
              center
              eyebrow="Lead Instructor"
              title="Learn with Richard"
              text="Praised across dozens of verified Google reviews for patient coaching, clear explanations, and a structured approach to test day success."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-md grid gap-8 md:grid-cols-[1fr_1.5fr] items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/learner-04.jpg"
                  alt="Instructor Richard with a student who passed test"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-wider text-[var(--red)]">
                  Professional Instructor
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[var(--navy)]">
                  {leadInstructor.name} · {leadInstructor.role}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  {leadInstructor.bio}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                    What learners say about Richard:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {leadInstructor.teachingStyle.map((style, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{style}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--red)] px-6 py-3 text-xs font-black text-white hover:bg-[var(--red-dark)] transition shadow-md"
                  >
                    <span>Book Lessons with Richard</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/reviews"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-xs font-black text-[var(--navy)] hover:bg-slate-50 transition"
                  >
                    Read Customer Reviews
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Verified Standards & Ethics */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="container max-w-4xl space-y-8">
            <SectionHeading
              center
              eyebrow="Our Commitment"
              title="Honest tuition. Zero gimmicks."
              text="We prioritize genuine road competence over commercial marketing hype."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-[var(--surface)] p-6 text-center">
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-red-50 text-[var(--red)] mb-4">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="font-black text-base text-[var(--navy)]">No False Guarantees</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  We don&apos;t make unsupported &ldquo;100% pass rate&rdquo; claims. We focus on making you genuinely test-ready through structured practice.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[var(--surface)] p-6 text-center">
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-blue-600 mb-4">
                  <Car className="h-5 w-5" />
                </div>
                <h4 className="font-black text-base text-[var(--navy)]">Modern Dual-Control</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Tuition vehicles fitted with certified dual controls, climate control, and supreme visibility.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[var(--surface)] p-6 text-center">
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600 mb-4">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="font-black text-base text-[var(--navy)]">Full 1-to-1 Lessons</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  You get 100% of your instructor&apos;s attention. No car sharing or dropping off other pupils during your session.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CallToAction
          title="Ready to experience a better way of learning to drive?"
          text="Get in touch to book your assessment lesson or discuss the best course package for your schedule."
        />
      </main>

      <PageFooter />
    </div>
  );
}
