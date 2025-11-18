'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { 
  CheckCircle, Award, Users, Target, 
  PhoneCall, MapPin, UserCheck, Sparkles
} from 'lucide-react'

export default function AboutPage() {

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

      {/* HERO SECTION */}
      <section className="py-20 px-6 md:px-12 bg-[#00FFFF] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4">About HODA SHINE</h1>
          <p className="text-xl text-black max-w-3xl">
            Dedicated to keeping your spaces clean, healthy, and beautiful since 2015
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/professional-cleaning-company-office-team-working.jpg" 
                alt="Our story"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                HODA SHINE SERVICES was founded with a simple mission: to revolutionize the cleaning industry in the UAE.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice across Dubai, Sharjah, and Ajman.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We ensure your spaces are not just clean, but healthy and welcoming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">Our Core Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Icon size={48} className="text-[#00FFFF] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* COMPANY STATS */}
      <section className="py-20 px-6 md:px-12 bg-[#00FFFF] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.number}</p>
              <p className="text-lg font-semibold text-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US – UPDATED FULL LIST */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              'Expert House And Office Cleaning Services',
              'Every Customer is Special',
              'Affordable cleaning packages',
              'We use 100% eco-seal certified cleaning products',
              '100% guaranteed service on time',
              'Qualified and trained professionals',
              'Open 8AM - 8PM',
              'Available 7 days a week'
            ].map((reason, i) => (
              <div key={i} className="flex gap-4 items-start">
                <CheckCircle className="text-black flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">{reason}</span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* OUR WORK EXPERIENCE */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Our Work Experience</h2>
          <p className="text-xl text-[#00FFFF] font-semibold mb-12">
            Find Standard Cleaning with Personal Touch
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
            {[
              'Cleaning Services',
              'Maids Services',
              'Hourly, Daily, Weekly, Monthly Basis Services',
              'Hourly Based Job - Minimum 3 Hours',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Award className="text-black mt-1" size={26} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORKING PROCESS */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">Our Working Process</h2>

          <div className="grid md:grid-cols-4 gap-12">

            <div className="flex flex-col items-center text-center">
              <PhoneCall size={48} className="text-[#00FFFF] mb-4" />
              <h3 className="text-xl font-bold mb-2">Call / Contact Us</h3>
              <p className="text-gray-600">Reach out anytime for booking or inquiries.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <MapPin size={48} className="text-[#00FFFF] mb-4" />
              <h3 className="text-xl font-bold mb-2">Share Location & Time</h3>
              <p className="text-gray-600">Provide your address and preferred schedule.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <UserCheck size={48} className="text-[#00FFFF] mb-4" />
              <h3 className="text-xl font-bold mb-2">Ready Cleaner</h3>
              <p className="text-gray-600">Our trained cleaner prepares for the job.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Sparkles size={48} className="text-[#00FFFF] mb-4" />
              <h3 className="text-xl font-bold mb-2">Start Cleaning</h3>
              <p className="text-gray-600">We clean your home or office professionally.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
