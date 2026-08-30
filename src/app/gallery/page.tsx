import { InnerHero, PageFooter } from "@/components/InnerHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";
import { galleryItems } from "@/data/gallery";
import { site } from "@/data/site";

export const metadata = {
  title: "Pass Certificate Gallery | Lastminute Driving School London",
  description:
    "View our gallery of real London learners who successfully passed their practical driving tests with Lastminute Driving School.",
  alternates: { canonical: `${site.url}/gallery` },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="Proof & Milestones"
        title="Real London learners. Real test passes."
        text="Explore our gallery of real driving test pass milestones from test centres across London. Click any photo to view full details."
        badge="18 Client Photos"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />

      <main>
        <section className="bg-[var(--surface)] py-20 sm:py-28">
          <div className="container space-y-12">
            <SectionHeading
              center
              eyebrow="Milestone Archive"
              title="Celebrating our successful drivers."
              text="From nervous beginners to test passers, here are some of our proud student milestones."
            />

            <GalleryGrid items={galleryItems} />
          </div>
        </section>

        {/* CTA */}
        <CallToAction
          title="Want to see your pass photo here next?"
          text="Start your journey with patient, professional driving tuition in West London."
        />
      </main>

      <PageFooter />
    </div>
  );
}
