# Lastminute Driving School — London, United Kingdom

A modern, production-grade website for **Lastminute Driving School**, based in London W9 (Bravington Rd). Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.

---

## 1. Project Overview

Lastminute Driving School is a highly rated London driving school (5.0 Google Rating from 82 verified customer reviews). This web application is engineered with an editorial, automotive-grade aesthetic, high-conversion UX funnels, structured DVSA 2026 test guidance, authentic client photography, and accessible components (WCAG 2.2 AA compliant).

* **Base Location:** Bravington Rd, London W9 3AP, United Kingdom
* **Direct Telephone:** `+44 7984 210509` (Display: `07984 210509`)
* **Google Rating:** 5.0 ★★★★★ (82 reviews)
* **Coverage:** London W9 (Maida Vale, Queen's Park), NW6 (Kilburn), W10 (Ladbroke Grove), W2 (Paddington), NW10, NW8 and surrounding West/North-West London test routes.

---

## 2. Tech Stack

* **Framework:** Next.js 16.3.3 (App Router)
* **Core Library:** React 19.2.8
* **Language:** TypeScript 5.9
* **Styling:** Tailwind CSS 4.3 + CSS Variables design system
* **SEO & Metadata:** OpenGraph, Twitter Cards, Dynamic `sitemap.xml`, `robots.txt`, and `schema.org/DrivingSchool` JSON-LD Structured Data
* **Deployment:** Vercel Ready (Zero-config Serverless / Edge deployment)

---

## 3. Site Structure & Routes

| Route | Page Name | Key Features |
| :--- | :--- | :--- |
| `/` | **Home** | Full conversion funnel: Hero with client pass imagery, TrustBar, Teaching Philosophy, Course Cards, 2026 DVSA Test Prep Spotlight, Lead Instructor Spotlight, Pricing Tiers, Google Reviews, Local Coverage, FAQ preview, and Conversion CTA. |
| `/about` | **About Us** | Teaching philosophy, lead instructor spotlight (Richard), verified standards (No false claims, 1-to-1 only, modern dual controls). |
| `/courses` | **Driving Courses** | Comprehensive guide for all 8 courses (Beginner, Refresher, Defensive, Highway, Parking, Manual, Automatic, Test Prep) with syllabus and outcomes, plus a Manual vs Automatic comparison guide. |
| `/pricing` | **Pricing & Packages** | Transparent pricing tiers (Single Lesson, 5-Hour Block, 10-Hour Block, Test Day Package, Refresher Course) with an explicit configurable placeholder disclaimer. |
| `/instructors` | **Instructors** | Lead instructor profile (Richard), teaching strengths, tuition car specifications, and verified student feedback. |
| `/book` | **Book a Lesson** | Interactive 3-step lesson booking wizard with real-time field validation, UK phone validation, postcode capture, and demo submission notification. |
| `/faq` | **FAQ & 2026 Rules** | Searchable & categorized FAQ accordion with official DVSA 2026 driving test booking policy guidance and GOV.UK links. |
| `/reviews` | **Reviews & Testimonials** | 5.0 Google rating summary bar, recurring themes breakdown, verified review cards, and link to Google Business Profile. |
| `/gallery` | **Pass Photo Gallery** | 18 real London learner pass milestone photos with category filters (First-Time Pass, Test Day, Milestones) and an accessible keyboard-navigable Lightbox modal. |
| `/contact` | **Contact Us** | Phone link, base address, operating hours, direct Google Maps link, and quick enquiry form. |
| `/privacy` | **Privacy Policy** | UK GDPR & Data Protection Act 2018 compliant policy tailored for driving pupil data handling. |
| `/terms` | **Terms & Conditions** | Comprehensive driving school terms (48-hour cancellation rule, licence verification, test day vehicle hire). |
| `/sitemap.xml` | **XML Sitemap** | Dynamically generated sitemap for search engine crawlers. |
| `/robots.txt` | **Robots Configuration** | Automated search crawler instructions. |

---

## 4. Brand Design Tokens & Palette

* **Deep Navy (`#071A33`):** Primary brand canvas, hero section, sticky header, and footer.
* **Secondary Navy (`#0D2A4F`):** Dark accents, card backgrounds, and gradient meshes.
* **Brand Red (`#D71920`):** Primary action buttons, badge accents, and active link states.
* **Dark Red (`#B51218`):** Button hover and active press states.
* **Surface Light (`#F6F8FB`):** Alternating section backgrounds and card containers.
* **Amber / Gold (`#F59E0B`):** 5-star Google ratings and trust badges.
* **Emerald (`#10B981`):** Form success alerts, pass certificate badges, and safety checkmarks.

---

## 5. How to Edit Business Content

All business data is strictly centralized in `src/data/` so non-technical owners can update facts without touching UI code:

* **Business Phone, Address, Review Count:** `src/data/site.ts`
* **Course Titles, Syllabus, Outcomes:** `src/data/courses.ts`
* **Prices & Package Rates:** `src/data/pricing.ts`
* **Customer Reviews & Testimonials:** `src/data/reviews.ts`
* **Instructor Profiles & Car Details:** `src/data/instructors.ts`
* **FAQs & GOV.UK Links:** `src/data/faq.ts`
* **Pass Photos & Captions:** `src/data/gallery.ts`
* **Coverage Areas & Test Centres:** `src/data/coverage.ts`

---

## 6. Development & Build Commands

### Prerequisites
* Node.js 18.18+ or Node.js 20+
* npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live app.

### TypeScript Typecheck
```bash
npm run typecheck
```

### ESLint Check
```bash
npm run lint
```

### Production Build
```bash
npm run build
```

### Run Production Server Locally
```bash
npm run start
```

---

## 7. Deploying to Vercel

1. Push this repository to GitHub: `https://github.com/dircanv-jpg/lastminute-driving-school`.
2. Connect the repository in the [Vercel Dashboard](https://vercel.com).
3. Framework preset: **Next.js**.
4. Root directory: `./`.
5. Environment Variables:
   * `NEXT_PUBLIC_SITE_URL`: `https://lastminutedrivingschool.co.uk` (or your assigned Vercel URL).
6. Click **Deploy**. Vercel will automatically build and deploy the production bundle.
