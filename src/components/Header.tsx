"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Menu, Phone, X, Star, ArrowRight } from "./Icon";

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

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 15);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/15 bg-[#071a33]/98 shadow-xl shadow-slate-950/30 backdrop-blur-lg"
            : "border-b border-white/10 bg-[#071a33]/92 backdrop-blur-md"
        }`}
      >
        <div className="container flex h-[76px] items-center justify-between gap-3 sm:h-[84px]">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 shrink-0 focus:outline-none"
            aria-label="Lastminute Driving School home"
            onClick={() => setOpen(false)}
          >
            <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1 shadow-md transition-transform duration-200 group-hover:scale-105">
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
            {/* Phone Call Link */}
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
              className="btn-book-cta inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black tracking-tight text-white shadow-md shadow-red-900/30 transition-all hover:bg-[#b51218] hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm"
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
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 xl:hidden focus-visible:outline-red-500"
            >
              {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div
            id="mobile-navigation"
            className="fixed inset-x-0 top-[76px] bottom-0 z-50 flex flex-col justify-between overflow-y-auto border-t border-white/15 bg-[#071a33] px-6 py-6 text-white sm:top-[84px] xl:hidden"
          >
            <div className="grid gap-1.5">
              <div className="mb-2 flex items-center justify-between rounded-2xl bg-white/10 p-3.5 border border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-400">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span style={{ color: "#fbbf24" }}>5.0 Google Rating</span>
                </div>
                <span style={{ color: "#cbd5e1" }} className="text-xs font-semibold text-slate-300">
                  82 Reviews · London W9
                </span>
              </div>

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
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold transition-colors ${
                      isActive
                        ? "bg-[#d71920] text-white shadow-md font-black"
                        : "text-white hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span style={{ color: "#ffffff" }}>{link.label}</span>
                    {isActive && <span style={{ color: "#ffffff" }}>✓</span>}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 border-t border-white/15 pt-6 space-y-3">
              <a
                href={`tel:${site.phone}`}
                style={{ color: "#ffffff" }}
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-red-400" />
                <span style={{ color: "#ffffff" }}>Call {site.phoneDisplay}</span>
              </a>

              <Link
                href="/book"
                onClick={() => setOpen(false)}
                style={{ color: "#ffffff", backgroundColor: "#d71920" }}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#d71920] py-4 text-center text-base font-black text-white shadow-lg shadow-red-900/40 transition hover:bg-[#b51218]"
              >
                <span style={{ color: "#ffffff" }}>Book a Driving Lesson</span>
                <ArrowRight className="h-4 w-4 text-white stroke-white" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
