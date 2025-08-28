export default function Contact() {
  return (
    <section className="section-transition non-hero-section" id="contact">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-300 to-white"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl float-animation-reverse"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        <div>
          <div className="inline-block px-4 py-2 bg-gray-400/10 rounded-full mb-6 text-sm font-medium text-gray-300 border border-gray-400/20 shimmer">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl font-bold mb-6 text-reveal">Transforming Vision into Reality</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-reveal">
            Ready to bring your digital vision to life? Let's discuss how we can help you build something extraordinary.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <i className="fas fa-envelope text-lg"></i>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">contact@kenesis-tech.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <i className="fas fa-phone text-lg"></i>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400">+1 (800) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-lg"></i>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-400">Silicon Valley, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-card">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white/50 transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white/50 transition"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white/50 transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white/50 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white/50 transition resize-none"
            ></textarea>
            <button type="submit" className="w-full bw-button btn-glow magnetic">
              Send Message
              <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
