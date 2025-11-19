"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function ServicesPageUI() {
  const allServices = [
    {
      id: 1,
      title: "Home & Office Cleaning",
      description: "Sparkling-clean homes and offices, done your way.",
      image: "/home1.jpg",
      features: [
        "Routine and deep cleaning for all areas",
        "Custom cleaning plans",
        "Flexible timing",
        "Dusting & vacuuming",
      ],
      pricing: "From AED 250",
    },
    {
      id: 2,
      title: "Carpet & Sofa Cleaning",
      description: "Deep-cleaned carpets & sofas, restoring comfort.",
      image: "/home2.jpg",
      features: [
        "Deep steam cleaning",
        "Stain & spot removal",
        "Odor elimination",
        "Safe, fabric-friendly products",
      ],
      pricing: "From AED 500",
    },
    {
      id: 3,
      title: "Post-Construction Cleaning",
      description: "Remove dust and debris effortlessly.",
      image: "/hom3.jpg",
      features: [
        "Deep corner detailing",
        "Window & glass cleaning",
        "Wall & ceiling wipe-down",
        "Dust & debris removal",
      ],
      pricing: "From AED 800",
    },
    {
      id: 4,
      title: "Villa & Hotel Apartment Cleaning",
      description: "Premium cleaning for luxury spaces.",
      image: "/home4.jpeg",
      features: [
        "Premium deep cleaning",
        "Stain removal",
        "Odor elimination",
        "Protective coating",
      ],
      pricing: "From AED 150",
    },
    {
      id: 5,
      title: "Swimming Pool Cleaning",
      description:
        "Crystal-clear, hygienic pools maintained with professional care",
      image: "/swimming.png",
      features: [
        "Water testing & balancing",
        "Pool vacuuming & brushing",
        "Filter cleaning & maintenance",
        "Debris removal",
      ],
      pricing: "From AED 100",
    },
    {
      id: 6,
      title: "AC Cleaning",
      description: "Complete AC cleaning for fresher, healthier indoor air.",
      image: "/ac.png",
      features: [
        "Deep coil & filter cleaning",
        "Dust & mold removal",
        "Improved airflow & cooling",
        "Safe, eco-friendly methods",
      ],
      pricing: "From AED 1000",
    },
    {
      id: 7,
      title: "Hourly or Daily Maids",
      description: "Reliable maids for daily tasks and hassle-free home upkeep.",
      image: "/maid.webp",
      features: [
        "General home cleaning",
        "Laundry & dishwashing",
        "Organizing & tidying",
        "Flexible hourly or daily options",
      ],
      pricing: "From AED 900",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-6 md:px-12 bg-[#00FFFF] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Our Services</h1>
          <p className="text-xl text-black max-w-3xl">
            Comprehensive cleaning solutions tailored to your needs & budget
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#00FFFF] font-bold"
                >
                  Get Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Don’t See Your Service?
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            We also offer custom cleaning packages for unique requirements.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition"
          >
            <Zap size={20} />
            Request Custom Service
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
