"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Menu, Phone, X, Star, ArrowRight, ChevronRight, MapPin } from "./Icon";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "Instructors", href: "/instructors" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Automatically close mobile menu whenever pathname changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Track scroll position for header blur and background shift
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 15);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Lock body scroll cleanly when mobile menu is active
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-white/15 bg-[#071a33]/98 shadow-xl shadow-slate-950/30 backdrop-blur-xl"
            : "border-b border-white/10 bg-[#071a33]/92 backdrop-blur-md"
        }`}
      >
        <div className="container flex h-[72px] sm:h-[84px] items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0 focus:outline-none"
            aria-label="Lastminute Driving School home"
            onClick={() => setOpen(false)}
          >
            <span className="relative grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1 shadow-md transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/brand/lastminute-driving-school-logo.jpg"
                alt="Lastminute Driving School logo"
                width={140}
                height={80}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <div className="flex flex-col">
              <span
                style={{ color: "#ffffff" }}
                className="text-base sm:text-lg font-black tracking-tight text-white transition-colors group-hover:text-red-400 leading-tight"
              >
                Lastminute
              </span>
              <span
                style={{ color: "#f87171" }}
                className="text-[10px] sm:text-[11px] font-black tracking-widest text-red-400 uppercase leading-tight"
              >
                Driving School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center gap-1 lg:gap-1.5 xl:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "#ffffff" }}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-tight transition-all duration-150 lg:text-sm lg:px-3.5 ${
                    isActive
                      ? "header-nav-link-active bg-white/20 text-white font-black"
                      : "header-nav-link text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone Call Link (Visible on Tablet & Desktop) */}
            <a
              href={`tel:${site.phone}`}
              style={{ color: "#ffffff" }}
              className="hidden items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-xs font-extrabold tracking-tight text-white transition-all hover:border-white/40 hover:bg-white/20 md:flex"
              aria-label={`Call us on ${site.phoneDisplay}`}
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#d71920] text-white">
                <Phone className="h-3 w-3 text-white stroke-white" />
              </span>
              <span style={{ color: "#ffffff" }} className="text-white font-black">
                {site.phoneDisplay}
              </span>
            </a>

            {/* Primary Booking Button */}
            <Link
              href="/book"
              style={{ color: "#ffffff", backgroundColor: "#d71920" }}
              className="btn-book-cta hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-black tracking-tight text-white shadow-md shadow-red-900/30 transition-all hover:bg-[#b51218] hover:-translate-y-0.5"
            >
              <span style={{ color: "#ffffff" }} className="text-white font-black">
                Book a Lesson
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-white stroke-white" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((prev) => !prev)}
              style={{ color: "#ffffff" }}
              className={`relative z-50 grid h-11 w-11 place-items-center rounded-xl border transition-all duration-200 cursor-pointer xl:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${
                open
                  ? "border-red-500/60 bg-red-600/30 text-white shadow-inner"
                  : "border-white/20 bg-white/10 text-white hover:bg-white/20 active:scale-95"
              }`}
            >
              {open ? (
                <X className="h-6 w-6 text-white stroke-white" />
              ) : (
                <Menu className="h-6 w-6 text-white stroke-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Backdrop & Drawer */}
        {open && (
          <>
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 top-[72px] sm:top-[84px] z-40 bg-slate-950/80 backdrop-blur-sm xl:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Navigation Drawer */}
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="fixed inset-x-0 top-[72px] sm:top-[84px] z-50 h-[calc(100dvh-72px)] sm:h-[calc(100dvh-84px)] max-h-[calc(100dvh-72px)] sm:max-h-[calc(100dvh-84px)] overflow-y-auto overscroll-contain border-t border-white/15 bg-[#071a33] text-white shadow-2xl xl:hidden"
            >
              <div className="flex min-h-full flex-col justify-between p-4 sm:p-6 pb-20 sm:pb-24">
                {/* Top Section: Trust Badge & Menu Links */}
                <div className="space-y-3">
                  {/* Google Rating & Location Badge */}
                  <div className="flex items-center justify-between rounded-2xl bg-white/[0.08] p-3 border border-white/15 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs font-black text-amber-400">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span style={{ color: "#fbbf24" }}>5.0 Google Rating</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-slate-300">
                      <MapPin className="h-3.5 w-3.5 text-red-400" />
                      <span style={{ color: "#cbd5e1" }}>82 Reviews · London W9</span>
                    </div>
                  </div>

                  {/* Links List */}
                  <div className="grid gap-1">
                    {navLinks.map((link) => {
                      const isActive =
                        link.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          style={{ color: "#ffffff" }}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-all duration-150 active:scale-[0.99] ${
                            isActive
                              ? "bg-[#d71920] text-white shadow-md font-black ring-1 ring-white/20"
                              : "text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`h-2 w-2 rounded-full ${
                                isActive ? "bg-white" : "bg-white/30"
                              }`}
                            />
                            <span style={{ color: "#ffffff" }}>{link.label}</span>
                          </span>
                          {isActive ? (
                            <span
                              style={{ color: "#ffffff" }}
                              className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-black"
                            >
                              Current
                            </span>
                          ) : (
                            <ChevronRight className="h-4 w-4 text-white/40" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Section: Call, Book & Operating Info */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-white/15">
                  <a
                    href={`tel:${site.phone}`}
                    style={{ color: "#ffffff" }}
                    className="flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-white/10 py-3.5 text-sm font-black text-white shadow-sm transition hover:bg-white/20 active:scale-[0.99]"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#d71920] text-white">
                      <Phone className="h-3.5 w-3.5 text-white stroke-white" />
                    </span>
                    <span style={{ color: "#ffffff" }}>Call {site.phoneDisplay}</span>
                  </a>

                  <Link
                    href="/book"
                    onClick={() => setOpen(false)}
                    style={{ color: "#ffffff", backgroundColor: "#d71920" }}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#d71920] py-3.5 sm:py-4 text-center text-base font-black text-white shadow-lg shadow-red-900/40 transition hover:bg-[#b51218] active:scale-[0.99]"
                  >
                    <span style={{ color: "#ffffff" }}>Book a Driving Lesson</span>
                    <ArrowRight className="h-4 w-4 text-white stroke-white" />
                  </Link>

                  <p className="text-center text-[11px] font-medium text-slate-400 pt-1">
                    Dual Control Manual & Automatic · Maida Vale & West London
                  </p>
                </div>
              </div>
            </nav>
          </>
        )}
      </header>
    </>
  );
}
