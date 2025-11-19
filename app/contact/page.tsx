import Contact from "@/components/ContactPage";

export const metadata = {
  title: "Contact HODA SHINE — Cleaning Services in Ajman, Dubai & Sharjah",
  description:
    "Contact HODA SHINE SERVICES for home, office, villa, carpet, sofa, AC cleaning & maid services in Ajman, Dubai & Sharjah. Fast response, affordable pricing.",
  keywords: [
    "contact cleaning service Ajman",
    "cleaners UAE phone number",
    "cleaning services Dubai",
    "maid service Ajman",
    "book cleaning UAE",
    "home cleaners UAE",
    "office cleaning Ajman",
    "best cleaning company UAE",
    "deep cleaning contact UAE",
    "HODA SHINE SERVICES contact"
  ],

  alternates: {
    canonical: "https://hodashine.ae/contact",
  },

  openGraph: {
    title: "Contact HODA SHINE SERVICES | UAE Cleaning Experts",
    description:
      "Get in touch with HODA SHINE for professional cleaning services across Ajman, Sharjah & Dubai.",
    url: "https://hodashine.ae/contact",
    siteName: "HODA SHINE SERVICES",
    type: "website",
    images: [
      {
        url: "/home1.jpg",
        width: 1200,
        height: 630,
        alt: "Hoda Shine Contact Page",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact HODA SHINE | Best Cleaners in UAE",
    description:
      "Reach out to HODA SHINE SERVICES for fast, professional cleaning in Ajman, Dubai & Sharjah.",
    images: ["/home1.jpg"],
  },

  other: {
    "og:locale": "en_US",

    // Business contact details
    "business:contact_data:street_address": "Free Zone Ajman — Block C1",
    "business:contact_data:locality": "Ajman",
    "business:contact_data:country_name": "United Arab Emirates",
    "business:contact_data:phone_number": "+971569407167",

    // Social Links
    "sameAs:facebook": "https://www.facebook.com/share/1AddGk8yb1/",
    "sameAs:instagram":
      "https://www.instagram.com/hodashineservices?igsh=MTl0Mm9rZzJxb3J0dg==",
    "sameAs:tiktok":
      "https://www.tiktok.com/@www.tiktok.comhodashines?_r=1&_t=ZS-91R49SwReef",

    // WhatsApp
    "contactPoint:whatsapp": "https://wa.me/971522032532",
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />

      {/* CONTACT PAGE JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact HODA SHINE SERVICES",
            url: "https://hodashine.ae/contact",
            description:
              "Get in touch with HODA SHINE SERVICES for cleaning services in Ajman, Sharjah, Dubai.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971569407167",
              contactType: "customer service",
              areaServed: ["Ajman", "Dubai", "Sharjah"],
              availableLanguage: ["English"],
            },
          }),
        }}
      />

      {/* LOCAL BUSINESS JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "HODA SHINE SERVICES",
            image: "https://hodashine.ae/home1.jpg",
            url: "https://hodashine.ae/contact",
            telephone: "+971569407167",
            email: "hodashineservices@gmail.com",
            priceRange: "AED 25 - AED 1000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Free Zone Ajman — Block C1",
              addressLocality: "Ajman",
              addressCountry: "AE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "25.405216",
              longitude: "55.513643",
            },
            sameAs: [
              "https://www.facebook.com/share/1AddGk8yb1/",
              "https://www.instagram.com/hodashineservices?igsh=MTl0Mm9rZzJxb3J0dg==",
              "https://www.tiktok.com/@www.tiktok.comhodashines?_r=1&_t=ZS-91R49SwReef",
              "https://wa.me/971522032532"
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                opens: "08:00",
                closes: "20:00"
              }
            ]
          }),
        }}
      />
    </>
  );
}
