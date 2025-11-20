import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import logo from '@/public/logo.jpeg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title:
    'HODA SHINE SERVICES — Best Cleaning Service in Ajman, Dubai & Sharjah | Home & Office Cleaning UAE',
  description:
    'HODA SHINE SERVICES offers the best home & office cleaning in Ajman, Dubai & Sharjah. Professional maids, deep cleaning, hourly cleaners, eco-friendly products, trusted staff across the UAE.',
  keywords: [
    'HODA SHINE',
    'HODA SHINE SERVICES',
    'best cleaning service in Ajman UAE',
    'cleaning services Ajman',
    'cleaning services Dubai',
    'cleaning services Sharjah',
    'Ajman cleaners',
    'home cleaning Ajman',
    'office cleaning Ajman',
    'deep cleaning Ajman',
    'professional cleaners UAE',
    'maid service Ajman',
    'hourly cleaners Ajman',
    'part-time maid Ajman'
  ],
  openGraph: {
    title:
      'HODA SHINE SERVICES — Best Cleaning Service in Ajman | UAE Cleaning Company',
    description:
      'Premium home & office cleaning services in Ajman, Dubai & Sharjah. Book professional cleaners today.',
    type: 'website',
    images: ['/hero-image.jpg'],
    url: 'https://hodashineservices.com'
  },
  generator: 'v0.app',
  metadataBase: new URL('https://hodashineservices.com')
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ---- CANONICAL URL ---- */}
        <link rel="canonical" href="https://hodashineservices.com" />

        {/* ---- ROBOTS ---- */}
        <meta name="robots" content="index, follow" />

        {/* ---- LANGUAGE ---- */}
        <meta httpEquiv="Content-Language" content="en-AE" />

        {/* ---- FULL FAVICON SET ---- */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />

        {/* Apple icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* PWA & Android */}
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/web-app-manifest-512x512.png"
        />

        {/* Theme */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        {/* ---- SCHEMA.ORG ---- */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'HODA SHINE SERVICES',
            brand: 'HODA SHINE',
            description:
              'HODA SHINE SERVICES provides professional home and office cleaning across Ajman, Dubai and Sharjah.',
            logo: '/logo.jpeg',
            image: '/hero-image.jpg',
            url: 'https://hodashineservices.com',
            telephone: '+971 56 940 7167',
            email: 'hodashineservices@gmail.com',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Free Zone Ajman — Block C1',
              addressLocality: 'Ajman',
              addressRegion: 'Ajman',
              addressCountry: 'AE'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 25.4052,
              longitude: 55.5136
            },
            serviceArea: ['Dubai', 'Sharjah', 'Ajman'],
            hoursOfOperation: 'Mo-Su 08:00-20:00',
            sameAs: [
              'https://www.instagram.com/hodashineservices',
              'https://www.facebook.com/share/1AddGk8yb1/',
              'https://www.tiktok.com/@hodashines'
            ]
          })}
        </script>
      </head>

      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
