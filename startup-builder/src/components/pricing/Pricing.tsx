import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="pricing-page">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 sm:px-6 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 md:mb-4 tracking-tight">
            Transparent Pricing
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-blue-100">
            Choose the package that fits your project's needs and budget
          </p>
        </motion.div>
      </section>

      {/* Pricing Content */}
      <section
        className={`py-12 md:py-16 ${darkMode ? "bg-darkBg" : "bg-white"}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Value Proposition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-10 md:mb-16"
          >
            <h2
              className={`text-2xl sm:text-3xl font-display font-bold mb-4 md:mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Simple, Predictable Pricing
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              At MVP Dynamics, we keep our pricing straightforward with fixed
              hourly rates and pre-packaged options based on the scope of your
              project. No hidden fees, no surprises - just transparent pricing
              that gives you control over your investment.
            </p>
          </motion.div>

          {/* Pricing Packages */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Standard Package */}
            <motion.div
              variants={fadeInUp}
              className={`rounded-2xl overflow-hidden ${
                darkMode
                  ? "bg-darkSurface shadow-dark-card"
                  : "bg-white shadow-card"
              } transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-primary`}
            >
              <div className="bg-primary text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-700">
                <h3
                  className={`text-xl sm:text-2xl font-display font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  MVP Starter
                </h3>
                <p
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } mb-4 sm:mb-6 text-sm sm:text-base`}
                >
                  Perfect for validating your idea with a functional MVP
                </p>
                <div className="flex items-baseline">
                  <span
                    className={`text-3xl sm:text-4xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    £4,500
                  </span>
                  <span
                    className={`ml-2 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    package
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      <strong>40 hours</strong> of developer time
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      <strong>2</strong> consultation calls (60 min each)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Requirements document
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      GitHub repository setup
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Basic CI/CD pipeline
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      2 weeks support after delivery
                    </span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full py-2.5 sm:py-3 px-4 rounded-lg bg-primary hover:bg-primary-dark text-center font-medium transition-colors text-white"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Growth Package */}
            <motion.div
              variants={fadeInUp}
              className={`rounded-2xl overflow-hidden ${
                darkMode
                  ? "bg-darkSurface shadow-dark-card"
                  : "bg-white shadow-card"
              } transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                <h3
                  className={`text-2xl font-display font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Business Growth
                </h3>
                <p
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } mb-6`}
                >
                  For established startups looking to expand their product
                </p>
                <div className="flex items-baseline">
                  <span
                    className={`text-4xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    10,000
                  </span>
                  <span
                    className={`ml-2 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    package
                  </span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      <strong>100 hours</strong> of developer time
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      <strong>4</strong> consultation calls (60 min each)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Comprehensive technical documentation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Advanced CI/CD setup with testing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Performance optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      1 month support after delivery
                    </span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full py-3 px-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-center font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-gray-900 dark:text-white"
                >
                  Scale Your Business
                </Link>
              </div>
            </motion.div>

            {/* Enterprise Package */}
            <motion.div
              variants={fadeInUp}
              className={`rounded-2xl overflow-hidden ${
                darkMode
                  ? "bg-darkSurface shadow-dark-card"
                  : "bg-white shadow-card"
              } transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                <h3
                  className={`text-2xl font-display font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Enterprise Solution
                </h3>
                <p
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } mb-6`}
                >
                  Tailored solutions for complex enterprise requirements
                </p>
                <div className="flex items-baseline">
                  <span
                    className={`text-4xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Custom
                  </span>
                  <span
                    className={`ml-2 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    pricing
                  </span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Custom development hours
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Dedicated technical consultant
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Enterprise architecture planning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Full system documentation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Advanced security implementation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Extended support plans available
                    </span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full py-3 px-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-center font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-gray-900 dark:text-white"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Hourly Rates */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto mt-20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
          >
            <h2
              className={`text-2xl font-display font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Fixed Hourly Rates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Development Services
                </h3>
                <div className="bg-gray-50 dark:bg-darkBg-light p-6 rounded-xl">
                  <div className="flex items-baseline mb-3">
                    <span
                      className={`text-3xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      £120
                    </span>
                    <span
                      className={`ml-2 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      per hour
                    </span>
                  </div>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } mb-4`}
                  >
                    Expert development across various technologies
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        Frontend and backend implementation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        Custom software development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        API development and integration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        Database design and optimization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        DevOps and CI/CD setup
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Consultation Services
                </h3>
                <div className="bg-gray-50 dark:bg-darkBg-light p-6 rounded-xl">
                  <div className="flex items-baseline mb-3">
                    <span
                      className={`text-3xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      £200
                    </span>
                    <span
                      className={`ml-2 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      per hour
                    </span>
                  </div>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } mb-4`}
                  >
                    Strategic technical guidance and expertise
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        Technical strategy sessions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        Architecture design and review
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        Technology stack consultation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        Technical due diligence
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        Development process optimization
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`py-16 ${darkMode ? "bg-darkBg-light" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl font-display font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Frequently Asked Questions
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Have questions about our pricing? Find answers to common questions
              below.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className={`p-6 rounded-xl ${
                darkMode ? "bg-darkSurface" : "bg-white"
              } shadow-sm`}
            >
              <h3
                className={`text-xl font-semibold mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                What happens if we exceed the allocated hours?
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                If your project requires additional hours beyond the package,
                we'll charge our standard hourly rate. We'll always communicate
                clearly before doing additional work.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className={`p-6 rounded-xl ${
                darkMode ? "bg-darkSurface" : "bg-white"
              } shadow-sm`}
            >
              <h3
                className={`text-xl font-semibold mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Can we split hours between development and consultation?
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                Yes, our packages are flexible. You can allocate the hours based
                on your project needs, though we recommend following our
                suggested split for optimal results.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className={`p-6 rounded-xl ${
                darkMode ? "bg-darkSurface" : "bg-white"
              } shadow-sm`}
            >
              <h3
                className={`text-xl font-semibold mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Do you offer ongoing maintenance plans?
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                Yes, we offer various maintenance plans after the initial
                project is completed. These can be discussed during the project
                or after completion.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-blue-100">
              Contact us today to discuss your project requirements and how we
              can help bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-primary font-medium hover:bg-opacity-90 transition-all shadow-lg"
            >
              Contact Us <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
