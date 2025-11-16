'use client'

import { useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const servicesList = [
    'Home Cleaning Services',
    'Apartment Cleaning Services',
    'Kitchen And Appliances Cleaning Services',
    'Washroom And Windows Cleaning Services',
    'Balcony And Floor Cleaning Services',
    'Glasses And Cabinets Cleaning Services',
    'Washing And Ironing Of Clothes',
    'Office Cleaning Services',
    'Deep Cleaning Services',
    'Carpet Cleaning Services',
    'Mattress Cleaning Services',
    'Sofa Cleaning Services',
    'Dusting Of Pictures, Lamps, Shades, Window Sills, Furniture And Glasses',
    'Complete Vacuum in Every Room… And More — All You Have To Do Is Ask!',
  ]

  const benefits = [
    'Expert house and office cleaning services',
    'Every customer is special',
    'Affordable cleaning packages',
    '100% eco-seal certified products',
    '100% guaranteed service on time',
    'Qualified and trained professionals',
    'Open 8AM - 8PM',
  ]

  const bestServices = [
    { title: 'Home & Office Cleaning', query: 'modern clean office interior' },
    { title: 'Carpet & Sofa Cleaning', query: 'professional sofa deep cleaning' },
    { title: 'Post-Construction Cleaning', query: 'construction site cleanup service' },
    { title: 'Villa & Hotel Apartment Cleaning', query: 'luxury villa cleaning service' },
    { title: 'Swimming Pool Cleaning', query: 'clean swimming pool maintenance' },
    { title: 'AC Cleaning', query: 'air conditioner maintenance cleaning' },
  ]

  const workProcess = [
    { step: 1, title: 'Call / Contact Us', description: 'Quick consultation and scheduling' },
    { step: 2, title: 'Share Location And Time Table', description: 'Provide address & preferred time' },
    { step: 3, title: 'Ready Cleaner', description: 'Trained cleaner dispatched' },
    { step: 4, title: 'Start Cleaning', description: 'Complete top-to-bottom clean' },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Part A: Why Choose Us - Services Grid */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Services Grid */}
            <div className="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
              <p className="text-yellow-500 font-semibold text-lg mb-8">In Our Cleaning Services We Will Provide You</p>

              <div className="grid grid-cols-1 gap-3">
                {servicesList.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg hover:shadow-md hover:border-teal-800 border border-transparent transition-all duration-300 cursor-pointer group">
                    <CheckCircle2 size={22} className="text-teal-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-900 font-medium text-sm group-hover:text-teal-800 transition-colors duration-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image and Description */}
            <div className="slide-in-right space-y-6">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <img
                  src="/before-and-after-clean-kitchen-photorealistic.jpg"
                  alt="Before and after clean kitchen"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-yellow-50 p-6 rounded-lg border border-teal-200 hover:shadow-lg transition-all duration-300">
                <p className="text-gray-700 leading-relaxed font-medium">
                  We give you the gift of time, allowing you to spend time doing the things you really enjoy. Every clean we carry out will meet our professional cleaning standards. If any part of our clean does not meet your expectation, inform us and we will re-clean that area free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part B: Best Services - Cards */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">Our Best Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Click on any service to learn more about our professional cleaning solutions
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {bestServices.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service.title)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={`/.jpg?height=360&width=400&query=${service.query}`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-800/30 to-transparent group-hover:from-teal-900/95 transition-all duration-300" />
                <h3 className="absolute bottom-0 left-0 right-0 p-6 text-white font-bold text-lg group-hover:translate-y-0 transition-transform duration-300">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Part C: Benefits Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why We're Different</h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md hover:border-teal-800 border border-transparent transition-all duration-300 group">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-900 font-medium group-hover:text-teal-800 transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="slide-in-right relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="/modern-clean-apartment-minimalist-design.jpg"
                alt="Modern clean apartment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Part D: Work Experience Counters */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="/professional-cleaning-team-working-together.jpg"
                alt="Professional cleaning team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="fade-up space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Experience</h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { label: 'Cleaning Services', count: '10,000+' },
                  { label: 'Satisfied Customers', count: '5,000+' },
                  { label: 'Years of Experience', count: '15+' },
                  { label: 'Available Services', count: '30+' },
                ].map((stat, index) => (
                  <div key={index} className="bg-gradient-to-r from-teal-50 to-yellow-50 p-6 rounded-lg border-2 border-teal-800 hover:shadow-lg hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
                    <p className="text-4xl font-bold text-yellow-500">{stat.count}</p>
                    <p className="text-gray-900 font-semibold mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Part E: Work Process */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">Our Work Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {workProcess.map((item, index) => (
              <div
                key={index}
                className="group fade-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white p-8 rounded-xl border-2 border-teal-800 hover:shadow-2xl hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-4 group-hover:from-teal-800 group-hover:to-teal-700 transition-all duration-300 shadow-lg">
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-teal-800 transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                </div>

                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-1 bg-gradient-to-r from-yellow-500 to-transparent z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full p-2 transition-all duration-300"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-teal-800 mb-4">{selectedService}</h3>
            <p className="text-gray-600 mb-6">
              Experience our professional {selectedService.toLowerCase()} service with our trained and certified team. We use eco-friendly products and guarantee 100% satisfaction.
            </p>
            <button className="btn-primary w-full hover:shadow-lg transition-all duration-300">Book This Service</button>
          </div>
        </div>
      )}
    </section>
  )
}
