import { polo, cas, chop, hero9 } from "../../assets";

const Expectations = () => {
  const perkDetails = [
    {
      id: 1,
      title: "Polo",
      img: polo,
      body: "Experience the grace and tradition of one of the world's most prestigious sports at Vedura's private polo grounds. Surrounded by serene landscapes, our polo facility offers a unique blend of athletic elegance and countryside charm.",
      icon: "🏇",
    },
    {
      id: 2,
      title: "Casino",
      img: cas,
      body: "Step into a world of refined entertainment where luxury meets excitement. Vedura's private casino offers a tasteful escape for leisure, with discreet elegance and high-end ambiance at its core.",
      icon: "🎰",
    },
    {
      id: 3,
      title: "Helipad",
      img: chop,
      body: "Designed for seamless, private arrivals, Vedura's exclusive helipad offers effortless access and convenience - a statement for residents who value time and elevated living.",
      icon: "🚁",
    },
    {
      id: 4,
      title: "24/7 Security",
      img: hero9,
      body: "Round-the-clock professional security ensures your peace of mind. Our comprehensive security system combines advanced technology with trained personnel to provide complete protection for residents and their properties.",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-primary-green mb-6">
            Other Features in Vedura
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            From tranquil pools to smart-enabled homes, every element of Vedura is thoughtfully designed to elevate daily living into a resort-inspired experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {perkDetails.map((perk) => (
            <div
              key={perk.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-green/20 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={perk.img}
                  alt={perk.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg">
                  {perk.icon}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-2xl">
                    {perk.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {perk.body}
                </p>

                <button className="w-full bg-primary-green text-white py-3 rounded-full font-semibold hover:bg-primary-green/90 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-primary-green/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-4">
              Experience Unmatched Luxury
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              These premium amenities represent just a glimpse of the extraordinary lifestyle awaiting you at Vedura Resort.
            </p>
            <button className="bg-primary-green text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-green/90 transition-colors duration-300">
              Explore All Amenities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expectations;
