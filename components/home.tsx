'use client'

interface HomeProps {
  onNavigate: (section: string) => void
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-up space-y-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-teal-800 mb-2 leading-tight">
                HODA SHINE
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SERVICES
              </h2>
              <p className="text-2xl text-yellow-500 font-bold tracking-wide">
                Shine up your home — Shine up your day
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl font-medium">
              Professional home & office cleaning across Dubai, Sharjah and Ajman. Flexible packages: hourly, daily, weekly, monthly or single deep cleans.
            </p>

            <div className="grid grid-cols-2 gap-4 my-8">
              {[
                { icon: '✓', text: 'Eco-friendly products' },
                { icon: '✓', text: 'Trained staff' },
                { icon: '✓', text: '100% satisfaction guarantee' },
                { icon: '✓', text: 'Open 8AM - 8PM' },
              ].map((badge, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-800 hover:shadow-lg hover:border-yellow-500 transition-all duration-300 group cursor-pointer">
                  <p className="font-semibold text-teal-800 text-sm group-hover:text-yellow-500 transition-colors duration-300">{badge.icon} {badge.text}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get a Free Quote
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="slide-in-right hidden md:block relative h-96 md:h-full">
            <img
              src="/bright-modern-living-room-clean-minimal-natural-li.jpg"
              alt="Clean modern living room"
              className="w-full h-full object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-800/20 to-transparent rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
