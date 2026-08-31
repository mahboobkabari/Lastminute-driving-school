"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Star, Shield, Car, ArrowRight } from "./Icon";
import { Instructor } from "@/data/instructors";
import { useBookingModal } from "./BookingModal";

export interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  const { openBookingModal } = useBookingModal();
  const { name, role, bio, teachingStyle, vehicle, areasCovered, image, highlights } = instructor;

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        {/* Instructor Photo & Badges */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
            <Image
              src={image}
              alt={`Driving instructor ${name} with learner and tuition car`}
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 backdrop-blur-md text-[var(--navy)]">
              <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>5.0 Rating · 82 Verified Reviews</span>
              </div>
              <div className="mt-1 text-sm font-black">{name} · {role}</div>
            </div>
          </div>
        </div>

        {/* Details & Teaching Pillars */}
        <div className="space-y-6">
          <div>
            <div className="eyebrow text-[var(--red)]">Verified Google Review Profile</div>
            <h3 className="display mt-2 text-3xl sm:text-4xl font-black text-[var(--navy)]">
              Meet {name}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {bio}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[var(--surface)] p-4 border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--red)]">
                <Shield className="h-4 w-4" />
                <span>Teaching Philosophy</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-xs font-medium text-slate-600">
                {teachingStyle.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[var(--surface)] p-4 border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600">
                <Car className="h-4 w-4" />
                <span>Tuition Vehicle</span>
              </div>
              <div className="mt-2 text-xs font-bold text-[var(--navy)]">{vehicle.type}</div>
              <ul className="mt-2 space-y-1 text-xs text-slate-600">
                {vehicle.features.slice(0, 2).map((feat, idx) => (
                  <li key={idx}>• {feat}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key areas */}
          <div className="rounded-2xl border border-slate-200/80 p-4 text-xs">
            <strong className="font-extrabold text-[var(--navy)]">Coverage Base: </strong>
            <span className="text-slate-600">{areasCovered.join(" · ")}</span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/book"
              onClick={(e) => {
                e.preventDefault();
                openBookingModal({ course: "Beginner Driving Course" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--red)] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[var(--red-dark)] shadow-md shadow-red-900/20"
            >
              <span>Book Lessons with {name}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3.5 text-sm font-black text-[var(--navy)] transition hover:bg-slate-50"
            >
              Read {name}&apos;s Reviews (82)
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
