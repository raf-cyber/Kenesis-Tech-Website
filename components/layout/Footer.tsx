"use client";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden section-transition non-hero-section">
      {/* Grid background from Services component */}
      <div className="absolute inset-0 w-full h-full grid-bg opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10">
        <div>
          <div className="flex items-center space-x-3 mb-8">
            {/* Logo Image */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="images/K&T-Logo.jpg"
                alt="Kenesis & Tech Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-3xl font-bold text-white">Kenesis & Tech</div>
          </div>
          <p className="text-gray-300 mb-8 text-base leading-relaxed">
            Powering digital experiences that matter for ambitious brands
            worldwide.
          </p>
          <p className="font-semibold text-white mb-5 text-lg">
            Join our Newsletter
          </p>
          <form onSubmit={handleSubscribe} className="flex space-x-3 mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="bg-black/50 px-5 py-3 rounded-lg w-full focus:outline-none border border-white/20 focus:border-white/50 transition text-base"
              required
            />
            <button
              type="submit"
              className="bw-button btn-glow magnetic px-5 py-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
          <div className="flex space-x-5">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition transform hover:rotate-12 magnetic"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition transform hover:rotate-12 magnetic"
              aria-label="Discord"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.369c-1.877-1.877-4.954-1.927-7.317-1.927-2.363 0-5.44.05-7.317 1.927C4.711 6.246 4.77 9.315 4.77 12.026c0 2.382.045 4.844 1.26 6.976.514.948 1.218 1.8 2.086 2.474.868.674 1.89 1.2 2.99 1.5.5.15 1.01.24 1.53.27.52.03 1.04.03 1.56 0 .52-.03 1.03-.12 1.53-.27 1.1-.3 2.122-.826 2.99-1.5.868-.674 1.572-1.526 2.086-2.474 1.215-2.132 1.26-4.594 1.26-6.976 0-2.711.059-5.78-1.923-7.657zM12 20.478c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm6.5-10.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition transform hover:rotate-12 magnetic"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition transform hover:rotate-12 magnetic"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white mb-6 text-lg">Company</p>
          <ul className="space-y-4 text-gray-300">
            <li>
              <a
                href="#about"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Press & Media
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Sustainability
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-6 text-lg">Services</p>
          <ul className="space-y-4 text-gray-300">
            <li>
              <a
                href="#services"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                UI/UX Design
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Blockchain Integration
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Performance Optimization
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-6 text-lg">Legal</p>
          <ul className="space-y-4 text-gray-300 mb-8">
            <li>
              <a
                href="#"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition transform hover:translate-x-1 inline-block text-base"
              >
                Compliance
              </a>
            </li>
          </ul>
          <div className="text-gray-400">
            <p className="text-base">
              © 2024 Kenesis & Tech. All rights reserved.
            </p>
            <p className="mt-3 text-base">Kenesis Technologies Inc.</p>
            <p className="mt-2 text-base">
              123 Innovation Drive, Silicon Valley
            </p>
            <p className="mt-2 text-base">contact@kenesis-tech.com</p>
            <p className="mt-2 text-base">+1 (800) 123-4567</p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .grid-bg {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }
        .bw-button {
          background-color: white;
          color: black;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bw-button:hover {
          color: white;
        }
        .bw-button:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          z-index: -1;
          transition: transform 0.3s ease;
          transform: scaleX(0);
          transform-origin: left;
        }
        .bw-button:hover:before {
          transform: scaleX(1);
        }
        .btn-glow {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </footer>
  );
}
