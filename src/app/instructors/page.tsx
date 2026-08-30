import { InnerHero, PageFooter } from "@/components/InnerHero";
import { InstructorCard } from "@/components/InstructorCard";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";
import { instructors } from "@/data/instructors";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";
import { Shield, Award, Check, Star } from "@/components/Icon";

export const metadata = {
  title: "Driving Instructors | Lastminute Driving School London",
  description:
    "Meet your driving instructor at Lastminute Driving School in London. Patient, calm, and highly recommended across 80+ five-star Google reviews.",
  alternates: { canonical: `${site.url}/instructors` },
};

export default function InstructorsPage() {
  const leadInstructor = instructors[0];
  const instructorReviews = reviews.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="Expert Tuition"
        title="Meet your London driving instructor."
        text="A great driving instructor doesn't just teach you to pass a test—they build the confidence and mindset needed for safe, lifelong driving."
        badge="Verified 5.0 Google Rating"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Instructors", href: "/instructors" },
        ]}
      />

      <main>
        {/* Lead Instructor Profile */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="container max-w-5xl">
            <InstructorCard instructor={leadInstructor} />
          </div>
        </section>

        {/* What Learners Say About Richard */}
        <section className="bg-[var(--surface)] py-20 sm:py-28 border-y border-slate-200">
          <div className="container space-y-12">
            <SectionHeading
              center
              eyebrow="Student Feedback"
              title="Verified reviews for Richard."
              text="Excerpts from learners who experienced Richard's calm teaching style firsthand."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {instructorReviews.map((rev) => (
                <ReviewCard key={rev.id} review={rev} />
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Quality & Safety Standards */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="container max-w-5xl space-y-12">
            <SectionHeading
              center
              eyebrow="Quality Standards"
              title="Our commitment to professional instruction."
              text="We maintain strict standards to ensure every lesson is safe, structured, and constructive."
            />

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-[var(--surface)] p-8 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-[var(--red)] mb-6">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="font-black text-lg text-[var(--navy)]">Patient Coaching</h4>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Calm demeanor, clear step-by-step instructions, and constructive debriefs after every session.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-[var(--surface)] p-8 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                  <Award className="h-6 w-6" />
                </div>
                <h4 className="font-black text-lg text-[var(--navy)]">Test Route Knowledge</h4>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  In-depth familiarity with Greenford, Mill Hill, Hendon, and Isleworth DVSA test hotspots and tricky junctions.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-[var(--surface)] p-8 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="font-black text-lg text-[var(--navy)]">Modern Dual Controls</h4>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Modern, air-conditioned tuition cars fitted with approved dual controls for total safety and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CallToAction
          title={`Ready to start lessons with ${leadInstructor.name}?`}
          text="Submit your booking enquiry and let us know your preferred dates and pickup location."
        />
      </main>

      <PageFooter />
    </div>
  );
}
