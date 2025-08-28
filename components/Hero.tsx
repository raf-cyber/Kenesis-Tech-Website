"use client"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center text-center px-6 overflow-hidden section-transition"
      id="hero"
    >
      <div className="absolute inset-0 w-full h-full hero-gradient"></div>
      <div className="absolute inset-0 w-full h-full grid-bg opacity-20"></div>

      {/* 3D Elements */}
      <div className="absolute top-[15%] left-[10%] w-[200px] h-[200px]">
        <div className="k-logo">
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
        </div>
      </div>

      <div className="absolute top-[60%] right-[15%] w-[150px] h-[150px]">
        <div className="k-logo">
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
          <div className="k-face">
            <span className="k-letter">K</span>
          </div>
        </div>
      </div>

      {/* Light Beams */}
      <div className="light-beam absolute top-[20%] left-[25%] rotate-[15deg]"></div>
      <div className="light-beam absolute top-[30%] right-[30%] rotate-[-25deg] animation-delay-1000"></div>
      <div className="light-beam absolute bottom-[40%] left-[40%] rotate-[45deg] animation-delay-2000"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6 text-sm font-medium text-gray-300 border border-white/20 shimmer">
          NEXT-GEN WEB EXPERIENCES
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Building the
          <br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Future Web
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          We craft exceptional digital experiences that push boundaries and drive innovation for forward-thinking
          brands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bw-button btn-glow magnetic">
            Start Your Project
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
          <button className="px-8 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition magnetic">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  )
}
