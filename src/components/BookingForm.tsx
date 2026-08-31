"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState, useEffect, Suspense, useRef } from "react";
import { courses } from "@/data/courses";
import { defaultCountry, validatePhoneNumber, normalizePhoneNumber, Country } from "@/data/countries";
import { PhoneInput } from "./PhoneInput";
import { Check, Shield, MapPin } from "./Icon";

interface FormState {
  fullName: string;
  phone: string;
  countryCode: string;
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
    countryCode: defaultCountry.dialCode,
    email: "",
    course: prefilledCourse || "Beginner Driving Course",
    transmission: "Manual",
    preferredDate: "",
    preferredTime: "Morning (08:00 - 12:00)",
    pickupLocation: "",
    experienceLevel: "Complete Beginner",
    message: "",
  }));

  // Synchronize initialCourse prop updates cleanly
  const [prevInitialCourse, setPrevInitialCourse] = useState(initialCourse);
  if (initialCourse !== prevInitialCourse) {
    setPrevInitialCourse(initialCourse);
    if (initialCourse && initialCourse !== formData.course) {
      setFormData((prev) => ({ ...prev, course: initialCourse }));
    }
  }

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedPhone, setSubmittedPhone] = useState("");

  // Location autofill states
  const [locating, setLocating] = useState(false);
  const [locationFeedback, setLocationFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (submitted && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  // Handle "Use my location" button click
  async function handleUseLocation() {
    if (typeof window === "undefined" || !("geolocation" in navigator)) {
      setLocationFeedback({
        type: "error",
        message: "Geolocation is not supported by your browser. Please enter your address manually.",
      });
      return;
    }

    setLocating(true);
    setLocationFeedback(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(`/api/geocode?lat=${latitude}&lng=${longitude}`);
          
          if (!res.ok) {
            throw new Error("Unable to resolve address from coordinates.");
          }

          const data = await res.json();

          if (data.success && (data.formatted || data.postcode || data.area)) {
            const detectedLocation =
              data.formatted ||
              (data.area && data.postcode ? `${data.area}, ${data.postcode}` : data.postcode || data.area);

            setFormData((prev) => ({
              ...prev,
              pickupLocation: detectedLocation,
            }));

            // Clear any previous error on pickup location
            setErrors((prev) => ({ ...prev, pickupLocation: undefined }));

            setLocationFeedback({
              type: "success",
              message: `Location added: ${detectedLocation}`,
            });

            // Automatically hide success feedback after 6 seconds
            setTimeout(() => {
              setLocationFeedback((current) => (current?.type === "success" ? null : current));
            }, 6000);
          } else {
            setLocationFeedback({
              type: "error",
              message: data.error || "Could not find postcode for current location. Please enter manually.",
            });
          }
        } catch {
          setLocationFeedback({
            type: "error",
            message: "Unable to retrieve address details. Please enter your postcode manually.",
          });
        } finally {
          setLocating(false);
        }
      },
      (geoError) => {
        setLocating(false);
        let errorMsg = "Unable to get your location. Please enter your address manually.";
        if (geoError.code === geoError.PERMISSION_DENIED) {
          errorMsg = "Location access was denied. Please enter your address manually.";
        } else if (geoError.code === geoError.POSITION_UNAVAILABLE) {
          errorMsg = "Location position is currently unavailable. Please enter your address manually.";
        } else if (geoError.code === geoError.TIMEOUT) {
          errorMsg = "Location lookup timed out. Please enter your address manually.";
        }
        setLocationFeedback({
          type: "error",
          message: errorMsg,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  }

  function validate(): boolean {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    }

    // Phone validation with international country code support
    const phoneValidation = validatePhoneNumber(formData.countryCode, formData.phone);
    if (!phoneValidation.isValid) {
      errs.phone = phoneValidation.errorMessage || "Please enter a valid contact phone number";
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

    // Normalize phone number cleanly before submission
    const normalized = normalizePhoneNumber(formData.countryCode, formData.phone);
    setSubmittedPhone(normalized || formData.phone);
    setSubmitting(true);

    // Simulate network submission latency
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  const inputStyles =
    "mt-1.5 block w-full max-w-full min-w-0 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-[var(--ink)] placeholder-slate-400 outline-none transition-all duration-200 focus:border-[var(--red)] focus:ring-4 focus:ring-red-500/10 box-border";
  const errorStyles = "border-red-500 bg-red-50/20";

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-full min-w-0 scroll-mt-24 sm:scroll-mt-28 rounded-3xl ${
        isModal
          ? "border-0 bg-transparent p-0 shadow-none"
          : "border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/5 sm:p-10"
      }`}
    >
      {submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="w-full max-w-full min-w-0 rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8 text-center animate-fadeIn"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-900/20">
            <Check className="h-8 w-8" />
          </div>

          <h3 className="mt-6 text-2xl font-black text-emerald-900">
            Lesson Request Received!
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-emerald-800">
            Thank you, <strong>{formData.fullName}</strong>. We have received your booking request for the{" "}
            <strong>{formData.course}</strong> ({formData.transmission}) in <strong>{formData.pickupLocation}</strong>.
          </p>

          <div className="mx-auto mt-6 max-w-lg rounded-2xl border border-emerald-200/80 bg-white/80 p-5 text-left text-xs leading-relaxed text-slate-700 shadow-sm space-y-2">
            <div className="font-extrabold uppercase tracking-wider text-emerald-900">
              What happens next?
            </div>
            <p>
              1. Our lead instructor will check current instructor route capacity for your requested slot (
              <strong>{formData.preferredTime}</strong>).
            </p>
            <p>
              2. We will contact you directly via phone (<strong>{submittedPhone || formData.phone}</strong>) or email (
              <strong>{formData.email}</strong>) within 24 hours to confirm your first lesson time and exact door-to-door pickup location.
            </p>
            <p>
              3. No payment is taken upfront today. Payment is only arranged once your lesson slot is locked in.
            </p>
          </div>

          <div className="mt-6 text-center text-xs font-semibold text-emerald-700/80">
            ⚠️ <em>Demo Booking Mode:</em> This site runs with verified local business information and is ready to
            receive real customer enquiries.
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                phone: "",
                countryCode: defaultCountry.dialCode,
                email: "",
                course: "Beginner Driving Course",
                transmission: "Manual",
                preferredDate: "",
                preferredTime: "Morning (08:00 - 12:00)",
                pickupLocation: "",
                experienceLevel: "Complete Beginner",
                message: "",
              });
              setLocationFeedback(null);
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
        <form onSubmit={handleSubmit} noValidate suppressHydrationWarning className="space-y-6 w-full max-w-full min-w-0">
          <div className="border-b border-slate-100 pb-4">
            <div className="text-xs font-black uppercase tracking-wider text-[var(--red)]">
              Step 1 of 2: Course & Preferences
            </div>
            <h3 className="mt-1 text-xl font-black text-[var(--navy)]">
              Lesson Requirements
            </h3>
          </div>

          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 w-full max-w-full min-w-0">
            {/* Course Selector */}
            <div className="sm:col-span-2 min-w-0">
              <label htmlFor="course-select" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Course or Package <span className="text-red-500">*</span>
              </label>
              <select
                id="course-select"
                suppressHydrationWarning
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
            <div className="min-w-0">
              <span id="trans-label" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Transmission Preference <span className="text-red-500">*</span>
              </span>
              <div className="mt-2 grid grid-cols-3 gap-1.5 sm:gap-2 min-w-0" role="radiogroup" aria-labelledby="trans-label">
                {(["Manual", "Automatic", "Not sure yet"] as const).map((trans) => (
                  <button
                    key={trans}
                    type="button"
                    role="radio"
                    suppressHydrationWarning
                    aria-checked={formData.transmission === trans}
                    onClick={() => setFormData({ ...formData, transmission: trans })}
                    className={`rounded-xl py-3 px-1 sm:px-2 text-center text-[11px] sm:text-xs font-black transition-all cursor-pointer min-w-0 truncate ${
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
            <div className="min-w-0">
              <label htmlFor="exp-level" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Current Driving Experience
              </label>
              <select
                id="exp-level"
                suppressHydrationWarning
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
            <div className="min-w-0">
              <label htmlFor="pref-date" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Preferred Start Date
              </label>
              <div className="relative min-w-0">
                <input
                  id="pref-date"
                  type="date"
                  suppressHydrationWarning
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className={`${inputStyles} min-h-[48px]`}
                />
              </div>
            </div>

            {/* Preferred Time Window */}
            <div className="min-w-0">
              <label htmlFor="pref-time" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Preferred Time of Day
              </label>
              <select
                id="pref-time"
                suppressHydrationWarning
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

          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 w-full max-w-full min-w-0">
            {/* Full Name */}
            <div className="min-w-0">
              <label htmlFor="full-name" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="full-name"
                type="text"
                suppressHydrationWarning
                placeholder="e.g. Sarah Jenkins"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`${inputStyles} ${errors.fullName ? errorStyles : ""}`}
              />
              {errors.fullName && <p className="mt-1.5 text-xs font-bold text-red-600">{errors.fullName}</p>}
            </div>

            {/* Phone Number with International Country Code Selector */}
            <div className="min-w-0">
              <label htmlFor="phone-number" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Contact Phone Number <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                id="phone-number"
                name="phone"
                value={formData.phone}
                countryCode={formData.countryCode}
                onChange={(phone) => setFormData({ ...formData, phone })}
                onCountryChange={(country: Country) =>
                  setFormData({ ...formData, countryCode: country.dialCode })
                }
                hasError={Boolean(errors.phone)}
                required
              />
              {errors.phone && <p className="mt-1.5 text-xs font-bold text-red-600">{errors.phone}</p>}
            </div>

            {/* Email Address */}
            <div className="min-w-0">
              <label htmlFor="email-addr" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email-addr"
                type="email"
                suppressHydrationWarning
                placeholder="sarah@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`${inputStyles} ${errors.email ? errorStyles : ""}`}
              />
              {errors.email && <p className="mt-1.5 text-xs font-bold text-red-600">{errors.email}</p>}
            </div>

            {/* Pickup Postcode / Area with "Use my location" button */}
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                <label htmlFor="pickup-loc" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                  Pickup Postcode or Street Area <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={handleUseLocation}
                  disabled={locating}
                  aria-label="Use my current location to autofill pickup area and postcode"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-100 hover:text-[var(--navy)] hover:border-slate-300 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
                >
                  {locating ? (
                    <>
                      <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-slate-400 border-t-red-600" aria-hidden="true" />
                      <span>Finding your location...</span>
                    </>
                  ) : (
                    <>
                      <MapPin className="h-3.5 w-3.5 text-[var(--red)] shrink-0" />
                      <span>Use my location</span>
                    </>
                  )}
                </button>
              </div>

              <input
                id="pickup-loc"
                type="text"
                suppressHydrationWarning
                placeholder="e.g. W9 3AP / Maida Vale"
                value={formData.pickupLocation}
                onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                className={`${inputStyles} ${errors.pickupLocation ? errorStyles : ""}`}
              />
              {errors.pickupLocation && (
                <p className="mt-1.5 text-xs font-bold text-red-600">{errors.pickupLocation}</p>
              )}

              {/* Location Status Feedback Banner */}
              {locationFeedback && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-2 flex items-start gap-2 text-xs font-semibold rounded-xl p-2.5 animate-fadeIn ${
                    locationFeedback.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-amber-50 text-amber-900 border border-amber-200"
                  }`}
                >
                  {locationFeedback.type === "success" ? (
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <span className="text-amber-600 shrink-0 text-sm leading-none" aria-hidden="true">⚠️</span>
                  )}
                  <span>{locationFeedback.message}</span>
                </div>
              )}
            </div>

            {/* Additional Message / Test Date */}
            <div className="sm:col-span-2 min-w-0">
              <label htmlFor="message-box" className="text-xs font-extrabold uppercase tracking-wider text-[var(--navy)]">
                Additional Notes or Practical Test Date (Optional)
              </label>
              <textarea
                id="message-box"
                rows={4}
                suppressHydrationWarning
                placeholder="Tell us about any specific anxieties, upcoming test dates, test centre location, or schedule constraints..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputStyles} resize-y min-h-[100px]`}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2 w-full max-w-full min-w-0">
            <button
              type="submit"
              suppressHydrationWarning
              disabled={submitting}
              aria-busy={submitting}
              className="flex w-full max-w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-[var(--red)] py-4 text-center text-sm sm:text-base font-black tracking-tight text-white shadow-xl shadow-red-900/20 transition-all hover:bg-[var(--red-dark)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
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
