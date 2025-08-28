export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden section-transition non-hero-section">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-300 to-white"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white via-gray-300 to-white animate-pulse"></div>
            <div className="text-2xl font-bold">Kenesis & Tech</div>
          </div>
          <p className="text-gray-400 mb-6">Powering digital experiences that matter for ambitious brands worldwide.</p>
          <p className="font-semibold mb-4">Join our Newsletter</p>
          <div className="flex space-x-2 mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-black px-4 py-2 rounded-lg w-full focus:outline-none border border-gray-700 focus:border-white/50 transition"
            />
            <button className="bw-button btn-glow magnetic">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-white/20 transition transform hover:rotate-12 magnetic"
            >
              <i className="fab fa-twitter text-gray-300"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-300/20 transition transform hover:rotate-12 magnetic"
            >
              <i className="fab fa-discord text-gray-300"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-400/20 transition transform hover:rotate-12 magnetic"
            >
              <i className="fab fa-github text-gray-300"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-white/20 transition transform hover:rotate-12 magnetic"
            >
              <i className="fab fa-linkedin text-gray-300"></i>
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-4">Company</p>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Press & Media
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Sustainability
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Services</p>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#services" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Web Development
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Blockchain Integration
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Performance Optimization
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Legal</p>
          <ul className="space-y-3 text-gray-400 mb-6">
            <li>
              <a href="#" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition transform hover:translate-x-1 inline-block">
                Compliance
              </a>
            </li>
          </ul>

          <div className="text-gray-500 text-xs">
            <p>© 2024 Kenesis & Tech. All rights reserved.</p>
            <p className="mt-2">Kenesis Technologies Inc.</p>
            <p className="mt-1">123 Innovation Drive, Silicon Valley</p>
            <p className="mt-1">contact@kenesis-tech.com</p>
            <p className="mt-1">+1 (800) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-xs">
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
    </footer>
  )
}
