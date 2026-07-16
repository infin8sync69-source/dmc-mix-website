"use client";

import { useState } from "react";

const groups = [
  {
    id: "mortars",
    icon: "ð§±",
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-700",
    badge: "bg-amber-100 text-amber-800",
    title: "Mortars & Block Laying",
    brief:
      "High-performance bricklaying and block-laying mortars engineered for load-bearing walls, partition walls and AAC block applications. Optimised for workability, compressive strength and shrinkage resistance.",
    products: [
      { name: "Lime Mortar LM50", desc: "White bricklaying mortar" },
      { name: "Lime Mortar LM125", desc: "White mortar, higher compressive strength" },
      { name: "Masonry Mortar MM50", desc: "Mortar for partition walls" },
      { name: "Masonry Mortar MM100", desc: "Mortar for load bearing walls" },
      { name: "Masonry Mortar MM150", desc: "Up to 15N/mmÂ² load bearing" },
      { name: "Masonry Mortar MM200", desc: "Heavy load bearing walls" },
      { name: "Thin Bed Mortar TBM80", desc: "Adhesive mortar for AAC blocks" },
    ],
  },
  {
    id: "preparation",
    icon: "ð§",
    color: "bg-blue-50 border-blue-200",
    accent: "text-blue-700",
    badge: "bg-blue-100 text-blue-800",
    title: "Preparation & Repairing",
    brief:
      "A comprehensive suite of repair and primer products to prepare substrates for finishing. From crack repair compounds to bonding bridges and prime coats, DMC ensures your surface is ready for a flawless result.",
    products: [
      { name: "Bridge BB60", desc: "High adhesive splatter dash" },
      { name: "Crack Repair CR45", desc: "Highly flexible crack filler" },
      { name: "Concrete Master", desc: "Structural concrete repair mortar" },
      { name: "Flex Coat", desc: "Flexible protective coating" },
      { name: "Filling Grout FG150", desc: "Shrink-free masonry filling" },
      { name: "Prime Coat PC10", desc: "Primer concentrate for thin coat renders" },
      { name: "Bond Coat BC40", desc: "Protective & decorative bonding coating" },
    ],
  },
  {
    id: "rendering",
    icon: "ð ",
    color: "bg-green-50 border-green-200",
    accent: "text-green-700",
    badge: "bg-green-100 text-green-800",
    title: "Rendering",
    brief:
      "Factory-mixed renders for interior and exterior walls â from levelling base coats to water-repellent exteriors. DMC renders provide excellent adhesion, durability and resistance to cracking in extreme climatic conditions.",
    products: [
      { name: "Base Render BR30", desc: "Leveling render for interior use" },
      { name: "Base Render BR30-F", desc: "Fibre-enhanced leveling render" },
      { name: "Base Render BR35+", desc: "Leveling render for exterior use" },
      { name: "Lime Render LR20", desc: "Decorative render for internal walls" },
      { name: "Lime Render LR25", desc: "White render for decorative finishes" },
      { name: "Repellent Render RR60", desc: "High water-repellent render" },
      { name: "Monocouche MC35", desc: "Rough one-coat render" },
    ],
  },
  {
    id: "insulation",
    icon: "ð¡ï¸",
    color: "bg-purple-50 border-purple-200",
    accent: "text-purple-700",
    badge: "bg-purple-100 text-purple-800",
    title: "Insulation Products (EIFS / ETICS)",
    brief:
      "DMC's EIFS system delivers superior thermal insulation for external facades. Complete with polystyrene board adhesives, reinforcement mesh mortars and insulating renders â all certified for Middle East performance requirements.",
    products: [
      { name: "Styro Fix SF100", desc: "EIFS ctehesive mortar for polystyrene" },
      { name: "Mesh Fix MF60", desc: "EIFS adhesive mortar for reinforcement mesh" },
      { name: "Insulation Render IR25", desc: "Sprayable insulating render" },
      { name: "Polystyrene Boards", desc: "High-density EPS insulation boards" },
      { name: "EIFS System Accessories", desc: "Beads, profiles and fixings" },
    ],
  },
  {
    id: "finishing",
    icon: "â¨",
    color: "bg-pink-50 border-pink-200",
    accent: "text-pink-700",
    badge: "bg-pink-100 text-pink-800",
    title: "Finishing",
    brief:
      "The widest range of decorative finish coats in the region â from smooth skim coats to creative heritage renders. DMC finishing products deliver texture, colour and character, completing the integrated wall system.",
    products: [
      { name: "Skim Coat SC45", desc: "Ultra-smooth finish coat" },
      { name: "Decorative Coat DC30", desc: "Rough decorative finish coat" },
      { name: "Texture TT40", desc: "Texture spray coat" },
      { name: "Top Coat TC60", desc: "Semi-rough finish coat" },
      { name: "Venezia VE40", desc: "High bonding thin render" },
      { name: "Barano BA25", desc: "Rough finish render" },
      { name: "Artisan AS20", desc: "Ready-mixed creative finishes" },
      { name: "Artisan AS20+", desc: "Heritage mud finish with straw" },
      { name: "DMC Natural Paint", desc: "Eco-friendly decorative paint system" },
    ],
  },
  {
    id: "tiling",
    icon: "ðª",
    color: "bg-teal-50 border-teal-200",
    accent: "text-teal-700",
    badge: "bg-teal-100 text-teal-800",
    title: "Tiling & Grouts",
    brief:
      "Complete flooring and tiling solutions for residential and commercial applications. From high-strength floor screeds to specialist tile adhesives and grouts designed for wet areas, kitchens and heavy traffic zones.",
    products: [
      { name: "Floor Screed FS200", desc: "Leveling screed for residential floors" },
      { name: "Floor Screed FS300", desc: "Residential & light commercial screed" },
      { name: "Floor Screed FS400", desc: "High-strength commercial screed" },
      { name: "Tile Fix TF51>0", desc: "Non-slip ceramic tile adhesive" },
      { name: "Tile Fix TF60", desc: "Non-slip adhesive for all ceramic tiles" },
      { name: "Tile Fix TF70", desc: "CS II TE category tile adhesive" },
      { name: "Tile Fix TF80-L", desc: "High-performance lightweight adhesive" },
      { name: "Tile Grout TG40", desc: "General wall and floor grout" },
      { name: "Tile Grout TG60", desc: "Wet-area tile grout" },
    ],
  },
  {
    id: "coatings",
    icon: "ð¨",
    color: "bg-orange-50 border-orange-200",
    accent: "text-orange-700",
    badge: "bg-orange-100 text-orange-800",
    title: "Special Coatings",
    brief:
      "Protective and decorative coatings designed for demanding environments â chloride barrier coatings for coastal buildings, fireproof foundations and invisible clear protective coats for heritage and exposed masonry.",
    products: [
      { name: "Bond Coat BC40", desc: "Barrier against chlorides, diesel and petrol" },
      { name: "Cement Paint CP10", desc: "Fireproof water barrier for foundations" },
      { name: "Clear Coat CC10", desc: "Invisible non-glossy clear protective coat" },
      { name: "DMC Floor", desc: "Industrial floor coating system" },
    ],
  },
  {
    id: "machines",
    icon: "âï¸",
    color: "bg-slate-50 border-slate-200",
    accent: "text-slate-700",
    badge: "bg-slate-100 text-slate-800",
    title: "Mixing & Conveying Machines",
    brief:
      "DMC partners with M-Tec â Europe's leading render machine manufacturer â to supply continuous mixers, silos and conveying equipment that maximise output and material efficiency on large and small projects alike.",
    products: [
      { name: "DMC Silos", desc: "Pre-filling silos for large-scale projects" },
      { name: "M-Tec Duomix", desc: "Continuous mixing and conveying machine" },
      { name: "M-Tec Flotti", desc: "Plastering machine for ceilings and walls" },
    ],
  },
];

export default function ProductGroups() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  return (
    <section id="products" className="py-24 bg-dmc-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-subheading">What We Offer</p>
          <h2 className="section-heading mb-4">Product Groups</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Eight specialist product families covering every stage of the construction finishing
            process â from surface preparation to the final decorative coat.
          </p>
        </div>

        {/* Product group grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {groups.map((group) => (
            <div
              key={group.id}
              className={`border-2 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${group.color} ${
                activeGroup === group.id ? "ring-2 ring-offset-2 ring-dmc-green shadow-lg" : ""
              }`}
              onClick={() =>
                setActiveGroup(activeGroup === group.id ? null : group.id)
              }
            >
              <div className="text-3xl mb-3">{group.icon}</div>
              <h3 className={`font-bold text-base mb-2 ${group.accent}`}>
                {group.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                {group.brief}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${group.badge}`}>
                  {group.products.length} products
                </span>
                <span className={`text-xs font-medium ${group.accent}`}>
                  {activeGroup === group.id ? "â² Hide" : "â¼ View"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded product detail */}
        {activeGroup && (() => {
          const g = groups.find((g) => g.id === activeGroup)!;
          return (
            <div className={`border-2 rounded-2xl p-8 ${g.color} animate-in slide-in-from-top-2 duration-200`}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{g.icon}</span>
                    <h3 className={`text-2xl font-black ${g.accent}`}>{g.title}</h3>
                  </div>
                  <p className="text-gray-600 max-w-2xl leading-relaxed">{g.brief}</p>
                </div>
                <button
                  onClick={() => setActiveGroup(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none p-1"
                >
                  â
                </button>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {g.products.map((p) => (
                  <div key={p.name} className="bg-white/70 rounded-lg p-4 border border-white/80">
                    <div className={`font-semibold text-sm ${g.accent}`}>{p.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{p.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.dmc-mix.com/products/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Full Product Catalogue â
                </a>
                <a href="#contact" className="btn-outline text-sm">
                  Request Samples
                </a>
              </div>
            </div>
          );
        })()}

        {/* CTA if nothing selected */}
        {!activeGroup && (
          <p className="text-center text-gray-400 text-sm mt-2">
            Click any product group to see the full product list
          </p>
        )}
      </div>
    </section>
  );
}
