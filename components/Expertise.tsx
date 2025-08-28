export default function Expertise() {
  return (
    <section className="section-transition non-hero-section" id="expertise">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-300 to-white"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-reveal">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-reveal">
            Building the infrastructure for tomorrow's digital economy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "React & Next.js", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Node.js", level: 88 },
            { name: "Blockchain", level: 85 },
            { name: "UI/UX Design", level: 92 },
            { name: "Cloud Architecture", level: 87 },
          ].map((skill, index) => (
            <div key={index} className="service-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
