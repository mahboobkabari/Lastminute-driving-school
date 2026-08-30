import { InnerHero, PageFooter } from "@/components/InnerHero";
import { site } from "@/data/site";

export const metadata = {
  title: "Privacy Policy | Lastminute Driving School London",
  description: "Privacy policy and data protection guidance for Lastminute Driving School in London.",
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="Legal & Compliance"
        title="Privacy Policy"
        text="How Lastminute Driving School collects, uses, stores, and protects your personal data in accordance with UK GDPR and the Data Protection Act 2018."
        badge="UK GDPR Compliant"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <main className="py-16 sm:py-24">
        <div className="container prose max-w-4xl space-y-8 text-slate-700">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-xs text-blue-900 leading-relaxed">
            <strong>Summary:</strong> We respect your privacy. When you request a driving lesson or submit an enquiry, we collect only the necessary contact and location information required to schedule your tuition. We do not sell your personal information to third parties.
          </div>

          <section>
            <h2>1. Information We Collect</h2>
            <p>
              When you interact with Lastminute Driving School, we may collect the following personal information:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Full name, telephone number, and email address.</li>
              <li><strong>Location Data:</strong> Pickup address or postal area in London (e.g. W9 postcode) for scheduling door-to-door lessons.</li>
              <li><strong>Driving & Licence Details:</strong> Driving experience level, provisional or full driving licence number (for eligibility verification), and test dates.</li>
              <li><strong>Website Usage Data:</strong> Anonymized technical data such as browser type, operating system, and page view metrics to maintain site reliability.</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We process your personal information for the following legitimate purposes:</p>
            <ul>
              <li>Scheduling, confirming, and delivering 1-to-1 driving lessons and assessment sessions.</li>
              <li>Assisting with practical driving test preparation and vehicle hire arrangements.</li>
              <li>Communicating important updates regarding lesson timings, cancellations, or weather disruptions.</li>
              <li>Complying with statutory DVSA regulations, vehicle insurance obligations, and UK road traffic legislation.</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, rent, or trade your personal data. We only share necessary information with trusted service providers who support our core operations:
            </p>
            <ul>
              <li><strong>Hosting & Technical Infrastructure:</strong> Vercel and secure cloud hosting providers.</li>
              <li><strong>Communication Services:</strong> Email and SMS notification delivery providers.</li>
              <li><strong>Statutory Authorities:</strong> The Driver and Vehicle Standards Agency (DVSA) or law enforcement only where legally required by UK law.</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Retention</h2>
            <p>
              We retain learner contact information and training logs only for as long as necessary to fulfill our educational services, manage account balances, or comply with legal and insurance audit requirements.
            </p>
          </section>

          <section>
            <h2>5. Your Rights Under UK GDPR</h2>
            <p>Under the UK General Data Protection Regulation (UK GDPR), you have the right to:</p>
            <ul>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete personal data.</li>
              <li>Request erasure of your personal data where retention is no longer necessary.</li>
              <li>Object to or restrict certain types of data processing.</li>
            </ul>
          </section>

          <section>
            <h2>6. Contact Us Regarding Privacy</h2>
            <p>
              If you have any questions or requests regarding your data, please contact:
            </p>
            <p>
              <strong>Lastminute Driving School</strong><br />
              {site.address.full}<br />
              Telephone: {site.phoneDisplay}<br />
              Email: {site.email}
            </p>
          </section>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
