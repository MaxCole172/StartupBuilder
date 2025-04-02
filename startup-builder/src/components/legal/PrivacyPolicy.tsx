import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";

const PrivacyPolicy: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`privacy-policy ${darkMode ? "dark:bg-darkBg" : "bg-white"}`}
    >
      <motion.section
        className={`py-16 ${darkMode ? "bg-darkBg-light" : "bg-gray-50"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h1
            className={`text-4xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Privacy Policy
          </h1>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Last updated: {currentYear}-01-01
          </p>
        </div>
      </motion.section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className={`prose max-w-none ${darkMode ? "prose-invert" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`mb-10 p-8 rounded-xl ${
                darkMode ? "bg-darkBg-light" : "bg-gray-50"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                1. Introduction
              </h2>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                MVP Dynamics ("we", "our", or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                and safeguard your information when you visit our website or use
                our services.
              </p>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Please read this privacy policy carefully. If you do not agree
                with the terms of this privacy policy, please do not access the
                site.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`mb-10 p-8 rounded-xl ${
                darkMode ? "bg-darkBg-light" : "bg-gray-50"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                2. Information We Collect
              </h2>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                We may collect information about you in a variety of ways. The
                information we may collect via the website includes:
              </p>
              <h3
                className={`text-xl font-semibold mt-6 mb-3 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                2.1 Personal Data
              </h3>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Personally identifiable information, such as your name, email
                address, and telephone number, that you voluntarily give to us
                when you register with the website or when you choose to
                participate in various activities related to the website.
              </p>
              <h3
                className={`text-xl font-semibold mt-6 mb-3 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                2.2 Derivative Data
              </h3>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Information our servers automatically collect when you access
                the website, such as your IP address, browser type, operating
                system, access times, and the pages you have viewed directly
                before and after accessing the website.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`mb-10 p-8 rounded-xl ${
                darkMode ? "bg-darkBg-light" : "bg-gray-50"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                3. How We Use Your Information
              </h2>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                We may use the information we collect from you to:
              </p>
              <ul
                className={`list-disc ml-6 mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <li className="mb-2">
                  Provide, operate, and maintain our website
                </li>
                <li className="mb-2">
                  Improve, personalize, and expand our website
                </li>
                <li className="mb-2">
                  Understand and analyze how you use our website
                </li>
                <li className="mb-2">
                  Develop new products, services, features, and functionality
                </li>
                <li className="mb-2">
                  Communicate with you for customer service, updates, and
                  marketing purposes
                </li>
                <li className="mb-2">Send you emails</li>
                <li className="mb-2">Find and prevent fraud</li>
              </ul>
            </motion.div>

            {/* Additional sections would continue here... */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`mb-10 p-8 rounded-xl ${
                darkMode ? "bg-darkBg-light" : "bg-gray-50"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                4. Contact Us
              </h2>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                If you have questions or comments about this Privacy Policy,
                please contact us at:
              </p>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <strong className={darkMode ? "text-white" : "text-gray-900"}>
                  Email:
                </strong>{" "}
                privacy@mvpdynamics.dev
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
