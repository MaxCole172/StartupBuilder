import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample project data
  const projects = [
    // Dan's projects
    {
      id: 1,
      title: "Inventory and Order Management System",
      description:
        "Built a proprietary central system for a business to track orders across multiple online channels, and centrally manage inventory and auditing these orders. Also included utility for sales analytics and shipping automation. Deployed onto AWS Lambda and a database service called Ragic.",
      image: "ioms.png",
      category: "backend",
      technologies: ["JavaScript", "AWS", "SQL"],
      link: "#",
    },
    {
      id: 2,
      title: "Microservices-based project posting website",
      description:
        "A website for companies to post and find projects, built using a bleeding-edge microservices architecture for backend APIs and services. Built for another business.",
      image: "bulletin.png",
      category: "web",
      technologies: [
        "Next.JS",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Azure",
        "Kubernetes",
        "Terraform",
        "Docker",
        "C#",
        "Escrow",
      ],
      link: "#",
    },
    {
      id: 3,
      title: "Applicant and candidate pooling and shortlisting website",
      description:
        "A site requested by a business for applicants and candidates for job roles to post their CVs and be hired to work on specific company projects, where companies can filter and shortlist individuals from this talent pool, and ultimately hire them. Database stored in Azure. ",
      category: "web",
      image: "talent.png",
      technologies: ["Wix", "Azure", "PostgreSQL", "JavaScript"],
      link: "#",
    },
    {
      id: 4,
      title: "Interdisciplinary Research Directory",
      description:
        "Contracted by Warwick University to upgrade their website with a directory of researchers between disciplines, integrating the OpenAlex API to find recent publications, and creating a bespoke database populator. ",
      category: "backend",
      image: "warwick.avif",
      technologies: ["Electron", "TypeScript", "React", "MongoDB"],
      link: "#",
    },
    {
      id: 5,
      title: "Exam paper dissector and databank",
      description:
        "Created two bespoke systems - one to dissect exam papers to store them in a standard database format, and the other to navigate this database with functionalities aimed at aiding revision. Built to Eduqas' needs for a new question bank system.",
      category: "web",
      image: "eduqas.png",
      technologies: [
        "Python",
        "Next.js",
        "PostgreSQL",
        "SQLite",
        "TypeScript",
        "React",
      ],
      link: "#",
    },
    {
      id: 6,
      title: "Real-Time Mental Health Analyzer",
      description:
        "An AI mental health identification software that uses real time emotion recognition and semantic analysis to identify stress and burnout likelihood in the workplace.",
      image: "mental-health.png", // update to your actual image file
      category: "web",
      technologies: [
        "Electron.js",
        "React.js",
        "Flask",
        "Python",
        "JavaScript",
        "C++",
        "HTML",
        "CSS",
      ],
      link: "#",
    },
    {
      id: 7,
      title: "Automated Social Media Generator",
      description:
        "An AI social media content generation tool that replaces the social media role in small businesses.",
      image: "demogroove.png", // update to your actual image file
      category: "web",
      technologies: [
        "External APIs",
        "LLM integration",
        "Python",
        "Flask",
        "HTML",
      ],
      link: "#",
    },
    {
      id: 8,
      title: "Advanced Crypto Payment SDK",
      description:
        "A Stripe alternative SDK that processes crypto payments, providing advanced tooling for easy integration into applications.",
      image: "crypto-sdk.png", // update to your actual image file
      category: "backend",
      technologies: ["JavaScript", "TypeScript", "React", "SQL"],
      link: "#",
    },
    {
      id: 9,
      title: "Smart Kitchen Inventory Manager",
      description:
        "A kitchen organiser iOS app that tracks meals, monitors current items in the fridge, and automatically orders food.",
      image: "kitchen-cabinet.png", // update to your actual image file
      category: "mobile",
      technologies: ["Swift", "SwiftUI", "SQL"],
      link: "#",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "backend", name: "Backend Systems" },
    { id: "cloud", name: "Cloud Solutions" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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

  return (
    <div className="projects-page">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-800 to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of successful projects across various
            industries and technologies.
          </motion.p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Approach Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h2 className="section-title">Our Approach</h2>
            <p className="section-subtitle text-gray-600">
              We follow a proven methodology to ensure the success of every
              project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              custom={0}
            >
              <div className="text-primary text-5xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Requirements Analysis
              </h3>
              <p className="text-gray-600">
                We start by thoroughly understanding your business needs,
                technical requirements, and project goals. This forms the
                foundation for a successful project.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              custom={1}
            >
              <div className="text-primary text-5xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Strategic Planning
              </h3>
              <p className="text-gray-600">
                We develop a comprehensive project plan, including technology
                stack selection, architecture design, and development roadmap.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              custom={2}
            >
              <div className="text-primary text-5xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Agile Development
              </h3>
              <p className="text-gray-600">
                We implement your solution using agile methodologies, ensuring
                continuous delivery of high-quality, working software throughout
                the project lifecycle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to build your next project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technical expertise can help bring your
              ideas to life.
            </p>
            <a
              href="/contact"
              className="btn bg-primary text-white hover:bg-blue-700"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
