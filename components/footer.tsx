'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Music3, ArrowUp, Phone,Mail,MessageCircle } from 'lucide-react'
import logo from '@/public/logo.jpeg'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#00FFFF] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* ABOUT */}
          <div>
            {/* LOGO ADDED HERE */}
<div className="mb-4 w-[90px] h-[90px] rounded-full overflow-hidden shadow-lg border border-white/20">
  <Image 
    src={logo} 
    alt="Hoda Shine Logo" 
    width={90} 
    height={90}
    className="object-cover w-full h-full"
    priority
  />
</div>

            <h3 className="text-3xl font-bold mb-2 text-blue-900">HODA SHINE</h3>
            <p className="text-blue-900 font-bold text-lg mb-4">SERVICES</p>
            <p className="text-blue-900 leading-relaxed">
              Professional cleaning services providing top quality home and office
              cleaning across Dubai, Sharjah and Ajman with eco-friendly solutions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-black">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-blue-900  hover:translate-x-2 transition-all duration-300 font-medium inline-block"
                >
                  → Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-900  hover:translate-x-2 transition-all duration-300 font-medium inline-block"
                >
                  → About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-blue-900 hover:translate-x-2 transition-all duration-300 font-medium inline-block"
                >
                  → Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-900  hover:translate-x-2 transition-all duration-300 font-medium inline-block"
                >
                  → Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
  <h4 className="text-lg font-bold mb-6 text-black">Connect With Us</h4>

  <div className="space-y-3 mb-6">

    {/* CALL NUMBER */}
    <p className="text-blue-900 font-medium flex items-center gap-2">
      <Phone className="text-blue-900 text-lg" />
      +971 56 940 7167
    </p>

    {/* WHATSAPP NUMBER */}
    <p
      className="text-blue-900 font-medium flex items-center gap-2 cursor-pointer "
      onClick={() =>
        window.open(
          "https://wa.me/971522032532?text=Hi%2C%20I%20want%20to%20know%20more%20about%20HODA%20SHINE%20SERVICES.",
          "_blank"
        )
      }
    >
      <MessageCircle className="text-blue-900 text-lg" />
      +971 52 203 2532
    </p>

    {/* EMAIL */}
    <p className="text-blue-900 font-medium flex items-center gap-2">
      <Mail className="text-blue-900 text-lg" />
      hodashineservices@gmail.com
    </p>

  </div>
            <div className="flex gap-4">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/1AddGk8yb1/"
    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 shadow-lg"
    title="Facebook"
    target="_blank"
  >
    <Facebook size={22} className="text-[#1877F2]" /> {/* Facebook Blue */}
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/hodashineservices?igsh=MTl0Mm9rZzJxb3J0dg=="
    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 shadow-lg"
    title="Instagram"
    target="_blank"
  >
    <Instagram size={22} className="text-pink-500" /> {/* Instagram Pink */}
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@www.tiktok.comhodashines?_r=1&_t=ZS-91R49SwReef"
    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 shadow-lg"
    title="TikTok"
    target="_blank"
  >
    <Music3 size={22} className="text-black" /> {/* TikTok Black */}
  </a>
</div>

          </div>
        </div>

        <div className="border-t border-white/20 py-8 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-900 text-sm">&copy; 2025 HODA SHINE SERVICES. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-[#00FFFF] text-gray-900 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 font-bold"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  )
}
