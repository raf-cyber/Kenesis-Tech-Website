"use client";

import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href")!);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="navbar-content max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2 magnetic">
          <img
            src="/K&T-Logo.jpg"
            alt="Kenesis & Tech Logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <div className="text-2xl font-bold text-white">Kenesis & Tech</div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium text-white">
          <a
            href="#hero"
            className="hover:text-gray-300 transition relative group magnetic"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#services"
            className="hover:text-gray-300 transition relative group magnetic"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#faq"
            className="hover:text-gray-300 transition relative group magnetic"
          >
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
        </nav>

        {/* Contact Us Button + Mobile menu */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Contact Us
          </a>

          <button className="md:hidden text-white">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
