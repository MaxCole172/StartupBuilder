import React from "react";
import { motion } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
  darkMode: boolean;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  darkMode,
  delay = 0,
}) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl ${
        darkMode
          ? "bg-darkSurface border border-darkGray-lightest/10"
          : "bg-white border border-gray-100"
      } shadow-card hover:shadow-card-hover transition-all duration-300 p-0.5`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Gradient border effect */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 dark:from-primary-light/30 dark:via-secondary-light/30 dark:to-accent-light/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        aria-hidden="true"
      ></span>

      <div className="relative p-6 sm:p-8 h-full flex flex-col">
        <div
          className={`w-12 h-12 mb-6 rounded-xl flex items-center justify-center ${
            darkMode
              ? "bg-primary-light/10 text-primary-light"
              : "bg-primary/10 text-primary"
          }`}
        >
          <FontAwesomeIcon icon={icon} className="text-lg" />
        </div>

        <h3
          className={`text-xl font-display font-semibold mb-3 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-base ${
            darkMode ? "text-gray-300" : "text-gray-600"
          } mb-6`}
        >
          {description}
        </p>

        <div className="mt-auto">
          <div
            className={`inline-flex items-center font-medium ${
              darkMode ? "text-primary-light" : "text-primary"
            } group-hover:underline underline-offset-2`}
          >
            Learn more
            <svg
              className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
