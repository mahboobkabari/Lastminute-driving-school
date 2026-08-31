import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";
import { BookingModalProvider } from "@/components/BookingModal";

const siteUrl = site.url;

export const viewport: Viewport = {
  themeColor: "#071a33",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lastminute Driving School | Patient Driving Lessons in London",
    template: "%s | Lastminute Driving School London",
  },
  description:
    "Professional driving lessons in London W9 with patient instruction, mock tests, and test-route preparation. Rated 5.0 on Google with 82 verified reviews.",
  keywords: [
    "driving lessons London",
    "driving school London",
    "driving instructor W9",
    "driving lessons Maida Vale",
    "driving school Queen's Park",
    "West London driving lessons",
    "manual driving lessons London",
    "automatic driving lessons London",
    "driving test preparation London",
    "DVSA driving test 2026",
  ],
  authors: [{ name: "Lastminute Driving School" }],
  creator: "Lastminute Driving School",
  publisher: "Lastminute Driving School",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Lastminute Driving School | Driving Lessons in London",
    description:
      "Patient, practical driving tuition across London W9 and surrounding West London areas. Rated 5.0 on Google with 82 reviews.",
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: site.name,
    images: [
      {
        url: "/images/og-image.png",
        width: 1024,
        height: 517,
        alt: "Lastminute Driving School - Learn to Drive with Confidence in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lastminute Driving School | Driving Lessons in London",
    description:
      "Patient, practical driving tuition across London W9 and surrounding West London areas. Rated 5.0 on Google with 82 reviews.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/brand/lastminute-driving-school-logo.jpg",
    apple: "/brand/lastminute-driving-school-logo.jpg",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": ["DrivingSchool", "LocalBusiness"],
  "@id": `${siteUrl}/#business`,
  name: site.name,
  legalName: site.name,
  url: siteUrl,
  logo: `${siteUrl}/brand/lastminute-driving-school-logo.jpg`,
  image: `${siteUrl}/images/og-image.png`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coordinates.lat,
    longitude: site.coordinates.lng,
  },
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "West London" },
    { "@type": "PostalCodeRangeSpecification", postalCode: "W9" },
    { "@type": "PostalCodeRangeSpecification", postalCode: "NW6" },
    { "@type": "PostalCodeRangeSpecification", postalCode: "W10" },
    { "@type": "PostalCodeRangeSpecification", postalCode: "W2" },
    { "@type": "PostalCodeRangeSpecification", postalCode: "NW10" },
    { "@type": "PostalCodeRangeSpecification", postalCode: "NW8" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "82",
    reviewCount: "82",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Driving Tuition Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Beginner Driving Course",
          description: "Step-by-step foundation driving lessons for complete beginners in London.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Driving Test Preparation & Mock Tests",
          description: "Focused training on London DVSA test routes, independent driving, and manoeuvres.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manual & Automatic Driving Lessons",
          description: "1-to-1 driving tuition in modern dual-control manual and automatic cars.",
        },
      },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[var(--ink)] antialiased selection:bg-[var(--red)] selection:text-white">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-[var(--red)] focus:px-4 focus:py-2 focus:text-xs focus:font-black focus:text-white focus:shadow-xl"
        >
          Skip to main content
        </a>
        <BookingModalProvider>
          <div id="main-content">{children}</div>
        </BookingModalProvider>
      </body>
    </html>
  );
}
