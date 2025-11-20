'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
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

  // Handle form input
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // WhatsApp Submit Function
  const handleWhatsAppSubmit = () => {
    const phoneNumber = "971522032532"; // WhatsApp receiver

    const message = `📥 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🧹 *Service:* ${formData.service}
📅 *Preferred Date:* ${formData.date}

📝 *Message:*
${formData.message}
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  // Handle form submit
  const handleSubmit = (e: any) => {
    e.preventDefault()
    handleWhatsAppSubmit()
    setSubmitted(true)

    setTimeout(() => setSubmitted(false), 3000)

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="py-20 px-6 md:px-12 bg-[#00E5FF] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Get In Touch</h1>
          <p className="text-xl text-black max-w-3xl">
            We're here to help. Contact us for a free quote or any questions you may have.
          </p>
        </div>
      </section>

      {/* CONTACT BLOCKS */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* CONTACT INFO CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

            {/* CALL */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Phone className="text-[#00FFFF] mb-4" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call</h3>

              <a 
                href="tel:+971569407167"
                className="text-black font-medium block hover:text-[#195a88] transition"
              >
                +971 56 940 7167
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <MessageCircle className="text-[#00FFFF] mb-4" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>

              <a
                href="https://wa.me/971522032532"
                target="_blank"
                className="text-black font-medium block hover:text-green-600 transition"
              >
                +971 52 203 2532
              </a>
            </div>

            {/* EMAIL */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Mail className="text-[#00FFFF] mb-4" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>

              <a 
                href="mailto:hodashineservices@gmail.com"
                className="text-black"
              >
                hodashineservices@gmail.com
              </a>
            </div>

            {/* LOCATION */}
            {/* LOCATION */}
<a
  href="https://www.google.com/maps/place/25%C2%B025'07.3%22N+55%C2%B027'10.7%22E/@25.4186802,55.4504051,795m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d25.4186802!4d55.45298"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 block cursor-pointer"
>
  <MapPin className="text-[#00FFFF] mb-4" size={32} />
  <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>

  <p className="text-black">
    Free Zone Ajman, Block C1, UAE
  </p>
</a>

          </div>
          {/* FORM + SIDEBAR */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* FORM */}
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#195a88] focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#195a88] focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#195a88] focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#195a88] focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#195a88] focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#195a88] focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-300 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#00E5FF] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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

            {/* INFORMATION SIDE */}
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

      {/* GOOGLE MAP */}
      <section className="px-6 md:px-12 pb-20 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-black text-gray-900 mb-6">Find Us on the Map</h2>

    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3581.3358037182666!2d55.45040507522789!3d25.41868027755421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjUuNDE4NjggNTUuNDUwNDA1!5e0!3m2!1sen!2sae!4v1739870000000"
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
