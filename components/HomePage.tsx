"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const featuredServices = [
    {
      id: 1,
      title: "Home & Office Cleaning",
      description: "Sparkling-clean homes and offices, done your way.",
      image: "/home1.jpg",
    },
    {
      id: 2,
      title: "Carpet & Sofa Cleaning",
      description: "Deep-cleaned carpets & sofas, restoring comfort.",
      image: "/home2.jpg",
    },
    {
      id: 3,
      title: "Post-Construction Cleaning",
      description: "Dust-free cleaning after renovation or construction.",
      image: "/hom3.jpg",
    },
    {
      id: 4,
      title: "Villa & Hotel Apartment Cleaning",
      description: "Premium cleaning for luxury spaces.",
      image: "/home4.jpeg",
    },
  ];

  const defaultTestimonials = [
    {
      name: "Fatima Al Mazrouei",
      text: "HODA SHINE transformed my home! The team is professional and thorough. Highly recommended!",
      rating: 5,
      role: "Dubai Resident",
    },
    {
      name: "Ahmed Khan",
      text: "Best cleaning service in Ajman. Very careful and professional team.",
      rating: 5,
      role: "Business Owner",
    },
    {
      name: "Layla Hassan",
      text: "Affordable & eco-friendly cleaning. My family loves them!",
      rating: 5,
      role: "Mother",
    },
    {
      name: "Mohammed Rashid",
      text: "Professional staff. We trust them for our office cleaning.",
      rating: 5,
      role: "Corporate Manager",
    },
  ];

  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    const saved = localStorage.getItem("customReviews");
    if (saved) {
      setTestimonials([...defaultTestimonials, ...JSON.parse(saved)]);
    }
  }, []);

  const handleSubmitReview = () => {
    if (!name || !text) return alert("Please fill all fields.");

    const newReview = { name, text, rating, role: "Customer" };
    const updated = [...testimonials, newReview];

    setTestimonials(updated);

    localStorage.setItem(
      "customReviews",
      JSON.stringify(updated.slice(defaultTestimonials.length))
    );

    setShowModal(false);
    setName("");
    setText("");
    setRating(5);
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative py-20 px-4 sm:px-6 md:px-12 bg-[#00E5FF] text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Shine up your home — Shine up your day
            </h1>
            <p className="text-xl text-black">
              Professional cleaning services for your home and office.
            </p>
            <p className="text-black font-medium">
              Trusted by families & businesses across UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-lg font-bold transition hover:scale-105 inline-flex items-center"
              >
                Get Your Free Quote <ArrowRight className="ml-2" size={20} />
              </Link>

              <Link
                href="/services"
                className="bg-black bg-opacity-20 backdrop-blur text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-30 inline-flex items-center"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="hidden md:block overflow-hidden rounded-2xl">
            <img src="/1.png" className="rounded-2xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="/2.png" className="rounded-2xl shadow-xl" />

          <div className="space-y-6">
            <p className="text-blue-900 font-bold text-lg">WHO WE ARE</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Your Trusted Cleaning Partner in UAE
            </h2>

            <p className="text-gray-700">
              We provide premium home & office cleaning across Dubai, Sharjah & Ajman.
            </p>

            <ul className="space-y-3">
              <li>✔ Eco-friendly cleaning solutions</li>
              <li>✔ Fully trained & insured cleaners</li>
              <li>✔ Flexible hourly & deep cleaning options</li>
              <li>✔ 100% satisfaction guaranteed</li>
            </ul>

            <Link href="/about" className="text-blue-900 font-bold inline-flex items-center">
              Learn more <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className=" px-4 sm:px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-900 font-bold text-lg">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Professional Cleaning Solutions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl">
                <img src={service.image} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="bg-[#00E5FF] text-blue-900 px-8 py-4 rounded-lg font-bold inline-flex items-center mt-10"
          >
            View All Services  <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-7 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-900 font-bold text-lg">CLIENT TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-black">What Our Clients Say</h2>

          <button
            onClick={() => setShowModal(true)}
            className="bg-[#00E5FF] text-blue-900 px-6 py-3 rounded-lg font-bold mt-6"
          >
            Add Your Review
          </button>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {testimonials.map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm italic">{review.text}</p>

                <div className="mt-4 border-t pt-3">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-blue-900 text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-80">
            <h3 className="text-xl font-bold text-[#00AAAA] mb-3">Add Review</h3>

            <input
              className="border w-full p-2 rounded mb-2"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              className="border w-full p-2 rounded mb-2"
              placeholder="Your Review"
              value={text}
              rows={3}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={26}
                  className={
                    star <= rating
                      ? "text-yellow-500 fill-yellow-500 cursor-pointer"
                      : "cursor-pointer"
                  }
                  onClick={() => setRating(star)}
                />
              ))}
            </div>

            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded">
                Cancel
              </button>
              <button
                onClick={handleSubmitReview}
                className="px-4 py-2 bg-[#00AAAA] text-white rounded"
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
