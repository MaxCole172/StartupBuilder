import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faServer,
  faDatabase,
  faCloud,
  faCogs,
  faArrowRight,
  faRocket,
  faBolt,
  faChartLine,
  faShieldAlt,
  faCodeBranch,
  faTerminal,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "./Hero";
import ServiceCard from "./ServiceCard";
import ThemeContext from "../../context/ThemeContext";

const Home: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const featuresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const services = [
    {
      id: 1,
      title: "MVP Development",
      description:
        "Transform your ideas into functional MVPs ready for market validation and investor pitches.",
      icon: faRocket,
    },
    {
      id: 2,
      title: "Rapid Prototyping",
      description:
        "Get quick iterations of your product to test concepts and gather user feedback.",
      icon: faBolt,
    },
    {
      id: 3,
      title: "Technical Strategy",
      description:
        "Expert guidance on architecture, stack selection, and scalability planning.",
      icon: faChartLine,
    },
    {
      id: 4,
      title: "Full-Stack Development",
      description:
        "End-to-end development services using React, Python, NodeJS, and more.",
      icon: faCode,
    },
    {
      id: 5,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions optimized for startup growth and cost-efficiency.",
      icon: faCloud,
    },
    {
      id: 6,
      title: "CTO Consultation",
      description:
        "Strategic technical guidance for founders at £200/hour to help shape your vision.",
      icon: faCogs,
    },
  ];

  const features = [
    {
      title: "Startup-Focused Approach",
      description:
        "We understand the unique needs of startups - speed to market, capital efficiency, and scalable architecture.",
      icon: faRocket,
    },
    {
      title: "Technical Co-Founder Experience",
      description:
        "Our team has built startups from scratch and pitched to VCs, bringing valuable insights to your project.",
      icon: faChartLine,
    },
    {
      title: "Modern Tech Stack",
      description:
        "We use cutting-edge technologies that enable rapid development without compromising quality or scalability.",
      icon: faCodeBranch,
    },
    {
      title: "Investor-Ready Code",
      description:
        "Our code and architecture meet the standards that investors look for during technical due diligence.",
      icon: faShieldAlt,
    },
  ];

  return (
    <div className="home">
      <Hero />

      {/* Services Section */}
      <section
        className={`py-20 md:py-28 noise-bg ${
          darkMode ? "bg-darkBg" : "bg-lightBg"
        }`}
      >
        <div className="mesh-gradient"></div>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className={`text-4xl md:text-5xl font-display font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Launch Your Startup <span className="text-gradient">Faster</span>
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We specialize in helping early-stage startups go from idea to MVP
              and beyond with our technical expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                darkMode={darkMode}
                delay={index}
              />
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/services"
                className={`inline-flex items-center px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                  darkMode
                    ? "bg-primary-light hover:bg-primary text-white"
                    : "bg-primary hover:bg-primary-dark text-white"
                } hover:shadow-glow`}
              >
                View All Services
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`py-20 md:py-28 relative overflow-hidden ${
          darkMode ? "bg-darkBg-light" : "bg-white"
        }`}
        ref={featuresRef}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" style={{ opacity, scale }}>
            <h2
              className={`text-4xl md:text-5xl font-display font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Why Startups <span className="text-gradient">Choose Us</span>
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Our expertise in MVP development and early-stage startup tech
              makes us the ideal partner for your journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl ${
                  darkMode
                    ? "bg-darkSurface border border-darkGray-lightest/10"
                    : "bg-white border border-gray-100 shadow-card"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    darkMode
                      ? "bg-primary-light/10 text-primary-light"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <FontAwesomeIcon icon={feature.icon} size="lg" />
                </div>
                <h3
                  className={`text-xl font-display font-semibold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className={`py-20 relative overflow-hidden noise-bg ${
          darkMode ? "bg-darkBg" : "bg-lightBg"
        }`}
      >
        <div className="mesh-gradient"></div>
        <div className="container mx-auto px-6">
          <motion.div
            className={`max-w-4xl mx-auto text-center p-10 rounded-3xl ${
              darkMode ? "bg-darkSurface" : "bg-white border border-gray-100"
            } shadow-card`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className={`text-3xl md:text-4xl font-display font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to <span className="text-gradient">Build Your Startup</span>
              ?
            </h2>
            <p
              className={`text-lg mb-8 max-w-2xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Let's discuss how we can help bring your vision to life with our
              expert development team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className={`px-8 py-4 rounded-xl ${
                  darkMode
                    ? "bg-primary-light hover:bg-primary"
                    : "bg-primary hover:bg-primary-dark"
                } text-white font-medium transition-all duration-300 hover:shadow-glow`}
              >
                Contact Us
              </Link>
              <Link
                to="/projects"
                className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                  darkMode
                    ? "bg-darkSurface-elevated text-white hover:bg-darkGray-light/80"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        className={`py-20 md:py-28 ${
          darkMode ? "bg-darkBg-light" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className={`text-4xl md:text-5xl font-display font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Our <span className="text-gradient">Tech Stack</span>
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We use cutting-edge technologies to build modern, scalable
              applications that keep you ahead of the competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Frontend Development", icon: faLaptopCode },
              { name: "Backend Systems", icon: faServer },
              { name: "Database Design", icon: faDatabase },
              { name: "Cloud Infrastructure", icon: faCloud },
              { name: "DevOps Automation", icon: faTerminal },
              { name: "API Development", icon: faCodeBranch },
              { name: "Mobile Applications", icon: faMobile },
              { name: "System Architecture", icon: faCogs },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl text-center ${
                  darkMode
                    ? "bg-darkSurface border border-darkGray-lightest/10"
                    : "bg-white border border-gray-100 shadow-card"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      darkMode
                        ? "bg-primary-light/10 text-primary-light"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h3
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
