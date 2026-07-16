"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="section-subheading">Get in Touch</p>
            <h2 className="section-heading mb-6">
              Talk to a<br />
              <span className="text-dmc-green">Finishing Specialist</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Whether you&apos;re specifying a new project, need technical support or want to see a
              live product demonstration â our team is ready to help.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <span className="text-2xl">ð</span>
                <div>
                  <div className="font-semibold text-dmc-black text-sm">Vebsite</div>
                  <a
                    href="https://www.dmc-mix.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dmc-green hover:underline text-sm"
                  >
                    www.dmc-mix.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">ð§</span>
                <div>
                  <div className="font-semibold text-dmc-black text-sm">Email</div>
                  <a
                    href="mailto:info@dmc-mix.com"
                    className="text-dmc-green hover:underline text-sm"
                  >
                    info@dmc-mix.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">ð</span>
                <div>
                  <div className="font-semibold text-dmc-black text-sm">Region</div>
                  <div className="text-gray-500 text-sm">Middle East &amp; GCC</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-dmc-gray rounded-2xl p-8">
            <h3 className="text-xl font-bold text-dmc-black mb-6">Request a Quote or Sample</h3>
            <form
              action="https://formspree.io/f/mwpbvkzb"
              method="POST"
              className="flex flex-col gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dmc-black mb-1">Name</label>
                  <input type="text" name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-dmc-green bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dmc-black mb-1">Company</label>
                  <input type="text" name="company" placeholder="Your company" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-dmc-green bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dmc-black mb-1">Email</label>
                <input type="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-dmc-green bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dmc-black mb-1">Product interest</label>
                <select name="product_group" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-dmc-green bg-white text-gray-600">
                  <option value="">Select a product groupâ¦</option>
                  <option>Mortars &amp; Block Laying</option>
                  <option>Preparation &amp; Repairing</option>
                  <option>Rendering</option>
                  <option>Insulation Products (EIFS)</option>
                  <option>Finishing</option>
                  <option>Tiling &amp; Grouts</option>
                  <option>Special Coatings</option>
                  <option>Mixing &amp; Conveying Machines</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dmc-black mb-1">Message</label>
                <textarea name="message" rows={4} placeholder="Tell us about your projectâ¦" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-dmc-green bg-white resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-base">Send Message â</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
