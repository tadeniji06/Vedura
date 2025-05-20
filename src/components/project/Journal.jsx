import { p2, plan, eng } from "../../assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Journal = () => {
  const info = [
    {
      name: "Laying the Vision",
      img: p2,
      desc: "Final preparations are underway as we prepare the ground for something remarkable. Approvals, surveys, and mobilization are in progress.",
    },
    {
      name: "Designing the Future",
      img: plan,
      desc: "Our architectural plans are now finalized, blending form, function, and nature to create timeless spaces.",
    },
    {
      name: "Breaking Ground, Building Roots",
      img: eng,
      desc: "With the foundation work in motion, Vedura begins to take shape from the ground up, setting the stage for lasting strength and beauty.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });

  return (
    <div className="mt-6 p-4 md:p-5 flex flex-col gap-4 md:gap-6 max-w-[1600px] mx-auto">
      <motion.span
        ref={headingRef}
        className="text-xl md:text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Vedura Progress Journal
      </motion.span>
      
      <motion.p
        className="text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Follow the transformation of Vedura at Arepo, from ground-breaking moments
        to architectural milestones, and witness your future home come to life.
      </motion.p>
      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {info.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-3 md:gap-4 group"
            variants={itemVariants}
          >
            <motion.div 
              className="w-full h-48 sm:h-56 md:h-[320px] overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                className="h-full w-full object-cover transition-transform duration-700"
                src={item.img}
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
            
            <motion.span 
              className="text-lg md:text-xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              {item.name}
            </motion.span>
            
            <motion.p
              className="text-sm md:text-base text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
            >
              {item.desc}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Journal;