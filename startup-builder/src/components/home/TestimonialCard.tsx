import React from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  position,
  image,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg
            className="w-8 h-8 text-primary opacity-30"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="mb-4 flex-grow text-gray-600">{content}</p>
        <div className="flex items-center mt-4">
          <img
            src={image}
            alt={author}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <div className="font-medium text-gray-800">{author}</div>
            <div className="text-sm text-gray-500">{position}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
