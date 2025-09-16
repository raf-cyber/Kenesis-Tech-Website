"use client";

import InteractiveConstellation from "../common/InteractiveConstellation";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center text-center px-4 sm:px-6 overflow-hidden section-transition mb-16"
      id="hero"
    >
      <div className="absolute inset-0 w-full h-full hero-gradient"></div>
      <div className="absolute inset-0 w-full h-full grid-bg opacity-20"></div>

      <InteractiveConstellation />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Building the
          <br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Future Web
          </span>
        </div>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          We craft exceptional digital experiences that push boundaries and
          drive innovation for forward-thinking brands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bw-button btn-glow magnetic"
          >
            Start Your Project
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
          <button
            onClick={() => {
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition magnetic"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
