"use client";

import Header from '@/components/header'
import Footer from '@/components/footer'
import { 
  CheckCircle, Award, Users, Target,
  PhoneCall, MapPin, UserCheck, Sparkles
} from 'lucide-react'

export default function About() {

  const values = [
    { icon: Target, title: 'Our Mission', description: 'To provide exceptional cleaning services that enhance health and happiness in every home and workspace.' },
    { icon: Award, title: 'Our Vision', description: 'To be the most trusted and recommended cleaning service provider across the UAE.' },
    { icon: Users, title: 'Our Team', description: 'Professional, trained, and background-checked staff committed to excellence.' },
    { icon: CheckCircle, title: 'Our Promise', description: '100% satisfaction guarantee on every job, every time.' }
  ]

  const stats = [
    { number: '8+', label: 'Years in Service' },
    { number: '5,000+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '99.9%', label: 'Satisfaction Rate' }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="py-20 px-6 md:px-12 bg-[#00E5FF] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4">About HODA SHINE</h1>
          <p className="text-xl text-black max-w-3xl">
            Dedicated to keeping your spaces clean, healthy, and beautiful since 2025.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="/pfc.jpeg" 
            alt="Our story"
            className="rounded-2xl shadow-xl"
          />

          <div className="space-y-6">
            <h2 className="text-4xl font-black text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              HODA SHINE SERVICES was founded with a simple mission:  
              to revolutionize the cleaning industry in the UAE.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to quality, reliability, and customer satisfaction  
              has made us the preferred choice across Dubai, Sharjah, and Ajman.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We ensure your spaces are not just clean — but healthy and welcoming.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICE GALLERY */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-10">Our Office & Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-12">
            A glimpse inside Hoda Shine Services — where our trained professionals, modern equipment, 
            and clean working environment help us deliver the best cleaning services across UAE.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/ofc1.jpeg" className="w-full h-64 object-cover rounded-xl shadow-lg" alt="Office 1" />
            <img src="/ofc2.jpeg" className="w-full h-64 object-cover rounded-xl shadow-lg" alt="Office 2" />
            <img src="/ofc3.jpeg" className="w-full h-64 object-cover rounded-xl shadow-lg" alt="Office 3" />
            <img src="/ofc4.jpeg" className="w-full h-64 object-cover rounded-xl shadow-lg" alt="Office 4" />
            <img src="/ofc5.jpeg" className="w-full h-64 object-cover rounded-xl shadow-lg" alt="Office 5" />
            <img src="/ofc6.jpeg" className="w-full h-64 object-cover rounded-xl shadow-lg" alt="Office 6" />
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-10 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">Our Core Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                  <Icon size={48} className="text-[#00FFFF] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* COMPANY STATS */}
      <section className="py-20 px-6 md:px-12 bg-[#00E5FF] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-black mb-1">{stat.number}</p>
              <p className="text-lg text-black font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Expert House And Office Cleaning Services',
              'Every Customer is Special',
              'Affordable cleaning packages',
              'We use eco-friendly certified cleaning products',
              'Guaranteed service on time',
              'Qualified and trained professionals',
              'Open 8AM - 8PM',
              'Available 7 days a week'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-black mt-1" size={24} />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Our Work Experience</h2>
          <p className="text-xl text-blue-900 font-semibold mb-12">
            Standard Cleaning with a Personal Touch
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
            {[
              'Cleaning Services',
              'Maid Services',
              'Hourly, Daily, Weekly, Monthly Services',
              'Minimum 3 Hours Booking'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Award className="text-black mt-1" size={26} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16">Our Working Process</h2>

          <div className="grid md:grid-cols-4 gap-12 text-center">

            <div>
              <PhoneCall size={48} className="text-[#00FFFF] mb-4" />
              <h3 className="text-xl font-bold mb-2">Call / Contact Us</h3>
              <p className="text-gray-600">Reach out anytime for inquiries or booking.</p>
            </div>

            <div>
              <MapPin size={48} className="text-[#00FFFF] mb-4" />
              <h3 className="text-xl font-bold mb-2">Share Location & Time</h3>
              <p className="text-gray-600">Give your address and preferred schedule.</p>
            </div>

            <div>
              <UserCheck size={48} className="text-[#00FFFF] mb-4" />
              <h3 className="text-xl font-bold mb-2">Cleaner Assigned</h3>
              <p className="text-gray-600">Our trained cleaner prepares for the job.</p>
            </div>

            <div>
              <Sparkles size={48} className="text-[#00FFFF] mb-4" />
              <h3 className="text-xl font-bold mb-2">Start Cleaning</h3>
              <p className="text-gray-600">High-quality home or office cleaning.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
