'use client'

import Link from 'next/link'
import { Facebook, Instagram, MessageCircle, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-b from-teal-900 to-teal-800 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-3xl font-bold mb-2">HODA SHINE</h3>
            <p className="text-yellow-400 font-bold text-lg mb-4">SERVICES</p>
            <p className="text-teal-100 leading-relaxed">
              Professional cleaning services providing top quality home and office cleaning across Dubai, Sharjah and Ajman with eco-friendly solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-teal-100 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300 font-medium inline-block">
                  → Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-teal-100 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300 font-medium inline-block">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-teal-100 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300 font-medium inline-block">
                  → Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-teal-100 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300 font-medium inline-block">
                  → Contact Us
                </Link>
              </li>
            </ul>
            
          </div>
          

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <p className="text-teal-100 font-medium">
                📞 +971 0569407167 / +971 0522032532
              </p>
              <p className="text-teal-100 font-medium">
                📧 hodashineservices@gmail.com
              </p>
            </div>
              
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: MessageCircle, label: 'WhatsApp', href: '#' },
              ].map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-teal-900 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 shadow-lg"
                    title={social.label}
                  >
                    <Icon size={22} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-teal-100 text-sm">
            <p>&copy; 2025 HODA SHINE SERVICES. All rights reserved.</p>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="#" className="text-teal-100 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-teal-100 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Terms & Conditions
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 font-bold"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  )
}
