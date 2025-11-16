'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const featuredServices = [
    {
      id: 1,
      title: 'Residential Cleaning',
      description: 'Professional home cleaning with eco-friendly products',
      image: '/modern-clean-living-room-apartment.jpg',
    },
    {
      id: 2,
      title: 'Office Cleaning',
      description: 'Corporate spaces maintained to highest standards',
      image: '/professional-modern-office-clean-workspace.jpg',
    },
    {
      id: 3,
      title: 'Deep Cleaning',
      description: 'Thorough cleaning for special occasions',
      image: '/before-after-deep-clean-kitchen-transformation.jpg',
    },
    {
      id: 4,
      title: 'Carpet Cleaning',
      description: 'Professional carpet and upholstery care',
      image: '/professional-carpet-cleaning.png',
    }
  ]

  const testimonials = [
    {
      name: 'Fatima Al Mazrouei',
      text: 'HODA SHINE transformed my home! The team is professional, punctual, and thorough. Highly recommended!',
      rating: 5,
      role: 'Dubai Resident'
    },
    {
      name: 'Ahmed Khan',
      text: 'Best cleaning service in Ajman. They handle everything with care and attention to detail.',
      rating: 5,
      role: 'Business Owner'
    },
    {
      name: 'Layla Hassan',
      text: 'Reliable, affordable, and they use eco-friendly products. My family loves the results!',
      rating: 5,
      role: 'Family Mother'
    },
    {
      name: 'Mohammed Rashid',
      text: 'Professional team that respects our office space. We\'ve been using them for 2 years.',
      rating: 5,
      role: 'Corporate Manager'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-teal-800 via-teal-700 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-black leading-tight">
                  Shine up your home — Shine up your day
                </h1>
                <p className="text-xl text-teal-100">Professional cleaning services for your home and office</p>
              </div>
              <p className="text-lg text-gray-100 leading-relaxed">
                Experience pristine cleanliness with HODA SHINE SERVICES. Trusted by hundreds of families and businesses across Dubai, Sharjah, and Ajman since 2015.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/contact" className="inline-flex items-center justify-center bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105 w-fit">
                  Get Your Free Quote
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center bg-red-600 bg-opacity-20 backdrop-blur text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30 w-fit">
                  View All Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/professional-cleaner-team-smiling-happy-cleaning-s.jpg" 
                alt="Professional cleaning team" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/professional-cleaning-company-team-photo.jpg" 
                alt="About us" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-yellow-600 font-bold text-lg mb-2">WHO WE ARE</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                  Your Trusted Cleaning Partner
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                HODA SHINE SERVICES has been providing exceptional cleaning solutions across the UAE for over 8 years. Our team of trained professionals is dedicated to making your spaces spotless and healthy.
              </p>
              <ul className="space-y-4">
                {['Eco-friendly cleaning products', '100% satisfaction guarantee', 'Fully insured staff', 'Available 7 days a week'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-teal-800 font-bold hover:text-teal-900 transition-colors duration-300 mt-6 w-fit">
                Learn more about us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-yellow-600 font-bold text-lg mb-2">OUR SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Professional Cleaning Solutions
            </h2>
            <p className="text-xl text-gray-600">Tailored packages for every need and budget</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-100 to-teal-50">
                    <img 
                      src={service.image || "/placeholder.svg"} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/services" className="inline-flex items-center justify-center bg-gradient-to-r from-teal-700 to-teal-800 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-yellow-600 font-bold text-lg mb-2">CLIENT TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={18} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">{testimonial.text}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-yellow-600 font-semibold">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
