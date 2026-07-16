export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dmc-black via-gray-900 to-dmc-green-dark" />

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Green accent circle */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-dmc-green opacity-10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-dmc-green-light opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <span className="inline-block bg-dmc-green/20 border border-dmc-green/40 text-dmc-green-light text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
          Dry Mortar Company â Finishing Systems
        </span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6">
          <span className="text-dmc-green">Mix it.</span>{" "}
          <span className="text-white">Spray it.</span>
          <br />
          <span className="text-gray-200">Finish it.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          DMC is the Middle East&apos;s leading specialist in external facade insulation and
          finishing systems (EIFS) â delivering the highest quality pre-mixed renders and
          mortars engineered for the region&apos;s unique conditions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="btn-primary text-base px-8 py-4">
            Explore Products
          </a>
          <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:text-dmc-black text-base px-8 py-4">
            Contact Us
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { value: "8+", label: "Product Groups" },
            { value: "50+", label: "Products" },
            { value: "20+", label: "Years of Experience" },
            { value: "ME", label: "Engineered for the Region" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-dmc-green">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-dmc-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
