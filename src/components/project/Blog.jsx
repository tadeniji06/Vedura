import { useState } from "react";
import { motion } from "framer-motion";
import { b1, b2, b3 } from "../../assets";

const Blog = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const blogs = [
    {
      image: b1,
      title: "Rising Into Reality",
      desc: "Walls are going up and the vision is coming to life as structural work advances across the site.",
      date: "May 12, 2025"
    },
    {
      image: b2,
      title: "Details That Define Living",
      desc: "From refined finishes to smart integrations, every element is now crafted to reflect luxury, comfort, and calm.",
      date: "May 5, 2025"
    },
    {
      image: b3,
      title: "Designing the Future",
      desc: "Our architectural plans are now finalized, blending form, function, and nature to create timeless spaces.",
      date: "April 28, 2025"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Updates</h2>
        <div className="w-24 h-1 bg-primary-green mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Stay informed about our progress and insights as we bring Vedura to life
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogs.map((blog, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <motion.img 
                src={blog.image} 
                alt={blog.title}
                variants={imageVariants}
                animate={hoveredIndex === index ? "hover" : ""}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-sm text-primary-green font-medium mb-2">{blog.date}</span>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{blog.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{blog.desc}</p>
              
              {/* <motion.button 
                className="flex items-center text-primary-green font-medium mt-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Read More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </motion.button> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-green text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          View All Articles
        </motion.button>
      </motion.div> */}
    </div>
  );
};

export default Blog;