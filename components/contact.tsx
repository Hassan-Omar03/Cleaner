'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
    honeypot: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.honeypot) {
      return
    }

    setLoading(true)

    setTimeout(() => {
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: '',
        honeypot: '',
      })
      setLoading(false)

      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: MapPin,
              title: 'Office Address',
              content: 'Free Zone Ajman, Block C1',
              color: 'from-teal-500 to-teal-600'
            },
            {
              icon: Mail,
              title: 'Email',
              content: 'info@hodashine.ae',
              color: 'from-yellow-500 to-yellow-600'
            },
            {
              icon: Phone,
              title: 'Phone',
              content: '+971 55 000 0000',
              color: 'from-teal-600 to-teal-700'
            },
          ].map((info, index) => {
            const Icon = info.icon
            return (
              <div 
                key={index} 
                className="fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white p-8 rounded-2xl border-2 border-teal-200 hover:border-yellow-500 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 text-center">
                  <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${info.color} text-white rounded-full items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h3>
                  <p className="text-gray-600 font-medium group-hover:text-teal-800 transition-colors duration-300">{info.content}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

            {submitted ? (
              <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-500 rounded-2xl p-8 text-center shadow-lg animate-in fade-in zoom-in">
                <div className="text-5xl mb-4 animate-bounce">✓</div>
                <h4 className="font-bold text-green-700 mb-2 text-xl">Thank You!</h4>
                <p className="text-green-600 font-medium">
                  We've received your message and will get back to you soon. Check your email for updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-300"
                      placeholder="+971 55 000 0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Service Type
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="home-cleaning">Home Cleaning</option>
                      <option value="office-cleaning">Office Cleaning</option>
                      <option value="deep-cleaning">Deep Cleaning</option>
                      <option value="carpet-cleaning">Carpet Cleaning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us more about your cleaning needs..."
                  />
                </div>

                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-teal-800 to-teal-700 text-white px-6 py-4 rounded-lg font-bold hover:from-teal-700 hover:to-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Map and Hours */}
          <div className="slide-in-right space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 hover:shadow-3xl transition-shadow duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.7371091624337!2d55.3989!3d25.3548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAjman%2C+Free+Zone!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-800 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock size={30} className="text-yellow-400" />
                Business Hours
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
                  { day: 'Saturday', time: '8:00 AM - 6:00 PM' },
                  { day: 'Sunday', time: '9:00 AM - 5:00 PM' },
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-4 border-b border-teal-600">
                    <span className="font-medium text-lg">{schedule.day}</span>
                    <span className="font-bold text-yellow-400">{schedule.time}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Book a Cleaner Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
