"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import logo from "@/public/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fabOpen, setFabOpen] = useState(false); // Floating action button state
  const pathname = usePathname();

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "OUR SERVICES", href: "/services" },
    { label: "CONTACT US", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  const handleWhatsAppClick = () => {
    const phone = "971522032532";
    const message = encodeURIComponent("Hi, I want to know more about HODA SHINE SERVICES.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+971569407167";
  };

  return (
    <>
      {/* TOP BAR */}
<div className="hidden md:flex bg-[#00E5FF] text-white text-sm py-4 px-6 justify-between items-center shadow-md">
  <div className="flex gap-8">
   <a
  href="https://www.google.com/maps/place/25%C2%B025'07.3%22N+55%C2%B027'10.7%22E/@25.4186802,55.4504051,795m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d25.4186802!4d55.45298"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-black transition-colors cursor-pointer"
>
  <MapPin size={16} />
  <span>Office: Free Zone Ajman — Block C1</span>
</a>



    <div className="flex items-center gap-2 text-black">
      <Mail size={16} />
      <span>Email: hodashineservices@gmail.com</span>
    </div>
  </div>

  <div className="flex gap-6 items-center">

    {/* CALL NUMBER */}
    <div className="flex items-center gap-2 text-black">
      <Phone size={16} />
      <span className="font-semibold">Call: +971 56 940 7167</span>
    </div>

    {/* WHATSAPP NUMBER (Lucide MessageCircle icon) */}
    <div
      className="flex items-center gap-2 text-black cursor-pointer "
      onClick={() =>
        window.open(
          "https://wa.me/971522032532?text=Hi%2C%20I%20want%20to%20know%20more%20about%20HODA%20SHINE%20SERVICES.",
          "_blank"
        )
      }
    >
      <MessageCircle size={16} className="text-black" />
      <span className="font-semibold">WhatsApp: +971 52 203 2532</span>
    </div>

    <Link
      href="/contact"
      className="bg-[#00E5FF] text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 font-bold shadow-md hover:shadow-lg transform hover:scale-105"
    >
      Contact Us
    </Link>
  </div>
</div>


      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          {/* LOGO + TITLE */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-20 h-20 md:w-14 md:h-14 rounded-full overflow-hidden border border-[#195a88]/40 shadow-sm">
              <Image
                src={logo}
                alt="Hoda Shine Logo"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-2xl md:text-xl font-extrabold text-blue-900 tracking-wide">
                HODA SHINE
              </h1>
              <p className="text-sm md:text-xs text-gray-600 tracking-widest">
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
                  isActive(item.href) ? "text-black" : "text-gray-900"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#00E5FF]" />
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
                    ? "text-black bg-teal-50 border-[#00FFFF]"
                    : "text-gray-900 hover:bg-teal-50 hover:text-teal-800 hover:border-yellow-500 border-transparent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* FLOATING WHATSAPP ACTION BUTTON */}
<div className="fixed bottom-6 right-4 md:right-6 z-[9999] flex flex-col items-end">

  {/* EXPANDED BUTTONS */}
  {fabOpen && (
    <div className="relative flex flex-col items-end transition-all duration-300">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setFabOpen(false)}
        className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-xl absolute bottom-[150px] right-0 transition-all duration-300"
        title="Close"
      >
        <X size={24} />
      </button>

      {/* CALL BUTTON */}
      <button
        onClick={handleCall}
        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl absolute bottom-[90px] right-0 transition-all duration-300"
        title="Call Now"
      >
        <Phone size={24} />
      </button>

      {/* WHATSAPP BUTTON */}
      <button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl absolute bottom-[30px] right-0 transition-all duration-300"
        title="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.81 11.81 0 0 0 12 0C5.37 0 0 5.37 0 12a11.89 11.89 0 0 0 1.63 6L0 24l6.29-1.64A11.81 11.81 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52Z" />
          <path d="M12 21.65A9.65 9.65 0 0 1 4.4 19.2l-.35-.2-3.73.98.99-3.64-.22-.37A9.68 9.68 0 0 1 2.35 12a9.65 9.65 0 1 1 9.65 9.65Z" />
        </svg>
      </button>
    </div>
  )}

  {/* MAIN BUTTON */}
  {!fabOpen && (
    <button
      onClick={() => setFabOpen(true)}
      className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
      title="Chat or Call"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.81 11.81 0 0 0 12 0C5.37 0 0 5.37 0 12a11.89 11.89 0 0 0 1.63 6L0 24l6.29-1.64A11.81 11.81 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52Z" />
      </svg>
    </button>
  )}
</div>
    </>
  );
}
