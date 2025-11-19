import HomePage from "@/components/HomePage";

export const metadata = {
  title: "Best Cleaning Service in Ajman UAE | HODA SHINE SERVICES",
  description:
    "Professional home & office cleaning in Ajman, Sharjah & Dubai. Deep cleaning, sofa cleaning, carpet cleaning, hourly maids & more. Trusted UAE cleaning experts with 5-star service.",
  keywords: [
    "best cleaning service in Ajman UAE",
  "HODA SHINE SERVICES",
  "cleaning service Ajman",
  "cleaning service Dubai",
  "cleaning service Sharjah",
  "sofa cleaning Ajman",
  "deep cleaning Ajman",
  "home cleaning Ajman",
  "home cleaning UAE",
  "office cleaning UAE",
  "maid service Ajman",
  "hourly cleaning Ajman",
  "carpet cleaning Ajman",
  "professional cleaners UAE"
  ],

  alternates: {
    canonical: "https://hodashine.ae",
  },

  openGraph: {
    title: "Best Cleaning Service in Ajman UAE | HODA SHINE SERVICES",
    description:
      "Trusted cleaning services across Ajman, Dubai & Sharjah — deep cleaning, sofa cleaning, carpet cleaning & hourly maids.",
    url: "https://hodashine.ae",
    siteName: "HODA SHINE SERVICES",
    type: "website",
    images: [
      {
        url: "/1.png",
        width: 1200,
        height: 630,
        alt: "Hoda Shine Cleaning Services UAE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Cleaning Service in Ajman UAE | HODA SHINE SERVICES",
    description:
      "Professional home & office cleaning in Ajman, Dubai & Sharjah. Deep cleaning and expert maid service.",
    images: ["/1.png"],
  },

  other: {
    "og:locale": "en_US",
    "business:contact_data:street_address": "Free Zone Ajman — Block C1",
    "business:contact_data:locality": "Ajman",
    "business:contact_data:country_name": "United Arab Emirates",
    "business:contact_data:phone_number": "+971569407167",
    "business:contact_data:website": "https://hodashine.ae",

    "sameAs:facebook": "https://www.facebook.com/share/1AddGk8yb1/",
    "sameAs:instagram":
      "https://www.instagram.com/hodashineservices?igsh=MTl0Mm9rZzJxb3J0dg==",
    "sameAs:tiktok":
      "https://www.tiktok.com/@www.tiktok.comhodashines?_r=1&_t=ZS-91R49SwReef",

    "contactPoint:whatsapp": "https://wa.me/971522032532",
  },
};

export default function Page() {
  return (
    <>
      <HomePage />

      {/* LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "HODA SHINE SERVICES",
            image: "https://hodashine.ae/1.png",
            "@id": "https://hodashine.ae",
            url: "https://hodashine.ae",
            telephone: "+971569407167",
            email: "hodashineservices@gmail.com",
            priceRange: "AED 25 - AED 80",
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
            sameAs: [
              "https://www.facebook.com/share/1AddGk8yb1/",
              "https://www.instagram.com/hodashineservices?igsh=MTl0Mm9rZzJxb3J0dg==",
              "https://www.tiktok.com/@www.tiktok.comhodashines?_r=1&_t=ZS-91R49SwReef",
              "https://wa.me/971522032532",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "147",
            },
            serviceArea: [
              { "@type": "Place", name: "Ajman" },
              { "@type": "Place", name: "Dubai" },
              { "@type": "Place", name: "Sharjah" },
            ],
          }),
        }}
      />

      {/* SERVICE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cleaning Services in Ajman, Dubai & Sharjah",
            provider: {
              "@type": "LocalBusiness",
              name: "HODA SHINE SERVICES",
            },
            serviceType: [
              "Home Cleaning",
              "Office Cleaning",
              "Deep Cleaning",
              "Sofa Cleaning",
              "Carpet Cleaning",
              "Mattress Cleaning",
              "Hourly Maid Service",
            ],
            areaServed: ["Ajman", "Dubai", "Sharjah"],
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Free Zone Ajman — Block C1",
                  addressLocality: "Ajman",
                  addressCountry: "AE",
                },
              },
            },
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the best cleaning service in Ajman UAE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HODA SHINE SERVICES provides top-rated home and office cleaning in Ajman with professional trained cleaners and affordable hourly packages.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer deep cleaning services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer full home deep cleaning, kitchen deep cleaning, bathroom deep cleaning and move-in cleaning across Ajman, Dubai & Sharjah.",
                },
              },
              {
                "@type": "Question",
                name: "Do you have sofa and carpet cleaning?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide professional sofa cleaning, carpet shampooing, mattress cleaning and stain removal services.",
                },
              },
              {
                "@type": "Question",
                name: "How can I book a cleaner?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can book instantly on WhatsApp at +971 52 203 2532.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
