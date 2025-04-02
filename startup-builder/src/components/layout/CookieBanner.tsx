import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onDecline }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed bottom-0 left-0 right-0 z-50 px-6 py-5 md:py-6 backdrop-blur-sm ${
        darkMode
          ? "bg-darkSurface/95 border-t border-darkGray-lightest/20"
          : "bg-white/95 border-t border-gray-200 shadow-card"
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex-1">
            <h3
              className={`text-lg font-display font-semibold mb-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Cookie Policy
            </h3>
            <p
              className={`text-base leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We use cookies to enhance your browsing experience, analyze site
              traffic, and personalize content. By continuing to use our
              website, you consent to our{" "}
              <Link
                to="/cookie-policy"
                className={`font-medium underline underline-offset-2 decoration-1 ${
                  darkMode
                    ? "text-primary-light hover:text-primary-light/80"
                    : "text-primary hover:text-primary-dark"
                } transition-colors`}
              >
                cookie policy
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy-policy"
                className={`font-medium underline underline-offset-2 decoration-1 ${
                  darkMode
                    ? "text-primary-light hover:text-primary-light/80"
                    : "text-primary hover:text-primary-dark"
                } transition-colors`}
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 self-end sm:self-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onDecline}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                darkMode
                  ? "text-gray-300 hover:text-white border border-darkGray-lightest/30 hover:border-darkGray-lightest/60 hover:bg-darkGray-light/30"
                  : "text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              Decline
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onAccept}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium text-white ${
                darkMode
                  ? "bg-primary-light hover:bg-primary-light/90"
                  : "bg-primary hover:bg-primary-dark"
              } transition-colors shadow-sm`}
            >
              Accept All Cookies
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
