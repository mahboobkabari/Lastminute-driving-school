import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { courses } from "@/data/courses";
import { Phone, MapPin, Star, Shield } from "./Icon";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#071a33] text-white">
      {/* Upper Footer: Main Columns */}
      <div className="container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Lastminute Driving School home">
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-white p-1 shadow-md">
                <Image
                  src="/brand/lastminute-driving-school-logo.jpg"
                  alt="Lastminute Driving School logo"
                  width={140}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <div className="text-lg font-black tracking-tight text-white">Lastminute</div>
                <div className="text-xs font-semibold tracking-wider text-slate-300 uppercase">Driving School</div>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Professional, patient, and confidence-building driving instruction across West London. Tailored manual and
              automatic lessons, mock test assessments, and test route mastery.
            </p>

            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-200">
                <strong className="text-white">5.0 Rating</strong> on Google Business Profile (82 Reviews)
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div className="text-xs font-black tracking-widest text-red-400 uppercase">Explore</div>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-300">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Us & Instructor
                </Link>
              </li>
              <li>
                <Link href="/courses" className="transition-colors hover:text-white">
                  Driving Courses
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-white">
                  Lesson Pricing & Packages
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="transition-colors hover:text-white">
                  Instructors & Vehicles
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="transition-colors hover:text-white">
                  Learner Testimonials
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition-colors hover:text-white">
                  Pass Certificate Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-white">
                  FAQ & 2026 Test Rules
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div>
            <div className="text-xs font-black tracking-widest text-red-400 uppercase">Driving Courses</div>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-300">
              {courses.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses#${c.slug}`} className="transition-colors hover:text-white">
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/courses" className="text-xs font-bold text-red-300 transition-colors hover:text-white">
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Coverage */}
          <div className="space-y-4">
            <div className="text-xs font-black tracking-widest text-red-400 uppercase">Contact & Base</div>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                <span>{site.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-red-400" />
                <a href={`tel:${site.phone}`} className="font-bold text-white transition-colors hover:text-red-300">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs font-bold text-slate-200 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <span>Google Business Profile & Maps</span>
                <span>↗</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/book"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--red)] px-4 py-3 text-center text-xs font-black tracking-wide text-white uppercase shadow-md transition-all hover:bg-[var(--red-dark)]"
              >
                Book a Driving Lesson
              </Link>
            </div>
          </div>
        </div>

        {/* Coverage Postcodes Strip */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-400" />
              <span className="font-bold text-slate-300">Primary London Coverage:</span>
              <span>W9 (Maida Vale, Queen&apos;s Park), NW6 (Kilburn), W10 (Ladbroke Grove), W2 (Paddington), NW10, NW8</span>
            </div>
            <div>
              <span className="font-bold text-slate-300">Nearby DVSA Centres:</span> Greenford, Mill Hill, Hendon, Isleworth
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-white/10 bg-[#051326] py-6 text-xs text-slate-400">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {currentYear} Lastminute Driving School. All rights reserved.</p>
          <div className="flex items-center gap-6 font-semibold">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/faq" className="transition-colors hover:text-white">
              DVSA Guidance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
