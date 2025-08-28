export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-300 to-white"></div>
      <div className="absolute inset-0 w-full h-full grid-bg opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Our Company"
            />
          </div>

          <div className="about-text">
            <div className="about-badge">OUR STORY</div>
            <h2 className="text-4xl font-bold mb-6 text-reveal">Pioneering Digital Innovation Since 2020</h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-reveal">
              Founded with a vision to transform how businesses interact with technology, Kenesis & Tech has grown from
              a small team of passionate developers into a leading digital innovation company.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed text-reveal">
              We specialize in creating cutting-edge web experiences, blockchain solutions, and digital platforms that
              drive real business results for our clients worldwide.
            </p>
            <button className="bw-button btn-glow magnetic">
              Learn More About Us
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
