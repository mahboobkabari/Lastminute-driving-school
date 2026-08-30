import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseCard } from "@/components/CourseCard";
import { ReviewCard } from "@/components/ReviewCard";
import { PricingCard } from "@/components/PricingCard";
import { InstructorCard } from "@/components/InstructorCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { TestGuidanceSection } from "@/components/TestGuidanceSection";
import { AreaCoverage } from "@/components/AreaCoverage";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CallToAction } from "@/components/CallToAction";
import { Stat } from "@/components/Stat";
import { courses } from "@/data/courses";
import { reviews, reviewSummary } from "@/data/reviews";
import { pricingPackages, pricingNotice } from "@/data/pricing";
import { instructors } from "@/data/instructors";
import { galleryItems } from "@/data/gallery";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";
import { Check, Star, Shield, Car, Award, ArrowRight, MapPin, Phone } from "@/components/Icon";

export default function HomePage() {
  const featuredCourses = courses.slice(0, 4);
  const featuredReviews = reviews.slice(0, 3);
  const previewGallery = galleryItems.slice(0, 6);
  const previewFaqs = faqs.slice(0, 5);
  const primaryPackages = pricingPackages.slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-[var(--ink)]">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#071a33] pt-32 pb-20 text-white sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(215,25,32,0.25),transparent_40%),radial-gradient(circle_at_15%_80%,rgba(13,42,79,0.8),transparent_50%),linear-gradient(135deg,#071a33_0%,#0b284a_50%,#071a33_100%)] pointer-events-none" />

        <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="max-w-2xl">
            {/* Trust Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-slate-200 backdrop-blur-md shadow-sm">
              <span className="flex text-amber-400">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              </span>
              <span>
                <strong className="text-white">5.0 Rated</strong> on Google · {site.googleReviewCount} Verified Reviews
              </span>
            </div>

            <h1 className="display text-4xl sm:text-6xl lg:text-7xl font-black text-white">
              Learn to Drive with <span className="text-red-400 underline decoration-red-500/50 underline-offset-8">Confidence</span> in London.
            </h1>

            <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-slate-300">
              Professional, patient driving instruction in London designed to build safe, calm, and test-ready drivers from lesson one.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
              <Button href="/book" variant="primary" size="lg">
                Book a Driving Lesson
              </Button>
              <Button href="/courses" variant="outline" size="lg">
                Explore Courses
              </Button>
            </div>

            {/* Micro Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <Stat value="5.0 ★" label="Google Rating" sublabel="82 Verified Reviews" />
              <Stat value="100%" label="1-to-1 Tuition" sublabel="No Car Sharing" />
              <Stat value="W9" label="London Base" sublabel="West & NW Routes" />
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (Real Learner Milestone) */}
          <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
            {/* Top Right Floating Badge */}
            <div className="absolute -right-4 -top-4 z-20 hidden rounded-2xl border border-white/20 bg-[#071a33]/90 p-4 text-white shadow-2xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-red-400 uppercase">
                <Shield className="h-4 w-4" />
                <span>Zero-Stress Coaching</span>
              </div>
              <div className="mt-1 text-sm font-black">Calm · Patient · Clear</div>
            </div>

            {/* Main Photo Card */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border-2 border-white/15 bg-white/5 shadow-2xl">
              <Image
                src="/images/learner-04.jpg"
                alt="Successful learner standing beside driving school tuition car after passing their practical driving test in London"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Bottom Testimonial Overlay */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-slate-950/60 p-4 text-white backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <Star className="h-3.5 w-3.5 fill-amber-400" />
                  <span>Real London Learner Milestone</span>
                </div>
                <div className="mt-1 text-sm font-bold text-slate-100">
                  &ldquo;I felt ready for the test and genuinely confident behind the wheel.&rdquo;
                </div>
                <div className="mt-1 text-[11px] font-medium text-slate-400">
                  Sean · Verified Google Review
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <TrustBar />

      {/* 3. INTRODUCTION: TEACHING PHILOSOPHY */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Our Teaching Philosophy"
            title="Instruction that meets you where you are."
            text="Learning to drive in London can feel intimidating. Our coaching is built around patience, clear communication, and understanding the 'why' behind every maneuver—not just memorizing routines."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-[var(--surface)] p-7 transition hover:shadow-md">
              <div className="text-3xl font-black text-[var(--red)]">01</div>
              <h3 className="mt-6 text-xl font-black text-[var(--navy)]">Understand the Why</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Good driving is about observation, anticipation, and safe decision-making on complex London roads.
              </p>
            </div>

            <div className="rounded-3xl bg-[#071a33] p-7 text-white shadow-lg">
              <div className="text-3xl font-black text-red-400">02</div>
              <h3 className="mt-6 text-xl font-black text-white">Build Real Independence</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                We develop composed drivers who can make safe, independent choices when traffic conditions suddenly change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED DRIVING COURSES */}
      <section className="bg-[var(--surface)] py-20 sm:py-28 border-y border-slate-200/80">
        <div className="container space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Structured Driving Courses"
              title="Tailored tuition for every stage of your journey."
              text="Whether you are sitting behind the wheel for the first time, rebuilding confidence, or preparing for your practical test."
            />
            <Link
              href="/courses"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-xs font-black text-[var(--navy)] hover:border-[var(--navy)] transition shadow-sm"
            >
              <span>View All 8 Courses</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course) => (
              <CourseCard key={course.slug} course={course} compact />
            ))}
          </div>
        </div>
      </section>

      {/* 5. 2026 DVSA TEST PREPARATION SPOTLIGHT */}
      <section className="bg-[#071a33] py-20 sm:py-28 text-white relative overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <TestGuidanceSection light />
        </div>
      </section>

      {/* 6. REAL LEARNER RESULTS / GALLERY PREVIEW */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Real Learner Success"
              title="Real London students. Real pass certificates."
              text="Social proof from learners who trained with Lastminute Driving School and passed their practical tests."
            />
            <Link
              href="/gallery"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 text-xs font-black text-white hover:bg-[var(--navy-2)] transition shadow-md"
            >
              <span>Explore Full Pass Gallery</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <GalleryGrid items={previewGallery} limit={6} />
        </div>
      </section>

      {/* 7. MEET YOUR INSTRUCTOR */}
      <section className="bg-[var(--surface)] py-20 sm:py-28 border-y border-slate-200/80">
        <div className="container">
          <InstructorCard instructor={instructors[0]} />
        </div>
      </section>

      {/* 8. LESSON PACKAGES & PRICING PREVIEW */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading
              center
              eyebrow="Transparent Pricing"
              title="Simple, straightforward driving lesson packages."
              text="Structured lesson rates designed to fit your goals. Select an assessment lesson or save with our block bookings."
            />
            <div className="mt-4 inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-600">
              {pricingNotice.disclaimer}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {primaryPackages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-black text-[var(--red)] hover:underline"
            >
              <span>Compare All Pricing Packages & Test Day Hire</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. AUTHENTIC GOOGLE REVIEWS & TESTIMONIALS */}
      <section className="bg-[#071a33] py-20 sm:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(215,25,32,0.15),transparent_40%)] pointer-events-none" />

        <div className="container relative z-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              light
              eyebrow="Verified Customer Reviews"
              title="What our learners have to say."
              text="Authentic review excerpts from our 5.0-rated Google Business Profile. Highlights of patience, clear feedback, and first-time passes."
            />
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-black text-white hover:bg-white/20 transition backdrop-blur-sm"
            >
              <span>View Google Profile (82 Reviews)</span>
              <span>↗</span>
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. LOCAL LONDON COVERAGE & TEST CENTRES */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Areas We Cover"
            title="West & North West London Driving Lessons."
            text="Convenient door-to-door pickup across W9, NW6, W10, W2, and surrounding postcodes, with specialized practice on local DVSA test routes."
          />
          <AreaCoverage />
        </div>
      </section>

      {/* 11. FAQ PREVIEW */}
      <section className="bg-[var(--surface)] py-20 sm:py-28 border-t border-slate-200/80">
        <div className="container max-w-4xl space-y-10">
          <SectionHeading
            center
            eyebrow="Frequently Asked Questions"
            title="Everything you need to know before booking."
            text="Clear answers to common questions about licences, manual vs automatic, lesson lengths, and DVSA test requirements."
          />
          <FaqAccordion items={previewFaqs} />
          <div className="text-center pt-4">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-6 py-3 text-xs font-black text-[var(--navy)] hover:bg-slate-50 transition shadow-sm"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. HIGH CONVERSION BOOKING CTA */}
      <CallToAction />

      {/* 13. FOOTER */}
      <SiteFooter />
    </main>
  );
}
