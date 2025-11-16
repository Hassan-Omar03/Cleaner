'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react'
import logo from '@/public/logo.jpeg'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'OUR SERVICES', href: '/services' },
    { label: 'CONTACT US', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

  // WHATSAPP HANDLER
  const handleWhatsAppClick = () => {
    const phoneNumber = "971522032532"; // Luxembourg number without "+"
    const message = encodeURIComponent("Hi I want to know more about HODA SHINE SERVICES.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* 🔹 TOP BAR (Green Background) */}
      <div className="hidden md:flex bg-gradient-to-r from-teal-900 to-teal-800 text-white text-sm py-4 px-6 justify-between items-center shadow-md">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
            <MapPin size={16} />
            <span>Office: Free Zone Ajman — Block C1</span>
          </div>

          <div className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
            <Mail size={16} />
            <span>Email: hodashineservices@gmail.com</span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span className="font-semibold">Phone: +971 0569407167 / +971 0522032532</span>
          </div>

          <Link
            href="/contact"
            className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 font-bold shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* 🔹 NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link
            href="/"
            className="group transform hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-3xl font-black text-teal-800 group-hover:text-teal-700 transition-colors duration-300">
              HODA SHINE
            </h1>
            <p className="text-sm text-yellow-500 font-bold tracking-wider group-hover:text-yellow-600 transition-colors duration-300">
              SERVICES
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold transition-all duration-300 relative pb-2 tracking-wide ${
                  isActive(item.href)
                    ? 'text-teal-800'
                    : 'text-gray-900 hover:text-teal-800'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-teal-800 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-teal-200 py-4 shadow-lg animate-in fade-in slide-in-from-top">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-6 py-3 text-sm font-bold transition-all duration-300 border-l-4 ${
                  isActive(item.href)
                    ? 'text-teal-800 bg-teal-50 border-yellow-500'
                    : 'text-gray-900 hover:bg-teal-50 hover:text-teal-800 hover:border-yellow-500 border-transparent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* 🔥 FLOATING WHATSAPP BUTTON */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-4 md:right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.81 11.81 0 0 0 12 0C5.37 0 0 5.37 0 12a11.89 11.89 0 0 0 1.63 6L0 24l6.29-1.64A11.81 11.81 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52Zm-8.52 17.3a9.65 9.65 0 0 1-4.93-1.35l-.35-.2-3.73.98.99-3.64-.22-.37A9.68 9.68 0 0 1 2.35 12a9.65 9.65 0 0 1 9.65-9.65c5.33 0 9.65 4.33 9.65 9.65s-4.32 9.65-9.65 9.65Zm5.39-7.26c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.48-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.39.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.1 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </button>
    </>
  )
}
