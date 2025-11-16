'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' })
  }

  const contactInfo = [
    { icon: Phone, title: 'Phone', details: ' +971 0569407167 / +971 0522032532', link: '+971 0569407167 / +971 0522032532' },
    { icon: Mail, title: 'Email', details: 'hodashineservices@gmail.com', link: 'hodashineservices@gmail.com' },
    { icon: MapPin, title: 'Location', details: 'Free Zone Ajman, Block C1, UAE' },
    { icon: Clock, title: 'Hours', details: 'Mon-Sun: 8:00 AM - 8:00 PM' }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-teal-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Get In Touch</h1>
          <p className="text-xl text-teal-100 max-w-3xl">We're here to help. Contact us for a free quote or any questions you may have.</p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <Icon className="text-teal-800 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-teal-700 font-semibold hover:text-teal-900 transition-colors duration-300">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-700">{info.details}</p>
                  )}
                </div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-black text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                >
                  <option value="">Select a Service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="office">Office Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="carpet">Carpet Cleaning</option>
                  <option value="windows">Window Cleaning</option>
                  <option value="moveout">Move-In/Move-Out</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-700 to-teal-800 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
              {submitted && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800 font-semibold animate-pulse">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">Quick Response</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We value your time and typically respond to inquiries within 1-2 hours during business hours.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-yellow-50 rounded-xl p-6 border-2 border-teal-200">
                <h3 className="font-bold text-gray-900 mb-3">Service Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Dubai</li>
                  <li>✓ Sharjah</li>
                  <li>✓ Ajman</li>
                  <li>✓ Umm Al Quwain</li>
                  <li>✓ Ras Al Khaimah</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
                <h3 className="font-bold text-gray-900 mb-3">Why Choose Our Service?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Certified professionals</li>
                  <li>✓ Eco-friendly products</li>
                  <li>✓ 100% satisfaction guarantee</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ Full insurance coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MAP SECTION */}
<section className="px-6 md:px-12 pb-20 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-black text-gray-900 mb-6">Find Us on the Map</h2>

    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.3358037182666!2d55.45040507522789!3d25.41868027755421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzA3LjMiTiA1NcKwMjcnMTAuNyJF!5e0!3m2!1sen!2sae!4v1739870000000"
        width="100%"
        height="450"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


      <Footer />
    </main>
  )
}
