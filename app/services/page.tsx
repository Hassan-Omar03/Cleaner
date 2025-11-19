import Services from "@/components/ServicesPage";

export const metadata = {
  title: "Cleaning Services UAE | HODA SHINE SERVICES",
  description:
    "Professional home, office, villa, carpet, sofa, AC, and swimming pool cleaning services in Ajman, Dubai, and Sharjah. Affordable & reliable cleaners.",
  keywords: [
    "cleaning services UAE",
    "cleaners near me",
    "maid service Ajman",
    "cleaning services Dubai",
    "villa cleaning UAE",
    "office cleaning Sharjah",
    "deep cleaning UAE",
    "carpet cleaning UAE",
    "sofa cleaning UAE",
    "AC cleaning Dubai",
    "swimming pool cleaning UAE",
    "professional cleaners UAE"
  ],

  alternates: {
    canonical: "https://hodashine.ae/services",
  },

  openGraph: {
    title: "HODA SHINE – Best Cleaning Services in UAE",
    description:
      "Trusted cleaning services including home, office, villa, carpet, sofa, and AC cleaning across Ajman, Sharjah, and Dubai.",
    url: "https://hodashine.ae/services",
    siteName: "HODA SHINE SERVICES",
    type: "website",
    images: [
      {
        url: "/home1.jpg",
        width: 1200,
        height: 630,
        alt: "Hoda Shine Cleaning Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cleaning Services UAE | HODA SHINE SERVICES",
    description:
      "Best and trusted home, office, carpet, sofa, and AC cleaning in Ajman, Dubai, Sharjah.",
    images: ["/home1.jpg"],
  },

  other: {
    "og:locale": "en_US",

    // Business contact
    "business:contact_data:street_address": "Free Zone Ajman — Block C1",
    "business:contact_data:locality": "Ajman",
    "business:contact_data:country_name": "United Arab Emirates",
    "business:contact_data:phone_number": "+971569407167",

    // Social Media Links
    "sameAs:facebook": "https://www.facebook.com/share/1AddGk8yb1/",
    "sameAs:instagram":
      "https://www.instagram.com/hodashineservices?igsh=MTl0Mm9rZzJxb3J0dg==",
    "sameAs:tiktok":
      "https://www.tiktok.com/@www.tiktok.comhodashines?_r=1&_t=ZS-91R49SwReef",

    // WhatsApp Contact
    "contactPoint:whatsapp": "https://wa.me/971522032532",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Services />

      {/* SERVICE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cleaning Services UAE – HODA SHINE SERVICES",
            url: "https://hodashine.ae/services",
            description:
              "Home, office, villa, deep cleaning, carpet cleaning, sofa cleaning, AC cleaning and swimming pool cleaning services in Ajman, Dubai, and Sharjah.",
            areaServed: ["Ajman", "Dubai", "Sharjah"],
            provider: {
              "@type": "LocalBusiness",
              name: "HODA SHINE SERVICES",
              telephone: "+971569407167",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Free Zone Ajman — Block C1",
                addressLocality: "Ajman",
                addressCountry: "AE",
              },
            },
            serviceType: [
              "Home Cleaning",
              "Office Cleaning",
              "Apartment Cleaning",
              "Villa Cleaning",
              "Deep Cleaning",
              "Carpet Cleaning",
              "Sofa Cleaning",
              "Mattress Cleaning",
              "Swimming Pool Cleaning",
              "AC Cleaning",
              "Post-Construction Cleaning",
              "Hourly Maid Service"
            ],
          }),
        }}
      />

      {/* LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "HODA SHINE SERVICES",
            image: "https://hodashine.ae/home1.jpg",
            url: "https://hodashine.ae/services",
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
                  "Sunday",
                ],
                opens: "08:00",
                closes: "20:00",
              },
            ],
          }),
        }}
      />
    </>
  );
}
