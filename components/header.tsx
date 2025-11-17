"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/public/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "OUR SERVICES", href: "/services" },
    { label: "CONTACT US", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  const handleWhatsAppClick = () => {
    const phoneNumber = "971522032532";
    const message = encodeURIComponent(
      "Hi I want to know more about HODA SHINE SERVICES."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden md:flex bg-[#195a88] text-white text-sm py-4 px-6 justify-between items-center shadow-md">
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
            <span className="font-semibold">
              Phone: +971 0569407167 / +971 0522032532
            </span>
          </div>

          <Link
            href="/contact"
            className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 font-bold shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
  <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

    {/* BIG LOGO + BIGGER TITLE */}
    <Link href="/" className="flex items-center gap-4 group">
      <Image
        src={logo}
        alt="Hoda Shine Logo"
        width={150}     // increased from 50 → 70
        height={150}
        className="rounded-full object-cover border border-[#195a88]/40 shadow-md group-hover:scale-110 transition-transform duration-300"
        priority
      />

      <div>
        <h1 className="text-3xl font-extrabold text-[#195a88] group-hover:text-teal-700 transition-colors duration-300">
          HODA SHINE
        </h1>

        <p className="text-sm text-yellow-500 font-bold tracking-widest group-hover:text-yellow-600">
          SERVICES
        </p>
      </div>
    </Link>

    {/* DESKTOP MENU */}
    <div className="hidden md:flex gap-12">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-base font-bold transition-all duration-300 relative pb-2 tracking-wide ${
            isActive(item.href)
              ? "text-[#195a88]"
              : "text-gray-900 hover:text-teal-800"
          }`}
        >
          {item.label}
          {isActive(item.href) && (
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full" />
          )}
        </Link>
      ))}
    </div>

    {/* MOBILE MENU ICON */}
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden text-teal-800 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300"
    >
      {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
    </button>
  </div>

  {/* MOBILE MENU */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-white border-t-2 border-teal-200 py-4 shadow-lg">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setMobileMenuOpen(false)}
          className={`block w-full text-left px-6 py-3 text-base font-bold transition-all duration-300 border-l-4 ${
            isActive(item.href)
              ? "text-teal-800 bg-teal-50 border-yellow-500"
              : "text-gray-900 hover:bg-teal-50 hover:text-teal-800 hover:border-yellow-500 border-transparent"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )}
</nav>

      {/* FLOATING WHATSAPP BUTTON */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-4 md:right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.81 11.81 0 0 0 12 0C5.37 0 0 5.37 0 12a11.89 11.89 0 0 0 1.63 6L0 24l6.29-1.64A11.81 11.81 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52Z" />
          <path d="M12 21.65A9.65 9.65 0 0 1 4.4 19.2l-.35-.2-3.73.98.99-3.64-.22-.37A9.68 9.68 0 0 1 2.35 12a9.65 9.65 0 1 1 9.65 9.65Z" />
        </svg>
      </button>
    </>
  );
}
