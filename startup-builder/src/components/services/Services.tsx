import React from "react";
import { motion } from "framer-motion";
import {
  faCode,
  faLaptopCode,
  faServer,
  faDatabase,
  faCloud,
  faCogs,
  faCodeBranch,
  faShieldAlt,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import ServiceItem from "./ServiceItem";
import PricingCard from "./PricingCard";

const Services: React.FC = () => {
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

  const developmentServices = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Full-stack web applications using modern frameworks like React, Flask, Express, and more.",
      icon: faCode,
      details: [
        "Single Page Applications (SPAs)",
        "Progressive Web Apps (PWAs)",
        "E-commerce platforms",
        "Custom web portals",
        "Admin dashboards",
      ],
    },
    {
      id: 2,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      icon: faLaptopCode,
      details: [
        "React Native applications",
        "Native iOS (Swift) development",
        "Native Android (Kotlin) development",
        "Mobile-first UX design",
        "App performance optimization",
      ],
    },
    {
      id: 3,
      title: "Backend Systems",
      description:
        "Robust server-side applications using Python, Java, C#, and other languages.",
      icon: faServer,
      details: [
        "RESTful API development",
        "GraphQL API design and implementation",
        "Microservices architecture",
        "Authentication and authorization systems",
        "Background job processing",
      ],
    },
    {
      id: 4,
      title: "Database Design",
      description:
        "Efficient and scalable database solutions for your business needs.",
      icon: faDatabase,
      details: [
        "SQL database design (PostgreSQL, MySQL)",
        "NoSQL solutions (MongoDB, DynamoDB)",
        "Data migration and ETL processes",
        "Database performance optimization",
        "Caching strategies (Redis, Memcached)",
      ],
    },
    {
      id: 5,
      title: "Cloud Architecture",
      description:
        "Design and implementation of cloud infrastructure for optimal performance and cost efficiency.",
      icon: faCloud,
      details: [
        "AWS, Azure, and GCP architecture",
        "Serverless application development",
        "Containerization with Docker and Kubernetes",
        "CI/CD pipeline setup",
        "Infrastructure as Code (Terraform, CloudFormation)",
      ],
    },
    {
      id: 6,
      title: "DevOps Implementation",
      description:
        "Streamline your development and operations with modern DevOps practices.",
      icon: faCodeBranch,
      details: [
        "CI/CD pipeline setup and optimization",
        "Infrastructure automation",
        "Monitoring and alerting systems",
        "Deployment strategies (Blue/Green, Canary)",
        "Log aggregation and analysis",
      ],
    },
    {
      id: 7,
      title: "Security Engineering",
      description:
        "Protect your applications and data with robust security measures.",
      icon: faShieldAlt,
      details: [
        "Security audits and vulnerability assessments",
        "Authentication and authorization systems",
        "Data encryption implementation",
        "GDPR and compliance solutions",
        "Penetration testing and remediation",
      ],
    },
    {
      id: 8,
      title: "Technical Consultation",
      description:
        "Expert guidance on technical strategy, architecture, and implementation.",
      icon: faCogs,
      details: [
        "Technical strategy development",
        "Architecture review and design",
        "Technology stack selection",
        "Technical debt assessment",
        "Development process optimization",
      ],
    },
  ];

  const pricingOptions = [
    {
      id: 1,
      title: "Development",
      price: "£120",
      unit: "per hour",
      features: [
        "Custom software development",
        "Frontend and backend implementation",
        "Database design and optimization",
        "DevOps and CI/CD setup",
        "Code reviews and refactoring",
        "Performance optimization",
      ],
      icon: faCode,
      cta: "Start Development",
    },
    {
      id: 2,
      title: "Consultation",
      price: "£200",
      unit: "per hour",
      features: [
        "Technical strategy sessions",
        "Architecture design and review",
        "Technology stack consultation",
        "Technical due diligence",
        "Team structure recommendations",
        "Scaling and growth planning",
      ],
      icon: faRocket,
      cta: "Book Consultation",
      featured: true,
    },
  ];

  return (
    <div className="services-page">
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
            Premium Technical Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Our Services
          </h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-blue-100 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We offer a comprehensive range of technical services to help your
            startup or business thrive in the digital world.
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-darkBg opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="w-full max-w-md h-40 bg-gradient-radial from-white/20 to-transparent opacity-30"></div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/20 dark:from-primary/5 dark:to-darkBg z-0 opacity-80"></div>
        <div className="mesh-gradient"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <span className="text-primary-dark dark:text-primary-light font-medium mb-4 inline-block">
              WHAT WE OFFER
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
              Development & Consultation Services
            </h2>
            <p className="section-subtitle text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              From concept to implementation, we provide the technical expertise
              you need to succeed in today's competitive digital landscape.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {developmentServices.map((service) => (
              <ServiceItem
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                details={service.details}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-darkBg-light dark:to-darkBg relative">
        <div className="absolute inset-0 bg-grid-gray/10 dark:bg-grid-white/5 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <span className="text-primary-dark dark:text-primary-light font-medium mb-4 inline-block">
              HOW WE WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
              Our Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              We follow a streamlined process to ensure your project is
              completed successfully and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -translate-y-1/2 z-0"></div>

            {[
              {
                number: 1,
                title: "Discovery",
                description:
                  "We start by understanding your business goals, technical requirements, and constraints.",
              },
              {
                number: 2,
                title: "Planning",
                description:
                  "We develop a detailed plan including architecture, technology stack, and timeline.",
              },
              {
                number: 3,
                title: "Execution",
                description:
                  "We implement the solution with regular updates and checkpoints to ensure alignment.",
              },
              {
                number: 4,
                title: "Delivery",
                description:
                  "We deliver a high-quality solution with documentation and support to ensure success.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-darkSurface p-8 rounded-2xl shadow-card dark:shadow-dark-card relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
                custom={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark dark:from-primary-light dark:to-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 shadow-glow">
                  <span>{step.number}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
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
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              Ready to discuss your project?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Contact us today to schedule a consultation and learn how we can
              help bring your ideas to life with our technical expertise.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-primary font-medium rounded-xl inline-block shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
