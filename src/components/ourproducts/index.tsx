import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Footer } from "../footer";

const products = [
  {
    path: "/products/eco-friendly",
    name: "Eco Friendly Turf",
    image: "/ecofriendly/4.webp",
    description:
      "Sustainable and durable turf designed to be eco-friendly while offering a premium sports experience.",
  },
  {
    path: "/products/aqua-eco-friendly",
    name: "Aqua Eco Friendly Turf",
    image: "/aquaturf/3.webp",
    description:
      "A unique water-themed eco turf perfect for modern sports arenas and premium recreation spaces.",
  },
  {
    path: "/products/360-turf",
    name: "360 Turf",
    image: "/360/3.webp",
    description:
      "A complete 360-degree turf solution for multi-sport complexes and professional play areas.",
  },
];

const OurProducts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#081f0e] text-white font-secondary">
      {/* ✅ HERO SECTION */}
      <div className="relative h-[65vh] flex items-center justify-center">
        <img
          src="/homepageSlideImages/2.jpg"
          alt="Our Premium Turfs"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-primary text-secondary uppercase mb-4">
            Our Premium Turfs
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl">
            Explore our range of eco-friendly, durable, and high-performance
            turfs designed for professional arenas, schools, and sports
            enthusiasts.
          </p>
        </motion.div>
      </div>

      {/* ✅ INTRO SECTION */}
      <div className="max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-primary text-secondary mb-6"
        >
          High-Quality, Eco-Friendly Sports Surfaces
        </motion.h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          GameOn Solution offers premium artificial turfs with sustainability,
          safety, and durability in mind. Our products are designed to reduce
          maintenance, stay cool under the sun, and provide an exceptional
          playing experience for all sports.
        </p>
      </div>

      {/* ✅ PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-20">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => navigate(product.path)}
            className="bg-[#102e19] rounded-2xl overflow-hidden shadow-md border border-green-800 hover:border-secondary transition-all duration-300 cursor-pointer group"
          >
            {/* Image */}
            <div className="overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h2 className="text-xl font-semibold text-secondary mb-2">
                {product.name}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {product.description}
              </p>
              <button
                onClick={() => navigate(product.path)}
                className="mt-5 px-5 py-2 bg-secondary text-black rounded-lg font-medium hover:bg-white transition"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ FOOTER */}
      <Footer />
    </div>
  );
};

export default OurProducts;
