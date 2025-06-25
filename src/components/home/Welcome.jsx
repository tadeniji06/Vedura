import { motion } from "motion/react";
import { Link } from "react-router-dom";
const Welcome = () => {
  // Bouncy spring configuration
  const bounceSpring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    mass: 0.75,
  };

  // Extra bouncy for button
  const buttonBounce = {
    type: "spring",
    damping: 8,
    stiffness: 150,
    mass: 0.5,
  };

  // Container animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ...bounceSpring,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Text animation variants with bounce
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
      transition: bounceSpring,
    },
  };

  // Button specific variants with extra bounce
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: buttonBounce,
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 200,
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      className='bg-primary-peach w-full max-w-6xl flex flex-col gap-4 md:gap-6 justify-center items-center mx-auto p-6 md:p-16 rounded-none md:rounded-2xl'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Title with continuous bounce */}
      <motion.span
        className='text-2xl md:text-3xl lg:text-4xl text-primary-green font-medium text-center'
        variants={itemVariants}
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        Welcome to Vedura
      </motion.span>

      {/* Description with subtle bounce */}
      <motion.p
        className='text-center text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl px-4'
        variants={itemVariants}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        Vedura is not your typical land investment. It is a business and
        family resort in the making-a masterfully planned off-plan
        community that brings together business, comfort, nature, and
        lifestyle.
      </motion.p>

      {/* Button with playful continuous bounce */}
      <motion.button
        className='bg-white rounded-lg px-8 md:px-5 py-3 md:py-3 text-primary-green font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 text-sm md:text-base'
        variants={buttonVariants}
        whileHover='hover'
        whileTap='tap'
        whileFocus={{
          scale: 1.02,
          transition: buttonBounce,
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Link to={"/project"}> Learn More</Link>
      </motion.button>

      {/* Background container bounce */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </motion.div>
  );
};

export default Welcome;
