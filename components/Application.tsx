const steps = [
  {
    number: "01",
    title: "Surface Preparation",
    desc: "Clean, prime and bond the substrate using DMC Bridge BB60 or Prime Coat PC10 to ensure maximum adhesion for subsequent layers.",
  },
  {
    number: "02",
    title: "Rendering",
    desc: "Apply DMC Base Render or EIFS insulation boards with Styro Fix SF100. For monocouche finishes, a single coat of MC35 completes this stage.",
  },
  {
    number: "03",
    title: "Machine Application",
    desc: "All DMC products are engineered for M-Tec spray machine application â maximising output and minimising waste on any project scale.",
  },
  {
    number: "04",
    title: "Reinforcement & Finish",
    desc: "Apply reinforcement mesh with Mesh Fix MF60, then complete with your chosen DMC finish coat â momocouche, skim, decorative or natural paint.",
  },
];

export default function Application() {
  return (
    <section id="application" className="py-24 bg-dmc-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="section-subheading">How It Works</p>
            <h2 className="section-heading text-white mb-6">
              One System, <span className="text-dmc-green">End to End</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              DMC&apos;s integrated wall system takes you from bare substrate to finished facade with
              a single, consistent product family. Every product is formulated to work together â
              and to be applied with M-Tec spray technology for maximum speed and uniformity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.dmc-mix.com/application/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Application Guide â
              </a>
              <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:text-dmc-black">
                Request a Demo
              </a>
            </div>
          </div>

          {/* Right: process steps */}
          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex gap-5 items-start p-5 rounded-xl border border-white/10 hover:border-dmc-green/40 hover:bg-white/5 transition-all duration-200"
              >
                <span className="text-3xl font-black text-dmc-green opacity-60 shrink-0 w-10">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Machine partnership strip */}
        <div className="mt-20 border-t border-white/10 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm max-w-lg">
            DMC is the exclusive partner of <strong className="text-white">M-Tec</strong> â Europe&apos;s
            leading manufacturer of continuous mixing and conveying machines â in the Middle East.
          </p>
          <a
            href="https://www.dmc-mix.com/machines/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-dmc-green font-semibold text-sm hover:text-dmc-green-light transition-colors"
          >
            View Machines âï¸
          </a>
        </div>
      </div>
    </section>
  );
}
