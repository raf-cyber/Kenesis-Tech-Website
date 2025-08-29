export default function Solutions() {
  return (
    <section className="section-transition non-hero-section" id="solutions">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-300 to-white"></div>
      <div className="absolute inset-0 w-full h-full grid-bg opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-reveal">Our Web3 Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-reveal">
            Comprehensive suite of tools and services to power your decentralized future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="service-card">
            <div className="w-16 h-16 mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <i className="fas fa-coins text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">DeFi Integration</h3>
            <p className="text-gray-400 leading-relaxed">
              Seamless integration with decentralized finance protocols and smart contracts.
            </p>
          </div>

          <div className="service-card">
            <div className="w-16 h-16 mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <i className="fas fa-gem text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">NFT Marketplace</h3>
            <p className="text-gray-400 leading-relaxed">
              Custom NFT platforms with minting, trading, and marketplace functionality.
            </p>
          </div>

          <div className="service-card">
            <div className="w-16 h-16 mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <i className="fas fa-network-wired text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">dApp Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-stack decentralized applications built on leading blockchain networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
