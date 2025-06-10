import { spa } from "../../assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HighLights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 1.1 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#10b981",
      color: "#ffffff",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="py-16 px-4 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header Section */}
      <motion.div 
        className="text-center mb-12"
        variants={headerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl text-primary-green font-bold mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          Feature Highlights
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          From lush gardens to smart home integration, every feature at
          Vedura is thoughtfully crafted to elevate your everyday living. A
          glimpse into the lifestyle and space you'll soon call home
        </motion.p>
      </motion.div>

      {/* Main Content Section */}
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center gap-0">
          {/* Card Section - Overlapping the image */}
          <motion.div 
            className="relative z-10 lg:w-1/2 lg:pr-8"
            variants={cardVariants}
          >
            <motion.div 
              className="p-8 lg:p-10 flex flex-col gap-6 bg-white border border-gray-200 rounded-2xl shadow-xl lg:mr-[-100px] lg:mt-8"
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h1 
                className="text-primary-green text-2xl lg:text-3xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                🧘‍♀️ Wellness & Spa
              </motion.h1>
              
              <motion.p 
                className="text-gray-700 leading-relaxed text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Escape into calm at Vedura's dedicated Wellness Centre — a
                sanctuary designed to restore balance, beauty, and inner peace.
                From rejuvenating spa treatments to serene meditation spaces,
                every detail is curated to help you unwind, recharge, and
                reconnect. Surrounded by nature and crafted with earth-toned
                elegance, it's a space where self-care becomes a daily ritual.
              </motion.p>
              
              <motion.button 
                className="bg-white border-2 border-primary-green rounded-xl px-6 py-3 text-primary-green font-semibold self-start"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                View All Features
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="lg:w-1/2 mt-8 lg:mt-0"
            variants={imageVariants}
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img 
                src={spa} 
                alt="Wellness & Spa at Vedura Resort"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating badge */}
              <motion.div 
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-primary-green font-semibold text-sm">Premium Spa</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-32 h-32 bg-primary-peach/10 rounded-full -z-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-0 w-24 h-24 bg-primary-green/10 rounded-full -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.section>
  );
};

export default HighLights;
