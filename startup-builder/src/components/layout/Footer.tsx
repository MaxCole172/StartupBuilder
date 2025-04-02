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
      } text-white relative overflow-hidden noise-bg py-20`}
    >
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-secondary/5 to-accent/10 dark:from-primary-dark/20 dark:via-secondary-dark/10 dark:to-accent-dark/20 opacity-30 z-0"></div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-2xl font-display font-bold tracking-tight">
                <span
                  className={
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  }
                >
                  MVP
                </span>
                <span
                  className={
                    darkMode ? "text-accent-light" : "text-tertiary-light"
                  }
                >
                  Dynamics
                </span>
              </h3>
            </Link>
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
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
            <h4 className="text-lg font-display font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className={`text-gray-300 hover:${
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  } transition-colors duration-200`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`text-gray-300 hover:${
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  } transition-colors duration-200`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`text-gray-300 hover:${
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  } transition-colors duration-200`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className={`text-gray-300 hover:${
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  } transition-colors duration-200`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`text-gray-300 hover:${
                    darkMode ? "text-primary-light" : "text-secondary-light"
                  } transition-colors duration-200`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-display font-semibold mb-6 text-white">
              Contact Us
            </h4>
            <p className="text-gray-300 mb-6">
              Need assistance with your project? Have questions about our
              services?
            </p>
            <Link
              to="/contact"
              className={`inline-block px-6 py-3 rounded-lg ${
                darkMode
                  ? "bg-primary-light hover:bg-primary"
                  : "bg-secondary-light hover:bg-secondary"
              } text-white font-medium transition-all duration-300`}
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`border-t ${
            darkMode ? "border-gray-800" : "border-gray-700"
          } mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm`}
        >
          <p>&copy; {currentYear} MVP Dynamics. All rights reserved.</p>
          <div className="mt-6 md:mt-0 flex flex-wrap justify-center gap-6">
            <Link
              to="/privacy-policy"
              className={`hover:${
                darkMode ? "text-primary-light" : "text-secondary-light"
              } transition-colors duration-200`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className={`hover:${
                darkMode ? "text-primary-light" : "text-secondary-light"
              } transition-colors duration-200`}
            >
              Terms of Service
            </Link>
            <Link
              to="/cookie-policy"
              className={`hover:${
                darkMode ? "text-primary-light" : "text-secondary-light"
              } transition-colors duration-200`}
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
