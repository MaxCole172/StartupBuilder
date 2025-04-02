import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";

const TermsOfService: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`terms-of-service ${darkMode ? "dark:bg-darkBg" : "bg-white"}`}
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
            Terms of Service
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
                1. Agreement to Terms
              </h2>
              <p
                className={`mb-6 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                These Terms of Service ("Terms") govern your access to and use
                of the website, products, and services ("Services") provided by
                MVP Dynamics ("we," "us," or "our"), and constitute a binding
                legal agreement between you and MVP Dynamics.
              </p>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                You agree that by accessing the website, you have read,
                understood, and agree to be bound by all of these Terms of
                Service. If you do not agree with all of these terms, you are
                prohibited from using the website and must discontinue use
                immediately.
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
                2. Services
              </h2>
              <p
                className={`mb-6 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                MVP Dynamics offers technical services focused on MVP and
                application development, technical consulting, and other digital
                solutions. Our services may include, but are not limited to:
              </p>
              <ul
                className={`list-disc ml-6 mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <li className="mb-2">
                  Custom software development (£120/hour)
                </li>
                <li className="mb-2">Technical consultation (£200/hour)</li>
                <li className="mb-2">System architecture design</li>
                <li className="mb-2">MVP development for startups</li>
                <li className="mb-2">Code reviews and optimization</li>
              </ul>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Services are provided on an hourly basis or as agreed upon in a
                written contract. Rates are subject to change, and we reserve
                the right to adjust our service offerings at any time.
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
                3. Intellectual Property Rights
              </h2>
              <p
                className={`mb-6 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Intellectual property rights in deliverables are typically
                determined by the specific agreement between MVP Dynamics and
                the client. Typically, clients retain ownership of custom code,
                designs, and content created specifically for them, subject to
                payment of all fees.
              </p>
            </motion.div>

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
                If you have questions or comments about these Terms of Service,
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
                legal@mvpdynamics.dev
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
