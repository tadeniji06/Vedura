import { c1, c2, c3, c4 } from "../../assets";
import { motion } from "motion/react";

const ShowCase = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Define unique content for each image
  const imageContent = [
    {
      src: c1,
      title: "Smart Living, Simplified",
      description:
        "Experince intuitive control with integrated technology from climate and lighting to security and entertainment",
    },
    {
      src: c2,
      title: "Everyday Feels Like a Getaway",
      description:
        "Lounge by the pool, stroll through curated gardens, or enjoy the communal spaces crafted for rest and recreation",
    },
    {
      src: c3,
      title: "Where Nature & Design Coexist",
      description:
        "Wake up to serene views, breathe fresh air, and live surrounded by the calming beauty of earth-toned landscapes.",
    },
    {
      src: c4,
      title: "Value That Grows With Time",
      description:
        "Own a part of tomorrow in a premium off-plan development poised for growth, security, and lasting returns.",
    },
  ];

  const createOverlayText = (title, description) => (
    <div className='absolute bottom-0 left-0 right-0 h-1/2 flex flex-col gap-2 md:gap-4 justify-center items-center text-white backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 md:p-4 text-center rounded-b-lg'>
      <span className='text-base md:text-xl font-semibold'>{title}</span>
      <p className='text-xs md:text-sm leading-relaxed'>{description}</p>
    </div>
  );

  return (
    <motion.div
      className='py-8 md:py-16 md:px-16 px-4 flex flex-col justify-center items-center'
      initial='hidden'
      whileInView='visible'
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
          <span className='hidden md:inline'>
            <br />
          </span>
          Vedura is thoughtfully crafted to elevate your everyday living.
        </motion.p>
      </motion.div>

      {/* Desktop layout */}
      <motion.div
        className='hidden md:flex items-center gap-6 lg:gap-8 justify-center w-full max-w-6xl'
        variants={containerVariants}
      >
        {/* Left column */}
        <motion.div
          variants={itemVariants}
          className='flex-1 max-w-sm relative group'
        >
          <motion.img
            className='w-full h-auto object-cover shadow-md rounded-lg'
            src={imageContent[0].src}
            alt='Vendura showcase image 1'
            variants={imageVariants}
            whileHover='hover'
            whileTap={{ scale: 0.98 }}
          />
          {createOverlayText(
            imageContent[0].title,
            imageContent[0].description
          )}
        </motion.div>

        {/* Center column with 2 stacked images */}
        <motion.div
          className='flex flex-col gap-2 lg:gap-4 flex-1 max-w-sm'
          variants={itemVariants}
        >
          <div className='relative group'>
            <motion.img
              className='w-full h-auto object-cover shadow-md rounded-lg'
              src={imageContent[1].src}
              alt='Vendura showcase image 2'
              variants={imageVariants}
              whileHover='hover'
              whileTap={{ scale: 0.98 }}
            />
            {/* {createOverlayText(
              imageContent[1].title,
              imageContent[1].description
            )} */}
          </div>

          <div className='relative group'>
            <motion.img
              className='w-full h-auto object-cover shadow-md rounded-lg'
              src={imageContent[2].src}
              alt='Vendura showcase image 3'
              variants={imageVariants}
              whileHover='hover'
              whileTap={{ scale: 0.98 }}
            />
            {/* {createOverlayText(
              imageContent[2].title,
              imageContent[2].description
            )} */}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          variants={itemVariants}
          className='flex-1 max-w-sm relative group'
        >
          <motion.img
            className='w-full h-auto object-cover shadow-md rounded-lg'
            src={imageContent[3].src}
            alt='Vendura showcase image 4'
            variants={imageVariants}
            whileHover='hover'
            whileTap={{ scale: 0.98 }}
          />
          {createOverlayText(
            imageContent[3].title,
            imageContent[3].description
          )}
        </motion.div>
      </motion.div>

      {/* Mobile layout */}
      <motion.div
        className='md:hidden grid grid-cols-2 gap-4 w-full max-w-md'
        variants={containerVariants}
      >
        {imageContent.map((content, idx) => (
          <motion.div
            key={idx}
            className={`relative group ${
              idx === 0 || idx === 3 ? "col-span-2" : ""
            }`}
            variants={itemVariants}
          >
            <motion.img
              className={`w-full ${
                idx === 0 || idx === 3 ? "h-48 sm:h-56" : "h-40 sm:h-48"
              } object-cover shadow-md rounded-lg`}
              src={content.src}
              alt={`Vendura showcase image ${idx + 1}`}
              variants={imageVariants}
              whileHover='hover'
              whileTap={{ scale: 0.98 }}
            />
            {createOverlayText(content.title, content.description)}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ShowCase;
