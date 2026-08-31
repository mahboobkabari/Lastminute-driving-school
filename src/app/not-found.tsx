import Link from "next/link";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, Phone } from "@/components/Icon";
import { site } from "@/data/site";

export const metadata = {
  title: "Page Not Found (404) | Lastminute Driving School London",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--ink)]">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 sm:py-32 bg-[var(--surface)]">
        <div className="container max-w-2xl text-center space-y-8 px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[var(--red)]">
            Error 404
          </div>

          <h1 className="display text-4xl sm:text-6xl font-black text-[var(--navy)]">
            Page Not Found
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600">
            Sorry, we couldn&apos;t find the page you were looking for. It might have been moved or the URL may be incorrect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--red)] px-8 py-4 text-sm font-black text-white shadow-md shadow-red-900/20 transition hover:bg-[var(--red-dark)]"
            >
              <span>Return Home</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/courses"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-black text-[var(--navy)] hover:bg-slate-50 transition"
            >
              <span>View Driving Courses</span>
            </Link>

            <a
              href={`tel:${site.phone}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-black text-[var(--navy)] hover:bg-slate-50 transition"
            >
              <Phone className="h-4 w-4 text-[var(--red)]" />
              <span>Call {site.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
