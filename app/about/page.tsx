import About from "@/components/AboutPage";

export const metadata = {
  title: "About Us | HODA SHINE SERVICES UAE",
  description:
    "Learn about HODA SHINE SERVICES – trusted cleaning company in Ajman, Sharjah & Dubai. Professional cleaners with 8+ years of experience and 5000+ satisfied clients.",
  keywords: [
    "HODA SHINE",
  "HODA SHINE SERVICES",
  "best cleaning service in Ajman UAE",
  "cleaning services Ajman",
  "cleaning services Dubai",
  "cleaning services Sharjah",
  "Ajman cleaners",
  "home cleaning Ajman",
  "office cleaning Ajman",
  "deep cleaning Ajman",
  "professional cleaners UAE",
  "maid service Ajman",
  "hourly cleaners Ajman",
  "part-time maid Ajman",
  "about hoda shine",
  "cleaning company UAE",
  "cleaners Ajman",
  "cleaners Dubai",
  "cleaners Sharjah",
  "cleaning service UAE",
  "best cleaning company Ajman"
  ],

  alternates: {
    canonical: "https://hodashineservices.com/about",
  },

  openGraph: {
    title: "About HODA SHINE SERVICES UAE",
    description:
      "Professional cleaning company serving Ajman, Dubai and Sharjah with trained staff and premium-quality cleaning services.",
    url: "https://hodashineservices.com/about",
    siteName: "HODA SHINE SERVICES",
    type: "website",
    images: [
      {
        url: "/pfc.jpeg",
        width: 1200,
        height: 630,
        alt: "Hoda Shine Cleaning Company UAE – About Us",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About HODA SHINE SERVICES UAE",
    description:
      "Learn about our cleaning company serving Ajman, Dubai & Sharjah with 8+ years of experience.",
    images: ["/pfc.jpeg"],
  },

  other: {
    "og:locale": "en_US",
    "business:contact_data:street_address": "Free Zone Ajman — Block C1",
    "business:contact_data:locality": "Ajman",
    "business:contact_data:country_name": "United Arab Emirates",
    "business:contact_data:phone_number": "+971569407167",
    "business:contact_data:website": "https://hodashineservices.com",

    // Social Media
    "sameAs:facebook": "https://www.facebook.com/share/1AddGk8yb1/",
    "sameAs:instagram":
      "https://www.instagram.com/hodashineservices?igsh=MTl0Mm9rZzJxb3J0dg==",
    "sameAs:tiktok":
      "https://www.tiktok.com/@www.tiktok.comhodashines?_r=1&_t=ZS-91R49SwReef",

    // WhatsApp direct chat
    "contactPoint:whatsapp": "https://wa.me/971522032532",
  },
};

export default function Page() {
  return (
    <>
      <About />

      {/* ABOUT / ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "HODA SHINE SERVICES",
            url: "https://hodashineservices.com",
            logo: "https://hodashineservices.com/pfc.jpeg",
            description:
              "HODA SHINE SERVICES is a professional cleaning company in Ajman offering premium home and office cleaning in Ajman, Dubai, and Sharjah.",
            email: "hodashineservices@gmail.com",
            telephone: "+971569407167",
            sameAs: [
              "https://www.facebook.com/share/1AddGk8yb1/",
              "https://www.instagram.com/hodashineservices?igsh=MTl0Mm9rZzJxb3J0dg==",
              "https://www.tiktok.com/@www.tiktok.comhodashines?_r=1&_t=ZS-91R49SwReef"
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Free Zone Ajman — Block C1",
              addressLocality: "Ajman",
              addressCountry: "AE"
            },
            foundingDate: "2016",
            numberOfEmployees: "20",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "147"
            }
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
            url: "https://hodashineservices.com",
            image: "https://hodashineservices.com/pfc.jpeg",
            priceRange: "AED 25 - AED 80",
            telephone: "+971569407167",
            email: "hodashineservices@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Free Zone Ajman — Block C1",
              addressLocality: "Ajman",
              addressCountry: "AE"
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
                  "Sunday"
                ],
                opens: "08:00",
                closes: "20:00"
              }
            ],
            sameAs: [
              "https://www.facebook.com/share/1AddGk8yb1/",
              "https://www.instagram.com/hodashineservices?igsh=MTl0Mm9rZzJxb3J0dg==",
              "https://www.tiktok.com/@www.tiktok.comhodashines?_r=1&_t=ZS-91R49SwReef",
              "https://wa.me/971522032532"
            ],
            serviceArea: [
              { "@type": "Place", name: "Ajman" },
              { "@type": "Place", name: "Dubai" },
              { "@type": "Place", name: "Sharjah" }
            ]
          }),
        }}
      />
    </>
  );
}
