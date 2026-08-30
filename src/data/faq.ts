export interface FaqItem {
  id: string;
  category: "Booking & Pricing" | "Lessons & Tuition" | "Driving Test & 2026 Rules" | "Licence & Requirements";
  question: string;
  answer: string;
  govLink?: {
    label: string;
    url: string;
  };
}

export const faqCategories = [
  "All",
  "Booking & Pricing",
  "Lessons & Tuition",
  "Driving Test & 2026 Rules",
  "Licence & Requirements",
] as const;

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    category: "Licence & Requirements",
    question: "Do I need a provisional licence before starting lessons?",
    answer:
      "Yes. You must hold a valid UK provisional driving licence before taking lessons on public roads. You can apply for your provisional licence on GOV.UK up to 3 months before your 17th birthday (or 16th if you receive the higher rate mobility component of PIP). You must bring your physical photocard licence to your first lesson.",
    govLink: {
      label: "Apply for your provisional driving licence on GOV.UK",
      url: "https://www.gov.uk/apply-first-provisional-driving-licence",
    },
  },
  {
    id: "faq-2",
    category: "Lessons & Tuition",
    question: "Do you teach both manual and automatic cars?",
    answer:
      "Yes, we provide instruction in both manual and automatic vehicles. Manual lessons teach clutch control and full gear changes, qualifying you for an unrestricted UK Category B licence. Automatic lessons eliminate stalling and gear shifting, allowing you to focus purely on observation and road positioning in London traffic.",
  },
  {
    id: "faq-3",
    category: "Booking & Pricing",
    question: "How do I book a lesson with Lastminute Driving School?",
    answer:
      "You can submit a lesson request through our online Book a Lesson form or call us directly on 07984 210509. Once we receive your preferred dates, transmission choice, and pickup postcode (in W9 or nearby West London areas), we will confirm availability and schedule your first session.",
  },
  {
    id: "faq-4",
    category: "Lessons & Tuition",
    question: "How long is each driving lesson?",
    answer:
      "Our standard driving lessons are 2 hours long. Experience shows that 2-hour sessions provide the optimal balance for warmup, covering new skills, navigating complex London traffic scenarios, and conducting a thorough debrief without learner fatigue.",
  },
  {
    id: "faq-5",
    category: "Lessons & Tuition",
    question: "Do you offer refresher lessons for full licence holders?",
    answer:
      "Yes. Refresher courses are specifically designed for full licence holders who haven't driven in a while, international drivers unfamiliar with UK driving rules, or anyone feeling anxious about motorway driving, multilane roundabouts, or London one-way systems.",
  },
  {
    id: "faq-6",
    category: "Driving Test & 2026 Rules",
    question: "How does the DVSA 2026 practical driving test booking system work?",
    answer:
      "Under DVSA regulations, driving tests must be booked and managed directly by the learner on GOV.UK. Key rules include: (1) Candidate self-booking only; (2) A maximum of 2 changes permitted per test booking; (3) Test centre rescheduling is restricted to the 3 nearest test centres to your postcode. We guide you through the process and help you choose a realistic test date when you are fully test-ready.",
    govLink: {
      label: "Book your practical test on GOV.UK",
      url: "https://www.gov.uk/book-driving-test",
    },
  },
  {
    id: "faq-7",
    category: "Driving Test & 2026 Rules",
    question: "Do you offer realistic mock driving tests?",
    answer:
      "Yes. We conduct full mock driving tests structured exactly like the official DVSA examination: 40 minutes of driving, 20 minutes of independent driving using Sat Nav or traffic signs, one reversing manoeuvre, safety questions ('Show Me, Tell Me'), and an emergency stop check. You receive a marked DVSA DL25 feedback sheet highlighting exact areas for improvement.",
  },
  {
    id: "faq-8",
    category: "Driving Test & 2026 Rules",
    question: "Can I use your tuition car for my practical driving test?",
    answer:
      "Yes! Our Practical Test Day Package includes 1 hour of pre-test warm-up tuition, vehicle hire for the 40-minute test, full examiner-approved dual controls and test insurance, and the return journey. Please ensure you coordinate with your instructor before confirming your DVSA test slot.",
  },
  {
    id: "faq-9",
    category: "Lessons & Tuition",
    question: "Where will my driving lessons take place?",
    answer:
      "We provide door-to-door pickup across W9 (Maida Vale, Queen's Park, Bravington Rd) and surrounding areas including NW6, W10, W11, W2, NW10, and NW8. Lessons take place on varied local roads, urban junctions, and actual DVSA test routes around nearby test centres like Greenford, Mill Hill, Hendon, and Isleworth.",
  },
  {
    id: "faq-10",
    category: "Driving Test & 2026 Rules",
    question: "How do I know when I am ready for my driving test?",
    answer:
      "You are ready for your test when you can consistently drive for 40 minutes without any verbal or physical intervention from your instructor, successfully complete all manoeuvres independently, and consistently pass realistic mock tests with fewer than 15 minor driving faults and zero serious or dangerous faults.",
  },
  {
    id: "faq-11",
    category: "Booking & Pricing",
    question: "What is your lesson cancellation policy?",
    answer:
      "We require at least 48 hours' notice for any lesson cancellation or rescheduling. This allows us to offer the slot to other waiting learners. Cancellations made with less than 48 hours' notice may be charged at the standard lesson rate.",
  },
];
