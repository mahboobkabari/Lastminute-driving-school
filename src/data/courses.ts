export interface Course {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  idealFor: string;
  duration: string;
  transmission: "Manual & Automatic" | "Manual" | "Automatic";
  keyOutcomes: string[];
  syllabus: string[];
  featured?: boolean;
  badge?: string;
}

export const courses: Course[] = [
  {
    slug: "beginner",
    title: "Beginner Driving Course",
    tagline: "Build foundational control, road awareness, and confidence step by step",
    summary:
      "A structured curriculum designed for complete beginners. From cockpit drill and basic clutch control to navigating complex London junctions, roundabouts, and busy residential roads with calm reassurance.",
    idealFor: "Complete beginners who have never driven before or had only 1–2 informal lessons.",
    duration: "Recommended 20–40 hours (flexible lesson blocks)",
    transmission: "Manual & Automatic",
    keyOutcomes: [
      "Master the Cockpit Drill & primary vehicle controls",
      "Smooth moving off, stopping, and hill starts without stalling",
      "Safe road positioning and observation at roundabouts & crossroads",
      "Confidence navigating busy pedestrian areas and London cycle lanes",
    ],
    syllabus: [
      "Cockpit Routine, DSSSM (Doors, Seat, Steering, Seatbelt, Mirrors)",
      "Moving off, stopping, and bite point mastery",
      "Junction routines (MSPSL - Mirrors, Signal, Position, Speed, Look)",
      "Approaching roundabouts and multi-lane junctions",
      "Introduction to pedestrian crossings and bus lanes",
      "Emerging into busy London traffic safely",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    slug: "test-prep",
    title: "Driving Test Preparation & Mock Tests",
    tagline: "Targeted training on local London test routes, manoeuvres, and independent driving",
    summary:
      "Intensive preparation tailored to the current DVSA test format. We cover actual test routes around local test centres, refine all reversing manoeuvres, practice 'Show Me, Tell Me' questions, and simulate full realistic mock tests.",
    idealFor: "Learners approaching a practical test date who want to eliminate minor faults and pass with confidence.",
    duration: "6–15 hours before test day",
    transmission: "Manual & Automatic",
    keyOutcomes: [
      "Familiarity with West/North London DVSA test routes and tricky hotspots",
      "Complete mastery of all 3 reversing manoeuvres",
      "Flawless performance on 20-minute Sat Nav independent driving",
      "Confidence under realistic DVSA test conditions with full mock assessments",
    ],
    syllabus: [
      "DVSA test format review & assessment marking criteria",
      "Independent driving (Sat Nav and road sign following)",
      "Parallel parking, bay parking, and pull up on the right",
      "Controlled emergency stop practice",
      "Full vehicle safety questions ('Show Me, Tell Me' practice)",
      "Realistic mock driving tests with written diagnostic feedback",
    ],
    featured: true,
    badge: "Test Focused",
  },
  {
    slug: "refresher",
    title: "Refresher Driving Course",
    tagline: "Rebuild confidence, refresh road rules, and regain independence behind the wheel",
    summary:
      "A supportive, stress-free course for full licence holders who haven't driven in a while, moved to London from abroad, or feel nervous driving in heavy traffic, multilane roundabouts, or nighttime conditions.",
    idealFor: "Licence holders returning to the road, international drivers adapting to UK roads, or nervous drivers.",
    duration: "4–10 hours tailored to your needs",
    transmission: "Manual & Automatic",
    keyOutcomes: [
      "Overcome driving anxiety and feel composed in London traffic",
      "Familiarity with UK road signs, 20mph zones, and box junctions",
      "Smooth parallel parking in tight London streets",
      "Motorway and dual-carriageway confidence",
    ],
    syllabus: [
      "Initial assessment drive to identify personal hesitation triggers",
      "Navigating complex West London one-way systems and Red Routes",
      "Confidence building on busy urban thoroughfares and roundabouts",
      "Tight parking, reversing, and multi-storey car parks",
      "Night driving and poor weather hazard perception",
    ],
  },
  {
    slug: "manual",
    title: "Manual Driving Lessons",
    tagline: "Master clutch control, smooth gear shifting, and complete vehicle command",
    summary:
      "Comprehensive manual car tuition. Learn how to balance the clutch effortlessly, manage hill starts, shift down through gears for engine braking, and gain a full UK manual licence that permits driving both manual and automatic cars.",
    idealFor: "Learners seeking the freedom to drive any car, commercial vehicles, or rentals worldwide.",
    duration: "Flexible single lessons or discounted 5/10-hour blocks",
    transmission: "Manual",
    keyOutcomes: [
      "Effortless clutch control with zero fear of stalling",
      "Smooth gear selection matching vehicle speed and engine load",
      "Confident hill starts and stop-and-go queue management",
      "Qualify for an unrestricted UK Category B manual driving licence",
    ],
    syllabus: [
      "Understanding the clutch friction point (bite point)",
      "Gear changing techniques and block-gear shifting",
      "Co-ordinating handbrake and footbrake on steep inclines",
      "Speed matching and progressive braking",
      "Complex urban junctions and multi-lane navigation",
    ],
  },
  {
    slug: "automatic",
    title: "Automatic Driving Lessons",
    tagline: "Simpler control, zero stalls, and faster progression on busy London roads",
    summary:
      "Streamline your learning experience. Without clutch pedals or gear shifts, automatic driving lets you dedicate 100% of your attention to hazard perception, mirror checks, road positioning, and navigating London's dense traffic.",
    idealFor: "Learners who want a smoother, less stressful route to passing their driving test.",
    duration: "Flexible single lessons or discounted 5/10-hour blocks",
    transmission: "Automatic",
    keyOutcomes: [
      "Eliminate stalling and clutch anxiety completely",
      "Accelerated learning curve for faster test readiness",
      "Relaxed handling in stop-start London commuter traffic",
      "Mastery of automatic transmission modes (D, R, N, P) and creep control",
    ],
    syllabus: [
      "Automatic gear selector functions and pedal discipline (right foot only)",
      "Smooth acceleration and progressive braking techniques",
      "Creep control for millimeter-precise parking and slow-speed manoeuvres",
      "Observation and hazard anticipation on high-density roads",
      "Test route preparation and mock testing in an automatic vehicle",
    ],
  },
  {
    slug: "parking",
    title: "Parking Practice & Manoeuvres Mastery",
    tagline: "Nail parallel parking, bay parking, and tight space reversing with total composure",
    summary:
      "A dedicated masterclass on all reversing and parking exercises required for both the DVSA practical test and everyday life in London. Master reference points that guarantee precision every single time.",
    idealFor: "Learners struggling with test manoeuvres or full licence holders wanting to park in tight London spaces.",
    duration: "3–6 hours focused coaching",
    transmission: "Manual & Automatic",
    keyOutcomes: [
      "Reliable visual reference points for all 3 DVSA test manoeuvres",
      "Full 360-degree observation routines to avoid dangerous faults",
      "Confidence parallel parking between two vehicles on narrow streets",
      "Mastery of 90-degree forward and reverse bay parking",
    ],
    syllabus: [
      "Parallel parking at the roadside (within 2 car lengths)",
      "Reverse bay parking into marked spaces",
      "Forward bay parking and reversing out safely",
      "Pulling up on the right-hand side of the road and reversing 2 car lengths",
      "Steering technique, slow clutch control, and blind-spot checks",
    ],
  },
  {
    slug: "highway",
    title: "Highway & Dual Carriageway Driving",
    tagline: "Master high-speed driving, slip roads, overtaking, and forward anticipation",
    summary:
      "Bridge the gap between urban driving and high-speed roads. Learn how to join and leave dual carriageways and motorways safely, read high-speed gantry signs, manage blind spots at 70mph, and overtake with calm precision.",
    idealFor: "Recent test passers, provisional learners ready for high-speed roads, or drivers anxious on motorways.",
    duration: "3–6 hours dedicated road sessions",
    transmission: "Manual & Automatic",
    keyOutcomes: [
      "Safe slip road acceleration and merging into free-flowing traffic",
      "Proper lane discipline and middle-lane hogging awareness",
      "Reading electronic overhead gantry signs and Smart Motorway rules",
      "Maintaining safe stopping distances at 60–70mph in variable weather",
    ],
    syllabus: [
      "Joining high-speed dual carriageways via acceleration lanes",
      "Lane discipline, mirror routines, and blind-spot checks at high speed",
      "Overtaking safely and returning to the left lane",
      "Exiting dual carriageways and managing sudden deceleration",
      "Smart Motorways: red 'X' signs, emergency refuge areas, and variable speed limits",
    ],
  },
  {
    slug: "defensive",
    title: "Defensive Driving & Hazard Perception",
    tagline: "Develop advanced anticipation, road risk management, and accident avoidance skills",
    summary:
      "Advanced coaching designed to transform good drivers into exceptionally safe drivers. Learn how to anticipate erratic road users, cyclists filtering in blind spots, aggressive drivers, and hazardous weather conditions.",
    idealFor: "Learners seeking superior safety skills, commercial drivers, or anyone wanting enhanced collision prevention.",
    duration: "4–8 hours specialized coaching",
    transmission: "Manual & Automatic",
    keyOutcomes: [
      "Identify developing hazards 10–15 seconds before they become emergencies",
      "Safely navigate London's busy cycle superhighways and delivery riders",
      "Master space cushioning and defensive positioning at junctions",
      "Stay calm and make safe decisions when facing aggressive drivers",
    ],
    syllabus: [
      "The 'System of Car Control' (Information, Position, Speed, Gear, Acceleration)",
      "Urban hazard scanning: pedestrians, e-scooters, and cyclists",
      "Managing following distances and tailgaters safely",
      "Adverse weather driving (heavy rain, aquaplaning, fog, ice)",
      "Night driving hazards and glare management",
    ],
  },
];
