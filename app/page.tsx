"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import logo from "@/public/logo.jpeg";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const featuredServices = [
    {
      id: 1,
      title: "Residential Cleaning",
      description: "Professional home cleaning with eco-friendly products",
      image: "/modern-clean-living-room-apartment.jpg",
    },
    {
      id: 2,
      title: "Office Cleaning",
      description: "Corporate spaces maintained to highest standards",
      image: "/professional-modern-office-clean-workspace.jpg",
    },
    {
      id: 3,
      title: "Deep Cleaning",
      description: "Thorough cleaning for special occasions",
      image: "/before-after-deep-clean-kitchen-transformation.jpg",
    },
    {
      id: 4,
      title: "Carpet Cleaning",
      description: "Professional carpet and upholstery care",
      image: "/professional-carpet-cleaning.png",
    },
  ];

  // Default testimonials
  const defaultTestimonials = [
    {
      name: "Fatima Al Mazrouei",
      text: "HODA SHINE transformed my home! The team is professional, punctual, and thorough. Highly recommended!",
      rating: 5,
      role: "Dubai Resident",
    },
    {
      name: "Ahmed Khan",
      text: "Best cleaning service in Ajman. They handle everything with care and attention to detail.",
      rating: 5,
      role: "Business Owner",
    },
    {
      name: "Layla Hassan",
      text: "Reliable, affordable, and they use eco-friendly products. My family loves the results!",
      rating: 5,
      role: "Family Mother",
    },
    {
      name: "Mohammed Rashid",
      text: "Professional team that respects our office space. We've been using them for 2 years.",
      rating: 5,
      role: "Corporate Manager",
    },
  ];

  // State
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  // Load custom localStorage reviews
  useEffect(() => {
    const saved = localStorage.getItem("customReviews");
    if (saved) {
      setTestimonials([...defaultTestimonials, ...JSON.parse(saved)]);
    }
  }, []);

  // Save new review
  const handleSubmitReview = () => {
    if (!name || !text) {
      alert("Please fill all fields.");
      return;
    }

    const newReview = { name, text, rating, role: "Customer" };

    const updated = [...testimonials, newReview];
    setTestimonials(updated);

    const customReviews = updated.slice(defaultTestimonials.length);
    localStorage.setItem("customReviews", JSON.stringify(customReviews));

    setShowModal(false);
    setName("");
    setText("");
    setRating(5);
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative py-20 px-4 sm:px-6 md:px-12 bg-[#00FFFF] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96  rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                Shine up your home — Shine up your day
              </h1>
              <p className="text-xl text-black">
                Professional cleaning services for your home and office
              </p>
              <p className="text-black">
                Experience pristine cleanliness with HODA SHINE SERVICES.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-lg font-bold  transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center"
                >
                  Get Your Free Quote <ArrowRight className="ml-2" size={20} />
                </Link>

                <Link
                  href="/services"
                  className="bg-black bg-opacity-20 backdrop-blur text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-30  inline-flex items-center"
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div className="hidden md:block overflow-hidden rounded-2xl">
              <img
                src="/professional-cleaner-team-smiling-happy-cleaning-s.jpg"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/professional-cleaning-company-team-photo.jpg"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <p className="text-[#00FFFF] font-bold text-lg">WHO WE ARE</p>
            <h2 className="text-4xl md:text-5xl font-black">Your Trusted Cleaning Partner</h2>

            <p className="text-gray-700">
              HODA SHINE SERVICES has been providing exceptional cleaning solutions across the UAE.
            </p>

            <ul className="space-y-4">
              {[
                "Eco-friendly cleaning products",
                "100% satisfaction guarantee",
                "Fully insured staff",
                "Available 7 days a week",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#00FFFF] font-bold"
            >
              Learn more <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00FFFF] font-bold text-lg">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2">Professional Cleaning Solutions</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img src={service.image} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="bg-[#00FFFF] text-white px-8 py-4 rounded-lg font-bold inline-flex items-center mt-10"
          >
            View All Services <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00FFFF] font-bold text-lg mb-1">CLIENT TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-black">What Our Clients Say</h2>

          {/* Add Review Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#00FFFF] text-white px-6 py-3 rounded-lg font-bold mt-6 hover:opacity-90"
          >
            Add Your Review
          </button>

          {/* Reviews Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="text-yellow-500 fill-yellow-500" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm mb-4">{t.text}</p>

                <div className="border-t pt-3">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-yellow-700">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-2xl font-bold mb-4 text-[#195a88]">Add Your Review</h3>

            <input
              className="border w-full p-3 rounded mb-3"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              className="border w-full p-3 rounded mb-3"
              placeholder="Your Review..."
              value={text}
              rows={4}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={26}
                  className={star <= rating ? "text-yellow-500 fill-yellow-500 cursor-pointer" : "cursor-pointer"}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded">
                Cancel
              </button>
              <button
                onClick={handleSubmitReview}
                className="px-4 py-2 bg-[#00FFFF] text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
