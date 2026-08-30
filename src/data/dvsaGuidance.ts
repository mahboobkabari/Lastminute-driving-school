export interface DvsaGuidanceSection {
  title: string;
  duration: string;
  description: string;
  checklist: string[];
  tips: string[];
}

export const dvsa2026TestStructure: DvsaGuidanceSection[] = [
  {
    title: "1. Eyesight Check (Test Requirement)",
    duration: "Start of Test",
    description:
      "Before getting into the vehicle, the examiner will ask you to read a vehicle registration number plate from a distance of 20 metres (20.5m for old-style plates).",
    checklist: [
      "Ensure you bring and wear prescribed glasses or contact lenses if required",
      "Read the plate clearly with both eyes open",
      "If you fail 3 attempts, the test ends immediately and DVSA is notified",
    ],
    tips: [
      "Test your eyesight with a friend before test day by measuring 20 paces to a parked car.",
    ],
  },
  {
    title: "2. 'Show Me, Tell Me' Vehicle Safety Questions",
    duration: "1 at start, 1 during drive",
    description:
      "The examiner asks 2 vehicle safety questions. 1 'Tell Me' question before driving off (verbal explanation) and 1 'Show Me' question on the move (operating vehicle controls).",
    checklist: [
      "Tell Me (Static): Checking tyre pressures, tyre tread depth (minimum 1.6mm), brake fluid, engine oil, engine coolant, brake lights, horn",
      "Show Me (On the Move): Operating front/rear wipers, rear demister, front demister, sounding the horn, opening/closing the side window",
    ],
    tips: [
      "When asked a 'Show Me' question while driving, maintain total road control first. Do not compromise vehicle safety to operate a switch.",
    ],
  },
  {
    title: "3. General Driving & Manoeuvre (One Reversing Exercise)",
    duration: "~20 Minutes",
    description:
      "You will drive in varied traffic conditions and complete one reversing exercise chosen by the examiner.",
    checklist: [
      "Parallel park at the roadside (behind 1 vehicle within 2 car lengths)",
      "Bay park (reversing into a bay and driving out, or driving into a bay and reversing out)",
      "Pull up on the right-hand side of the road, reverse back 2 car lengths, and rejoin traffic safely",
      "Controlled emergency stop (conducted on roughly 1 in 3 tests)",
    ],
    tips: [
      "All-round 360-degree observation is paramount during reversing. Stop immediately if pedestrians, cyclists, or vehicles approach.",
    ],
  },
  {
    title: "4. Independent Driving Section",
    duration: "~20 Minutes",
    description:
      "For roughly half the test, you will drive independently without step-by-step turn guidance from the examiner.",
    checklist: [
      "In 80% (4 in 5) of tests: Following a DVSA TomTom Sat Nav device pre-loaded with the route",
      "In 20% (1 in 5) of tests: Following series of traffic signs towards a destination",
      "Taking a wrong turn is NOT a driving fault if done safely and legally",
    ],
    tips: [
      "If you realize you made a wrong turn or missed a sign, do not panic or brake abruptly. Continue safely and the examiner will redirect you.",
    ],
  },
];

export const dvsa2026BookingRules = [
  {
    rule: "Learner Self-Booking Only",
    detail: "Learners must book and manage test appointments directly on GOV.UK using their provisional driving licence.",
  },
  {
    rule: "2-Change Maximum Limit",
    detail: "A test date or location can be modified at most twice. Further changes require cancellation and re-booking.",
  },
  {
    rule: "3-Nearest Test Centres Restriction",
    detail: "Rescheduling test locations is restricted to the 3 nearest test centres to your home postcode or initial centre.",
  },
  {
    rule: "Bring Physical Photocard Licence",
    detail: "You MUST bring your physical UK photocard provisional licence. Photos, scans, or paper counterparts are not accepted.",
  },
];
