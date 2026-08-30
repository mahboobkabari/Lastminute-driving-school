export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    country: string;
    full: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  googleRating: number;
  googleReviewCount: number;
  googleMapsUrl: string;
  operatingHours: {
    days: string;
    hours: string;
  }[];
  socials?: {
    platform: string;
    url: string;
  }[];
}

export const site: SiteConfig = {
  name: "Lastminute Driving School",
  tagline: "Learn to Drive with Confidence in London",
  description:
    "Professional, patient driving tuition in West London and surrounding areas. Tailored manual and automatic driving lessons, test route preparation, and confidence-building coaching.",
  url: "https://lastminutedrivingschool.co.uk",
  phone: "+44 7984 210509",
  phoneDisplay: "07984 210509",
  email: "info@lastminutedrivingschool.co.uk",
  address: {
    street: "Bravington Rd",
    city: "London",
    postcode: "W9 3AP",
    country: "United Kingdom",
    full: "Bravington Rd, London W9 3AP, United Kingdom",
  },
  coordinates: {
    lat: 51.5295579,
    lng: -0.2042557,
  },
  googleRating: 5.0,
  googleReviewCount: 82,
  googleMapsUrl:
    "https://www.google.com/maps/place/Lastminute+Driving+School/@51.536442,-0.3277686,11z/data=!4m10!1m2!2m1!1sdriving+schools+London!3m6!1s0x4876119967c1acdd:0xb5876a1181a455f!8m2!3d51.5295579!4d-0.2042557!15sChZkcml2aW5nIHNjaG9vbHMgTG9uZG9uWhgiFmRyaXZpbmcgc2Nob29scyBsb25kb26SAQ5kcml2aW5nX3NjaG9vbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VScWVXOUhMVkYzRUFF4AEA-gEFCJEDEDQ!16s%2Fg%2F11j4xgcb9d",
  operatingHours: [
    { days: "Monday – Friday", hours: "07:00 – 20:00" },
    { days: "Saturday", hours: "08:00 – 18:00" },
    { days: "Sunday", hours: "09:00 – 17:00" },
  ],
};
