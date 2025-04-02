import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface PricingCardProps {
  title: string;
  price: string;
  unit: string;
  features: string[];
  icon: IconDefinition;
  cta: string;
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  unit,
  features,
  icon,
  cta,
  featured = false,
}) => {
  return (
    <motion.div
      className={`w-full lg:w-96 rounded-lg overflow-hidden ${
        featured
          ? "shadow-xl ring-4 ring-primary ring-opacity-20 transform lg:-translate-y-4"
          : "shadow-md"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      {featured && (
        <div className="bg-primary text-white text-center py-2 font-bold">
          Most Popular
        </div>
      )}

      <div className="bg-white p-8">
        <div className="flex items-center mb-6">
          <div
            className={`w-12 h-12 rounded-lg ${
              featured ? "bg-primary text-white" : "bg-blue-100 text-primary"
            } flex items-center justify-center mr-4`}
          >
            <FontAwesomeIcon icon={icon} size="lg" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-gray-900">{price}</span>
            <span className="ml-2 text-gray-600">{unit}</span>
          </div>
          <p className="text-gray-500 mt-2">No hidden fees or contracts</p>
        </div>

        <div className="mb-8">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div
                  className={`${
                    featured ? "text-primary" : "text-green-500"
                  } mr-2 mt-1`}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/contact"
          className={`w-full block text-center py-3 px-6 rounded-md font-medium transition-all ${
            featured
              ? "bg-primary text-white hover:bg-blue-800"
              : "bg-gray-100 text-primary hover:bg-gray-200"
          }`}
        >
          {cta}
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;
