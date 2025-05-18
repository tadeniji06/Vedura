import { motion } from "framer-motion";
import { hyt1, hyt2, hyt3, hyt4 } from "../../assets";

const features = [
  {
    img: hyt1,
    title: "Smart Homes",
    desc: "Control lighting, climate and security all from your fingertips.",
  },
  {
    img: hyt2,
    title: "Resort Amenities",
    desc: "Poolside retreats, landscaped walkways, and calming communal spaces await.",
  },
  {
    img: hyt3,
    title: "Nature-Inspired Living",
    desc: "Wake up to greenery, birdsong and open skies, all just outside your door.",
  },
  {
    img: hyt4,
    title: "Secure Investment",
    desc: "Own a piece of a premium off-plan community in a fast-growing location.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 150,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
    },
  },
};

const HighLights = () => {
  return (
    <motion.div
      className='flex flex-col gap-6 justify-start mt-12 px-4 md:px-8 lg:px-20 xl:px-36 w-full'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.span
        className='text-3xl md:text-4xl lg:text-5xl text-primary-green font-semibold text-center md:text-left'
        variants={itemVariants}
      >
        Feature Highlights
      </motion.span>

      <motion.p
        className='text-center md:text-left text-gray-600 text-base md:text-lg max-w-3xl mx-auto md:mx-0 leading-relaxed'
        variants={itemVariants}
      >
        From lush gardens to smart home integration, every feature at
        Vendura is thoughtfully crafted to elevate your everyday living.
      </motion.p>

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className='bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col  gap-3 group cursor-pointer'
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              rotate: [0, 1, -1, 0],
              transition: { duration: 0.6 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className=' object-cover rounded-md'
            />
            <span className='text-lg font-semibold text-primary-green'>
              {feature.title}
            </span>
            <p className='text-sm text-gray-500 leading-snug'>
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HighLights;
