import { c1, c2, c3, c4 } from "../../assets";
import { motion } from "motion/react";

const ShowCase = () => {
  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      className='py-8 md:py-16 md:px-16 px-4 flex flex-col justify-center items-center'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className='flex flex-col gap-4 mb-8 md:mb-12'
        variants={containerVariants}
      >
        <motion.h1 
          className='text-primary-green font-bold md:text-4xl text-center text-2xl'
          variants={itemVariants}
        >
          A Curated Blend Of Nature, Design, and Comfort
        </motion.h1>
        <motion.p 
          className='font-medium text-sm md:text-xl text-center max-w-3xl'
          variants={itemVariants}
        >
          From lush gardens to smart home integration, every feature at{" "}
          <span className="hidden md:inline"><br /></span>
          Vendura is thoughtfully crafted to elevate your everyday living.
        </motion.p>
      </motion.div>

      {/* Desktop layout - 3 columns */}
      <motion.div 
        className='hidden md:flex items-center gap-6 lg:gap-8 justify-center w-full max-w-6xl'
        variants={containerVariants}
      >
        {/* Left column */}
        <motion.div variants={itemVariants} className="flex-1 max-w-sm">
          <motion.img
            className='w-full h-auto object-cover shadow-md rounded-lg transition-shadow duration-300'
            src={c1}
            alt='Vendura showcase image 1'
            variants={imageVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>

        {/* Center column */}
        <motion.div 
          className='flex flex-col gap-4 lg:gap-6 flex-1 max-w-sm'
          variants={itemVariants}
        >
          <motion.img
            className='w-full h-auto object-cover shadow-md rounded-lg transition-shadow duration-300'
            src={c2}
            alt='Vendura showcase image 2'
            variants={imageVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          />
          <motion.img
            className='w-full h-auto object-cover shadow-md rounded-lg transition-shadow duration-300'
            src={c3}
            alt='Vendura showcase image 3'
            variants={imageVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>

        {/* Right column */}
        <motion.div variants={itemVariants} className="flex-1 max-w-sm">
          <motion.img
            className='w-full h-auto object-cover shadow-md rounded-lg transition-shadow duration-300'
            src={c4}
            alt='Vendura showcase image 4'
            variants={imageVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>
      </motion.div>

      {/* Mobile layout - 2x2 grid */}
      <motion.div 
        className='md:hidden grid grid-cols-2 gap-4 w-full max-w-md'
        variants={containerVariants}
      >
        <motion.div 
          className="col-span-2"
          variants={itemVariants}
        >
          <motion.img
            className='w-full h-48 sm:h-56 object-cover shadow-md rounded-lg'
            src={c1}
            alt='Vendura showcase image 1'
            variants={imageVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <motion.img
            className='w-full h-40 sm:h-48 object-cover shadow-md rounded-lg'
            src={c2}
            alt='Vendura showcase image 2'
            variants={imageVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <motion.img
            className='w-full h-40 sm:h-48 object-cover shadow-md rounded-lg'
            src={c3}
            alt='Vendura showcase image 3'
            variants={imageVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>
        
        <motion.div 
          className="col-span-2"
          variants={itemVariants}
        >
          <motion.img
            className='w-full h-48 sm:h-56 object-cover shadow-md rounded-lg'
            src={c4}
            alt='Vendura showcase image 4'
            variants={imageVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ShowCase;