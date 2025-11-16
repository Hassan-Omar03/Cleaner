import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
  title: 'HODA SHINE SERVICES - Professional Cleaning in Dubai, Sharjah & Ajman',
  description: 'Professional home & office cleaning services across Dubai, Sharjah and Ajman. Flexible packages: hourly, daily, weekly, monthly or single deep cleans. Eco-friendly products & trained staff.',
  keywords: ['cleaning services', 'home cleaning', 'office cleaning', 'Dubai', 'Sharjah', 'Ajman'],
  openGraph: {
    title: 'HODA SHINE SERVICES',
    description: 'Shine up your home — Shine up your day',
    type: 'website',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'HODA SHINE SERVICES',
            description: 'Professional cleaning company',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Free Zone Ajman, Block C1',
              addressLocality: 'Ajman',
              addressCountry: 'AE',
            },
            telephone: '+971 55 000 0000',
            email: 'info@hodashine.ae',
            image: '/hero-image.jpg',
            url: 'https://hodashine.ae',
            serviceArea: ['Dubai', 'Sharjah', 'Ajman'],
            hoursOfOperation: 'Mo-Su 08:00-20:00',
          })}
        </script>
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
