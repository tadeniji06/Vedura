import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Waitlist = () => {
  return (
    <motion.div
      className='bg-gradient-to-t from-primary-peach to-primary-green p-4 py-16 mt-10 rounded-xl w-full max-w-[1250px] mx-auto flex flex-wrap md:flex-nowrap justify-around items-center gap-6 md:gap-10'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Left side */}
      <motion.div
        className='flex flex-col text-white gap-8 py-4 max-w-[500px]'
        variants={itemVariants}
      >
        <span className='text-2xl md:text-4xl font-bold leading-tight'>
          Launching Soon | Limited <br />
          Opportunities Available
        </span>
        <p className='text-base md:text-lg leading-relaxed'>
          An exclusive resort-inspired residence is{" "}
          <br className='hidden md:block' />
          rising in the heart of Arepo, where modern comfort meets timeless
          tranquility.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className='bg-white text-primary-green px-4 py-3 rounded-xl font-medium w-[160px] shadow hover:shadow-lg transition-all duration-300'
        >
          Join Waitlist
        </motion.button>
      </motion.div>

      {/* Right side */}
      <motion.div
        className='flex justify-center items-center bg-primary-green/25 p-6 md:px-16 rounded-xl text-center w-[300px] md:w-[420px] md:h-[250px] h-[150px]'
        variants={itemVariants}
      >
        <span className='text-white text-xl md:text-3xl font-medium leading-snug'>
          Something <br /> Extraordinary is <br /> Taking Shape
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Waitlist;
