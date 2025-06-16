import { c6, c7, c8 } from "../../assets";
import { motion } from "motion/react";

const ShowCase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Updated content with only 3 cards (removed the first one)
  const imageContent = [
    {
      src: c6,
      title: "Everyday Feels Like a Getaway",
      description:
        "Lounge by the pool, stroll through curated gardens, or enjoy the communal spaces crafted for rest and recreation",
      color: "bg-primary-green",
    },
    {
      src: c7,
      title: "Where Nature & Design Coexist",
      description:
        "Wake up to serene views, breathe fresh air, and live surrounded by the calming beauty of earth-toned landscapes.",
      color: "bg-primary-green",
    },
    {
      src: c8,
      title: "Value That Grows With Time",
      description:
        "Own a part of tomorrow in a premium off-plan development poised for growth, security, and lasting returns.",
      color: "bg-primary-green",
    },
  ];

  const ImageCard = ({ content, index, className = "" }) => (
    <motion.div
      className={`relative ${className}`}
      variants={itemVariants}
    >
      {/* Image */}
      <motion.div
        className="relative overflow-hidden rounded-2xl shadow-lg h-64 md:h-80"
        variants={imageVariants}
        whileHover="hover"
      >
        <img
          className="w-full h-full object-cover"
          src={content.src}
          alt={`Vendura showcase - ${content.title}`}
        />
        {/* Subtle overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>

      {/* Label Card */}
      <motion.div
        className={`${content.color} text-white p-4 md:p-6 rounded-2xl shadow-xl mt-4 hover:shadow-2xl transition-shadow duration-300`}
        whileHover={{ y: -2 }}
      >
        <h3 className="font-bold text-lg md:text-xl mb-2 text-center">
          {content.title}
        </h3>
        <p className="text-sm md:text-base text-white/90 leading-relaxed text-center">
          {content.description}
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.section
      className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-primary-peach/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
        >
          <motion.h2
            className="text-primary-green font-bold text-3xl md:text-5xl mb-6"
            variants={itemVariants}
          >
            A Curated Blend Of Nature, Design, and Comfort
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A space where families can live well, where businesses can thrive,
            and where nature is not preserved, but celebrated.
          </motion.p>
        </motion.div>

        {/* Desktop Layout - Clean 3-column grid */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-12"
          variants={containerVariants}
        >
          {imageContent.map((content, index) => (
            <ImageCard
              key={index}
              content={content}
              index={index}
            />
          ))}
        </motion.div>

        {/* Tablet Layout - 2 columns with better spacing */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:hidden gap-8"
          variants={containerVariants}
        >
          {/* First two cards */}
          {imageContent.slice(0, 2).map((content, index) => (
            <ImageCard
              key={index}
              content={content}
              index={index}
            />
          ))}
          {/* Third card centered */}
          <div className="md:col-span-2 max-w-md mx-auto">
            <ImageCard
              content={imageContent[2]}
              index={2}
            />
          </div>
        </motion.div>

        {/* Mobile Layout - Single column */}
        <motion.div
          className="md:hidden space-y-8"
          variants={containerVariants}
        >
          {imageContent.map((content, index) => (
            <ImageCard
              key={index}
              content={content}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ShowCase;