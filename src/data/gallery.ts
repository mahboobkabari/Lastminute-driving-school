export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "First-Time Pass" | "Test Day" | "Milestones";
  caption: string;
  alt: string;
  featured?: boolean;
}

export const galleryCategories = ["All", "First-Time Pass", "Test Day", "Milestones"] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    src: "/images/learner-01.jpg",
    title: "Proud Pass Milestone",
    category: "First-Time Pass",
    caption: "Celebrations after a confident first-time pass on a London test route.",
    alt: "Happy learner holding practical driving test pass certificate outside test centre with tuition car",
    featured: true,
  },
  {
    id: "gal-02",
    src: "/images/learner-02.jpg",
    title: "Test Day Success",
    category: "Test Day",
    caption: "Successful practical test completion with zero serious faults.",
    alt: "Learner smiling with pass certificate next to Lastminute Driving School instructor car",
  },
  {
    id: "gal-04",
    src: "/images/learner-04.jpg",
    title: "Confident London Driver",
    category: "First-Time Pass",
    caption: "From complete beginner to confident independent driver on London roads.",
    alt: "Student proudly holding their green pass certificate beside the tuition car",
    featured: true,
  },
  {
    id: "gal-05",
    src: "/images/learner-05.jpg",
    title: "Clean Sheet Pass",
    category: "First-Time Pass",
    caption: "Outstanding driving test result following comprehensive mock test preparation.",
    alt: "Learner celebrating practical driving test result beside instructor vehicle",
  },
  {
    id: "gal-06",
    src: "/images/learner-06.jpg",
    title: "Mill Hill Test Pass",
    category: "Test Day",
    caption: "Passing the test at Mill Hill test centre with composure and focus.",
    alt: "Driver with pass certificate outside DVSA test centre",
  },
  {
    id: "gal-07",
    src: "/images/learner-07.jpg",
    title: "Overcoming Driving Anxiety",
    category: "Milestones",
    caption: "Patient coaching helped conquer nerves and secure a full UK licence.",
    alt: "Delighted student showing their official driving pass certificate",
  },
  {
    id: "gal-08",
    src: "/images/learner-08.jpg",
    title: "First-Time Pass Joy",
    category: "First-Time Pass",
    caption: "Passed first time after targeted tuition on roundabouts and manoeuvres.",
    alt: "Successful driving student holding pass document with instructor car",
  },
  {
    id: "gal-09",
    src: "/images/learner-09.jpg",
    title: "Greenford Test Success",
    category: "Test Day",
    caption: "Mastering the Greenford test route roundabouts and independent driving section.",
    alt: "Happy student celebrating driving test pass next to car",
  },
  {
    id: "gal-10",
    src: "/images/learner-10.jpg",
    title: "Road Ready Driver",
    category: "Milestones",
    caption: "Building safe, lifelong habits that extend well beyond test day.",
    alt: "Student holding pass certificate beside Lastminute Driving School car",
  },
  {
    id: "gal-11",
    src: "/images/learner-11.jpg",
    title: "First Attempt Victory",
    category: "First-Time Pass",
    caption: "Calm, clear instruction made all the difference on examination day.",
    alt: "Learner driver smiling proudly with their pass certificate",
  },
  {
    id: "gal-12",
    src: "/images/learner-12.jpg",
    title: "Manoeuvre Mastery",
    category: "Milestones",
    caption: "Perfect parallel parking and controlled driving under DVSA assessment.",
    alt: "Successful learner standing beside driving school car with pass certificate",
  },
  {
    id: "gal-13",
    src: "/images/learner-13.jpg",
    title: "Intensive Tuition Triumph",
    category: "Test Day",
    caption: "Focused lessons leading directly to a pass certificate.",
    alt: "Driving student holding pass certificate outside test centre",
  },
  {
    id: "gal-14",
    src: "/images/learner-14.jpg",
    title: "Hendon Test Centre Pass",
    category: "Test Day",
    caption: "Navigating North West London traffic and complex junctions with ease.",
    alt: "Student celebrating test day achievement with certificate",
  },
  {
    id: "gal-15",
    src: "/images/learner-15.jpg",
    title: "Confidence Achieved",
    category: "Milestones",
    caption: "Transformed from an anxious starter to a relaxed, licensed driver.",
    alt: "Happy learner with driving test pass certificate next to tuition car",
  },
  {
    id: "gal-16",
    src: "/images/learner-16.jpg",
    title: "Smooth Driving Test Pass",
    category: "First-Time Pass",
    caption: "A steady, confident drive resulting in immediate test success.",
    alt: "Driver posing with official DVSA pass certificate",
  },
  {
    id: "gal-17",
    src: "/images/learner-17.jpg",
    title: "Test Ready Milestone",
    category: "Milestones",
    caption: "Consistent practice and calm coaching rewarded with a full driving licence.",
    alt: "Learner holding certificate by the car door",
  },
  {
    id: "gal-18",
    src: "/images/learner-18.jpg",
    title: "Superb Test Result",
    category: "First-Time Pass",
    caption: "Passed on first attempt with minimal minor driving faults.",
    alt: "Student smiling broadly with pass certificate beside car",
  },
  {
    id: "gal-19",
    src: "/images/learner-19.jpg",
    title: "Full Driving Independence",
    category: "Milestones",
    caption: "Ready for independent driving anywhere across the UK.",
    alt: "Successful driver posing with official pass paper outside test centre",
  },
];
