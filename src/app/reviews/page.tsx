import { InnerHero, PageFooter } from "@/components/InnerHero";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";
import { reviews, reviewSummary } from "@/data/reviews";
import { site } from "@/data/site";
import { Star, Shield, Award, Check } from "@/components/Icon";

export const metadata = {
  title: "Learner Reviews & Testimonials | Lastminute Driving School London",
  description:
    "Read genuine customer reviews for Lastminute Driving School in London. Rated 5.0 on Google with 82 verified reviews praising calm instruction, test preparation, and first-time passes.",
  alternates: { canonical: `${site.url}/reviews` },
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="Learner Testimonials"
        title="5.0 Rated on Google by London Drivers"
        text="A driving school's reputation is built lesson by lesson. Read verified customer reviews and feedback from learners who passed with Lastminute Driving School."
        badge="82 Google Reviews"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Reviews", href: "/reviews" },
        ]}
      />

      <main>
        {/* Rating Summary Bar */}
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="container max-w-5xl">
            <div className="rounded-3xl border border-slate-200 bg-[var(--surface)] p-8 sm:p-10 shadow-sm grid gap-8 md:grid-cols-[1fr_1.5fr] items-center">
              <div className="text-center md:text-left space-y-3">
                <div className="text-5xl sm:text-6xl font-black text-[var(--navy)]">
                  {reviewSummary.averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center md:justify-start text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Based on {site.googleReviewCount} Verified Google Reviews
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-black uppercase tracking-wider text-[var(--red)]">
                  Recurring Themes from Real Reviews
                </div>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs font-bold text-slate-700">
                  {reviewSummary.themes.map((theme, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <a
                    href={site.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[var(--navy)] hover:text-[var(--red)] transition"
                  >
                    <span>View all reviews on Google Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Reviews Grid */}
        <section className="bg-[var(--surface)] py-20 sm:py-28">
          <div className="container space-y-12">
            <SectionHeading
              center
              eyebrow="Customer Stories"
              title="What our learners remember."
              text="Selected excerpts from the supplied Google Business Profile review material, presented as genuine social proof."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            <div className="text-center pt-8">
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-8 py-4 text-sm font-black text-white hover:bg-[var(--navy-2)] transition shadow-lg"
              >
                <span>Read More on Google Business Profile</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CallToAction
          title="Ready to write your own driving success story?"
          text="Join dozens of confident drivers who passed their driving tests with Lastminute Driving School."
        />
      </main>

      <PageFooter />
    </div>
  );
}
