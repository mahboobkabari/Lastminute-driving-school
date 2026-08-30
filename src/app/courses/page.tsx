import Link from "next/link";
import { InnerHero, PageFooter } from "@/components/InnerHero";
import { CourseCard } from "@/components/CourseCard";
import { TestGuidanceSection } from "@/components/TestGuidanceSection";
import { CallToAction } from "@/components/CallToAction";
import { SectionHeading } from "@/components/SectionHeading";
import { courses } from "@/data/courses";
import { site } from "@/data/site";
import { Check, ArrowRight, Car, Shield } from "@/components/Icon";

export const metadata = {
  title: "Driving Courses & Lessons | Lastminute Driving School London",
  description:
    "Explore our complete range of driving courses in London: Beginner Tuition, Driving Test Preparation, Refresher Lessons, Manual & Automatic, Parking Practice, and Highway Driving.",
  alternates: { canonical: `${site.url}/courses` },
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="Driving Courses & Tuition"
        title="Structured driving courses tailored to your experience."
        text="From your first time sitting behind the wheel to focused DVSA test route preparation, our courses build lifelong safe driving habits and real road confidence."
        badge="8 Tailored Courses"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Driving Courses", href: "/courses" },
        ]}
      />

      <main>
        {/* Course Cards Grid */}
        <section className="bg-[var(--surface)] py-20 sm:py-28">
          <div className="container space-y-12">
            <SectionHeading
              center
              eyebrow="Course Catalog"
              title="Choose your starting point."
              text="Select the course that matches where you are right now. All courses are delivered 1-to-1 in modern dual-control vehicles."
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {courses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Manual vs Automatic Comparison Guide */}
        <section className="py-20 sm:py-28 bg-white border-y border-slate-200">
          <div className="container max-w-5xl space-y-12">
            <SectionHeading
              center
              eyebrow="Choosing Transmission"
              title="Manual vs Automatic: Which is right for you?"
              text="Both options have unique advantages depending on your learning style, career goals, and timeline."
            />

            <div className="grid gap-8 md:grid-cols-2">
              {/* Manual Box */}
              <div className="rounded-3xl border-2 border-slate-200 bg-[var(--surface)] p-8 sm:p-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-red-50 text-[var(--red)] px-3 py-1 text-xs font-black uppercase tracking-wider border border-red-100">
                    Manual Transmission
                  </span>
                  <span className="text-xs font-bold text-slate-400">Category B Unrestricted</span>
                </div>

                <h3 className="text-2xl font-black text-[var(--navy)]">Manual Driving Lessons</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Passing your test in a manual car grants an unrestricted full UK driving licence, permitting you to drive both manual and automatic vehicles.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[var(--red)] shrink-0 mt-0.5" />
                    <span>Complete control over engine revs, gears, and engine braking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[var(--red)] shrink-0 mt-0.5" />
                    <span>Total freedom to rent or buy any car, van, or commercial vehicle</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[var(--red)] shrink-0 mt-0.5" />
                    <span>Typically slightly cheaper vehicle purchase and repair costs</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/book?course=Manual%20Driving%20Course"
                    className="inline-flex items-center gap-2 text-xs font-black text-[var(--red)] hover:underline"
                  >
                    <span>Book Manual Lessons</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Automatic Box */}
              <div className="rounded-3xl border-2 border-slate-200 bg-white p-8 sm:p-10 space-y-6 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 text-blue-600 px-3 py-1 text-xs font-black uppercase tracking-wider border border-blue-100">
                    Automatic Transmission
                  </span>
                  <span className="text-xs font-bold text-slate-400">Category B Auto</span>
                </div>

                <h3 className="text-2xl font-black text-[var(--navy)]">Automatic Driving Lessons</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  No clutch pedal, no gear shifting, and zero stalling. Dedicated focus on hazard perception, road positioning, and navigating busy London junctions.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Zero clutch anxiety, zero stalls, and effortless hill starts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Faster learning curve and quicker progression to test readiness</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Ideal for heavy stop-start London commuter traffic & electric cars</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/book?course=Automatic%20Driving%20Course"
                    className="inline-flex items-center gap-2 text-xs font-black text-[var(--navy)] hover:underline"
                  >
                    <span>Book Automatic Lessons</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Test Guidance Section */}
        <section className="bg-[#071a33] py-20 sm:py-28 text-white">
          <div className="container">
            <TestGuidanceSection light />
          </div>
        </section>

        {/* CTA */}
        <CallToAction
          title="Not sure which driving course suits you best?"
          text="Tell us about your previous driving experience and we will recommend the ideal lesson plan."
        />
      </main>

      <PageFooter />
    </div>
  );
}
