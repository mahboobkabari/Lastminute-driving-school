export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  tag: string;
  quote: string;
  fullReview: string;
  verified: boolean;
  avatarText?: string;
  testCentre?: string;
}

export const reviewSummary = {
  averageRating: 5.0,
  totalReviews: 82,
  platform: "Google Business Profile",
  fiveStarPercentage: 100,
  themes: [
    "Calm & Patient Instruction",
    "First-Time Test Passes",
    "Confidence Building for Anxious Drivers",
    "London Test Route Expertise",
    "Clear, Actionable Feedback",
  ],
};

export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "Sean",
    rating: 5,
    date: "Recent Google Review",
    tag: "First-Time Pass",
    quote: "I felt ready for the test and, more importantly, genuinely more confident and safe behind the wheel.",
    fullReview:
      "Richard is a fantastic instructor. He is calm, patient, and makes every minute of the lesson count. I genuinely feel like a safe and confident driver now, not just someone trained to pass a test. Passed with flying colours!",
    verified: true,
    avatarText: "S",
    testCentre: "West London Test Centre",
  },
  {
    id: "rev-2",
    name: "Arianna",
    rating: 5,
    date: "Recent Google Review",
    tag: "First-Time Pass",
    quote: "He was calm, clear and very supportive. I passed my test first time after working through my weak areas.",
    fullReview:
      "Learning with Lastminute Driving School was the best decision. Richard explained everything with so much patience and clarity. He broke down tricky roundabouts and parking until I felt completely comfortable. Passed first time!",
    verified: true,
    avatarText: "A",
    testCentre: "Mill Hill Test Centre",
  },
  {
    id: "rev-3",
    name: "Olivia",
    rating: 5,
    date: "Recent Google Review",
    tag: "First-Time Pass",
    quote: "I passed my test first time and learnt a lot about driving in real London traffic.",
    fullReview:
      "I was quite anxious about driving in London, but Richard’s calm temperament helped me relax from lesson one. He knows the local test routes inside out and prepared me for every possible scenario. Passed on my first attempt!",
    verified: true,
    avatarText: "O",
    testCentre: "Greenford Test Centre",
  },
  {
    id: "rev-4",
    name: "Khalid",
    rating: 5,
    date: "Recent Google Review",
    tag: "Intensive Pass",
    quote: "Two weeks of lessons and I passed my test first time with confidence.",
    fullReview:
      "Two weeks of focused, practical lessons and I passed my driving test first time! Richard gives clear, actionable feedback after every drive so you know exactly where to improve. Absolutely recommended.",
    verified: true,
    avatarText: "K",
    testCentre: "Hendon Test Centre",
  },
  {
    id: "rev-5",
    name: "Angel",
    rating: 5,
    date: "Recent Google Review",
    tag: "Test Routes",
    quote: "He explained things well and took me through all the tricky test routes.",
    fullReview:
      "Richard has immense knowledge of the London test routes and common pitfalls. His methodical approach to manoeuvres made parallel parking feel effortless on test day. Truly a top-tier driving instructor.",
    verified: true,
    avatarText: "A",
    testCentre: "Greenford Test Centre",
  },
  {
    id: "rev-6",
    name: "Crystal",
    rating: 5,
    date: "Recent Google Review",
    tag: "Confidence Building",
    quote: "His calm approach and expert guidance helped me build my skills and self-belief.",
    fullReview:
      "I had taken lessons with other schools before and felt overwhelmed, but Richard changed everything. His patience and reassuring manner made all the difference. I now love driving.",
    verified: true,
    avatarText: "C",
    testCentre: "West London Test Centre",
  },
  {
    id: "rev-7",
    name: "Jo",
    rating: 5,
    date: "Recent Google Review",
    tag: "Clear Feedback",
    quote: "Richard was calm, focused and helped me address the foundations I had struggled with.",
    fullReview:
      "Richard identified the exact habits holding me back and provided clear, step-by-step techniques to fix them. The mock test simulations before my actual test were invaluable.",
    verified: true,
    avatarText: "J",
    testCentre: "Mill Hill Test Centre",
  },
  {
    id: "rev-8",
    name: "Mohamed",
    rating: 5,
    date: "Recent Google Review",
    tag: "Nervous Driver",
    quote: "Never felt rushed or judged. Every lesson was structured and stress-free.",
    fullReview:
      "As a nervous beginner, having a patient instructor is everything. Richard never raised his voice, always remained encouraging, and helped me build safe driving habits that will stay with me for life.",
    verified: true,
    avatarText: "M",
    testCentre: "Isleworth Test Centre",
  },
];
