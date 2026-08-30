export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  teachingStyle: string[];
  vehicle: {
    type: string;
    features: string[];
  };
  areasCovered: string[];
  image: string;
  highlights: string[];
}

export const instructors: Instructor[] = [
  {
    id: "richard",
    name: "Richard",
    role: "Lead Driving Instructor",
    bio:
      "Richard is the lead driving instructor at Lastminute Driving School. Praised across over 80 five-star Google reviews for his calm, patient temperament and clear communication, Richard specializes in turning anxious learners into confident, road-ready, test-passing drivers across London.",
    teachingStyle: [
      "Calm & Reassuring Temperament",
      "Step-by-Step Practical Explanations",
      "Deep Knowledge of Local DVSA Test Routes",
      "Constructive, Stress-Free Feedback",
      "Focus on Safe Independent Thinking",
    ],
    vehicle: {
      type: "Modern Dual-Control Tuition Vehicle",
      features: [
        "Dual Controls (He-Man approved safety pedals)",
        "Air Conditioning & Climate Control",
        "Excellent Visibility & Easy Parking Dynamics",
        "Maintained to strict DVSA roadworthy standards",
      ],
    },
    areasCovered: [
      "W9 (Maida Vale, Queen's Park, Bravington Rd)",
      "NW6 (Kilburn, West Hampstead)",
      "W10 (Ladbroke Grove, North Kensington)",
      "W2 (Paddington, Bayswater)",
      "NW10 (Kensal Rise, Willesden)",
    ],
    image: "/images/learner-04.jpg",
    highlights: [
      "5.0 Google Rating from 82 verified reviews",
      "Specialist in first-time pass preparation",
      "Expertise across West & North London DVSA test routes",
    ],
  },
];
