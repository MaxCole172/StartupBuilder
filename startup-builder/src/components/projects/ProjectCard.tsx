import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  link,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative overflow-hidden h-36 text-center flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-1/2 h-full transition-transform duration-500 hover:scale-110"
        />
      </div>


      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* <a
          href={link}
          className="inline-block font-medium text-primary hover:text-blue-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
