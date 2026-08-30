import { InnerHero, PageFooter } from "@/components/InnerHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { TestGuidanceSection } from "@/components/TestGuidanceSection";
import { CallToAction } from "@/components/CallToAction";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";

export const metadata = {
  title: "Frequently Asked Questions & 2026 Test Rules | Lastminute Driving School",
  description:
    "Find answers to frequently asked questions about driving lessons, provisional licences, manual vs automatic cars, lesson cancellation policies, and DVSA 2026 driving test booking rules.",
  alternates: { canonical: `${site.url}/faq` },
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="Help & Knowledge"
        title="Frequently Asked Questions & DVSA Guidance"
        text="Everything you need to know about starting driving lessons in London, test preparation, licence requirements, and the latest 2026 DVSA booking policies."
        badge="Official DVSA Info"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <main>
        {/* Searchable FAQ Accordion */}
        <section className="bg-[var(--surface)] py-20 sm:py-28">
          <div className="container max-w-4xl space-y-12">
            <SectionHeading
              center
              eyebrow="Quick Answers"
              title="Common Questions from Learners"
              text="Use the search bar or category filters below to find answers to your specific question."
            />

            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* 2026 Driving Test Requirements Guidance */}
        <section className="py-20 sm:py-28 bg-white border-t border-slate-200">
          <div className="container">
            <TestGuidanceSection />
          </div>
        </section>

        {/* CTA */}
        <CallToAction
          title="Have a specific question not covered here?"
          text="Give us a call or submit an enquiry and we will be delighted to help you get road-ready."
        />
      </main>

      <PageFooter />
    </div>
  );
}
