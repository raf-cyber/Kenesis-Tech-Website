export default function Services() {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and best practices.",
    },
    {
      icon: "fas fa-palette",
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: "fas fa-cube",
      title: "Blockchain Integration",
      description: "Seamless integration of blockchain technology into your digital ecosystem.",
    },
    {
      icon: "fas fa-rocket",
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, SEO, and user engagement.",
    },
  ]

  return (
    <section className="section-transition non-hero-section" id="services">
      <div className="absolute inset-0 w-full h-full grid-bg opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-reveal">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-reveal">
            We provide comprehensive digital solutions to help your business thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
