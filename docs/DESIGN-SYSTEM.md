# Design System Specification

**Brand:** Lastminute Driving School (London, UK)  
**Tone & Persona:** Premium, Safe, Modern, Calm, Trustworthy, Authoritative, Conversion-Driven.  
**Inspiration:** Modern British automotive precision combined with clean, high-empathy educational UX.

---

## 1. Color Palette & CSS Variables

| Token Name | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| `--navy-deep` | `#071A33` | Primary brand canvas, hero section, dark container panels, footer, main headers. |
| `--navy-secondary` | `#0D2A4F` | Secondary dark background, card hover states, dark gradients. |
| `--navy-surface` | `#133866` | Accented dark cards, badges on dark sections. |
| `--red-brand` | `#D71920` | Primary action button, notification badges, active step indicators, key highlights. |
| `--red-dark` | `#B51218` | Button hover state, deep brand accents. |
| `--red-subtle` | `#FFF1F2` | Accent tag background, checkmark background on light mode. |
| `--surface-light` | `#F6F8FB` | Alternating section backgrounds, card containers, form backgrounds. |
| `--white` | `#FFFFFF` | Core surface, cards, pristine contrast against navy. |
| `--ink-primary` | `#102033` | Primary body headings, high-contrast readable text. |
| `--ink-muted` | `#607086` | Secondary body text, captions, helper text. |
| `--border-subtle` | `#E5EAF0` | Crisp dividers, input borders, structural borders. |
| `--gold-star` | `#F59E0B` | Google review 5-star ratings, trust badges. |
| `--emerald-success`| `#10B981` | Positive form confirmation, safety icons, test pass checkmarks. |

---

## 2. Typography Hierarchy

* **Font Family:** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
* **Display H1:** `text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.06]`
* **Section H2:** `text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12]`
* **Card H3:** `text-xl sm:text-2xl font-black tracking-tight leading-snug`
* **Eyebrow Header:** `text-xs font-black uppercase tracking-[0.18em] text-[var(--red)]`
* **Body Lead:** `text-lg sm:text-xl font-normal leading-relaxed text-slate-600`
* **Body Regular:** `text-base font-normal leading-relaxed text-slate-600`
* **Small / Caption:** `text-xs sm:text-sm font-semibold tracking-normal text-slate-500`

---

## 3. Spacing, Elevation & Layout Grid

* **Container:** Max width `1280px` (`max-w-7xl`), centered with responsive horizontal padding (`px-4 sm:px-6 lg:px-8`).
* **Section Vertical Rhythm:** `py-16 sm:py-24 lg:py-32` for spacious, uncluttered breathing room.
* **Component Radii:**
  * Pill Badges & Buttons: `rounded-full` (9999px)
  * Interactive Cards & Feature Boxes: `rounded-3xl` (24px)
  * Micro Elements & Form Inputs: `rounded-2xl` (16px)
* **Shadows:**
  * Subtle: `shadow-sm shadow-slate-900/5`
  * Card: `shadow-md shadow-slate-900/5`
  * Floating / Active: `shadow-2xl shadow-slate-900/12`

---

## 4. Reusable Component Patterns

1. **Global Sticky Header:**
   * Blur navigation bar (`backdrop-blur-md bg-[#071A33]/90`) with white Lastminute logo, quick phone link, clean navigation links, and red CTA button.
   * Accessible mobile drawer menu with touch-friendly tap targets and escape-to-close behavior.
2. **Hero Conversion Engine:**
   * High-contrast title, verified 5.0 Google rating pill with 82 reviews, clear manual/automatic highlights, primary "Book a Lesson" and secondary "Explore Courses" actions.
   * Real London student photography with test pass card overlay.
3. **Interactive 3-Step Booking Wizard:**
   * Step 1: Course & Transmission preference.
   * Step 2: Learner Details & West London postcode validation.
   * Step 3: Date, time window & optional test date schedule.
   * Accessible ARIA validation and graceful demo submission mode.
4. **Accessible Filterable Gallery with Lightbox:**
   * Category tabs (All, First-Time Passes, Test Ready, In-Car Coaching).
   * High-resolution lightbox with Next/Previous navigation and keyboard shortcuts (Escape, ArrowLeft, ArrowRight).
5. **Categorized FAQ Accordion:**
   * Accessible buttons with `aria-expanded` and smooth reveal transitions.
   * Search input to quickly filter by keyword (e.g. "manual", "provisional", "cancellation", "test").
6. **DVSA 2026 Test Preparation Guidance Panel:**
   * Clear breakdowns of the Eyesight Check, "Show Me / Tell Me" vehicle questions, 20-minute Independent Driving (Sat Nav vs Signs), and 2026 DVSA Booking Policy rules.

---

## 5. Accessibility (WCAG 2.2 AA Compliance)

* **Contrast Ratios:** Text meets or exceeds 4.5:1 for normal text and 3:1 for large display text against dark navy and white backgrounds.
* **Focus Indicators:** High-visibility outline `outline-3 outline-offset-2 outline-red-500/50` on all interactive buttons, links, and inputs.
* **Reduced Motion:** Automatic fallback to instantaneous transitions when `prefers-reduced-motion: reduce` is enabled.
* **Screen Reader Support:** Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<nav>`, `<figure>`, `<figcaption>`, `<footer>`), `aria-expanded`, `aria-label`, and `role="status"` live regions for dynamic alerts.
