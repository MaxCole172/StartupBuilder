import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCode,
  faComments,
  faLightbulb,
  faChartLine,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
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

  const packages = [
    {
      name: "MVP Starter",
      price: "£4,000",
      description:
        "Perfect for startups looking to validate their idea with a functional MVP",
      features: [
        "40 hours of developer time",
        "2 consultation calls (1 hour each)",
        "Basic requirements document",
        "GitHub repository setup",
        "Basic CI/CD pipeline",
        "2 weeks of support after delivery",
      ],
      icon: faRocket,
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Business Growth",
      price: "£8,000",
      description:
        "Ideal for established startups looking to expand their product",
      features: [
        "80 hours of developer time",
        "4 consultation calls (1 hour each)",
        "Comprehensive technical documentation",
        "Advanced CI/CD setup with testing",
        "Performance optimization",
        "1 month of support after delivery",
      ],
      icon: faChartLine,
      cta: "Scale Your Business",
      popular: false,
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      description: "Tailored solutions for complex enterprise requirements",
      features: [
        "Custom development hours",
        "Dedicated technical consultant",
        "Enterprise architecture planning",
        "Full system documentation",
        "Advanced security implementation",
        "Extended support plans available",
      ],
      icon: faLightbulb,
      cta: "Request Quote",
      popular: false,
    },
  ];

  const hourlyRates = [
    {
      name: "Development",
      price: "£120",
      unit: "per hour",
      description: "Expert development across various technologies",
      features: [
        "Frontend and backend implementation",
        "Custom software development",
        "API development and integration",
        "Database design and optimization",
        "DevOps and CI/CD setup",
      ],
      icon: faCode,
    },
    {
      name: "Consultation",
      price: "£200",
      unit: "per hour",
      description: "Strategic technical guidance and expertise",
      features: [
        "Technical strategy sessions",
        "Architecture design and review",
        "Technology stack consultation",
        "Technical due diligence",
        "Development process optimization",
      ],
      icon: faComments,
    },
  ];

  return (
    <div className="pricing-page">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm mb-5">
            Transparent Pricing
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Our Pricing Plans
          </h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-blue-100 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose from our value-packed packages or hourly rates designed to
            fit your project needs.
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-darkBg opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="w-full max-w-md h-40 bg-gradient-radial from-white/20 to-transparent opacity-30"></div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/20 dark:from-primary/5 dark:to-darkBg z-0 opacity-80"></div>
        <div className="mesh-gradient"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-primary-dark dark:text-primary-light font-medium mb-4 inline-block">
              OUR PACKAGES
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
              Development Packages
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              Pre-defined packages designed to help you build and launch your
              product with confidence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`relative bg-white dark:bg-darkSurface rounded-2xl shadow-card dark:shadow-dark-card overflow-hidden border border-gray-100 dark:border-darkGray-light/20 flex flex-col ${
                  pkg.popular ? "transform lg:-translate-y-6" : ""
                }`}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5 }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-xl font-medium text-sm shadow-md">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                      pkg.popular
                        ? "bg-gradient-to-br from-primary to-secondary text-white"
                        : "bg-gradient-to-br from-primary/10 to-primary/20 dark:from-primary-light/10 dark:to-primary-light/20 text-primary dark:text-primary-light"
                    }`}
                  >
                    <FontAwesomeIcon icon={pkg.icon} size="lg" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-gray-900 dark:text-white">
                    {pkg.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold text-gray-900 dark:text-white">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">
                      {pkg.name === "Enterprise Solution" ? "" : "package"}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>
                <div className="px-8 pb-6 border-t border-gray-100 dark:border-darkGray-light/20 pt-6 flex-grow">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-primary dark:text-primary-light mt-1 mr-3 flex-shrink-0"
                        />
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <Link
                    to="/contact"
                    className={`block text-center py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                      pkg.popular
                        ? "bg-primary dark:bg-primary-light text-white hover:shadow-lg hover:bg-primary-dark dark:hover:bg-primary"
                        : "bg-gray-100 dark:bg-darkGray-light/30 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-darkGray-light/50"
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hourly Rates Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-darkBg-light dark:to-darkBg relative">
        <div className="absolute inset-0 bg-grid-gray/10 dark:bg-grid-white/5 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-primary-dark dark:text-primary-light font-medium mb-4 inline-block">
              FLEXIBLE OPTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
              Hourly Rates
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              Need more flexibility? Our hourly rates give you access to our
              expertise on your terms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {hourlyRates.map((rate, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-darkSurface rounded-2xl shadow-card dark:shadow-dark-card overflow-hidden border border-gray-100 dark:border-darkGray-light/20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-gradient-to-br from-primary/10 to-primary/20 dark:from-primary-light/10 dark:to-primary-light/20 text-primary dark:text-primary-light">
                    <FontAwesomeIcon icon={rate.icon} size="lg" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-gray-900 dark:text-white">
                    {rate.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold text-gray-900 dark:text-white">
                      {rate.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">
                      {rate.unit}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {rate.description}
                  </p>

                  <div className="border-t border-gray-100 dark:border-darkGray-light/20 pt-6">
                    <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
                      Included services:
                    </h4>
                    <ul className="space-y-4 mb-8">
                      {rate.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-primary dark:text-primary-light mt-1 mr-3 flex-shrink-0"
                          />
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="block text-center py-4 px-6 rounded-xl font-medium transition-all duration-300 bg-primary dark:bg-primary-light text-white hover:shadow-lg hover:bg-primary-dark dark:hover:bg-primary"
                  >
                    Book Hours
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/20 dark:from-primary/5 dark:to-darkBg z-0 opacity-80"></div>
        <div className="mesh-gradient"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-primary-dark dark:text-primary-light font-medium mb-4 inline-block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              Have questions about our pricing? Here are answers to the most
              common questions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Do you offer discounts for startups?",
                answer:
                  "Yes, we offer special rates for early-stage startups. Contact us to discuss your specific situation and needs.",
              },
              {
                question: "What happens if we exceed the allocated hours?",
                answer:
                  "If your project requires additional hours beyond the package, we'll charge our standard hourly rate. We'll always communicate clearly before doing additional work.",
              },
              {
                question:
                  "Can we split hours between development and consultation?",
                answer:
                  "Yes, our packages are flexible. You can allocate the hours based on your project needs, though we recommend following our suggested split for optimal results.",
              },
              {
                question: "Do you offer ongoing maintenance plans?",
                answer:
                  "Yes, we offer various maintenance plans after the initial project is completed. These can be discussed during the project or after completion.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-darkSurface rounded-xl shadow-sm dark:shadow-dark-card p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h3 className="text-xl font-display font-bold mb-3 text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 z-0"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-white/10 to-transparent z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Contact us today to discuss your project requirements and how we
              can help bring your vision to life.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary font-medium rounded-xl inline-block shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
