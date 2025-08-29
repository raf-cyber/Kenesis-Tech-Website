export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, scalable websites with secure architecture.",
      img: "images/web-dev.png",
    },
    {
      title: "UI/UX",
      description: "Intuitive, user-friendly designs with clean visuals.",
      img: "images/ui-ux.png",
    },
    {
      title: "Performance Optimization",
      description: "Faster load times and reliable site performance.",
      img: "images/performance.png",
    },
    {
      title: "AI",
      description: "AI tools for automation, learning, and vision tasks.",
      img: "images/ai.png",
    },
    {
      title: "SEO",
      description: "Smarter keywords, optimized content, better reach.",
      img: "images/seo.png",
    },
    {
      title: "SaaS",
      description: "Cloud-first apps and services that scale with you.",
      img: "images/saas.png",
    },
  ];

  return (
    <section
      className="section-transition non-hero-section relative pt-36 pb-20"
      id="services"
    >
      {/* Grid background */}
      <div className="absolute inset-0 w-full h-full grid-bg opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading - styled like Who We Are */}
        <div className="mb-16">
          <h2 className="text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Our Services
          </h2>

          <p className="mt-6 text-2xl lg:text-3xl font-medium leading-relaxed text-gray-400 max-w-3xl">
            We deliver <span className="text-white">digital solutions</span> to
            help your business <span className="text-white">grow</span>.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 rounded-2xl bg-white/10 backdrop-blur-md text-white shadow-lg transition duration-300 hover:shadow-xl"
            >
              {/* Image with white outline */}
              <div className="mb-6 flex items-center justify-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-20 object-contain border-2 border-white rounded-lg p-2 bg-transparent"
                />
              </div>

              {/* Text content */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
