export interface CoverageArea {
  postcode: string;
  name: string;
  borough: string;
  description: string;
}

export interface TestCentre {
  name: string;
  location: string;
  postcode: string;
  travelTime: string;
  features: string[];
}

export const coverageAreas: CoverageArea[] = [
  {
    postcode: "W9",
    name: "Maida Vale & Queen's Park",
    borough: "City of Westminster / Brent",
    description: "Our primary base around Bravington Rd, Elgin Ave, and surrounding streets.",
  },
  {
    postcode: "NW6",
    name: "Kilburn & West Hampstead",
    borough: "Camden / Brent",
    description: "Ideal for complex urban junctions, one-way systems, and busy bus routes.",
  },
  {
    postcode: "W10",
    name: "Ladbroke Grove & North Kensington",
    borough: "Kensington & Chelsea",
    description: "Tight residential parking practice, narrow roads, and pedestrian hazard awareness.",
  },
  {
    postcode: "W2",
    name: "Paddington & Bayswater",
    borough: "City of Westminster",
    description: "Central London traffic handling, Red Routes, and multi-lane positioning.",
  },
  {
    postcode: "NW10",
    name: "Kensal Rise & Willesden",
    borough: "Brent",
    description: "Connecting to North Circular access routes and high-speed junctions.",
  },
  {
    postcode: "NW8",
    name: "St John's Wood",
    borough: "City of Westminster",
    description: "Wide avenues, zebra crossings, and smooth progression drills.",
  },
];

export const nearbyTestCentres: TestCentre[] = [
  {
    name: "Greenford Practical Driving Test Centre",
    location: "Horsenden Lane North, Greenford",
    postcode: "UB6 7JJ",
    travelTime: "~25-30 mins from W9",
    features: [
      "Target of our regular test-route practice sessions",
      "Busy multilane roundabouts (Target Roundabout, A40)",
      "Varied suburban residential test routes",
    ],
  },
  {
    name: "Mill Hill Driving Test Centre",
    location: "Unit 9, Gruneisen Road, Mill Hill",
    postcode: "NW7 4NL",
    travelTime: "~25-35 mins from W9",
    features: [
      "Fast dual carriageways (A1 / A41)",
      "High-density suburban speed transitions",
      "Complex hill starts and rural fringe roads",
    ],
  },
  {
    name: "Hendon Driving Test Centre",
    location: "3 Aviation Drive, Beaufort Park, Hendon",
    postcode: "NW9 5TZ",
    travelTime: "~25-30 mins from W9",
    features: [
      "Modern business park starting environment",
      "Apex Corner and Staples Corner roundabout approaches",
      "Diverse 20mph, 30mph, and 40mph speed limit shifts",
    ],
  },
  {
    name: "Isleworth Driving Test Centre",
    location: "The Wireless Factory, Fleming Way, Isleworth",
    postcode: "TW7 6DB",
    travelTime: "~35-40 mins from W9",
    features: [
      "Great West Road (A4) corridor and dual carriageways",
      "Dense bus routes and cycle lanes",
      "Narrow residential reversing areas",
    ],
  },
];
