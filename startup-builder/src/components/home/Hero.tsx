import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";
import BackgroundScene from "./BackgroundScene";

const Hero: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const scrollTop = window.scrollY;
        headingRef.current.style.transform = `translateY(${scrollTop * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Circular gradient colors based on dark mode
  const gradientColors = darkMode
    ? "from-primary-light/20 via-secondary-light/20 to-accent-light/20"
    : "from-primary/30 via-secondary/30 to-accent/30";

  return (
    <section
      className={`relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden noise-bg ${
        darkMode ? "bg-darkBg" : "bg-gradient-to-b from-blue-50 to-lightBg"
      }`}
    >
      {/* 3D Background */}
      <BackgroundScene darkMode={darkMode} />

      {/* Mesh gradient */}
      <div className="mesh-gradient"></div>

      {/* Circular gradient */}
      <div
        className={`absolute inset-0 bg-gradient-radial ${gradientColors} opacity-40 z-0`}
      ></div>

      <div className="container relative z-10 mx-auto px-6 py-20 md:py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className={`inline-block px-5 py-2 rounded-full text-sm font-medium ${
                darkMode
                  ? "bg-primary-light/10 text-primary-light"
                  : "bg-primary/15 text-primary-dark"
              }`}
            >
              <span className="relative inline-flex items-center">
                <span className={`absolute flex h-2 w-2 mr-2 -left-4`}>
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      darkMode ? "bg-primary-light" : "bg-primary"
                    } opacity-75`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${
                      darkMode ? "bg-primary-light" : "bg-primary"
                    }`}
                  ></span>
                </span>
                MVP Development & Technical Strategy
              </span>
            </span>
          </motion.div>

          <motion.h1
            ref={headingRef}
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-10"
          >
            <span
              className={`block ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              Launch Your Vision
            </span>
            <span className="text-gradient block mt-4">With MVP Dynamics</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            We transform your ideas into reality with cutting-edge technology
            and premium design at{" "}
            <span className="font-semibold text-gradient-pink">£120/hour</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              to="/contact"
              className={`relative group px-8 py-4 rounded-xl text-white font-medium overflow-hidden ${
                darkMode ? "bg-primary-light" : "bg-primary"
              } transition-all duration-300 hover:shadow-glow`}
            >
              <span className="relative z-10">Build Your MVP Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary dark:from-primary-light dark:to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <Link
              to="/services"
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                darkMode
                  ? "bg-darkSurface text-white hover:bg-darkSurface-elevated"
                  : "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-sm"
              } hover:shadow-subtle`}
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`mt-20 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } text-sm`}
          >
            <p className="mb-5 font-medium text-base tracking-wide">
              Expertise in technologies that power modern startups
            </p>
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-5 max-w-2xl mx-auto">
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "TypeScript",
                "GraphQL",
                "AWS",
                "Python",
                "Machine Learning",
              ].map((item, index) => (
                <motion.span
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    darkMode
                      ? "bg-darkSurface hover:bg-darkSurface-elevated hover:text-white"
                      : "bg-white hover:bg-gray-50 border border-gray-200 shadow-sm"
                  }`}
                  whileHover={{ y: -3 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className={`w-6 h-10 rounded-full border-2 ${
            darkMode ? "border-gray-500" : "border-gray-400"
          } flex justify-center p-1.5`}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div
            className={`w-1 h-2 rounded-full ${
              darkMode ? "bg-gray-500" : "bg-gray-400"
            }`}
          ></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
