import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: IconDefinition;
  details: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  icon,
  details,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="bg-white dark:bg-darkSurface rounded-2xl shadow-card dark:shadow-dark-card overflow-hidden border border-gray-100 dark:border-darkGray-light/20 hover:shadow-card-hover dark:hover:shadow-dark-card-hover transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-8">
        <div className="flex flex-col mb-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/20 dark:from-primary-light/10 dark:to-primary-light/20 text-primary dark:text-primary-light rounded-xl p-4 mb-5 w-14 h-14 flex items-center justify-center">
            <FontAwesomeIcon icon={icon} size="lg" />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold mb-3 text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <button
          className="flex items-center text-primary dark:text-primary-light font-medium py-2 px-4 rounded-lg hover:bg-primary/5 dark:hover:bg-primary-light/10 transition-colors"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Hide Details" : "Show Details"}
          <FontAwesomeIcon
            icon={isExpanded ? faChevronUp : faChevronDown}
            className="ml-2"
            size="sm"
          />
        </button>

        {isExpanded && (
          <motion.div
            className="mt-6 pt-6 border-t border-gray-100 dark:border-darkGray-light/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-200">
              What we offer:
            </h4>
            <ul className="space-y-3">
              {details.map((detail, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {detail}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceItem;
