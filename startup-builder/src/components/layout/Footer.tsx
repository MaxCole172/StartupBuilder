import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ThemeContext from "../../context/ThemeContext";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { darkMode } = useContext(ThemeContext);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      className={`${
        darkMode ? "bg-darkBg-dark" : "bg-gray-900"
      } text-white relative overflow-hidden noise-bg py-16 md:py-20`}
    >
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-secondary/5 to-accent/10 dark:from-primary-dark/20 dark:via-secondary-dark/10 dark:to-accent-dark/20 opacity-30 z-0"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1"
          >
            <Link to="/" className="inline-block mb-4 md:mb-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight">
                <span
                  className={darkMode ? "text-primary-light" : "text-primary"}
                >
                  MVP
                </span>
                <span
                  className={darkMode ? "text-accent-light" : "text-accent"}
                >
                  Dynamics
                </span>
              </h3>
            </Link>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
              Expert technical services for startups and established businesses.
              We transform your vision into reality with cutting-edge
              technology.
            </p>
            <div className="flex space-x-5">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-primary-light"
                    : "text-gray-300 hover:text-secondary-light"
                } transition-colors`}
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-primary-light"
                    : "text-gray-300 hover:text-secondary-light"
                } transition-colors`}
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-primary-light"
                    : "text-gray-300 hover:text-secondary-light"
                } transition-colors`}
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-primary-light"
                    : "text-gray-300 hover:text-secondary-light"
                } transition-colors`}
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-display font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <Link
                  to="/"
                  className={`text-gray-300 hover:${
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  } transition-colors duration-200 text-sm sm:text-base`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`text-gray-300 hover:${
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  } transition-colors duration-200 text-sm sm:text-base`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`text-gray-300 hover:${
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  } transition-colors duration-200 text-sm sm:text-base`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className={`text-gray-300 hover:${
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  } transition-colors duration-200 text-sm sm:text-base`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`text-gray-300 hover:${
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  } transition-colors duration-200 text-sm sm:text-base`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-display font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Have a project in mind? Get in touch to discuss how we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary transition-colors rounded-lg text-white font-medium text-sm sm:text-base"
            >
              Get in Touch
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 md:mt-16 pt-6 md:pt-8 pb-2 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0 text-gray-400 text-center sm:text-left">
              © {currentYear} MVP Dynamics. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-gray-400 text-xs sm:text-sm">
              <Link
                to="/legal/privacy-policy"
                className="hover:text-white transition-colors mb-2 sm:mb-0"
              >
                Privacy Policy
              </Link>
              <Link
                to="/legal/terms"
                className="hover:text-white transition-colors mb-2 sm:mb-0"
              >
                Terms of Service
              </Link>
              <Link
                to="/legal/cookies"
                className="hover:text-white transition-colors mb-2 sm:mb-0"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
