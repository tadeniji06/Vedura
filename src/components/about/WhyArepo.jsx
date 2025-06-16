import { lo, tg } from "../../assets";

const WhyArepo = () => {
  const opportunities = [
    {
      id: 1,
      title: "You're Buying Land in a Destination, Not Just a Location",
      body: "These are not promises on paper they’re blueprints being brought to life. Vedura is set to become a hub for leisure, lifestyle, and high-net-worth tourism, which means your investment is located in a space with rising prestige, foot traffic, and long-term value. As the development matures, so does the value of your land.",
      img: lo,
    },
    {
      id: 2,
      title: "Freedom to Build with Purpose and Vision",
      body: "Unlike gated communities with strict design limitations, Vedura offers you the freedom to create what matters to you. Whether your dream is to build a family retreat, a cutting-edge tech hub, a modern clinic, a creative school, or a vibrant commercial center, Vedura provides the canvas, and you bring the vision",
      img: tg,
    },
    {
      id: 3,
      title:
        "An Investment in Legacy, Business Growth & Sustainable Living",
      body: "These are not promises on paper—they’re blueprints being brought to life. Vedura is set to become a hub for leisure, lifestyle, and high-net-worth tourism, which means your investment is located in a space with rising prestige, foot traffic, and long-term value. As the development matures, so does the value of your land.",
      img: lo,
    },
  ];
  return (
    <section className='mt-16 px-4 max-w-7xl mx-auto'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h2 className='text-primary-green text-3xl md:text-4xl font-bold mb-4'>
          What Makes Vedura Different?
        </h2>
        <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
          At Vedura, you do not just own land. You own a part of something
          that is growing, evolving, and set to thrive.
        </p>
      </div>

      {/* Cards Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className='p-8 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'
          >
            {/* Image */}
            <div className='flex justify-center mx-auto mt-5 w-[60px] h-[60px]'>
              <img
                src={opportunity.img}
                alt={opportunity.title}
                className='object-cover hover:scale-105 transition-transform duration-300 w-full h-full'
              />
            </div>

            {/* Content */}
            <div className='p-6'>
              <h3 className='text-primary-green text-2xl font-semibold mb-3 leading-tight text-center'>
                {opportunity.title}
              </h3>
              <p className='text-gray-600 text-lg leading-relaxed text-center'>
                {opportunity.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhyArepo;
