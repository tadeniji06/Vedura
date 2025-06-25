import { land, legacy, inv } from "../../assets";

const WhoisVeduraFor = () => {
  const opportunities = [
    {
      id: 1,
      title: "Individuals in search for Long term value",
      body: "Whether you're planning to develop immediately or hold for appreciation, Vedura offers you prime real estate in a growth corridor, where infrastructure development, urban expansion, and rising demand will continue to drive up land value.",
      img: land,
    },
    {
      id: 2,
      title: "Visionary Investors",
      body: "Vedura is for Visionary investors who want to build on the mainland with intention. it combines accessibility, affordability, and future upside, making it ideal for intentional developments that blend function with lasting impact.",
      img: inv,
    },
    {
      id: 3,
      title: "People who care about legacy",
      body: "This opportunity is for those who think beyond the transaction and care about what their investment represents. It's for people who want to leave something behind—a story, a legacy, a contribution to community or family",
      img: legacy,
    },
  ];

  return (
    <section className='mt-16 px-4 max-w-7xl mx-auto'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h2 className='text-primary-green text-3xl md:text-4xl font-bold mb-4'>
          Who is Vedura For?
        </h2>
        <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
          Vedura offers investors the rare opportunity to own land in a
          purpose-driven destination - it's the first of its kind on the
          mainland
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
            <div className='overflow-hidden flex justify-center items-center mt-5'>
              <img 
                src={opportunity.img} 
                alt={opportunity.title}
                className='object-cover hover:scale-105 transition-transform duration-300'
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

export default WhoisVeduraFor;
