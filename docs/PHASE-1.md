# Phase 1, Planning & Structure

## 1. Business source of truth

The supplied Google Business Profile information identifies:

- Business: Lastminute Driving School
- Category: Driving school
- Rating: 5.0
- Review count in supplied source: 82
- Address: Bravington Rd, London W9 3AP, United Kingdom
- Phone: +44 7984 210509
- Supplied Google Maps listing: provided by the client in the project brief
- Supplied logo: `public/brand/lastminute-driving-school-logo.jpg`
- Supplied learner/result photography: `public/images/`

The review source strongly supports positioning around patience, clear communication, confidence-building, thorough preparation, test-route familiarity and first-time passes. It also contains a negative review and owner response, so the website should not imply a perfect record beyond the supplied current rating. Review excerpts used later should remain faithful to the source.

## 2. Sitemap

- `/` Home
- `/about` About Us
- `/courses` Driving Courses / Services
- `/pricing` Pricing / Packages
- `/instructors` Instructors
- `/book` Book a Lesson
- `/faq` FAQ
- `/reviews` Testimonials / Reviews
- `/gallery` Gallery
- `/contact` Contact Us
- `/privacy` Privacy Policy
- `/terms` Terms & Conditions

### Utility routes

- `/sitemap.xml`
- `/robots.txt`

## 3. Primary conversion journey

1. Visitor lands on Home.
2. Visitor sees trust proof and a clear value proposition.
3. Visitor explores a course or social proof.
4. Visitor clicks `Book a Lesson`.
5. Visitor completes the booking enquiry form.
6. Visitor receives an explicit on-page confirmation from the configured submission flow.

Secondary conversion: `Call +44 7984 210509`.

## 4. Global navigation

Desktop:
- Logo
- Home
- About
- Courses
- Pricing
- Instructors
- Reviews
- Gallery
- FAQ
- Contact
- Primary CTA: Book a Lesson

Mobile:
- Logo
- Menu trigger
- Primary CTA retained prominently
- Full-screen or drawer navigation with large tap targets

## 5. Reusable component architecture

### Layout
- `SiteHeader`
- `SiteFooter`
- `MobileNav`
- `PageContainer`
- `Section`

### UI primitives
- `Button`
- `IconButton`
- `Badge`
- `Card`
- `SectionHeading`
- `StarRating`
- `Breadcrumbs`

### Content components
- `CourseCard`
- `PricingCard`
- `InstructorCard`
- `TestimonialCard`
- `ReviewSummary`
- `FaqAccordion`
- `GalleryGrid`
- `TrustBar`
- `CtaBanner`

### Forms
- `BookingForm`
- `FormField`
- `SelectField`
- `DateField`
- `FormStatus`

## 6. Homepage information architecture

1. Header / navigation
2. Hero with `Book a Lesson` and `View Courses`
3. Trust strip using the supplied 5.0 / 82-review proof
4. Intro / why Lastminute Driving School
5. Courses overview
6. Why choose us
7. Instructor spotlight
8. Pricing preview
9. Review/testimonial carousel or grid
10. FAQ preview
11. Booking CTA
12. Footer

## 7. Design system

### Brand direction
The supplied logo uses a white background with red and navy lettering. The interface will use that brand language with a restrained, premium treatment rather than reproducing the logo colours everywhere.

### Colour tokens
- `brand-navy`: deep navy for headings, navigation and primary brand surfaces
- `brand-red`: energetic red for CTAs, accents and important interaction states
- `ink`: near-black body text
- `muted`: cool neutral secondary text
- `surface`: white and very light neutral surfaces
- `border`: subtle neutral borders
- `success`: accessible green for successful form state
- `danger`: accessible red for validation errors

Exact token values will be finalised during Phase 2 after visual implementation.

### Typography
- Primary UI/body: Inter or a similarly neutral sans-serif
- Display/headline: same family with strong weight contrast for consistency and performance
- Minimum body size: 16px
- Comfortable line height for long-form content

### Shape and spacing
- Medium rounded corners, not overly playful
- Soft shadows only where useful
- Generous section spacing
- 8px-based spacing scale

## 8. Responsive breakpoints

- 320px: compact mobile safety state
- 375px: common mobile baseline
- 425px: large mobile
- 768px: tablet
- 1024px: laptop/small desktop
- 1280px: desktop container optimisation
- 1440px+: large-screen layout with constrained content width

The implementation will use mobile-first CSS and fluid sizing between major breakpoints.

## 9. CTA strategy

Primary CTA: `Book a Lesson`

Secondary CTA: `View Courses`

Persistent contact option: `Call +44 7984 210509`

CTA wording will stay consistent across the site so users do not have to decode different labels for the same action.

## 10. Booking form model

Required fields:
- Full Name
- Phone Number
- Email
- Course
- Manual / Automatic
- Preferred Date
- Preferred Time
- Pickup Location

Optional:
- Message

Validation principles:
- Required fields are clearly marked.
- Email and phone formats are validated sensibly.
- Date cannot be in the past.
- Errors are shown next to the relevant field and summarised accessibly.
- Submission success is explicit.
- If no backend is configured, the app uses a mock/local success flow and clearly states that the enquiry has been captured only in the demo interface.

## 11. SEO structure

### Core keyword themes
- driving school London
- driving lessons London
- driving instructor London
- driving lessons W9
- driving school W9
- driving test preparation London

These are planning targets, not claims of current search rankings.

### Page metadata pattern
- Home: Lastminute Driving School | Driving Lessons in London
- About: About Lastminute Driving School
- Courses: Driving Courses & Lessons | Lastminute Driving School
- Pricing: Driving Lesson Prices & Packages | Lastminute Driving School
- Instructors: Driving Instructors | Lastminute Driving School
- Book: Book a Driving Lesson | Lastminute Driving School
- Reviews: Driving School Reviews | Lastminute Driving School
- Gallery: Driving School Gallery | Lastminute Driving School
- FAQ: Driving Lessons FAQ | Lastminute Driving School
- Contact: Contact Lastminute Driving School

Descriptions will be written in Phase 6 once the final content and service-area wording are settled.

### Structured data
Use `DrivingSchool` / `LocalBusiness`-appropriate schema where supported by the final content, with business name, address, phone and official site URL only when those values are confirmed.

## 12. Project architecture

```text
lastminute-driving-school/
├── docs/
│   ├── PROJECT-PLAN.md
│   └── PHASE-1.md
├── public/
│   ├── brand/
│   │   └── lastminute-driving-school-logo.jpg
│   └── images/
│       └── student-*.jpg
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   └── lib/
├── package.json
├── README.md
└── ...
```

Phase 3 will turn the empty `src/` structure into the full Next.js application. Keeping content/data separate from presentation will make later editing straightforward.
