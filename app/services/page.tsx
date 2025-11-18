'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const allServices = [
    {
      id: 1,
      title: 'Residential Cleaning',
      description: 'Keep your home spotless and healthy',
      image: '/modern-clean-bright-living-room-apartment.jpg',
      features: ['Weekly deep cleans', 'Customizable packages', 'Eco-friendly products', 'Flexible scheduling'],
      pricing: 'From AED 250'
    },
    {
      id: 2,
      title: 'Office Cleaning',
      description: 'Professional spaces deserve professional care',
      image: '/modern-professional-office-building-clean-workspac.jpg',
      features: ['Daily office cleaning', 'Conference room focus', 'Trash & recycling', 'Supply restocking'],
      pricing: 'From AED 500'
    },
    {
      id: 3,
      title: 'Deep Cleaning',
      description: 'Thorough cleaning for special occasions',
      image: '/professional-deep-clean-before-after-transformatio.jpg',
      features: ['Wall & ceiling cleaning', 'Appliance interior cleaning', 'Baseboards & corners', 'Window & blind cleaning'],
      pricing: 'From AED 800'
    },
    {
      id: 4,
      title: 'Carpet Cleaning',
      description: 'Fresh and hygienic carpets and upholstery',
      image: '/professional-carpet-cleaning-service-machine.jpg',
      features: ['Steam cleaning', 'Stain removal', 'Odor elimination', 'Protective coating'],
      pricing: 'From AED 150'
    },
    {
      id: 5,
      title: 'Window Cleaning',
      description: 'Crystal clear windows for your home or office',
      image: '/professional-window-cleaning-service-high-rise.jpg',
      features: ['Interior & exterior', 'Frame cleaning', 'Screen cleaning', 'High-rise access'],
      pricing: 'From AED 100'
    },
    {
      id: 6,
      title: 'Move-In/Move-Out',
      description: 'Complete cleaning for new or vacant spaces',
      image: '/complete-house-cleaning-move-in-move-out-service.jpg',
      features: ['Total deep clean', 'All surfaces included', 'Flexible timing', 'Green certified'],
      pricing: 'From AED 1000'
    },
    {
      id: 7,
      title: 'Post-Construction',
      description: 'Clean away debris and dust from construction',
      image: '/post-construction-cleaning-service-dust-removal.jpg',
      features: ['Dust & debris removal', 'Floor polish', 'Window cleaning', 'Final touch-ups'],
      pricing: 'From AED 900'
    },
    {
      id: 8,
      title: 'Commercial Spaces',
      description: 'Specialized cleaning for retail and commercial',
      image: '/commercial-retail-space-professional-cleaning.jpg',
      features: ['Retail stores', 'Restaurants', 'Healthcare facilities', 'Manufacturing units'],
      pricing: 'Custom quotes'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-6 md:px-12 bg-[#00FFFF] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-white font-black mb-4">Our Services</h1>
          <p className="text-xl text-black max-w-3xl">Comprehensive cleaning solutions tailored to your specific needs and budget</p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-100 to-teal-50">
                  <img 
                    src={service.image || "/placeholder.svg"} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-bold text-lg p-4 w-full">{service.pricing}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="inline-flex items-center gap-2 text-[#00FFFF] transition-colors duration-300 pt-2 w-fit">
                    Get Quote
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Don't See Your Service?</h2>
          <p className="text-lg text-gray-800 mb-8">We also offer custom cleaning packages for unique needs. Contact us for a personalized quote.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 w-fit">
            <Zap size={20} />
            Request Custom Service
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
