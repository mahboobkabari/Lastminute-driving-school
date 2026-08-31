"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState, useEffect, Suspense, useRef } from "react";
import { courses } from "@/data/courses";
import { Check, Shield, Clock, Calendar, MapPin, Sparkles } from "./Icon";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  course: string;
  transmission: "Manual" | "Automatic" | "Not sure yet";
  preferredDate: string;
  preferredTime: string;
  pickupLocation: string;
  experienceLevel: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  course?: string;
  pickupLocation?: string;
}

export interface BookingFormProps {
  initialCourse?: string;
  isModal?: boolean;
}

function BookingFormInner({ initialCourse, isModal = false }: BookingFormProps) {
  const searchParams = useSearchParams();
  const prefilledCourse = initialCourse || searchParams.get("course") || searchParams.get("package") || "";
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormState>(() => ({
    fullName: "",
    phone: "",
    email: "",
    course: prefilledCourse || "Beginner Driving Course",
    transmission: "Manual",
    preferredDate: "",
    preferredTime: "Morning (08:00 - 12:00)",
    pickupLocation: "",
    experienceLevel: "Complete Beginner",
    message: "",
  }));

  // Update course when initialCourse prop changes
  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, course: initialCourse }));
    }
  }, [initialCourse]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  function validate(): boolean {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    }

    const phoneClean = formData.phone.replace(/\s+/g, "");
    if (!phoneClean) {
      errs.phone = "Please enter your contact phone number";
    } else if (!/^((\+44)|(0))7\d{9}$/.test(phoneClean) && !/^((\+44)|(0))\d{9,10}$/.test(phoneClean)) {
      errs.phone = "Please enter a valid UK phone number (e.g. 07984 210509)";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.course) {
      errs.course = "Please select a driving course or lesson type";
    }

    if (!formData.pickupLocation.trim()) {
      errs.pickupLocation = "Please enter your London pickup postcode or street area";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate network submission latency
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  const inputStyles =
    "mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-[var(--ink)] placeholder-slate-400 outline-none transition-all duration-200 focus:border-[var(--red)] focus:ring-4 focus:ring-red-500/10";
  const errorStyles = "border-red-500 bg-red-50/20";

  return (
    <div
      ref={containerRef}
      className={`scroll-mt-24 sm:scroll-mt-28 rounded-3xl ${
        isModal
          ? "border-0 bg-transparent p-0 sm:p-2 shadow-none"
          : "border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/5 sm:p-10"
      }`}
    >
      {submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-8 text-center animate-fadeIn"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-900/20">
            <Check className="h-8 w-8" />
          </div>

          <h3 className="mt-6 text-2xl font-black text-emerald-900">
            Lesson Request Received!
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-emerald-800">
            Thanks, <strong>{formData.fullName}</strong>. Your lesson enquiry for the{" "}
            <strong>{formData.course}</strong> ({formData.transmission}) has been successfully
            captured.
          </p>

          <div className="mt-6 rounded-2xl bg-white/90 p-4 text-xs font-semibold text-emerald-900 border border-emerald-200">
            <strong>Production Notice:</strong> Thanks. Your enquiry has been captured in this demo
            form. Connect an email (e.g. Resend, Formspree) or booking CRM service before launch to
            receive real customer enquiries.
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                phone: "",
                email: "",
                course: "Beginner Driving Course",
                transmission: "Manual",
                preferredDate: "",
                preferredTime: "Morning (08:00 - 12:00)",
                pickupLocation: "",
                experienceLevel: "Complete Beginner",
                message: "",
              });
              setTimeout(() => {
                containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 50);
            }}
            className="mt-6 inline-flex rounded-full bg-[var(--navy)] px-6 py-3 text-xs font-black text-white hover:bg-[var(--navy-2)] cursor-pointer"
          >
            Submit Another Lesson Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="text-xs font-black uppercase tracking-wider text-[var(--red)]">
              Step 1 of 2: Course & Preferences
            </div>
            <h3 className="mt-1 text-xl font-black text-[var(--navy)]">
              Lesson Requirements
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Course Selector */}
            <div className="sm:col-span-2">
              <label htmlFor="course-select" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Course or Package <span className="text-red-500">*</span>
              </label>
              <select
                id="course-select"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className={`${inputStyles} ${errors.course ? errorStyles : ""}`}
              >
                {courses.map((c) => (
                  <option key={c.slug} value={c.title}>
                    {c.title}
                  </option>
                ))}
                <option value="Single Lesson (2 Hours)">Single Assessment Lesson (2 Hours)</option>
                <option value="5-Lesson Starter Block">5-Lesson Starter Block (10 Hours)</option>
                <option value="10-Lesson Comprehensive Block">10-Lesson Comprehensive Block (20 Hours)</option>
                <option value="Practical Test Day Package">Practical Test Day Package</option>
              </select>
              {errors.course && <p className="mt-1.5 text-xs font-bold text-red-600">{errors.course}</p>}
            </div>

            {/* Transmission Radio Buttons */}
            <div>
              <span id="trans-label" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Transmission Preference <span className="text-red-500">*</span>
              </span>
              <div className="mt-2 grid grid-cols-3 gap-2" role="radiogroup" aria-labelledby="trans-label">
                {(["Manual", "Automatic", "Not sure yet"] as const).map((trans) => (
                  <button
                    key={trans}
                    type="button"
                    role="radio"
                    aria-checked={formData.transmission === trans}
                    onClick={() => setFormData({ ...formData, transmission: trans })}
                    className={`rounded-xl py-3 px-2 text-center text-xs font-black transition-all cursor-pointer ${
                      formData.transmission === trans
                        ? "bg-[var(--navy)] text-white shadow-md"
                        : "bg-[var(--surface)] text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {trans}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <label htmlFor="exp-level" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Current Driving Experience
              </label>
              <select
                id="exp-level"
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className={inputStyles}
              >
                <option value="Complete Beginner">Complete Beginner (0 hours)</option>
                <option value="Some Experience">Some Experience (5–15 hours)</option>
                <option value="Test Ready / Test Booked">Test Ready / Test Booked</option>
                <option value="Full Licence / Refresher">Full Licence Holder (Refresher)</option>
                <option value="International Licence Conversion">International Licence Conversion</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label htmlFor="pref-date" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Preferred Start Date
              </label>
              <div className="relative">
                <input
                  id="pref-date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className={inputStyles}
                />
              </div>
            </div>

            {/* Preferred Time Window */}
            <div>
              <label htmlFor="pref-time" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Preferred Time of Day
              </label>
              <select
                id="pref-time"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className={inputStyles}
              >
                <option value="Morning (08:00 - 12:00)">Morning (08:00 – 12:00)</option>
                <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 – 16:00)</option>
                <option value="Evening (16:00 - 20:00)">Evening (16:00 – 20:00)</option>
                <option value="Weekend Flexible">Weekend Flexible</option>
              </select>
            </div>
          </div>

          <div className="border-b border-slate-100 pt-4 pb-2">
            <div className="text-xs font-black uppercase tracking-wider text-[var(--red)]">
              Step 2 of 2: Learner Details
            </div>
            <h3 className="mt-1 text-xl font-black text-[var(--navy)]">
              Contact & Pickup Details
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label htmlFor="full-name" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="e.g. Sarah Jenkins"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`${inputStyles} ${errors.fullName ? errorStyles : ""}`}
              />
              {errors.fullName && <p className="mt-1.5 text-xs font-bold text-red-600">{errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone-number" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                UK Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone-number"
                type="tel"
                placeholder="07984 210509"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`${inputStyles} ${errors.phone ? errorStyles : ""}`}
              />
              {errors.phone && <p className="mt-1.5 text-xs font-bold text-red-600">{errors.phone}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email-addr" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email-addr"
                type="email"
                placeholder="sarah@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`${inputStyles} ${errors.email ? errorStyles : ""}`}
              />
              {errors.email && <p className="mt-1.5 text-xs font-bold text-red-600">{errors.email}</p>}
            </div>

            {/* Pickup Postcode / Area */}
            <div>
              <label htmlFor="pickup-loc" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Pickup Postcode or Street Area <span className="text-red-500">*</span>
              </label>
              <input
                id="pickup-loc"
                type="text"
                placeholder="e.g. W9 3AP / Maida Vale"
                value={formData.pickupLocation}
                onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                className={`${inputStyles} ${errors.pickupLocation ? errorStyles : ""}`}
              />
              {errors.pickupLocation && (
                <p className="mt-1.5 text-xs font-bold text-red-600">{errors.pickupLocation}</p>
              )}
            </div>

            {/* Additional Message / Test Date */}
            <div className="sm:col-span-2">
              <label htmlFor="message-box" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Additional Notes or Practical Test Date (Optional)
              </label>
              <textarea
                id="message-box"
                rows={4}
                placeholder="Tell us about any specific anxieties, upcoming test dates, test centre location, or schedule constraints..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={inputStyles}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--red)] py-4 text-center text-base font-black tracking-tight text-white shadow-xl shadow-red-900/20 transition-all hover:bg-[var(--red-dark)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
            >
              {submitting ? (
                <span>Submitting Request...</span>
              ) : (
                <>
                  <span>Request Driving Lesson</span>
                  <span>→</span>
                </>
              )}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
              <Shield className="h-4 w-4 text-emerald-600" />
              <span>Zero obligation · No payment collected until lesson confirmation</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export function BookingForm(props: BookingFormProps = {}) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm font-bold text-slate-500">Loading booking form...</div>}>
      <BookingFormInner {...props} />
    </Suspense>
  );
}
