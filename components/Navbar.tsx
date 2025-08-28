"use client"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 magnetic">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white via-gray-300 to-white animate-pulse"></div>
          <div className="text-2xl font-bold">Kenesis & Tech</div>
        </div>
        <nav className="hidden md:flex space-x-10 text-sm font-medium">
          <a href="#hero" className="hover:text-gray-300 transition relative group magnetic">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#services" className="hover:text-gray-300 transition relative group magnetic">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#solutions" className="hover:text-gray-300 transition relative group magnetic">
            Solutions
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#expertise" className="hover:text-gray-300 transition relative group magnetic">
            Expertise
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-gray-300 transition relative group magnetic">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-gray-300 transition relative group magnetic">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search" className="search-bar text-sm" />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
          <button className="md:hidden">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  )
}
