const pillars = [
  {
    icon: "ðï¸",
    title: "Products",
    desc: "Pre-mixed renders and mortars combining natural materials and advanced application technology for optimum quality, adhesion, workability, durability and crack resistance.",
  },
  {
    icon: "ð¨",
    title: "Application",
    desc: "Formulated for the most advanced spray machine technology and equipment, delivering maximum efficiency and productivity on any project size.",
  },
  {
    icon: "â¨",
    title: "Finish",
    desc: "An integrated wall system â simply render, apply your texture and paint. Seamless from substrate to final coat.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="section-subheading">Who We Are</p>
            <h2 className="section-heading mb-6">
              The Middle East&apos;s Finishing Systems Specialist
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Dry Mortar Company (DMC) is the leading producer and specialist in EIFS â External
              Insulation and Finishing Systems â with the highest quality materials specially
              developed for Middle East conditions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our complete range of pre-mixed mortars, renders, finishes, coatings and flooring
              systems are engineered to perform in harsh climates, delivering lasting beauty and
              structural integrity for residential, commercial and industrial projects.
            </p>
            <div className="flex gap-4">
              <a href="#products" className="btn-primary">View Products</a>
              <a href="https://www.dmc-mix.com/profile/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Company Profile
              </a>
            </div>
          </div>

          {/* Right: pillar cards */}
          <div className="flex flex-col gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex gap-5 items-start p-5 rounded-xl border border-gray-100 hover:border-dmc-green/30 hover:shadow-md transition-all duration-200 bg-white"
              >
                <span className="text-3xl shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-bold text-dmc-black text-lg mb-1">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
