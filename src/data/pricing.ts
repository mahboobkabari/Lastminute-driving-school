export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  unit: string;
  summary: string;
  idealFor: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
  savingsNote?: string;
}

export const pricingNotice = {
  isConfigurablePlaceholder: true,
  disclaimer:
    "Note: Rates shown below represent example pricing structure and must be confirmed with Lastminute Driving School prior to booking. Final lesson rates depend on transmission (manual/automatic) and pickup location.",
  updatedDate: "August 2026",
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "single",
    name: "Single Driving Lesson (2 Hours)",
    price: "£75",
    unit: "per 2-hour session",
    summary: "Ideal for an assessment lesson or targeted practice on specific driving skills.",
    idealFor: "New learners testing the waters or experienced drivers seeking a skill assessment.",
    features: [
      "Full 2-hour 1-to-1 tuition (no car sharing)",
      "Door-to-door pickup & drop-off in coverage areas",
      "Tailored progress review at the end of the session",
      "Covers cockpit routine, manoeuvres, or urban traffic",
      "Manual & Automatic options available",
    ],
  },
  {
    id: "block-5",
    name: "5-Lesson Starter Block (10 Hours)",
    price: "£360",
    unit: "for 10 hours",
    summary: "A structured kickstart to build fundamental road skills and muscle memory.",
    idealFor: "Beginners wanting rapid, structured momentum through early driving syllabus.",
    savingsNote: "Save £15 compared to single bookings",
    features: [
      "5 x 2-hour focused driving sessions",
      "Structured progression through DVSA core competencies",
      "Dedicated lesson slot reservation each week",
      "Personalized learning log and debrief after every drive",
      "Free access to Highway Code & 'Show Me, Tell Me' study guide",
    ],
  },
  {
    id: "block-10",
    name: "10-Lesson Comprehensive Block (20 Hours)",
    price: "£700",
    unit: "for 20 hours",
    summary: "Our most popular complete package from beginner basics to test route readiness.",
    idealFor: "Learners committed to building deep confidence and working toward their practical test.",
    isPopular: true,
    badge: "Best Value",
    savingsNote: "Save £50 compared to single bookings",
    features: [
      "10 x 2-hour comprehensive sessions",
      "Complete coverage of all 3 reversing manoeuvres & emergency stop",
      "20-minute Sat Nav independent driving simulations",
      "Extensive driving on actual local DVSA test routes",
      "1 full realistic Mock Driving Test with diagnostic marking",
      "Priority weekend and evening slot availability",
    ],
  },
  {
    id: "test-day",
    name: "Practical Test Day Package",
    price: "£190",
    unit: "complete test day service",
    summary: "Everything you need for your practical driving test day in a familiar, dual-control car.",
    idealFor: "Learners who have booked their practical test and need car hire + pre-test warm-up.",
    badge: "Test Day Hire",
    features: [
      "1-hour warm-up driving lesson right before the test",
      "Dual-control tuition vehicle hire for the official DVSA test",
      "Full test insurance covering the examination drive",
      "Accompaniment and moral support at the test centre",
      "Debrief and safe return drive home with your pass certificate",
    ],
  },
  {
    id: "refresher-block",
    name: "Refresher & Motorway Course (6 Hours)",
    price: "£230",
    unit: "for 6 hours",
    summary: "Designed for full licence holders needing to conquer London traffic or motorways.",
    idealFor: "Nervous full licence holders, international drivers, or returning drivers.",
    features: [
      "3 x 2-hour tailored confidence-building sessions",
      "High-speed dual carriageways & London Red Routes",
      "Tight parallel parking and multi-storey car park practice",
      "Navigation through complex roundabouts and one-way systems",
      "Night driving & adverse weather hazard perception",
    ],
  },
];
