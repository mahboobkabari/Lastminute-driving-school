# Website Architecture & Technical Specification

**Project:** Lastminute Driving School  
**Framework:** Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS  
**Target Environment:** Node.js / Vercel Edge & Serverless  
**Repository:** `https://github.com/dircanv-jpg/lastminute-driving-school`

---

## 1. Directory Structure

```text
lastminute-driving-school/
├── docs/
│   ├── RESEARCH.md           # DVSA 2026 rules, market competition, UX & SEO findings
│   ├── DESIGN-SYSTEM.md      # Visual tokens, typography, colors, component design
│   └── ARCHITECTURE.md       # Technical design, data models, routing & deployment
├── public/
│   ├── brand/
│   │   └── lastminute-driving-school-logo.jpg
│   └── images/
│       ├── learner-01.jpg .. learner-19.jpg # Real client pass milestone photos
├── src/
│   ├── app/
│   │   ├── about/            # /about - Philosophy, story, local London roots
│   │   ├── book/             # /book - Interactive 3-step lesson booking wizard
│   │   ├── contact/          # /contact - Phone, location, map link, enquiry
│   │   ├── courses/          # /courses - Full 8-course catalog & syllabus
│   │   ├── faq/              # /faq - Searchable categorized FAQs & DVSA guidance
│   │   ├── gallery/          # /gallery - Filterable pass photos with lightbox
│   │   ├── instructors/      # /instructors - Instructor profile & verified reviews
│   │   ├── pricing/          # /pricing - Lesson packages & comparison calculator
│   │   ├── privacy/          # /privacy - GDPR-compliant privacy policy
│   │   ├── reviews/          # /reviews - Verified Google reviews & testimonial filter
│   │   ├── terms/            # /terms - UK driving school terms & conditions
│   │   ├── globals.css       # Design tokens, Tailwind directives & global rules
│   │   ├── layout.tsx        # Root HTML shell, JSON-LD schema, global fonts
│   │   ├── page.tsx          # Homepage conversion funnel
│   │   ├── robots.ts         # Automated robots.txt generator
│   │   └── sitemap.ts        # Automated XML sitemap generator
│   ├── components/
│   │   ├── AreaCoverage.tsx  # West London coverage & test centres explorer
│   │   ├── BookingForm.tsx   # Interactive booking wizard with validation
│   │   ├── Button.tsx        # Reusable primary/secondary/outline button primitives
│   │   ├── CourseCard.tsx    # Course presentation card with outcomes
│   │   ├── FaqAccordion.tsx  # Searchable FAQ accordion
│   │   ├── GalleryGrid.tsx   # Interactive gallery with categories & Lightbox modal
│   │   ├── Header.tsx        # Sticky blur navigation & mobile drawer
│   │   ├── Icon.tsx          # Clean SVG icons
│   │   ├── InnerHero.tsx     # Hero banner for internal pages
│   │   ├── InstructorCard.tsx# Instructor trust & profile card
│   │   ├── PricingCard.tsx   # Package pricing card
│   │   ├── ReviewCard.tsx    # Verified 5-star Google review card
│   │   ├── SectionHeading.tsx# Reusable section title & eyebrow
│   │   ├── SiteFooter.tsx    # Global footer with links & compliance notes
│   │   ├── Stat.tsx          # Numerical trust metric display
│   │   ├── TestGuidanceSection.tsx # 2026 DVSA test guidance & booking rules
│   │   └── TrustBar.tsx      # Social proof strip
│   ├── data/
│   │   ├── courses.ts        # 8 comprehensive courses data
│   │   ├── reviews.ts        # 82 verified reviews sample & themes
│   │   ├── instructors.ts    # Instructor details (Richard)
│   │   ├── pricing.ts        # Lesson packages & block rates
│   │   ├── faq.ts            # Categorized FAQ questions
│   │   ├── gallery.ts        # 18 pass milestone photos metadata
│   │   ├── dvsaGuidance.ts   # 2026 DVSA test format & rules
│   │   ├── coverage.ts       # Postcodes & test centres
│   │   └── site.ts           # Business facts & configuration
│   └── lib/
│       └── utils.ts          # Helper utilities & class merging
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 2. Structured Data Strategy

Every page is decoupled from hardcoded business facts. All content is managed in `src/data/`:
* **Single source of truth:** If the business phone, address, or review count changes, updating `src/data/site.ts` immediately updates the entire site, JSON-LD metadata, and footer.
* **Pricing safety:** Pricing is structured in `src/data/pricing.ts` with explicit placeholder annotations so owners can update hourly and block rates seamlessly.

---

## 3. SEO & Structured Data (JSON-LD)

* **Schema Type:** `schema.org/DrivingSchool` and `schema.org/LocalBusiness`.
* **Metadata:** Dynamic metadata exports on each route with unique titles, meta descriptions, OpenGraph tags, Twitter cards, and canonical URLs.
* **Sitemap & Robots:** Dynamically generated via `src/app/sitemap.ts` and `src/app/robots.ts`.

---

## 4. Vercel & Production Readiness

* Standard scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
* Zero external backend requirements for static rendering: fully functional client-side booking demo flow with ready hooks for Resend, Formspree, or CRM webhooks.
