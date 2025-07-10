import WhatsAppButton from "../WhatsappButton";
import { Footer } from "../footer";
import AnimatedCard from "../animateCard";
import TextHoverAnimation from "../textHoverAnimation";

const grassTypes = [
  {
    name: "Rubber Infilled Turf",
    feature: "Multi-purpose, shock absorbent, low maintenance",
    image: "/pickleTurf/pickle-turf-001.webp",
  },
  {
    name: "Eco Friendly Turf",
    feature: "Made from recyclable materials, ideal for schools",
    image: "/pickleTurf/pickle-turf-001.webp",
  },
  {
    name: "Aqua Eco Friendly Turf",
    feature: "Water-draining & heat-resistant, premium quality",
    image: "/pickleTurf/pickle-turf-001.webp",
  },
];

const courtTypes = [
  {
    name: "Indoor Badminton Court",
    material: "Wooden + Synthetic Combo",
    image: "/pickleTurf/pickle-turf-001.webp",
  },
  {
    name: "Outdoor Badminton Court",
    material: "PP Tiles / Acrylic / Concrete",
    image: "/pickleTurf/pickle-turf-001.webp",
  },
];

const gameMapping = [
  {
    game: "Football",
    grass: "Rubber Infilled / Aqua Eco Turf",
    image: "/blog/Blog1.webp",
  },
  {
    game: "Cricket",
    grass: "Rubber Infilled Turf",
    image: "/blog/Blog10.webp",
  },
  {
    game: "Futsal",
    grass: "Eco Friendly / Rubber Turf",
    image: "/blog/Blog18.webp",
  },
  {
    game: "Volleyball",
    grass: "Aqua Eco Friendly Turf",
    image: "/blog/Blog22.webp",
  },
  {
    game: "Pickleball",
    grass: "Acrylic / PP Tiles",
    image: "/blog/Blog1.webp",
  },
];

const ProductsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-green-950 text-white pt-28 pb-20 px-4 sm:px-6 md:px-16">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-16">
        <p className="uppercase text-secondary text-sm tracking-widest font-secondary">
          Explore Our Infrastructure
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-primary text-white uppercase leading-tight flex justify-center">
          <TextHoverAnimation text="Our Products" />
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          From FIFA-grade football turfs to eco-friendly courts, GameOn delivers
          world-class sports infrastructure powered by modern design.
        </p>
      </section>

      {/* Turf Grass Section */}
      <section className="mb-24">
        <h2 className="text-3xl text-yellow-400 uppercase text-center mb-10 font-semibold">
          Turf Grass Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {grassTypes.map((grass, index) => (
            <AnimatedCard key={index}>
              <div className="bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden shadow-md border border-white/10 hover:scale-105 transition-transform duration-300">
                <img
                  src={grass.image}
                  alt={grass.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-yellow-300 uppercase mb-1">
                    {grass.name}
                  </h3>
                  <p className="text-white text-sm">{grass.feature}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Badminton Court Section */}
      <section className="mb-24">
        <h2 className="text-3xl text-yellow-400 uppercase text-center mb-10 font-semibold">
          Badminton Court Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courtTypes.map((court, index) => (
            <AnimatedCard key={index}>
              <div className="bg-yellow-300 text-black rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src={court.image}
                  alt={court.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold uppercase mb-1">
                    {court.name}
                  </h3>
                  <p className="text-sm">{court.material}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Game Compatibility Section */}
      <section className="mb-24">
        <h2 className="text-3xl text-yellow-400 uppercase text-center mb-10 font-semibold">
          Game & Turf Mapping
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gameMapping.map((item, index) => (
            <AnimatedCard key={index}>
              <div className="bg-black/30 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.game}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-yellow-300 uppercase">
                    {item.game}
                  </h4>
                  <p className="text-sm text-white">{item.grass}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* FIFA Certified Section */}
      <section className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 uppercase mb-4">
          FIFA Pro Certified Installations
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          GameOn Solution uses FIFA Pro-approved synthetic turf materials for
          international-grade football installations across South India.
        </p>
        <img
          src="/blog/blog.webp"
          alt="FIFA Certified Turf"
          className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-md"
        />
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default ProductsPage;
