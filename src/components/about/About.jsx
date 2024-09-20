import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  // Define animation variants for card entry
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="md:flex ml-20 mt-2">
      {/* Cards Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-4 border-red-800 w-1/2"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.3 }} // Trigger animations on scroll
      >
        <motion.div className="relative">
          <div className="absolute right-0 top-1/2 hidden md:block">
            <h1 className="w-36 h-1 bg-red-500"></h1>
          </div>
        </motion.div>

        {/* Cards with hover animations */}
        <motion.div
          className="bg-amber-600 w-64 h-64 text-3xl flex flex-col justify-center items-center text-center text-white rounded-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1>Who we are?</h1>
          <span>01</span>
        </motion.div>

        <motion.div
          className="bg-lime-400 w-64 h-64 text-3xl flex flex-col justify-center items-center text-center text-white rounded-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1>Creative Vibes</h1>
          <span>02</span>
        </motion.div>

        <motion.div
          className="bg-slate-600 w-64 h-64 text-3xl flex flex-col justify-center items-center text-center text-white rounded-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1>Creative Connection</h1>
          <span>03</span>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <div className="w-1/2">
        <motion.div
          className="flex flex-col justify-center items-start h-screen"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }} // Trigger animation on scroll
        >
          <h1 className="text-6xl font-bold mb-5">About Us</h1>
          <p className="text-3xl mb-5">Bringing Communities Together</p>
          {/* Smooth scroll to "discover more" section */}
          <ScrollLink
            to="discover-section"
            smooth={true}
            duration={100}
            className="cursor-pointer"
          >
            <motion.button
              className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Discover more
            </motion.button>
          </ScrollLink>
        </motion.div>

        {/* Underline Animation */}
        <div className="relative">
          <motion.div
            className="absolute right-0 bottom-36 hidden md:block"
            initial={{ width: 0 }}
            animate={{ width: "9rem" }}
            transition={{ duration: 1 }}
          >
            <h1 className="w-36 h-1 bg-red-500"></h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
