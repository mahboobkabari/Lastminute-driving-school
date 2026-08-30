import { InnerHero, PageFooter } from "@/components/InnerHero";
import { site } from "@/data/site";

export const metadata = {
  title: "Terms & Conditions | Lastminute Driving School London",
  description: "Terms and conditions of driving tuition with Lastminute Driving School in London.",
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="Legal & Terms"
        title="Terms & Conditions"
        text="The terms of service governing driving lessons, block packages, cancellations, and test day vehicle hire with Lastminute Driving School."
        badge="UK Driving Tuition Terms"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions", href: "/terms" },
        ]}
      />

      <main className="py-16 sm:py-24">
        <div className="container prose max-w-4xl space-y-8 text-slate-700">
          <div className="rounded-2xl border border-slate-200 bg-[var(--surface)] p-6 text-xs text-slate-700 leading-relaxed">
            <strong>Key Summary:</strong> We ask all learners to maintain at least 48 hours&apos; notice for lesson cancellations and ensure they hold a valid UK provisional licence. Our vehicles are fully insured with DVSA-approved dual controls.
          </div>

          <section>
            <h2>1. Driving Licences & Legal Eligibility</h2>
            <p>
              To take driving lessons on public roads in the UK, you must hold a valid UK Provisional Driving Licence (or a valid international licence permitted by the DVLA).
            </p>
            <ul>
              <li>You must present your physical photocard licence to your instructor at your first lesson.</li>
              <li>You must meet the DVSA eyesight standard: the ability to read a vehicle registration plate from 20.0 metres (20.5m for old-style plates), with glasses or contact lenses if worn.</li>
              <li>You must notify your instructor immediately of any medical conditions, endorsements, or changes affecting your entitlement to drive.</li>
            </ul>
          </section>

          <section>
            <h2>2. Lesson Bookings & Payments</h2>
            <p>
              Lesson slots are scheduled by agreement between the learner and Lastminute Driving School.
            </p>
            <ul>
              <li>Payment for single lessons or block packages must be settled before or at the start of the scheduled session.</li>
              <li>Block booking packages (e.g. 5 or 10 hours) are non-transferable and must be used within 6 months of purchase.</li>
              <li>Published prices represent example rates that are confirmed at the time of booking.</li>
            </ul>
          </section>

          <section>
            <h2>3. 48-Hour Cancellation & Rescheduling Policy</h2>
            <p>
              Instructors allocate dedicated time slots for each pupil. Therefore:
            </p>
            <ul>
              <li>A minimum of <strong>48 hours&apos; notice</strong> is required to cancel or reschedule a driving lesson without charge.</li>
              <li>Cancellations made with less than 48 hours&apos; notice will be charged at the full standard lesson rate.</li>
              <li>If the instructor is forced to cancel a lesson due to mechanical breakdown, adverse weather, or emergency, the session will be rearranged at no additional cost.</li>
            </ul>
          </section>

          <section>
            <h2>4. Fitness to Drive & Punctuality</h2>
            <p>
              Learners must be in a fit mental and physical state to drive safely.
            </p>
            <ul>
              <li>Driving under the influence of alcohol, illegal drugs, or medication that causes drowsiness is strictly prohibited. The instructor reserves the right to terminate any lesson immediately without refund if a learner appears unfit to drive.</li>
              <li>If a pupil arrives late, the lesson will still finish at the scheduled time to avoid disrupting subsequent pupils.</li>
              <li>The instructor will wait at the agreed pickup point for up to 15 minutes before the lesson is treated as a late cancellation.</li>
            </ul>
          </section>

          <section>
            <h2>5. Practical Driving Test Day & Vehicle Hire</h2>
            <p>
              When booking your practical driving test with the DVSA:
            </p>
            <ul>
              <li>You must consult and coordinate with your instructor before booking a DVSA practical test slot to ensure instructor and vehicle availability.</li>
              <li>The instructor reserves the right to withhold the use of the tuition car for a test if, in their professional judgment, the learner has not reached a safe, test-ready standard.</li>
              <li>Practical Test Day hire packages include a 1-hour pre-test warmup, vehicle hire during the 40-minute DVSA test, and return transport.</li>
            </ul>
          </section>

          <section>
            <h2>6. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales.
            </p>
          </section>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
