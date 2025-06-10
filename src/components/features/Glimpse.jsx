import { ruz, cuz, huz } from "../../assets";

const Glimpse = () => {
  const features = [
    {
      id: 1,
      icon: "🐎",
      title: "Horse Ranch",
      description:
        "Discover the elegance of equestrian living at Vedura's private horse ranch, where nature, grace, and outdoor leisure come together in a serene, countryside-inspired setting. Whether you're bonding with majestic horses, enjoying a peaceful ride at sunset, or simply soaking in the countryside charm, the horse ranch invites you to reconnect with the outdoors in the most graceful way possible.",
      image: huz,
      imageAlt: "Horse Ranch at Vedura",
    },
    {
      id: 2,
      icon: "⛳",
      title: "18-Hole Golf Course",
      description:
        "Set against a backdrop of lush greenery and rolling terrain, Vedura's 18-hole golf course offers a peaceful escape for both casual and seasoned golfers. Thoughtfully designed to blend with the natural landscape, the course combines beauty with playability — featuring manicured fairways, scenic water elements, and calming views at every turn.",
      image: cuz,
      imageAlt: "Golf Course at Vedura",
    },
    {
      id: 3,
      icon: "🏇",
      title: "Polo",
      description:
        "Experience the grace and tradition of one of the world's most prestigious sports at Vedura's private polo grounds. Surrounded by serene landscapes, our polo facility offers a unique blend of athletic elegance and countryside charm. Whether you're a seasoned rider or a spectator drawn to the beauty of the game, the polo arena reflects the sophistication and leisure that defines life at Vedura.",
      image: ruz,
      imageAlt: "Polo Grounds at Vedura",
    },
  ];

  return (
    <section className='py-20 px-4 bg-gradient-to-b from-white to-primary-peach/5'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='font-bold text-4xl md:text-5xl text-primary-green mb-6'>
            A Glimpse of What to Expect
          </h2>
          <p className='text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed'>
            From tranquil pools to smart-enabled homes, every element of
            Vedura is thoughtfully designed to elevate daily living into a
            resort-inspired experience.
          </p>
        </div>

        {/* Features */}
        <div className='space-y-20'>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className='w-full lg:w-1/2'>
                <div className='relative overflow-hidden rounded-2xl shadow-2xl group'>
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                  {/* Floating Icon */}
                  <div className='absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-lg'>
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='w-full lg:w-1/2 space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='bg-primary-green/10 rounded-full w-12 h-12 flex items-center justify-center text-xl'>
                    {feature.icon}
                  </div>
                  <h3 className='font-bold text-2xl md:text-3xl text-primary-green'>
                    {feature.title}
                  </h3>
                </div>

                <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                  {feature.description}
                </p>

                <button className='bg-primary-green text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-green/90 transition-colors duration-300 inline-flex items-center gap-2'>
                  Learn More
                  <span className='transition-transform duration-300 group-hover:translate-x-1'>
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glimpse;
