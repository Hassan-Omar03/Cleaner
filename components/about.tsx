'use client'

export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="slide-in-left hidden md:block relative h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            <img
              src="/professional-cleaner-smiling-holding-eco-friendly-.jpg"
              alt="Professional cleaner with eco-friendly products"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Content */}
          <div className="fade-up space-y-6">
            <div>
              <p className="text-yellow-500 font-bold text-lg mb-2 tracking-wider">ABOUT OUR COMPANY</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Our Success Cleaning Up Your Mess</h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p className="font-medium">
                Yours Cleaners is a registered cleaning company based in Dubai, providing top quality home cleaning and office cleaning services in Dubai, Sharjah and Ajman.
              </p>

              <p className="font-medium">
                Yours Cleaners offers flexible and affordable home and office cleaning services—no matter whether a villa, flat or office requires cleaning.
              </p>

              <p className="font-medium">
                Our team will clean your home or office from top to bottom and nothing is overlooked. We pride ourselves on consistently high standards of professional cleaning services in Dubai, Sharjah and Ajman.
              </p>

              <p className="font-medium">
                We guarantee that for us you are not just another number. We provide cleaning services to many houses and offices every day, but when our team is cleaning yours it's the only home we care about. Our professionally trained team ensures your individual needs are met whether you want hourly, daily, weekly, monthly or a one-off special occasion clean.
              </p>
            </div>

            <button className="btn-primary mt-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
