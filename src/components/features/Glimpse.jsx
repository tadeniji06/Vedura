import { motion } from "framer-motion";
import { pool, home, gradens, comm } from "../../assets";

const Glimpse = () => {
  const glimpses = [
    {
      image: pool,
      name: "Pool & Spa",
      desc: `Unwind in serene water features designed to refresh both body and mind. Whether for leisure or quiet reflection, the poolside spaces offer a daily escape within your own community.`,
    },
    {
      image: home,
      name: "Smart Homes",
      desc: `Enjoy intelligent living with integrated tech for comfort, safety, and simplicity. From lighting to security, every home responds to your lifestyle with seamless automation.`,
    },
    {
      image: gradens,
      name: "Gardens & Outdoor Living",
      desc: `Relax amid curated greenery, walking paths, and tranquil open-air spaces. Lush landscapes invite you to connect with nature and enjoy peaceful moments outdoors.`,
    },
    {
      image: comm,
      name: "Community Center",
      desc: `Connect, socialize, or work in thoughtfully designed shared environments. This hub fosters a sense of belonging with elegant spaces for meetings, events, or creative thinking.`,
    },
  ];

  return (
    <section className='px-6 md:px-16 lg:px-36 py-16'>
      <div className='flex flex-col gap-4 text-center mb-10'>
        <h2 className='font-bold text-3xl md:text-4xl'>
          A Glimpse of What to Expect
        </h2>
        <p className='text-gray-600'>
          From tranquil pools to smart-enabled homes, every element of
          Vedura is thoughtfully designed{" "}
          <br className='hidden md:block' />
          to elevate daily living into a resort-inspired experience.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {glimpses.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className='bg-primary-peach p-5 shadow-lg flex flex-col gap-4 items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl'
          >
            <img
              src={item.image}
              alt={item.name}
              className='object-cover rounded-md'
            />
            <h3 className='text-lg md:text-xl font-bold text-primary-green'>
              {item.name}
            </h3>
            <p className='text-sm text-gray-700 leading-relaxed'>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Glimpse;
