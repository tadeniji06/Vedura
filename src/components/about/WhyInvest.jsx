import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const WhyInvest = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const investmentReasons = [
    {
      id: 1,
      title: "Guaranteed 70% ROI",
      description:
        "Secure your financial future with our proven track record of exceptional returns on investment.",
      icon: "📈",
      percentage: "70%",
      gradient: "from-primary-green to-primary-peach",
      bgGradient: "from-primary-green/5 to-primary-peach/10",
      shadowColor: "shadow-primary-green/25",
      stats: "Average Annual Return",
    },
    {
      id: 2,
      title: "First of its kind on the mainland",
      description:
        "Be part of a groundbreaking development that sets new standards for luxury living and investment opportunities.",
      icon: "🏆",
      percentage: "1st",
      gradient: "from-primary-peach to-primary-green",
      bgGradient: "from-primary-peach/10 to-primary-green/5",
      shadowColor: "shadow-primary-peach/25",
      stats: "Pioneer Development",
    },
    {
      id: 3,
      title: "Perfect location for your business",
      description:
        "Strategic positioning with excellent connectivity, infrastructure, and growth potential for commercial ventures.",
      icon: "🎯",
      percentage: "15min",
      gradient: "from-primary-green via-primary-peach to-primary-green",
      bgGradient:
        "from-primary-green/10 via-primary-peach/5 to-primary-green/10",
      shadowColor: "shadow-primary-green/20",
      stats: "From CBD Alausa",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className='py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-primary-peach/5 relative overflow-hidden'
      variants={containerVariants}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-20 left-10 w-72 h-72 bg-primary-green/5 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute bottom-20 right-10 w-96 h-96 bg-primary-peach/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header Section */}
        <motion.div
          className='text-center mb-16'
          variants={headerVariants}
        >
          <motion.div
            className='inline-flex items-center gap-3 mb-6'
            whileHover={{ scale: 1.05 }}
          >
          
            <motion.h2
              className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-green to-primary-peach bg-clip-text text-transparent'
              whileHover={{
                backgroundImage:
                  "linear-gradient(45deg, #1e3d36, #ddd1b4, #1e3d36)",
                transition: { duration: 0.5 },
              }}
            >
              Why Invest in Vedura
            </motion.h2>
          </motion.div>

          <motion.p
            className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            At Vedura, you don't just own land. You own a part of something
            that is{" "}
            <motion.span
              className='text-primary-green font-semibold'
              whileHover={{ scale: 1.1, color: "#ddd1b4" }}
            >
              growing
            </motion.span>
            ,{" "}
            <motion.span
              className='text-primary-green font-semibold'
              whileHover={{ scale: 1.1, color: "#ddd1b4" }}
            >
              evolving
            </motion.span>
            , and set to{" "}
            <motion.span
              className='text-primary-green font-semibold'
              whileHover={{ scale: 1.1, color: "#ddd1b4" }}
            >
              thrive
            </motion.span>
            .
          </motion.p>
        </motion.div>

        {/* Investment Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {investmentReasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className={`relative group cursor-pointer`}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(reason.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -10 }}
            >
              {/* Card Background */}
              <motion.div
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${reason.bgGradient} border border-primary-peach/20 backdrop-blur-sm ${reason.shadowColor} transition-all duration-500`}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(30, 61, 54, 0.15)",
                  scale: 1.02,
                  borderColor: "#ddd1b4",
                }}
              >
                {/* Floating Icon */}
                <motion.div
                  className='absolute -top-6 left-8'
                  variants={floatingVariants}
                  animate='animate'
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.gradient} flex items-center justify-center text-2xl shadow-lg`}
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {reason.icon}
                  </motion.div>
                </motion.div>

                {/* Percentage/Stats Display */}
                <motion.div
                  className='text-right mb-4'
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                >
                  <motion.div
                    className={`text-4xl font-bold bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {reason.percentage}
                  </motion.div>
                  <div className='text-sm text-primary-green/70 font-medium'>
                    {reason.stats}
                  </div>
                </motion.div>

                {/* Content */}
                <div className='mt-8'>
                  <motion.h3
                    className='text-2xl font-bold text-primary-green mb-4 leading-tight'
                    whileHover={{ color: "#ddd1b4" }}
                  >
                    {reason.title}
                  </motion.h3>

                  <motion.p
                    className='text-gray-600 leading-relaxed mb-6'
                    animate={
                      hoveredCard === reason.id
                        ? { opacity: 1 }
                        : { opacity: 0.8 }
                    }
                  >
                    {reason.description}
                  </motion.p>
                </div>

                {/* Card border glow */}
                <motion.div
                  className='absolute inset-0 rounded-3xl'
                  animate={
                    hoveredCard === reason.id
                      ? {
                          boxShadow: "0 0 30px rgba(30, 61, 54, 0.2)",
                        }
                      : {
                          boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
                        }
                  }
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyInvest;
