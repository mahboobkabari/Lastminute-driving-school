import { InnerHero, PageFooter } from "@/components/InnerHero";
import { BookingForm } from "@/components/BookingForm";
import { AreaCoverage } from "@/components/AreaCoverage";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";
import { Phone, MapPin, Clock, Star, Shield, ArrowRight } from "@/components/Icon";

export const metadata = {
  title: "Contact Us | Lastminute Driving School London",
  description:
    "Contact Lastminute Driving School in London W9. Call 07984 210509, view our base on Bravington Rd, or send a lesson enquiry online.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <InnerHero
        eyebrow="Get In Touch"
        title="Contact Lastminute Driving School"
        text="Have a question about driving lessons, availability in London W9, or practical test preparation? We are here to help."
        badge="Direct Contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      <main>
        {/* Contact Methods Grid */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="container grid gap-8 md:grid-cols-3">
            {/* Phone Card */}
            <div className="rounded-3xl bg-[#071a33] p-8 text-white shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-400">
                  <Phone className="h-4 w-4" />
                  <span>Call Us Directly</span>
                </div>
                <h3 className="mt-4 text-2xl sm:text-3xl font-black text-white">{site.phoneDisplay}</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Call to discuss instructor availability, manual vs automatic options, or test dates.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--red)] py-3.5 text-center text-xs font-black text-white hover:bg-[var(--red-dark)] transition"
                >
                  <span>Call Now</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-3xl border border-slate-200 bg-[var(--surface)] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--navy)]">
                  <MapPin className="h-4 w-4 text-[var(--red)]" />
                  <span>London W9 Base</span>
                </div>
                <h3 className="mt-4 text-xl sm:text-2xl font-black text-[var(--navy)]">Bravington Rd, W9</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {site.address.full}
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white py-3.5 text-center text-xs font-black text-[var(--navy)] hover:bg-slate-50 transition"
                >
                  <span>Open in Google Maps ↗</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="rounded-3xl border border-slate-200 bg-[var(--surface)] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--navy)]">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Tuition Hours</span>
                </div>
                <h3 className="mt-4 text-xl sm:text-2xl font-black text-[var(--navy)]">Lesson Schedule</h3>
                <div className="mt-4 space-y-2 text-xs text-slate-600">
                  {site.operatingHours.map((sched, idx) => (
                    <div key={idx} className="flex justify-between border-b border-slate-200/60 pb-1.5 last:border-0">
                      <span className="font-bold text-slate-700">{sched.days}</span>
                      <span>{sched.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 text-[11px] text-slate-500 font-medium">
                *Early morning, evening and weekend slots available by arrangement.
              </div>
            </div>
          </div>
        </section>

        {/* Send an Enquiry / Booking Form */}
        <section className="bg-[var(--surface)] py-20 sm:py-28 border-y border-slate-200">
          <div className="container max-w-4xl space-y-10">
            <SectionHeading
              center
              eyebrow="Online Request"
              title="Send a Lesson Enquiry"
              text="Fill in your details below and we will get back to you promptly with available lesson times."
            />
            <BookingForm />
          </div>
        </section>

        {/* Coverage Postcodes & Test Centres */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="container space-y-12">
            <SectionHeading
              eyebrow="Service Areas"
              title="Where We Teach in London"
              text="Our primary operating zone covers West London, North West London, and nearby DVSA test centres."
            />
            <AreaCoverage />
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
